// app/api/payment/route.js

import { NextResponse } from 'next/server';
import crypto from 'crypto';
import axios from 'axios';

export async function POST(req) {
  try {
    const body = await req.json();
    const { amount, mobileNumber, email } = body;

    const MERCHANT_ID = 'YOUR_MERCHANT_ID';
    const SALT_KEY = 'YOUR_SALT_KEY';
    const SALT_INDEX = 'YOUR_SALT_INDEX';
    const PHONEPE_HOST = 'https://api.phonepe.com/apis/hermes/pg/v1';

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

    const response = await axios.post(`${PHONEPE_HOST}/pay`, {
      request: payloadBase64,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'X-VERIFY': xVerify,
        'X-MERCHANT-ID': MERCHANT_ID,
      },
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Payment error:', error);
    return NextResponse.json({ error: 'Payment failed' }, { status: 500 });
  }
}
