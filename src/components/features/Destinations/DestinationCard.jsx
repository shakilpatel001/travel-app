import { useNavigate } from "react-router-dom";
import "./DestinationCard.css";

export default function DestinationCard({ destination }) {
  const navigate = useNavigate();
  const hasDiscount = true;
  const discountFactor = 0.8;

  let dynamicClassValue = "";
  if (destination.type === "international") {
    dynamicClassValue = "col-sm-12 col-md-6 col-lg-3 mb-4"; // 4 per row
  } else {
    dynamicClassValue = "col-sm-12 col-md-6 col-lg-4 mb-4"; // 3 per row
  }

  return (
    <div className={dynamicClassValue}>
      <div className="card h-100 border-0 shadow-lg rounded-4 destination-card">
        <div className="position-relative">
          <img
            src={destination.imgUrl}
            alt={destination.name}
            className="card-img-top rounded-top-4 destination-img"
          />
          {hasDiscount && (
            <div className="badge bg-danger position-absolute top-0 end-0 m-3 fs-6 shadow">
              20% OFF
            </div>
          )}
        </div>

        <div className="card-body text-center">
          <h5 className="fw-bold text-primary mb-2">{destination.name}</h5>
          <p className="text-muted small mb-3">{destination.description}</p>

          {destination.packages?.slice(0, 2).map((p, i) => {
            const priceValue = parseInt(p.price.replace(/[^0-9]/g, ""));
            const discounted = Math.floor(priceValue * discountFactor);

            return (
              <div
                key={i}
                className="d-flex justify-content-between align-items-center mb-2 border-bottom pb-1"
              >
                <span className="fw-semibold">{p.name}</span>
                <span>
                  <span className="text-muted text-decoration-line-through me-1">
                    ₹{priceValue.toLocaleString()}
                  </span>
                  <strong className="text-success">
                    ₹{discounted.toLocaleString()}
                  </strong>
                </span>
              </div>
            );
          })}

          <div className="offer-section mt-3 p-3 rounded-3">
            <div className="fw-bold fs-5 text-success mb-1">
              🎉 We offer you amazing deals!
            </div>
            <div className="text-muted small">
              Save up to <strong>20%</strong> on every package.
            </div>
          </div>

          <div className="mt-4">
            <button
              onClick={() => navigate(`/destination/${destination.id}`)}
              className="btn btn-view w-75 rounded-pill py-2 fw-semibold shadow-sm"
            >
              View Details ✈️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
