// import React, { useLayoutEffect } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import { destinations } from "../../../data/destinations";
// import "./DestinationDetails.css";

// const formatINR = (val) => {
//   if (typeof val === "number") return `₹${val.toLocaleString("en-IN")}`;
//   return val;
// };

// export default function DestinationDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const destination = destinations.find((d) => String(d.id) === String(id));

//   useLayoutEffect(() => {
//     window.scrollTo(0, 0);
//   }, [id]);

//   if (!destination) {
//     return (
//       <div className="container py-5 text-center">
//         <h3>Destination not found</h3>
//         <Link to="/" replace className="btn btn-primary mt-3">
//           Back to Home
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="container destination-details my-5">
//       {/* 🔙 Back Button */}
//       <div className="mb-4">
//         <button className="btn btn-outline-primary" onClick={() => navigate("/")}>
//           ← Back to Home
//         </button>
//       </div>

//       <div className="card details-card border-0 shadow-lg rounded-4 overflow-hidden">
//         {/* ---------- Hero Image ---------- */}
//         <div className="details-img-wrapper position-relative">
//           <img
//             src={destination.imgUrl}
//             alt={destination.name}
//             className="w-100 details-hero"
//           />
//           <div className="shine-effect"></div>
//         </div>

//         {/* ---------- Content ---------- */}
//         <div className="card-body p-4 glass-body">
//           <div className="d-flex justify-content-between align-items-start flex-wrap gap-3">
//             <h2 className="fw-bold text-gradient mb-0">{destination.name}</h2>
//             <div className="text-end small-box p-2 px-3 rounded-3">
//               <small className="text-muted d-block">Best Time</small>
//               <div className="fw-bold">{destination.bestTimeToVisit}</div>
//             </div>
//           </div>

//           <p className="text-muted mt-3">{destination.detailedDescription}</p>

//           <div className="row mt-4 g-4">
//             {/* Highlights */}
//             <div className="col-md-6">
//               <h5 className="fw-bold text-primary mb-3">Highlights</h5>
//               <ul className="list-unstyled">
//                 {destination.highlights?.map((h, i) => (
//                   <li key={i} className="highlight-item">✨ {h}</li>
//                 ))}
//               </ul>
//             </div>

//             {/* Services */}
//             <div className="col-md-6">
//               <h5 className="fw-bold text-primary mb-3">Services</h5>
//               <div className="d-grid gap-2">
//                 {destination.services?.map((s, i) => (
//                   <div key={i} className="glass-service">
//                     ✅ {s}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Packages */}
//           {destination.packages?.length > 0 && (
//             <>
//               <h5 className="fw-bold text-primary mt-4">Available Packages</h5>
//               <ul className="list-group mt-3">
//                 {destination.packages.map((p, i) => {
//                   let percent = null;
//                   if (p.price && p.discountPrice) {
//                     const a = Number(p.price),
//                       b = Number(p.discountPrice);
//                     if (!isNaN(a) && !isNaN(b) && a > b)
//                       percent = Math.round(((a - b) / a) * 100);
//                   }
//                   return (
//                     <li
//                       key={i}
//                       className="list-group-item d-flex justify-content-between align-items-center glass-package"
//                     >
//                       <div>
//                         <div className="fw-semibold">{p.name}</div>
//                         {p.details && (
//                           <div className="text-muted small">{p.details}</div>
//                         )}
//                       </div>
//                       <div className="text-end">
//                         {p.discountPrice ? (
//                           <>
//                             <div className="text-muted text-decoration-line-through small">
//                               {formatINR(p.price)}
//                             </div>
//                             <div className="fw-bold text-success">
//                               {formatINR(p.discountPrice)}
//                             </div>
//                             {percent && (
//                               <div className="small text-danger">{percent}% off</div>
//                             )}
//                           </>
//                         ) : (
//                           <div className="fw-bold">{formatINR(p.price)}</div>
//                         )}
//                       </div>
//                     </li>
//                   );
//                 })}
//               </ul>
//             </>
//           )}

//           {/* Buttons */}
//           <div className="mt-4 d-flex flex-wrap gap-3">
//             <button className="btn btn-view">Book Now 🚀</button>
//             <button
//               className="btn btn-outline-secondary"
//               onClick={() =>
//                 window.scrollTo({
//                   top: document.body.scrollHeight,
//                   behavior: "smooth",
//                 })
//               }
//             >
//               Contact / Enquire 💬
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useLayoutEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { destinations } from "../../../data/destinations";
import ContactForm from "../../ContactForm/ContactForm";
import "./DestinationDetails.css";

const formatINR = (val) => {
  if (typeof val === "number") return `₹${val.toLocaleString("en-IN")}`;
  return val;
};

export default function DestinationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const destination = destinations.find((d) => String(d.id) === String(id));

  const [showForm, setShowForm] = useState(false); // 👈 for toggling popup

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!destination) {
    return (
      <div className="container py-5 text-center">
        <h3>Destination not found</h3>
        <Link to="/" replace className="btn btn-primary mt-3">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container destination-details my-5">
      {/* 🔙 Back Button */}
      <div className="mb-4">
        <button className="btn btn-outline-primary" onClick={() => navigate("/")}>
          ← Back to Home
        </button>
      </div>

      <div className="card details-card border-0 shadow-lg rounded-4 overflow-hidden">
        {/* ---------- Hero Image ---------- */}
        <div className="details-img-wrapper position-relative">
          <img
            src={destination.imgUrl}
            alt={destination.name}
            className="w-100 details-hero"
          />
          <div className="shine-effect"></div>
        </div>

        {/* ---------- Content ---------- */}
        <div className="card-body p-4 glass-body">
          <div className="d-flex justify-content-between align-items-start flex-wrap gap-3">
            <h2 className="fw-bold destination-text-color mb-0">{destination.name}</h2>
            <div className="text-end small-box p-2 px-3 rounded-3">
              <small className="text-muted d-block">Best Time</small>
              <div className="fw-bold">{destination.bestTimeToVisit}</div>
            </div>
          </div>

          <p className="text-muted mt-3">{destination.detailedDescription}</p>

          <div className="row mt-4 g-4">
            {/* Highlights */}
            <div className="col-md-6">
              <h5 className="fw-bold text-primary mb-3">Highlights</h5>
              <ul className="list-unstyled">
                {destination.highlights?.map((h, i) => (
                  <li key={i} className="highlight-item">
                    ✨ {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="col-md-6">
              <h5 className="fw-bold text-primary mb-3">Services</h5>
              <div className="d-grid gap-2">
                {destination.services?.map((s, i) => (
                  <div key={i} className="glass-service">
                    ✅ {s}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Packages */}
          {destination.packages?.length > 0 && (
            <>
              <h5 className="fw-bold text-primary mt-4">Available Packages</h5>
              <ul className="list-group mt-3">
                {destination.packages.map((p, i) => {
                  let percent = null;
                  if (p.price && p.discountPrice) {
                    const a = Number(p.price),
                      b = Number(p.discountPrice);
                    if (!isNaN(a) && !isNaN(b) && a > b)
                      percent = Math.round(((a - b) / a) * 100);
                  }
                  return (
                    <li
                      key={i}
                      className="list-group-item d-flex justify-content-between align-items-center glass-package"
                    >
                      <div>
                        <div className="fw-semibold">{p.name}</div>
                        {p.details && (
                          <div className="text-muted small">{p.details}</div>
                        )}
                      </div>
                      <div className="text-end">
                        {p.discountPrice ? (
                          <>
                            <div className="text-muted text-decoration-line-through small">
                              {formatINR(p.price)}
                            </div>
                            <div className="fw-bold text-success">
                              {formatINR(p.discountPrice)}
                            </div>
                            {percent && (
                              <div className="small text-danger">
                                {percent}% off
                              </div>
                            )}
                          </>
                        ) : (
                          <div className="fw-bold">{formatINR(p.price)}</div>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </>
          )}

          {/* Buttons */}
          <div className="mt-4 d-flex flex-wrap gap-3">
            <button className="btn btn-view" onClick={() => setShowForm(true)}>
              Book Now 🚀
            </button>
            <button
              className="btn btn-outline-secondary"
              onClick={() =>
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                })
              }
            >
              Contact / Enquire 💬
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Contact Form Popup */}
      {showForm && (
        <ContactForm
          destination={destination.name}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
}
