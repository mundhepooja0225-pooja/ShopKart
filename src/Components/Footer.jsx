import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link className="footer-logo" to="/" aria-label="ShopKart home">
            Shop<span>Kart</span>
          </Link>
          <p>Everyday finds, thoughtfully picked.</p>
        </div>

        <nav className="footer-column" aria-label="Shop links">
          <h2>Explore</h2>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Your cart</Link>
        </nav>-
        

        <nav className="footer-column" aria-label="Information links">
          <h2>ShopKart</h2>
          <Link to="/about">About us</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ShopKart. All rights reserved.</p>
        <p>Made for everyday shopping.</p>
      </div>
    </footer>
  );
};

export default Footer;