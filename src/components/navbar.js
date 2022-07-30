import React from "react";
import "../assets/css/navbar.css";
import RTFSD from "../assets/images/RTFSD-logo.png";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <img className="logo" src={RTFSD} alt="logo" />
      <div className="navbar-wrapper">
        <a href="#" className="navbar-item">
          Work
        </a>
        <Link to="/blogs" className="navbar-item">
          Blog
        </Link>
        <a href="#" className="navbar-item">
          About
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
