import "./App.css";
import AboutMe from "./components/AboutMe";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="m-2">
      <Navbar />
      <div id="contact">
        <HeroSection />
      </div>
      <div id="about">
        <AboutMe className="mb-2" />
      </div>
      <div id="projects" className="py-24">
        <Projects />
      </div>
    </div>
  );
}

export default App;
