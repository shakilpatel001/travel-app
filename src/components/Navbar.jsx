import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <div className="logo-wrapper">
            <img src={logo} alt="Wanderlust" className="logo" />
          </div>
        </Link>

        {/* Hamburger button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link nav-link fw-normal fs-3 navbarTextColor" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-link fw-normal fs-3 navbarTextColor" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-link fw-normal fs-3 navbarTextColor" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-link fw-normal fs-3 navbarTextColor" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
