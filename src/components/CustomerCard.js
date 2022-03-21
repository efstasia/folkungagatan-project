import React from 'react';

export const CustomerCard = ({ customerImage, text, secondaryText }) => {
  return (
    <div className='customer-card'>
      <p className='review-text'>{text}</p>
      <img src={customerImage} alt='customers' />
      <p className='customer-info-text'>{secondaryText}</p>
    </div>
  );
};
