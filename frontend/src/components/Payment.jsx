'use client';
import { useState } from 'react';
import axios from 'axios';

const Payment = () => {
  const [amount, setAmount] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');

  const initiatePayment = async () => {
    try {
      const response = await axios.post('/api/payment', {
        amount,
        mobileNumber,
        email,
      });

      if (response.data.success && response.data.data.instrumentResponse.redirectInfo.url) {
        window.location.href = response.data.data.instrumentResponse.redirectInfo.url;
      } else {
        alert('Payment initiation failed');
      }
    } catch (error) {
      console.error('Payment initiation error:', error);
      alert('An error occurred while initiating payment');
    }
  };

  return (
    <div>
      <h2>Make a Payment</h2>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Mobile Number"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={initiatePayment}>Pay with PhonePe</button>
    </div>
  );
};

export default Payment;
