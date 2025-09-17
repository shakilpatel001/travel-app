import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Traveler",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      "Booking my trip was so easy! Everything was perfectly arranged, and the support team was super helpful. Highly recommend!",
  },
  {
    id: 2,
    name: "Priya Mehta",
    role: "Explorer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "The experience was beyond amazing. The packages are affordable yet luxurious. I’ll definitely book again!",
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "Adventure Enthusiast",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    feedback:
      "From start to finish, everything was seamless. The team truly understands what travelers need. 10/10 experience!",
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-5">
  <div className="container text-center">
    <h2 className="fw-bold mb-5 text-dark">⭐ What Our Customers Say</h2>

    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card border-0 shadow-lg rounded-4 p-5 testimonial-card">
          {/* Profile Image */}
          <img
            src={testimonials[activeIndex].image}
            alt={testimonials[activeIndex].name}
            className="rounded-circle shadow mb-4 testimonial-img mx-auto d-block"
            width="100"
            height="100"
          />

          {/* Feedback */}
          <p className="fst-italic text-muted fs-5 mb-4">
            "{testimonials[activeIndex].feedback}"
          </p>

          {/* Name & Role */}
          <h5 className="fw-bold text-dark mb-0">
            {testimonials[activeIndex].name}
          </h5>
          <small className="text-secondary">
            {testimonials[activeIndex].role}
          </small>
        </div>

        {/* Dots indicators */}
        <div className="mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`indicator-btn ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  </div>

  <style>{`
    .testimonial-card {
      background: #ffffff;
      transition: transform 0.4s ease, box-shadow 0.4s ease;
    }
    .testimonial-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 12px 30px rgba(0,0,0,0.15);
    }
    .testimonial-img {
      border: 4px solid #0d6efd;
      transition: transform 0.4s ease;
    }
    .testimonial-img:hover {
      transform: scale(1.1);
    }
    .indicator-btn {
      width: 12px;
      height: 12px;
      margin: 0 6px;
      border-radius: 50%;
      border: none;
      background-color: #ccc;
      transition: background-color 0.3s ease, transform 0.3s ease;
    }
    .indicator-btn.active {
      background-color: #0d6efd;
      transform: scale(1.2);
    }
  `}</style>
</section>

  );
};

export default Testimonial;
