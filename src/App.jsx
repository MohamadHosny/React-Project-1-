import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login"; // Import the Login component

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/login" element={<Login />} /> {/* Add the login route */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
