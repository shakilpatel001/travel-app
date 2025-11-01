import { useState, useEffect } from "react";
import "./Testimonial.css";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Traveler",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback: "Booking was so easy! Highly recommend!",
  },
  {
    name: "Priya Mehta",
    role: "Explorer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback: "Affordable yet luxurious. Will book again!",
  },
  {
    name: "Rahul Verma",
    role: "Adventurer",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    feedback: "Seamless experience. 10/10!",
  },
];

export default function Testimonial() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="testimonial-section">
      <div className="testimonial-container">
        <h2 className="testimonial-title">What Our <span className="customer-reviews-highlight">Customers</span> Say</h2>

        <div className="testimonial-card fade-in">
          <img
            src={testimonials[active].image}
            alt={testimonials[active].name}
            className="testimonial-img"
          />
          <p className="testimonial-feedback">
            “{testimonials[active].feedback}”
          </p>
          <h5 className="testimonial-name">{testimonials[active].name}</h5>
          <small className="testimonial-role">{testimonials[active].role}</small>
        </div>

        <div className="testimonial-indicators">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`indicator-btn ${i === active ? "active" : ""}`}
              onClick={() => setActive(i)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
