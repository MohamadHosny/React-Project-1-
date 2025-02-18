// import React, { createContext, useContext, useState } from "react";

// // Create Context
// const CartContext = createContext();

// // Provider Component
// export const CartProvider = ({ children }) => {
//   const [products, setProducts] = useState([
//     { id: 1, name: "strawberry", price: 20, image: "../../images/strawberrysundae.png", quantity: 5 },
//     { id: 2, name: "chocolate ", price: 30, image: "../../images/chocolateship.png", quantity: 3 },
//   ]);

//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems((prevItems) => [...prevItems, product]);
//   };

//   return (
//     <CartContext.Provider value={{ products, cartItems, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Custom Hook
// export const useCart = () => {
//   return useContext(CartContext);
// };

import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, name: "strawberry sundae", price: 20, quantity: 5, image: "../../images/strawberrysundae.png" },
    { id: 2, name: "chocolate ship", price: 30, quantity: 3, image: "../../images/chocolateship.png" },
    
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    if (product.quantity > 0) {
      // Reduce product quantity
      setProducts((prevProducts) =>
        prevProducts.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p
        )
      );

      // Add to cart
      setCartItems((prevCart) => {
        const itemExists = prevCart.find((item) => item.id === product.id);
        if (itemExists) {
          return prevCart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          return [...prevCart, { ...product, quantity: 1 }];
        }
      });
    }
  };

  return (
    <CartContext.Provider value={{ products, cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
