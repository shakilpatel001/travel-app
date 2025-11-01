import "./Services.css";
import Card from "../../ui/Card.jsx";

const services = [
  { name: "Holiday Packages", icon: "bi bi-suitcase-fill" },
  { name: "Corporate Travel", icon: "bi bi-briefcase-fill" },
  { name: "Honeymoon Packages", icon: "bi bi-heart-fill" },
  { name: "Group Tours", icon: "bi bi-people-fill" },
  { name: "Hotels", icon: "bi bi-building-fill" },
  { name: "Flights", icon: "bi bi-airplane-fill" },
  { name: "Visa", icon: "bi bi-pass-fill" },
  { name: "Cabs", icon: "bi bi-taxi-front-fill" },
];

export default function Services() {
  return (
    <section id="services" className="services-section py-5">
      <div className="container">
        <h2 className="section-title text-center mb-5">
          <p><span className="highlight">Services </span>We Provide</p>
        </h2>
        <div className="row g-4 justify-content-center">
          {services.map((s, i) => (
            <div key={i} className="col-lg-3 col-md-4 col-sm-6">
              <Card title={s.name} icon={s.icon} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
