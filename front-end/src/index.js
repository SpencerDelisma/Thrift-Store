// index.js
import React from 'react';

import App from './components/App'; // Adjust the path if necessary
import { createRoot } from 'react-dom/client'; // Adjust the path if necessary
import { CartProvider } from './components/CartContext';
import './index.css'; // Move CSS import to the top

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);