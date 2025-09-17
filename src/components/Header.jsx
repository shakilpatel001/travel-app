import "./Header.css";

const image001 =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80";
const image002 =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80";
const image003 =
  "https://media.istockphoto.com/id/469532554/photo/bahakapur-nepal.jpg?s=2048x2048&w=is&k=20&c=4Z8Z0vM9e-n53sNdU78VU3R5uFRUtW5eIAYJnqVjBWE=";
const image004 =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80";
const image005 =
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80";

const slides = [
  {
    src: image001,
    label: "First slide label",
    desc: "Some representative placeholder content for the first slide.",
  },
  {
    src: image002,
    label: "Second slide label",
    desc: "Some representative placeholder content for the second slide.",
  },
  {
    src: image003,
    label: "Third slide label",
    desc: "Some representative placeholder content for the third slide.",
  },
  {
    src: image004,
    label: "Fourth slide label",
    desc: "Some representative placeholder content for the fourth slide.",
  },
  {
    src: image005,
    label: "Fifth slide label",
    desc: "Some representative placeholder content for the fifth slide.",
  },
];

const Header = () => {
  const slideAnimations = [
    { title: "animate-fade-up", desc: "animate-slide-right" },
    { title: "animate-slide-left", desc: "animate-fade-up" },
    { title: "animate-zoom-in", desc: "animate-bounce" },
    { title: "animate-slide-right", desc: "animate-zoom-in" },
    { title: "animate-bounce", desc: "animate-slide-left" },
  ];

  return (
    <header className="text-center mb-5">
      <div
        id="carouselExampleDark"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="4000"
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          {slides.map((slide, index) => {
            const { title, desc } =
              slideAnimations[index % slideAnimations.length];

            return (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                {/* Background image */}
                <img
                  src={slide.src}
                  className="d-block w-100 carousel-img"
                  alt={slide.label}
                />

                {/* Fancy caption */}
                <div className="carousel-caption glass-box">
                  <h2 className={`carousel-title ${title}`}>{slide.label}</h2>
                  <p className={`carousel-desc ${desc}`}>{slide.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
};
export default Header;


