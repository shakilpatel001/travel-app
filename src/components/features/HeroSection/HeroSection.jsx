// src/components/HeroSection.jsx
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section text-center d-flex align-items-center justify-content-center">
      <div className="container hero-content px-4">
        <h3 className="hero-subtitle mb-2">Choose Your</h3>
        <h1 className="hero-title mb-4">
          Perfect <span className="highlight">Holiday</span>
        </h1>
        <p className="hero-text mx-auto">
          Take vacations, go as many places as you can. You can always make money,
          <br className="d-none d-md-inline" />
          you can’t always make memories.
        </p>

        <div className="hero-divider mt-4 mb-3"></div>

        <button className="btn btn-glass mt-3 px-4 py-2">
          Explore Destinations
        </button>
      </div>
    </section>
  );
}
