import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";

export default function ContactForm({ destination, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    startDate: "",
    endDate: "",
    travelers: "",
    message: "",
    destination: "", // Added destination to formData
  });
  const [status, setStatus] = useState("");

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          ...formData,
          destination: destination === "Custom Destination" ? formData.destination : destination || "Not specified",
        },
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            startDate: "",
            endDate: "",
            travelers: "",
            message: "",
            destination: "", // Reset destination
          });
          setTimeout(onClose, 1500);
        },
        () => setStatus("❌ Failed to send. Try again.")
      );
  };

  return (
    <div className="contact-overlay">
      <div className="contact-form glass-form">
        <button className="btn-close" onClick={onClose}>
          ✖
        </button>
        <h3 className="form-title mb-3">Plan Your Trip 🌍</h3>
        <p className="form-sub">
          Let’s make your journey to{" "}
          <strong>{destination === "Custom Destination" ? "your destination" : destination || "Not specified"}</strong>{" "}
          unforgettable!
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
          />
          {destination === "Custom Destination" ? (
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="Enter Your Destination"
              required
            />
          ) : (
            <div className="destination-display">
              <strong>Destination:</strong> {destination || "Not specified"}
            </div>
          )}
          <div className="date-group">
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="number"
            name="travelers"
            value={formData.travelers}
            onChange={handleChange}
            placeholder="Number of Travelers"
            min="1"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="3"
            placeholder="Special Requests / Message"
          />
          <button type="submit" className="btn btn-send">
            ✈️ Book Now
          </button>
        </form>
        {status && <p className="status-msg mt-3">{status}</p>}
      </div>
    </div>
  );
}
//  .send(
//         "service_ydkqyap", // 🔹 Replace
//         "template_7aw73pw", // 🔹 Replace
//         {
//           ...formData,
//           destination: destination || "Unknown",
//         },
//         "4mdmrls1jAb4WToCg" // 🔹 Replace
//       )
//       .then(
//         () => {
//           setStatus("✅ Message sent successfully!");
//           setFormData({ name: "", email: "", message: "" });
//           setTimeout(onClose, 1500);
//         },
//         () => setStatus("❌ Failed to send. Try again.")
//       );
//   };
