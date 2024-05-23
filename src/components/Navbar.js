import React from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";

import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-button">
        <h1 className="title">Furrl</h1>
      </Link>
      <div className="navbar-buttons">
        <Link to="/wishlist" className="navbar-button">
          <CiBookmark />
        </Link>
        <Link to="/cart" className="navbar-button">
          <FaShoppingBag />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
