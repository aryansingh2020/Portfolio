import Navbar from './Navbar.js'
import {useState} from 'react'
import Home from '../sections/Home.js'
import Skills from '../sections/Skills.js'
import Contact from '../sections/Contact.js'
import Projects from '../sections/Projects.js'
import background from '../assets/background.jpg'

function App() {
  const[activeSection,setActiveSection]=useState("home")
  return (
    // frontend\src\assets\background.jpg
    <div className="App bg-black bg-cover bg-center min-w-screen min-h-screen"  
    style={{ backgroundImage: `url(${background})`}}>

      <Navbar setActiveSection={setActiveSection}/>
      {activeSection==="home" && <Home/> }
      {activeSection==="skills" && <Skills/>}
      {activeSection==="projects" && <Projects/>}
      {activeSection==="contact" && <Contact/>}
    </div>
  );
}

export default App;
