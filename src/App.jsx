import "./App.css";
import AboutMe from "./components/AboutMe";
import { Contact } from "./components/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="m-2">
      <Navbar />
      <div>
        <HeroSection />
      </div>
      <div id="aboutme">
        <AboutMe className="mb-2" />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
