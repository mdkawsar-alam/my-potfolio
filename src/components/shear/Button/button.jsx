
import React from 'react';

const Button = ({ onClick, children, className, href, download }) => {
  return (
    <a href={href} download={download}>
      <button 
        onClick={onClick} 
        className={`bg-[#0ef] text-black transition 
            duration-500 ease-in-out p-3 rounded-lg hover:bg-[#09101a]
             hover:text-white ${className}`}
      >
        {children}
      </button>
    </a>
  );
};

export default Button;
