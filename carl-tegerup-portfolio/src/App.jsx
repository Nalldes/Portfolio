import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Interests from "./sections/Interests";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Interests />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
