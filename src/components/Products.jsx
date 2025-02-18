// import React from "react";
// import { useCart } from "../context/CartContext";

// const Products = () => {
//   const { cartItems, addToCart } = useCart();
//   const products = [
//     { id: 1, name: "strawberry", price: "$20",quantity: 5 , image: "../../images/strawberrysundae.png" },
//     { id: 2, name: "chocolate", price: "$30", quantity: 5 ,image: "../../images/chocolateship.png" },
//   ];

//   const handleAddToCart = (product) => {
//     addToCart(product);
//   };

//   return (
//     <div className="product-list">
//       {products.map((product) => {
//         const cartItem = cartItems.find((item) => item.id === product.id);
//         const quantity = cartItem ? cartItem.quantity : 0;

//         let buttonClass = "";
//         let buttonText = "Add to Cart";

//         if (quantity === 0) {
//           buttonClass = "btn-danger";
//           buttonText = "Out of Stock";
//         } else if (quantity === 1) {
//           buttonClass = "btn-warning";
//           buttonText = "Last Item!";
//         }

//         return (
//           <div key={product.id} className="product-card">
//             <img src={product.image} alt={product.name} />
//             <h3>{product.name}</h3>
//             <p>{product.price}</p>
//             <p>Quantity: {quantity}</p>
//             <button
//               onClick={() => handleAddToCart(product)}
//               className={`btn ${buttonClass}`}
//               disabled={quantity === 0}
//             >
//               {buttonText}
//             </button>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Products;

import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const Products = () => {
  const { products, addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState("");

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <h2 className="text-center my-4">Our Products</h2>

      {/* Search Bar */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search for a product..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Product Grid */}
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card product-card">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${product.price}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
