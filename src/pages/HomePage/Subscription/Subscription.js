import React from 'react';
import './Subscription.scss';

const Subscription = () => {
  const subscriptionStyles = {
    renewStyles: {
      color: '#000',
      backgroundColor: 'yellow',
      borderRadius: '10px',
      padding: '20px 20px',
      border: 'dashed 5px green'
    },
    btnStyles: {
      border: 'Solid 2px red',
      backgroundColor: 'red',
      color: '#fff',
      padding: '10px 20px'
    }
  };

  return (
    <div className="text-center">
      {/* External CSS - Recommended - Subscription.css*/}
      <h3 className="subscription-info">
        You are an active subscriber of youtube pro
      </h3>
      {/* Inline CSS - NEVER EVER TRY THIS IN LISTS/LOOPS*/}
      <p
        style={{
          color: '#fff',
          backgroundColor: 'red',
          borderRadius: '10px',
          padding: '10px 20px'
        }}
      >
        Your subscription will end in two weeks
      </p>
      {/* Internal CSS - Not recommended Often*/}
      <p style={subscriptionStyles.renewStyles}>
        Renew now at 50% discount. Apply coupon: OFFER50
      </p>
      <button type="button" style={subscriptionStyles.btnStyles}>
        RENEW NOW
      </button>
    </div>
  );
};

export default Subscription;
