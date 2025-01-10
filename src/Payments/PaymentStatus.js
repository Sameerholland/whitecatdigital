import React from 'react';
import { useLocation } from 'react-router-dom';

export default function PaymentStatus() {
  // Parse query parameters from the URL
  const query = new URLSearchParams(useLocation().search);
  const status = query.get('status');
  const transactionId = query.get('transactionId');
  const orderId = query.get('orderId');
  const amount = query.get('amount');

  console.log(query)

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Payment Status</h1>
      {status === 'SUCCESS' ? (
        <div>
          <h2 style={{ color: 'green' }}>Payment Successful</h2>
          <p>Transaction ID: {transactionId}</p>
          <p>Order ID: {orderId}</p>
          <p>Amount: ₹{amount}</p>
        </div>
      ) : status === 'FAILED' ? (
        <div>
          <h2 style={{ color: 'red' }}>Payment Failed</h2>
          <p>Please try again.</p>
        </div>
      ) : (
        <div>
          <h2 style={{ color: 'orange' }}>Payment Pending</h2>
          <p>Your payment is being processed. Please check back later.</p>
        </div>
      )}
    </div>
  );
}
