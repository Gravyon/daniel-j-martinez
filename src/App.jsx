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
      <header>
        <Navbar />
      </header>
      <main>
        <section>
          <HeroSection />
        </section>
        <section id="aboutme">
          <AboutMe className="mb-2" />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
