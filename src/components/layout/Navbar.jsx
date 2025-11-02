import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import ContactForm from "../ContactForm/ContactForm.jsx";
import "./Navbar.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", id: "header" },
    { label: "Destinations", id: "destinations" },
    { label: "Services", id: "services" },
    { label: "Budget", id: "budget" },
    { label: "Contact", id: "contact" },
  ];

  const closeMenu = () => {
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse?.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
    setIsMenuOpen(false);
  };

  const handleMenuClick = (item) => {
    closeMenu();

    if (item.label === "Home") {
      navigate("/");
    } else {
      const section = document.getElementById(item.id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleBookNow = () => {
    closeMenu();
    setShowForm(true);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    const navbarCollapse = document.getElementById("navbarNav");
    navbarCollapse?.classList.toggle("show");
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${
          isScrolled ? "navbar-light bg-light scrolled shadow-sm" : "navbar-light bg-light"
        }`}
      >
        <div className="container nav-container">
          {/* === Logo === */}
          <a className="navbar-brand" href="/travel-app">
            <img src={logo} alt="Logo" className="logo" />
          </a>

          {/* === Custom Toggler (SVG icons) === */}
          <button
            className="navbar-toggler border-0"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              // ❌ Close icon (SVG)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                className="text-primary"
                viewBox="0 0 16 16"
              >
                <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" />
              </svg>
            ) : (
              // ☰ Menu icon (SVG)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                className="text-primary"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 3.5h13m-13 4h13m-13 4h13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>

          {/* === Collapsible Menu === */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav align-items-center">
              {menuItems.map((item) => (
                <li key={item.id} className="nav-item mx-lg-2">
                  <button
                    className="nav-link btn btn-link p-0 text-decoration-none"
                    onClick={() => handleMenuClick(item)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}

              {/* ✈️ Book Now */}
              <li className="nav-item ms-lg-3">
                <button
                  className="btn btn-outline-primary"
                  onClick={handleBookNow}
                >
                  ✈️ Book Now
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ✅ ContactForm Modal */}
      {showForm && (
        <ContactForm
          destination="Custom Destination"
          onClose={() => setShowForm(false)}
        />
      )}
    </>
  );
}
