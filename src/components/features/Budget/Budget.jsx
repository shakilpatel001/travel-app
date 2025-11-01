import "./Budget.css";

const budgets = [
  {
    price: "₹20,000",
    label: "Budget",
    icon: <i className="bi bi-globe2"></i>,
    features: ["Hostels", "Shared Transport", "Street Food"],
  },
  {
    price: "₹50,000",
    label: "Standard",
    icon: <i className="bi bi-airplane"></i>,
    features: ["3 Star Hotels", "Flights", "Tours"],
  },
  {
    price: "₹75,000",
    label: "Premium",
    icon: <i className="bi bi-sun"></i>,
    features: ["4 Star Hotels", "Private Cab", "Dining"],
    popular: true,
  },
  {
    price: "₹1,00,000",
    label: "Luxury",
    icon: <i className="bi bi-gem"></i>,
    features: ["5 Star Resorts", "First-class", "Exclusive"],
  },
];

export default function Budget() {
  return (
    <section id="budget" className="budget-section py-5">
      <div className="container">
        <h2 className="budget-heading mb-5">Choose Your <span className="budget-hightlight">Travel Budget</span></h2>
        <div className="row g-4 justify-content-center">
          {budgets.map((b, i) => (
            <div key={i} className="col-12 col-sm-6 col-lg-3">
              <div
                className={`budget-card text-center p-4 position-relative ${
                  b.popular ? "popular-card" : ""
                }`}
              >
                {b.popular && (
                  <span className="popular-badge">Most Popular</span>
                )}
                <div className="icon-wrapper mb-3">{b.icon}</div>
                <h4>{b.label}</h4>
                <h2>{b.price}</h2>
                <p className="text-muted mb-3">Per Person</p>
                <hr />
                <ul>
                  {b.features.map((f, j) => (
                    <li key={j}>✅ {f}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
