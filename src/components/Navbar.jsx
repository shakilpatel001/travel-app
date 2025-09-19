import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <div className="logo-wrapper">
            <img src={logo} alt="Wanderlust" className="logo" />
          </div>
        </Link>

        {/* Hamburger */}
        <button
          className={`navbar-toggler ${isOpen ? "open" : ""}`}
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="hamburger"></span>
        </button>

        {/* Menu */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link fw-normal fs-1_875 navbarTextColor" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-normal fs-1_875 navbarTextColor" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-normal fs-1_875 navbarTextColor" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-normal fs-1_875 navbarTextColor" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}
