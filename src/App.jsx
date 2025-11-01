import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import LoadingSpinner from "./components/common/LoadingSpinner.jsx";
import ErrorBoundary from "./components/common/ErrorBoundary.jsx";
import DestinationDetails from "./components/features/Destinations/DestinationDetails.jsx";
import HeroSection from "./components/features/HeroSection/HeroSection.jsx";

const Header = lazy(() => import("./components/features/Header/Header.jsx"));
const Destinations = lazy(() =>
  import("./components/features/Destinations/Destinations.jsx")
);
const Services = lazy(() =>
  import("./components/features/Services/Services.jsx")
);
const Budget = lazy(() => import("./components/features/Budget/Budget.jsx"));
const Testimonial = lazy(() =>
  import("./components/features/Testimonial/Testimonial.jsx")
);

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <main className="flex-grow">
                    <section id="herosection">
                      <HeroSection />
                    </section>
                          <section id="destinations">
                      <Destinations />
                    </section>
                    <section id="services" className="py-5">
                      <Services />
                    </section>
                    <section id="budget" className="py-5">
                      <Budget />
                    </section>
                    <section id="testimonials" className="py-5">
                      <Testimonial />
                    </section>
                  </main>
                </>
              }
            />
            <Route path="/destination/:id" element={<DestinationDetails />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
      <Footer />
    </div>
  );
}
