import React from 'react';

const RemoveButton = ({ onClick }) => {
  return (
    <button className="remove-button" onClick={onClick}>Remove</button>
  );
};

export default RemoveButton;