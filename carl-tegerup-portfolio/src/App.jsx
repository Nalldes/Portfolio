import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Interests from "./sections/Interests";
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark",
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Hero />
      <Interests />
      <Experience />
      <TechStack />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
