import React from 'react';

const Button = ({ children, variant = 'primary', onClick, className = '', ...rest }) => {
  // Base styles: applied to all buttons
  const baseStyle = "font-bold py-2 px-4 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-75";

  // Variant styles: specific to each 'variant' prop
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 focus:ring-gray-400",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-400",
  };

  return (
    <button
      onClick={onClick}
      // Combine base, variant, and any extra 'className' props
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...rest} // Pass down any other props (like type="submit")
    >
      {children} 
    </button>
  );
};

export default Button;