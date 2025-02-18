import React from "react";
import { useCart } from "../context/CartContext";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const { cartItems } = useCart();

  // Calculate the total price of all cart items
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="shopping-cart-container">
      <h2>🛒 Your Shopping Cart</h2>
      
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${item.price * item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Display the total price of the cart */}
      <div className="cart-total">
        <h3>Grand Total: ${totalPrice}</h3>
      </div>
    </div>
  );
};

export default ShoppingCart;
