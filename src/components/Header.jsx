import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cart">Shopping Cart</Link></li>
          <li><Link to="/login">Login</Link></li> {/* Add Login link */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
