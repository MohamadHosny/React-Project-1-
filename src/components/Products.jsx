import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import productsData from "../data/products"; // Ensure this matches your products data source

const Products = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState(productsData);

  const handleAddToCart = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
    addToCart(products.find((p) => p.id === productId));
  };

  return (
    <div className="container mt-5">
      <h2>Our Products</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className="card mb-4">
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover", cursor: "pointer" }}
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: ${product.price}</p>
                <p className="card-text">Quantity: {product.quantity}</p>
                <button
                  className={`btn ${product.quantity === 0 ? "btn-danger" : product.quantity === 1 ? "btn-warning" : "btn-primary"}`}
                  onClick={() => handleAddToCart(product.id)}
                  disabled={product.quantity === 0}
                >
                  {product.quantity === 0 ? "Out of Stock" : product.quantity === 1 ? "Last Item!" : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
