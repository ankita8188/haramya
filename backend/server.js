// server.js
const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const axios = require('axios');
const cors = require('cors');
const WebSocket = require('ws');
const http = require('http');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Replace these with your actual credentials
const MERCHANT_ID = process.env.YOUR_MERCHANT_ID;
const SALT_KEY = process.env.YOUR_SALT_KEY;
const SALT_INDEX = process.env.YOUR_SALT_INDEX;
const PHONEPE_HOST = process.env.PHONEPE_HOST;

app.use(cors({
  origin: [process.env.FRONTEND_URL],
  methods: ['GET', 'POST'],
  credentials: true,
}));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Backend is running 🚀');
});


// Payment initiation endpoint
app.post('/api/payment', async (req, res) => {
  const { amount, mobileNumber, email } = req.body;

  const payload = {
    merchantId: MERCHANT_ID,
    merchantTransactionId: `txn_${Date.now()}`,
    merchantUserId: `user_${Date.now()}`,
    amount: amount * 100,
    redirectUrl: 'https://yourdomain.com/payment-success',
    redirectMode: 'POST',
    callbackUrl: 'https://yourdomain.com/api/payment/callback',
    mobileNumber,
    email,
    paymentInstrument: {
      type: 'UPI_INTENT',
      targetApp: 'PHONEPE',
    },
  };

  const payloadBase64 = Buffer.from(JSON.stringify(payload)).toString('base64');
  const xVerify = crypto
    .createHash('sha256')
    .update(payloadBase64 + '/pg/v1/pay' + SALT_KEY)
    .digest('hex') + '###' + SALT_INDEX;

  try {
    const response = await axios.post(`${PHONEPE_HOST}/pay`, {
      request: payloadBase64,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'X-VERIFY': xVerify,
        'X-MERCHANT-ID': MERCHANT_ID,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Payment initiation error:', error);
    res.status(500).json({ error: 'Payment initiation failed' });
  }
});

// Callback endpoint
app.post('/api/payment/callback', (req, res) => {
  console.log('Callback received:', req.body);
  res.status(200).send('Callback received');
});

// 👇 Create HTTP server from Express
const server = http.createServer(app);

// 👇 WebSocket server setup
const wss = new WebSocket.Server({
  server,
  path: '/ws',
  clientTracking: true,
});

const clients = new Map();

wss.on('connection', (ws, req) => {
  const clientId = Date.now().toString();
  clients.set(clientId, ws);

  console.log(`WebSocket client connected from ${req.socket.remoteAddress}`);

  ws.send(JSON.stringify({
    type: 'system',
    message: 'Connected to WebSocket server',
  }));

  ws.on('message', (message) => {
    try {
      const data = JSON.parse(message);

      if (data.type === 'live_status') {
        clients.forEach((client, id) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({
              type: 'live_status',
              isLive: data.isLive,
              from: clientId,
              roomid: data.roomid,
            }));
          }
        });
      }

      clients.forEach((client, id) => {
        if (id !== clientId && client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({
            type: 'control',
            command: data.command,
            from: clientId,
            roomId: data.roomId,
          }));
        }
      });

    } catch (err) {
      console.error('Invalid message format:', err);
      ws.send(JSON.stringify({ type: 'error', message: 'Invalid message format' }));
    }
  });

  ws.on('close', () => {
    console.log(`WebSocket client disconnected: ${clientId}`);
    clients.delete(clientId);
  });

  ws.on('error', (err) => {
    console.error('WebSocket error:', err);
    clients.delete(clientId);
  });
});

// Start both Express and WebSocket server on the same port
server.listen(PORT, () => {
  console.log(`HTTP and WebSocket server running on http://localhost:${PORT}`);
  console.log(`WebSocketssss path is ws://localhost:${PORT}/ws`);
});
