import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext'; // Import our custom hook
import Button from './Button'; // We'll create this component soon

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  // This style will be applied to active navigation links
  const activeClassName = "text-white bg-blue-700 rounded px-3 py-2";

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Site Title/Logo */}
        <div className="text-xl font-bold text-gray-900 dark:text-white">
          My React App
        </div>

        {/* Navigation Links */}
        <div className="space-x-4 font-medium text-gray-700 dark:text-gray-300">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeClassName : "hover:text-blue-500")}
          >
            Home
          </NavLink>
          <NavLink
            to="/tasks"
            className={({ isActive }) => (isActive ? activeClassName : "hover:text-blue-500")}
          >
            Tasks
          </NavLink>
          <NavLink
            to="/data"
            className={({ isActive }) => (isActive ? activeClassName : "hover:text-blue-500")}
          >
            API Data
          </NavLink>
        </div>

        {/* Theme Toggle Button */}
        <Button onClick={toggleTheme} variant="secondary">
          Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;