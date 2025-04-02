import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";  
import { FaLinkedin, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa"; // Import icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">

          {/* Trivya Logo */}
          <div className="col-lg-3 col-md-6 footer-logo">
            <img 
              src="https://i.postimg.cc/5tj0hRws/13.png"  // Replace with actual logo
              alt="Trivya Logo" 
              className="logo-img"
            />
          </div>

          {/* Company Section */}
          <div className="col-lg-3 col-md-6">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Partners</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="col-lg-3 col-md-6">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="col-lg-3 col-md-6">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons with Working Links */}
        <div className="social-icons">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
        </div>
<hr/>
        {/* Bottom Text */}
        <div className="footer-bottom">
          <p>&copy; 2025 Trivya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
