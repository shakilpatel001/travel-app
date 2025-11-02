import { useEffect } from "react";
import "./Header.css";

// === Your Images ===
import dubaiImg from "../../../assets/international/Dubai/Burj Khalifa.jfif";
import nepalImg from "../../../assets/international/Nepal/Nepal.jfif";
import rajasthanImg from "../../../assets/domestic/Rajasthan/Jaisalmer.jfif";

const slides = [
  { src: dubaiImg, label: "Discover Paradise", desc: "Explore breathtaking destinations around the world." },
  { src: nepalImg, label: "Adventure Awaits", desc: "From mountains to beaches, find your next thrill." },
  { src: rajasthanImg, label: "Cultural Journeys", desc: "Immerse yourself in rich traditions and history." },
];

export default function Header() {
  useEffect(() => {
    const el = document.getElementById("travelCarousel");
    if (el && window.bootstrap?.Carousel) {
      new window.bootstrap.Carousel(el, {
        interval: 4000,
        ride: "carousel",
        pause: false,
        wrap: true,
      });
    }
  }, []);

  return (
    <header className="position-relative overflow-hidden">
      {/* === BOOTSTRAP CAROUSEL === */}
      <div
        id="travelCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="4000"
      >
        {/* === INDICATORS === */}
        <div className="carousel-indicators">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              data-bs-target="#travelCarousel"
              data-bs-slide-to={i}
              className={i === 0 ? "active" : ""}
              aria-current={i === 0 ? "true" : undefined}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* === SLIDES === */}
        <div className="carousel-inner">
          {slides.map((slide, i) => (
            <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
              <img
                src={slide.src}
                className="d-block w-100 carousel-img"
                alt={slide.label}
                loading={i === 0 ? "eager" : "lazy"}
              />
              <div className="carousel-caption glass-box">
                <h2 className="carousel-title">{slide.label}</h2>
                <p className="carousel-desc">{slide.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* === CONTROLS === */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#travelCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#travelCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </header>
  );
}
