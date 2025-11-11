import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    // We combine the default card styles with any extra 'className'
    // prop passed in.
    <div 
      className={`bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden p-6 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;