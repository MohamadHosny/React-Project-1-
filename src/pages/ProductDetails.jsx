import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import productsData from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Find the selected product
  const productIndex = productsData.findIndex((item) => item.id === parseInt(id));
  const [product, setProduct] = useState(productsData[productIndex]);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  // Handle adding to cart and updating quantity
  const handleAddToCart = () => {
    if (product.quantity > 0) {
      const updatedProduct = { ...product, quantity: product.quantity - 1 };
      setProduct(updatedProduct);
      productsData[productIndex] = updatedProduct; // Update the main data source
      addToCart(product);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <p>Quantity: {product.quantity}</p>
          <button
            className={`btn ${product.quantity === 0 ? "btn-danger" : product.quantity === 1 ? "btn-warning" : "btn-primary"}`}
            onClick={handleAddToCart}
            disabled={product.quantity === 0}
          >
            {product.quantity === 0 ? "Out of Stock" : product.quantity === 1 ? "Last Item!" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
