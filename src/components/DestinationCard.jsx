const DestinationCard = ({ destination }) => {
  const fallbackImage =
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80";

  const handleImageError = (e) => {
    e.target.src = fallbackImage;
  };

  return (
    <div
      className="col-sm-12 col-md-6 col-lg-4 mb-4 destination-card-wrapper"
      data-bs-toggle="modal"
      data-bs-target={`#modal-${destination.id}`}
      style={{ cursor: "pointer" }}
    >
      {/* Card Preview */}
      <div className="card border-0 shadow-lg rounded-4 overflow-hidden h-100 destination-card">
        <div className="position-relative overflow-hidden">
          <img
            src={destination.imgUrl || fallbackImage}
            alt={destination.name}
            className="w-100 destination-img"
            style={{ height: "220px", objectFit: "cover" }}
            onError={handleImageError}
          />
          {/* Overlay on hover */}
          <div className="card-overlay d-flex justify-content-center align-items-center">
            <span className="overlay-text">View Details</span>
          </div>
          <div className="position-absolute bottom-0 w-100 py-2 bg-dark bg-opacity-50 text-center text-white fw-bold fs-5">
            {destination.name}
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      <div
        className="modal fade"
        id={`modal-${destination.id}`}
        tabIndex="-1"
        aria-labelledby={`modalLabel-${destination.id}`}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content rounded-4 border-0 shadow">
            {/* Header */}
            <div className="modal-header border-0 pb-0">
              <h5
                className="modal-title text-primary fw-bold"
                id={`modalLabel-${destination.id}`}
              >
                {destination.name}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            {/* Body */}
            <div className="modal-body">
              {/* Hero Image */}
              <img
                src={destination.imgUrl || fallbackImage}
                alt={destination.name}
                className="img-fluid rounded-3 shadow-sm mb-4"
                style={{
                  maxHeight: "240px",
                  width: "100%",
                  objectFit: "cover",
                }}
                onError={handleImageError}
              />

              {/* About Section */}
              <h6 className="fw-bold text-dark">About</h6>
              <p className="text-muted">{destination.detailedDescription}</p>

              {/* Best Time & Highlights */}
              <div className="row mt-3 text-center">
                {/* Best Time to Visit */}
                <div className="col-md-6 mb-3 mb-md-0">
                  <h6 className="text-primary fw-bold mb-2">
                    <i className="bi bi-clock me-2 text-secondary"></i>
                    Best Time to Visit
                  </h6>
                  <p className="text-muted mb-0">
                    {destination.bestTimeToVisit}
                  </p>
                </div>

                {/* Highlights */}
                <div className="col-md-6">
                  <h6 className="text-primary fw-bold mb-2">
                    <i className="bi bi-sun me-2 text-warning"></i>
                    Highlights
                  </h6>
                  <ul className="list-unstyled mb-0 d-inline-block text-start">
                    {destination.highlights.map((item, idx) => (
                      <li key={idx} className="mb-2 d-flex align-items-start">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Services */}
              {destination.services?.length > 0 && (
                <div className="mt-3">
                  <h6 className="text-primary fw-bold mb-2">
                    <i className="bi bi-gift-fill me-2 text-danger"></i>
                    Services We Provide
                  </h6>
                  <div className="row">
                    {destination.services.map((service, idx) => (
                      <div key={idx} className="col-md-6 col-sm-12 mb-2">
                        <div className="border rounded-3 p-2 bg-light d-flex align-items-center">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          <span>{service}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Packages */}
              {destination.packages?.length > 0 && (
                <div className="mt-4">
                  <h6 className="text-primary fw-bold mb-2">
                    Available Packages
                  </h6>
                  <ul className="list-group">
                    {destination.packages.map((p, idx) => (
                      <li
                        key={idx}
                        className="list-group-item d-flex justify-content-between align-items-center"
                      >
                        {p.name}
                        <span className="badge bg-primary rounded-pill">
                          {p.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .destination-card {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .destination-card:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        }

        .destination-img {
          transition: transform 0.6s ease;
        }
        .destination-card:hover .destination-img {
          transform: scale(1.15);
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .destination-card:hover .card-overlay {
          opacity: 1;
        }

        .overlay-text {
          color: #fff;
          font-size: 1.2rem;
          font-weight: bold;
          transform: scale(0.8);
          opacity: 0;
          transition: all 0.4s ease;
        }
        .destination-card:hover .overlay-text {
          transform: scale(1);
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default DestinationCard;

