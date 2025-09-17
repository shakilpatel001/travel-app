import { useEffect, useState } from "react";
import DestinationCard from "./DestinationCard";
import { destinations } from "./destinationsData";

const domesticDestinationsList = [
  "Meghalaya",
  "Kerala",
  "Goa",
  "Rajasthan",
  "Himachal Pradesh",
  "Andaman & Nicobar",
  "Kashmir",
  "Leh Ladakh",
];

const internationalDestinationsList = [
  "Maldives",
  "Bali, Indonesia",
  "Thailand",
  "Dubai, UAE",
  "Singapore",
  "Malaysia",
  "Nepal",
];

const Destinations = () => {
  // State for international typewriter effect
  const [intlText, setIntlText] = useState("");
  const [intlIndex, setIntlIndex] = useState(0);
  const [intlSubIndex, setIntlSubIndex] = useState(0);
  const [intlDeleting, setIntlDeleting] = useState(false);

  // State for domestic typewriter effect
  const [domesticText, setDomesticText] = useState("");
  const [domesticIndex, setDomesticIndex] = useState(0);
  const [domesticSubIndex, setDomesticSubIndex] = useState(0);
  const [domesticDeleting, setDomesticDeleting] = useState(false);

  // Typewriter effect for international destinations
  useEffect(() => {
    if (intlIndex >= internationalDestinationsList.length) return;

    if (
      intlSubIndex === internationalDestinationsList[intlIndex].length + 1 &&
      !intlDeleting
    ) {
      setTimeout(() => setIntlDeleting(true), 1000);
      return;
    }

    if (intlSubIndex === 0 && intlDeleting) {
      setIntlDeleting(false);
      setIntlIndex((prev) => (prev + 1) % internationalDestinationsList.length);
      return;
    }

    const timeout = setTimeout(() => {
      setIntlSubIndex((prev) => prev + (intlDeleting ? -1 : 1));
      setIntlText(
        internationalDestinationsList[intlIndex].substring(0, intlSubIndex)
      );
    }, intlDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [intlSubIndex, intlIndex, intlDeleting]);

  // Typewriter effect for domestic destinations
  useEffect(() => {
    if (domesticIndex >= domesticDestinationsList.length) return;

    if (
      domesticSubIndex === domesticDestinationsList[domesticIndex].length + 1 &&
      !domesticDeleting
    ) {
      setTimeout(() => setDomesticDeleting(true), 1000);
      return;
    }

    if (domesticSubIndex === 0 && domesticDeleting) {
      setDomesticDeleting(false);
      setDomesticIndex((prev) => (prev + 1) % domesticDestinationsList.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDomesticSubIndex((prev) => prev + (domesticDeleting ? -1 : 1));
      setDomesticText(
        domesticDestinationsList[domesticIndex].substring(0, domesticSubIndex)
      );
    }, domesticDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [domesticSubIndex, domesticIndex, domesticDeleting]);

  return (
    <>
      <div className="container my-5">
        <h2 className="mb-4 text-center fw-bold text-primary-emphasis">
          Popular International Place{" "}
          <span className="typewriter-text">{intlText}</span>
          <span className="smooth-cursor">|</span>
        </h2>
        <div className="row">
          {destinations
            .filter((dest) => dest.type === "international")
            .map((dest) => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-center fw-bold text-primary-emphasis">
          Popular Domestic Place{" "}
          <span className="typewriter-text">{domesticText}</span>
          <span className="smooth-cursor">|</span>
        </h2>
        <div className="row">
          {destinations
            .filter((dest) => dest.type === "domestic")
            .map((dest) => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
        </div>
      </div>

      <style>{`
        .typewriter-text {
          color: #007bff;
          font-weight: bold;
        }

        .smooth-cursor {
          display: inline-block;
          margin-left: 2px;
          width: 1ch;
          font-weight: normal;
          animation: smooth-blink 1.2s infinite;
        }

        @keyframes smooth-blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Destinations;