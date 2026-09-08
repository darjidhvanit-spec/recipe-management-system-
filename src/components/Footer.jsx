import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      {/* Newsletter Section */}
      <div className="footer-newsletter">

        <div className="newsletter-content">

          <div className="newsletter-icon">
            ✉
          </div>

          <div className="newsletter-text">
            <h2>Subscribe to our newsletter</h2>
            <p>
              Get the latest recipes and updates straight to your inbox.
            </p>
          </div>

        </div>

        <div className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email address"
          />

          <button>
            Subscribe
          </button>
        </div>

      </div>


      {/* Main Footer */}
      <div className="footer-main">

        {/* Brand */}
        <div className="footer-column footer-brand">

          <h2 className="footer-logo">
            👨‍🍳 <span>Tasty</span>Recipe
          </h2>

          <p>
            Discover easy and delicious recipes made with
            fresh ingredients for your healthy life.
          </p>

          <div className="social-icons">

            <a href="#" aria-label="Facebook">
              f
            </a>

            <a href="#" aria-label="Instagram">
              ◎
            </a>

            <a href="#" aria-label="Twitter">
              𝕏
            </a>

            <a href="#" aria-label="YouTube">
              ▶
            </a>

          </div>

        </div>


        {/* Quick Links */}
        <div className="footer-column">

          <h3>Quick Links</h3>

          <ul>
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/recipes">Recipes</a>
            </li>

            <li>
              <a href="/categories">Categories</a>
            </li>

            <li>
              <a href="/about">About Us</a>
            </li>

            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>

        </div>


        {/* Categories */}
        <div className="footer-column">

          <h3>Categories</h3>

          <ul>
            <li>
              <a href="#">Breakfast</a>
            </li>

            <li>
              <a href="#">Lunch</a>
            </li>

            <li>
              <a href="#">Dinner</a>
            </li>

            <li>
              <a href="#">Snacks</a>
            </li>

            <li>
              <a href="#">Desserts</a>
            </li>

            <li>
              <a href="#">Drinks</a>
            </li>
          </ul>

        </div>


        {/* Resources */}
        <div className="footer-column">

          <h3>Resources</h3>

          <ul>
            <li>
              <a href="#">Blog</a>
            </li>

            <li>
              <a href="#">FAQ</a>
            </li>

            <li>
              <a href="#">Privacy Policy</a>
            </li>

            <li>
              <a href="#">Terms & Conditions</a>
            </li>

            <li>
              <a href="#">Help Center</a>
            </li>
          </ul>

        </div>


        {/* Contact */}
        <div className="footer-column">

          <h3>Contact Us</h3>

          <div className="contact-item">
            <span>✉</span>
            <p>info@tastyrecipe.com</p>
          </div>

          <div className="contact-item">
            <span>☎</span>
            <p>+1 234 567 8900</p>
          </div>

          <div className="contact-item">
            <span>📍</span>
            <p>
              123 Food Street,
              <br />
              Food City, FC 12345
            </p>
          </div>

        </div>

      </div>


      {/* Bottom Footer */}
      <div className="footer-bottom">

        <p>
          © 2026 TastyRecipe. All Rights Reserved.
        </p>

        <div className="footer-bottom-links">

          <a href="#">
            Privacy Policy
          </a>

          <a href="#">
            Terms & Conditions
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;