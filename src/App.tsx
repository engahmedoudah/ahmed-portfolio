import { useEffect } from "react";
import About from "./components/About";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import personal from "./data/personal.json";

function App() {
  useEffect(() => {
    document.title = `${personal.name} | ${personal.title}`;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", personal.summary);
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <SocialLinks />
      </main>
      <Footer />
    </div>
  );
}

export default App;
