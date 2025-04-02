import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import "./Navbar.css";

const Navbar = () => {
  const [logo, setLogo] = useState("https://i.postimg.cc/5tj0hRws/13.png");
  const [menuOpen, setMenuOpen] = useState(false); // State to track menu open/close

  // Function to close menu when clicking a link
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
      {/* Logo with Hover Effect */}
      <a
        className="navbar-brand logo"
        href="https://i.postimg.cc/5tj0hRws/13.png"
        onMouseEnter={() => setLogo("https://i.postimg.cc/5tj0hRws/13.png")}
        onMouseLeave={() => setLogo("https://i.postimg.cc/5tj0hRws/13.png")}
      >
        <img src={logo} alt="Trivya Logo" className="logo-img" />
      </a>

      {/* Navbar Toggle for Mobile */}
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar Links - Aligned Right */}
      <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`} id="navbarNav">
        <ul className="navbar-nav me-3">
          {/* Home Link */}
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={closeMenu}>Home</Link> {/* Added Home link */}
          </li>

          {/* About Us Link */}
          <li className="nav-item">
            <Link className="nav-link" to="/aboutus" onClick={closeMenu}>About Us</Link> {/* Updated to Link */}
          </li>

          {/* Courses Dropdown */}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="coursesDropdown" role="button" data-bs-toggle="dropdown">
              Courses
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#" onClick={closeMenu}>Web Development</a></li>
              <li><a className="dropdown-item" href="#" onClick={closeMenu}>Data Science</a></li>
              <li><a className="dropdown-item" href="#" onClick={closeMenu}>Cybersecurity</a></li>
            </ul>
          </li>

          {/* Career Dropdown */}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="careerDropdown" role="button" data-bs-toggle="dropdown">
              Career
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#" onClick={closeMenu}>Internships</a></li>
              <li><a className="dropdown-item" href="#" onClick={closeMenu}>Job Openings</a></li>
            </ul>
          </li>
        </ul>

        {/* Enroll & Signup Buttons */}
        <div className="d-flex nav-buttons">
          <button className="btn btn-warning me-2" onClick={closeMenu}>Enroll</button>
          <button className="btn btn-dark" onClick={closeMenu}>Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
