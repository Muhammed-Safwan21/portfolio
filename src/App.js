
import './App.css';
import Footer from './Components/Footer';
import Navbar from "./Components/Navbar";
import Home from './Components/Home';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import Projects from './Components/Projects';

function App() {
  return (

    <div className='app'>
      <Navbar />
      <Home id="home" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Contact id="contact" />
      <Footer />
    </div>
      

      
      

  )   
}

export default App;
