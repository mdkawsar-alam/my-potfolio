"use client"
import React from 'react';

const Button = ({ onClick, children, className, href, download }) => {
  return (
    <a href={href} download={download}>
      <button 
        onClick={onClick} 
        className={`bg-[#0ef]  flex items-center text-black transition  
            duration-500 ease-in-out p-3 rounded-lg hover:bg-[#09101a]
             hover:text-white hover:border hover:border-[#0ef]  ${className}`}
      >
        {children}
      </button>
    </a>
  );
};

export default Button;
