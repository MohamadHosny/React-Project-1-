// import React, { useState } from "react";
// import { useCart } from "../context/CartContext";
// // import "./Products.css"; 
// const Products = () => {
//   const { products, addToCart } = useCart();
//   const [searchQuery, setSearchQuery] = useState("");

//   // Filter products based on search input
//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="products-container">
//       <h2>Our Products</h2>

//       {/* Search Bar */}
//       <input
//         type="text"
//         placeholder="Search for products..."
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         className="search-bar"
//       />

//       <div className="products-grid">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product) => (
//             <div key={product.id} className="product-card">
//               <img src={product.image} alt={product.name} className="product-image" />
//               <h3>{product.name}</h3>
//               <p>Price: ${product.price}</p>
//               <p>Quantity: {product.quantity}</p>

//               <button
//                 className={`add-to-cart-btn ${
//                   product.quantity === 0 ? "out-of-stock" : product.quantity === 1 ? "last-item" : ""
//                 }`}
//                 onClick={() => addToCart(product)}
//                 disabled={product.quantity === 0}
//               >
//                 {product.quantity === 0 ? "Out of Stock" : product.quantity === 1 ? "⚠️ Last Item" : "Add to Cart"}
//               </button>
//             </div>
//           ))
//         ) : (
//           <p>No products found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Products;

import React from "react";
import { useCart } from "../context/CartContext";

const Products = () => {
  const { products, addToCart } = useCart();

  return (
    <div className="products-container">
      <h2>Our Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>

            <button
              className={`add-to-cart-btn ${
                product.quantity === 0 ? "out-of-stock" : product.quantity === 1 ? "last-item" : ""
              }`}
              onClick={() => addToCart(product)}
              disabled={product.quantity === 0}
            >
              {product.quantity === 0 ? "Out of Stock" : product.quantity === 1 ? "⚠️ Last Item" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
