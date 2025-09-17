import React from "react";
import Destinations from "./Destinations";
import Testimonial from "./Testimonial";
import BudgetSection from "./BudgetSection";

const MainSection = () => (
  <main className="bg-white text-center py-3 mt-5">
    <section className="text-center">
      <h3 className="mb-4 fs-3">Choose Your</h3>
      <h1 className="fw-bold mb-4 display-4">Choose Your Perfect Holiday</h1>
      <p className="text-muted fs-5">
        Take vacations, go as many places as you can. You can always make money,
        <br />
        you can’t always make memories.
      </p>
    </section>
    <Destinations/>
    <BudgetSection/>
    <Testimonial/>
  </main>
);

export default MainSection;
