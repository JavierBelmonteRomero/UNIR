import React from 'react';

const RentButton = ({ onClick }) => {
  return (
    <button className="rent-button" onClick={onClick}>Rent Book</button>
  );
};

export default RentButton;