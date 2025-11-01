import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useTheme } from "../../context/ThemeContext.jsx";
import ContactForm from "../ContactForm/ContactForm.jsx";
import "./Navbar.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const { theme, toggleTheme } = useTheme();
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
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];

  const handleMenuClick = (item) => {
    if (item.label === "Home") {
      navigate("/");
    } else {
      const section = document.getElementById(item.id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${
          theme === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light"
        } ${isScrolled ? "scrolled" : ""}`}
      >
        <div className="container nav-container">
          {/* === Logo === */}
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" className="logo" />
          </a>

          {/* === Toggler === */}
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

              {/* 🌙 Toggle Theme */}
              <li className="nav-item ms-lg-3">
                <button
                  className={`btn ${
                    theme === "light"
                      ? "btn-outline-primary"
                      : "btn-outline-light"
                  }`}
                  onClick={() => setShowForm(true)}
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
