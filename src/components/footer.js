import React from "react";
import "../assets/css/footer.css";
import RTFSD from "../assets/images/RTFSD-logo.png";

function Footer() {
  return (
    <footer className="footer">
      <img src={RTFSD} className="logo" alt="logo" />
      <div>
        <h4 className="footer-item">Explore · Research · Design</h4>
        <h4 className="footer-item">2022 I © punptts</h4>
      </div>
    </footer>
  );
}

export default Footer;
