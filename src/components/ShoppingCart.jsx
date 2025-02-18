import React from "react";
import { useCart } from "../context/CartContext";

const ShoppingCart = () => {
  const { cartItems } = useCart();

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <p>{item.name} - {item.quantity} x {item.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingCart;
