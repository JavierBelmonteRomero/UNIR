import React from 'react';

const Button = ({ onClick, className, description }) => {

    return (
    <button className={className} onClick={onClick}>{description}</button>
    );
};

export default Button;