import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    // This div provides the overall page background color
    // and ensures the footer sticks to the bottom on short pages
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      
      <Navbar />

      {/* 'Outlet' is the placeholder from React Router
          where your page components will be rendered. */}
      
      <main className="flex-grow container mx-auto p-4 md:p-6">
        <Outlet />
      </main>

      <Footer />
      
    </div>
  );
};

export default Layout;