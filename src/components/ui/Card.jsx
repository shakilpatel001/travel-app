import "./Card.css";

export default function Card({ title, icon, children, onClick }) {
  return (
    <div
      className="service-card glass text-center p-4 h-100 d-flex flex-column justify-content-center align-items-center cursor-pointer"
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      {icon && <i className={`${icon} service-icon mb-3`}></i>}
      <h5 className="fw-bold mb-0">{title}</h5>
      {children && <div className="mt-3">{children}</div>}
    </div>
  );
}
