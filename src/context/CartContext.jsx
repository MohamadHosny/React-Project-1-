import React, { createContext, useContext, useState } from "react";

// Create Context
const CartContext = createContext();

// Provider Component
export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, name: "strawberry", price: 20, image: "../../images/strawberrysundae.png", quantity: 5 },
    { id: 2, name: "chocolate ", price: 30, image: "../../images/chocolateship.png", quantity: 3 },
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <CartContext.Provider value={{ products, cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook
export const useCart = () => {
  return useContext(CartContext);
};
