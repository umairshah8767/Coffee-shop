// components/Button.jsx
import React from 'react';

const Button = ({ children, onClick, className, variant = 'primary' }) => {
  const baseStyle = "py-2 px-4 rounded transition duration-300";
  
  const variantStyle = variant === 'primary' 
    ? "bg-rgb(114,39,14) text-white hover:bg-gray-800" 
    : "bg-gray-200 text-black hover:bg-gray-300"; // Light gray button style

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variantStyle} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
