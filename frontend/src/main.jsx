// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Your main stylesheet with Tailwind directives

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext.jsx'; // We will create this file next

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);