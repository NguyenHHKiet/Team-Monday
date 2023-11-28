// MBTICard.js

import React from 'react';

const MBTICard = ({ type, image, description, onClick }) => {
  return (
    <div className="mbti-card">
      <img
        className="mbti-card-image"
        src={image}
        alt={type}
      />
      <div className="mbti-card-description">{type}</div>
      <div className="mbti-card-description">{description}</div>
    </div>
  );
};

export default MBTICard;
