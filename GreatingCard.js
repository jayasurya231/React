import React from 'react';
import './GreetingCard.css';

const GreetingCard = ({ title, message }) => {
  return (
    <div className="card">
      <h2 className="title">{title}</h2>
      <p className="message">{message}</p>
    </div>
  );
};

export default GreetingCard;
