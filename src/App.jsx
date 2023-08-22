import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import NavbarDark from "./components/NavbarDark";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <NavbarDark />
      <HeroSection />
      <h1 className="flex m-4 p-2">Projects</h1>
      <Projects />
    </>
  );
}

export default App;
