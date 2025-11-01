import { useEffect, useState } from "react";
import DestinationCard from "./DestinationCard";
import { destinations } from "../../../data/destinations";
import "./Destinations.css";

 const domesticList = [
  "Gujarat",
  "Himachal Pradesh",
  "Karnataka",
  "Kashmir",
  "Kerala",
  "Rajasthan",
];

 const internationalList = [
  "Bali, Indonesia",
  "Dubai, UAE",
  "Malaysia",
  "Nepal",
  "Singapore",
  "Sri Lanka",
  "Thailand",
  "Vietnam",
];


const Destinations = () => {
  // Typewriter (International)
  const [intlText, setIntlText] = useState("");
  const [intlIdx, setIntlIdx] = useState(0);
  const [intlSub, setIntlSub] = useState(0);
  const [intlDel, setIntlDel] = useState(false);

  // Typewriter (Domestic)
  const [domText, setDomText] = useState("");
  const [domIdx, setDomIdx] = useState(0);
  const [domSub, setDomSub] = useState(0);
  const [domDel, setDomDel] = useState(false);

  /* ---------- INTERNATIONAL ---------- */
  useEffect(() => {
    if (intlIdx >= internationalList.length) return;

    if (intlSub === internationalList[intlIdx].length + 1 && !intlDel) {
      const t = setTimeout(() => setIntlDel(true), 1000);
      return () => clearTimeout(t);
    }
    if (intlSub === 0 && intlDel) {
      setIntlDel(false);
      setIntlIdx((i) => (i + 1) % internationalList.length);
      return;
    }

    const t = setTimeout(() => {
      const next = intlSub + (intlDel ? -1 : 1);
      setIntlSub(next);
      setIntlText(internationalList[intlIdx].substring(0, next));
    }, intlDel ? 50 : 150);
    return () => clearTimeout(t);
  }, [intlSub, intlIdx, intlDel]);

  /* ---------- DOMESTIC ---------- */
  useEffect(() => {
    if (domIdx >= domesticList.length) return;

    if (domSub === domesticList[domIdx].length + 1 && !domDel) {
      const t = setTimeout(() => setDomDel(true), 1000);
      return () => clearTimeout(t);
    }
    if (domSub === 0 && domDel) {
      setDomDel(false);
      setDomIdx((i) => (i + 1) % domesticList.length);
      return;
    }

    const t = setTimeout(() => {
      const next = domSub + (domDel ? -1 : 1);
      setDomSub(next);
      setDomText(domesticList[domIdx].substring(0, next));
    }, domDel ? 50 : 150);
    return () => clearTimeout(t);
  }, [domSub, domIdx, domDel]);

  return (
    <>
      {/* ---------- INTERNATIONAL ---------- */}
      <section className="destinations-section">
        <div className="container my-5">
          <h2 className="mb-4 text-center fw-bold">
            Popular International Place{" "}
            <span className="typewriter-text">{intlText}</span>
            <span className="smooth-cursor">|</span>
          </h2>
          <div className="row g-4">
            {destinations
              .filter((d) => d.type === "international")
              .map((d) => (
                <DestinationCard key={d.id} destination={d} />
              ))}
          </div>
        </div>
      </section>

      {/* ---------- DOMESTIC ---------- */}
      <section className="destinations-section">
        <div className="container my-5">
          <h2 className="mb-4 text-center fw-bold">
            Popular Domestic Place{" "}
            <span className="typewriter-text">{domText}</span>
            <span className="smooth-cursor">|</span>
          </h2>
          <div className="row g-4">
            {destinations
              .filter((d) => d.type === "domestic")
              .map((d) => (
                <DestinationCard key={d.id} destination={d} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Destinations;
