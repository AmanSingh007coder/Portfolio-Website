import { ReactLenis } from 'lenis/react'
import Header from './Components/Header'
import Heroes from './Components/Heroes'
import About from './Components/About'
import Skills from './Components/Skills'
import Work from './Components/Work'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Education from './Components/Education'
import Certificates from './Components/Certificates'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Success from "./Components/Success"; 
import Hero from './Components/Heroes'

function App() {
  return (
    <ReactLenis root>
      <Router>
        <Routes>
         
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
                <Contact />
                <Footer />
              </>
            }
          />

        
          <Route path="/Success" element={<Success />} />
        </Routes>
      </Router>
    </ReactLenis>
  )
}

export default App;

