import React from "react";
import "./BudgetSection.css";

const BudgetSection = () => {
  const budgets = [
    { 
      price: "₹ 20,000", 
      color: "success",
      icon: "bi bi-backpack",
      label: "Budget Travel"
    },
    { 
      price: "₹ 50,000", 
      color: "warning",
      icon: "bi bi-bicycle",
      label: "Comfort Trip"
    },
    { 
      price: "₹ 75,000", 
      color: "purple",
      icon: "bi bi-building",
      label: "City Escape"
    },
    { 
      price: "₹ 1,00,000", 
      color: "info",
      icon: "bi bi-sun",
      label: "Premium Getaway"
    },
    { 
      price: "₹ 1,50,000", 
      color: "primary",
      icon: "bi bi-stars",
      label: "Luxury Experience"
    },
  ];

  return (
    <div className="container py-5 budget-section">
      <div className="card shadow-sm border-0 p-4 budget-container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3 section-title">
            Your Dream Holiday, Your Budget
          </h2>
          <p className="section-subtitle">
            Whether it's luxury or low-cost, we've got the perfect trip waiting for you.
          </p>
        </div>

        <div className="row justify-content-center g-4">
          {budgets.map((item, index) => (
            <div key={index} className="col-6 col-md-2 text-center">
              <div className={`p-4 rounded-4 budget-card budget-${item.color}`}>
                <div className="budget-badge">BELOW</div>
                <div className="budget-price">{item.price}</div>
                <div className="budget-icon">
                  <i className={item.icon}></i>
                </div>
                <div className="budget-label">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BudgetSection;