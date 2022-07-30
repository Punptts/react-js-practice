import React from "react";
import "../assets/css/navbar.css";
import RTFSD from "../assets/images/RTFSD-logo.png";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <img className="logo" src={RTFSD} alt="logo" />
      <div className="navbar-wrapper">
        <Link to="/" className="navbar-item">
          Work
        </Link>
        <Link to="/blogs" className="navbar-item">
          Blog
        </Link>
        <Link to="/about" className="navbar-item">
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
