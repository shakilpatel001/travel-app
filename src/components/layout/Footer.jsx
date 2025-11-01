import logo from "../../assets/logo.png";
import "./Footer.css";

const tripImages = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=160",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=160",
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=160",
  "https://images.unsplash.com/photo-1519985176271-43a9fa22d67f?w=160",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=160",
  "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=160",
];

export default function Footer() {
  return (
    <footer id="contact" className="footer-section" role="contentinfo">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Company Info */}
          <div className="col-md-4 mb-5">
            <img
              src={logo}
              alt="Logo"
              className="footer-logo mb-4"
              loading="lazy"
            />
            <h5>Company Info</h5>
            <p>
              A good plus of traveling is that often you get new skills without
              difficulty.
            </p>
          </div>

          {/* Contacts */}
          <div className="col-md-4 mb-5">
            <h5>Contacts</h5>
            <p>
              <i className="bi bi-telephone me-2"></i>Telephone: 123-456-7890
            </p>
            <p>
              <i className="bi bi-geo-alt me-2"></i>London, 51 Street, 43
            </p>
            <p>
              <i className="bi bi-clock me-2"></i>Mon – Sat 8:00 – 18:00
            </p>

            <div className="social-icons d-flex justify-content-center justify-content-md-start gap-3 mt-3">
              {[
                { name: "twitter", link: "https://twitter.com/yourprofile" },
                { name: "facebook", link: "https://facebook.com/yourpage" },
                {
                  name: "instagram",
                  link: "https://instagram.com/yourprofile",
                },
                {
                  name: "envelope",
                  link: "mailto:shakilpatelaplite2024@gmail.com?subject=Travel%20Enquiry&body=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20packages.",
                },
                {
                  name: "whatsapp",
                  link: "https://wa.me/8959472431?text=Hello!%20I%20want%20to%20know%20about%20your%20travel%20packages.",
                },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-btn ${item.name}`}
                >
                  <i className={`bi bi-${item.name}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Recent Trips */}
          <div className="col-md-4 mb-5">
            <h5>Recent Trips</h5>
            <div className="trip-grid mt-3">
              {tripImages.map((src, i) => (
                <img key={i} src={src} alt="Trip" loading="lazy" />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-4 pt-3 border-top">
          <small>
            © {new Date().getFullYear()} TravelCo. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}
