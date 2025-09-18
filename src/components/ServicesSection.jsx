import "./ServicesSection.css";

const ServicesSection = () => {
  const services = [
    { name: "Holiday Packages", icon: "bi bi-suitcase-fill" },
    { name: "Corporate Travel", icon: "bi bi-briefcase-fill" },
    { name: "Honeymoon Packages", icon: "bi bi-heart-fill" },
    { name: "Group Tours", icon: "bi bi-people-fill" },
    { name: "Hotels", icon: "bi bi-building-fill" },
    { name: "Flights", icon: "bi bi-airplane-fill" },
    { name: "Visa", icon: "bi bi-pass-fill" }, // you can use passport image if no bootstrap icon
    { name: "Cabs", icon: "bi bi-taxi-front-fill" }
  ];

  return (
    <section className="services-section py-5">
      <div className="container">
               <h2 className="text-center mb-4 fw-bold">✨ Services We Provide ✨</h2>

        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-3 col-sm-6" key={index}>
              <div className="service-card text-center p-4 shadow-sm h-100">
                <div className="icon-wrapper mb-3">
                  <i className={`${service.icon}`}></i>
                </div>
                <h5 className="fw-semibold">{service.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;