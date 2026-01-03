import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import Header from "./Components/Header";
import Heroes from "./Components/Heroes";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Education from "./Components/Education";
import Certificates from "./Components/Certificates";
import Academics from "./Components/Academics";
import Success from "./Components/Success";
import ProjectDetails from "./Components/ProjectDetails";

function App() {
  return (
    <ReactLenis root>
      <Router>
        <Routes>
          {/* 🌍 Main Portfolio Page */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Heroes />
                <About />
                <Education />
                <Skills />
                <Work />
                <Certificates />
                <Academics />
                <Contact />
                <Footer />
              </>
            }
          />

          {/* 🧾 Project Details Page */}
          <Route path="/project/:id" element={<ProjectDetails />} />

          {/* ✅ Success Page (already existing) */}
          <Route path="/Success" element={<Success />} />
        </Routes>
      </Router>
    </ReactLenis>
  );
}

export default App;
