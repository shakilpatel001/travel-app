import React from "react";
import "./BudgetSection.css"; // Import the separate CSS

export default function BudgetSection() {
  const budgets = [
    {
      price: "₹ 20,000",
      label: "Budget",
      icon: "🌍",
      features: ["Hostels & Guesthouses", "Shared Transport", "Street Food"],
    },
    {
      price: "₹ 50,000",
      label: "Standard",
      icon: "✈️",
      features: ["3★ Hotels", "Flights Included", "Guided Tours"],
    },
    {
      price: "₹ 75,000",
      label: "Premium",
      icon: "🏝️",
      features: ["4★ Hotels", "Private Cab", "Luxury Dining"],
      popular: true,
    },
    {
      price: "₹ 1,00,000",
      label: "Luxury",
      icon: "👑",
      features: ["5★ Resorts", "First-class Flights", "Exclusive Experiences"],
    },
  ];

  return (
    <section className="budget-section py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold display-5 text-primary">
          Choose Your Travel Budget
        </h2>
        <div className="row g-4">
          {budgets.map((budget, index) => (
            <div className="col-12 col-sm-6 col-lg-3" key={index}>
              <div className={`budget-card rounded-4 shadow-lg text-center p-4 ${budget.popular ? "popular" : ""}`}>
                {budget.popular && (
                  <span className="badge popular-badge position-absolute top-0 start-50 translate-middle mt-3 shadow-sm">
                    ⭐ Most Popular
                  </span>
                )}
                <div className="card-body">
                  <div className="icon mb-3">{budget.icon}</div>
                  <h4 className="fw-bold text-dark">{budget.label}</h4>
                  <h2 className="fw-bolder text-primary">{budget.price}</h2>
                  <p className="text-muted">Per Person</p>
                  <hr className="my-3" />
                  <ul className="list-unstyled mt-3">
                    {budget.features.map((feature, i) => (
                      <li key={i} className="mb-2 text-dark fw-medium">
                        ✅ {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
