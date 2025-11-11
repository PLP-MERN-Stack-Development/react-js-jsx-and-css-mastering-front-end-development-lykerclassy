import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-center p-4 mt-8 shadow-inner">
      <div className="container mx-auto">
        &copy; {new Date().getFullYear()} Your Name Here. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;