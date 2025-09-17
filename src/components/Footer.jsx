import React from "react";
import logo from "../assets/logo.jpg";
import "./Footer.css"

const Footer = () => {
  const tripImages = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=80&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=80&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=80&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=80&q=80",
    "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=80&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=80&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=80&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=80&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=80&q=80",
  ];

  return (
    <footer
      id="contact"
      className="footer bg-light text-secondary-emphasis py-4"
    >
      <div className="container">
        <div className="row text-center">
          {/* Company Info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Company Info</h5>
            <p>
              A good plus of traveling is that often you get new skills without
              difficulty and without even noticing it.
            </p>
            <img
              src={logo}
              alt="Logo"
              className="mt-3"
              style={{ width: "10rem", height: "9rem", borderRadius: "50%" }}
            />
          </div>

          {/* Contacts */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Contacts</h5>
            <p>
              <i className="bi bi-telephone-fill me-2"></i>123-456-78901
            </p>
            <p>
              <i className="bi bi-geo-alt-fill me-2"></i>London, 51 Street, 43
            </p>
            <p>
              <i className="bi bi-clock-fill me-2"></i>Mon - Sat 8.00 - 18.00
            </p>
            <div className="d-flex justify-content-center gap-2 mt-2">
              <a href="#" className="social-btn btn btn-sm rounded-circle">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="social-btn btn btn-sm rounded-circle">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="social-btn btn btn-sm rounded-circle">
                <i className="bi bi-google"></i>
              </a>
              <a href="#" className="social-btn btn btn-sm rounded-circle">
                <i className="bi bi-skype"></i>
              </a>
              <a href="#" className="social-btn btn btn-sm rounded-circle">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>

          {/* Recent Trips */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Recent Trips</h5>
            <div className="row justify-content-center g-2">
              {tripImages.map((img, i) => (
                <div key={i} className="col-4 d-flex justify-content-center">
                  <img
                    src={img}
                    alt={`trip-${i}`}
                    className="rounded"
                    style={{
                      width: "100px",
                      height: "80px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
