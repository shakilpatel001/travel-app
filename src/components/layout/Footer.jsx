import logo from "../../assets/logo.png";

//DOMESTIC image
import gujaratImg from ".././../assets/domestic/Gujrat/Statue of Unity - Gujarat, India.jfif"
import himachalImg from ".././../assets/domestic/Himachal/himachal.jfif"
import karnatakaImg from ".././../assets/domestic/Karnataka/Mysore Palace_.jfif"
import kashmirImg from ".././../assets/domestic/Kashmir/kashmir.jfif"
import keralaImg from ".././../assets/domestic/Kerala/Allapy Houseboat.jfif"
import rajasthanImg from ".././../assets/domestic/Rajasthan/Jaisalmer.jfif"


//INTERNATIONAL imgage
import baliImg from ".././../assets/international/Bali/Bali.jfif"
import dubaiImg from ".././../assets/international/Dubai/Burj Khalifa.jfif"
import malaysiaImg from ".././../assets/international/Malaysia/Malaysia.jfif"
import nepalImg from ".././../assets/international/Nepal/Nepal.jfif"
import singaporeImg from ".././../assets/international/Singapore/Gerden by the bay.jfif"
import srilankaImg from ".././../assets/international/srilanka/Srilanka.jfif"
import thailandImg from ".././../assets/international/Thailand/Phuket.jfif"
import vietnamImg from ".././../assets/international/Vietnam/Halong Bay.jfif"
import "./Footer.css";

const tripImages = [
  dubaiImg,
  himachalImg,
  nepalImg,
  singaporeImg,
  rajasthanImg,
  baliImg,
  kashmirImg,
  vietnamImg,
  thailandImg
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
              className="footer-logo"
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
