// // CartContext.js
// import React, { createContext, useState } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (item) => {
//     setCart(prevCart => [...prevCart, item]); // Update state using the previous state
   
//   };

//   const removeFromCart = (itemId) => {
//     setCart(cart.filter((item) => item.id !== itemId));
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
// CartContext.js
import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import UUID library

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const newItem = { ...item, cartId: uuidv4() }; // Assign a unique cartId
    setCart(prev => [...prev, newItem]); // Update state using the previous state
  };

  const removeFromCart = (cartId) => {
    setCart(cart.filter((item) => item.cartId !== cartId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};