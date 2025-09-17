import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainSection from "./components/mainsection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <MainSection />
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
