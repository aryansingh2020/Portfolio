import Navbar from './Navbar.js'
import { useState } from 'react'
import Home from '../sections/Home.js'
import Skills from '../sections/Skills.js'
import Contact from '../sections/Contact.js'
import Projects from '../sections/Projects.js'
import background from '../assets/background.jpg'

function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="App relative min-h-screen w-full">
      {/* Background Image */}
      <img
        src={background}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Content */}
      <Navbar setActiveSection={setActiveSection} />
      {activeSection === "home" && <Home />}
      {activeSection === "skills" && <Skills />}
      {activeSection === "projects" && <Projects />}
      {activeSection === "contact" && <Contact />}
    </div>
  );
}

export default App;
