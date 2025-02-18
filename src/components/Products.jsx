import React from "react";
import { useCart } from "../context/CartContext";

const Products = () => {
  const { cartItems, addToCart } = useCart();
  const products = [
    { id: 1, name: "strawberry", price: "$20",quantity: 5 , image: "../../images/strawberrysundae.png" },
    { id: 2, name: "chocolate", price: "$30", quantity: 5 ,image: "../../images/chocolateship.png" },
    // { id: 3, name: "Product 3", price: "$50", image: "path-to-image3.jpg" },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="product-list">
      {products.map((product) => {
        const cartItem = cartItems.find((item) => item.id === product.id);
        const quantity = cartItem ? cartItem.quantity : 0;

        let buttonClass = "";
        let buttonText = "Add to Cart";

        if (quantity === 0) {
          buttonClass = "btn-danger";
          buttonText = "Out of Stock";
        } else if (quantity === 1) {
          buttonClass = "btn-warning";
          buttonText = "Last Item!";
        }

        return (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p>Quantity: {quantity}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className={`btn ${buttonClass}`}
              disabled={quantity === 0}
            >
              {buttonText}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
