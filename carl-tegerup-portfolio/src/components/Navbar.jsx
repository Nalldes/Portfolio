import { useState } from "react";
import "../styles/Navbar.css";

function Navbar({ toggleTheme, theme }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <a href="#" onClick={closeMenu}>
        <h1>Carl Tegerup</h1>
      </a>

      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
        <li>
          <a href="#om-mig" onClick={closeMenu}>
            Om mig
          </a>
        </li>
        <li>
          <a href="#intressen" onClick={closeMenu}>
            Intressen
          </a>
        </li>
        <li>
          <a href="#erfarenheter" onClick={closeMenu}>
            Erfarenheter
          </a>
        </li>
        <li>
          <a href="#tech-stack" onClick={closeMenu}>
            Tech Stack
          </a>
        </li>
        <li>
          <a href="#projekt" onClick={closeMenu}>
            Projekt
          </a>
        </li>
        <li>
          <a href="#kontakt" onClick={closeMenu}>
            Kontakt
          </a>
        </li>
        <li>
          <a
            href="/Carl_Tegerup_CV.pdf"
            download
            className="cv-button"
            onClick={closeMenu}
          >
            Ladda ner CV
          </a>
        </li>
      </ul>

      <a href="/Carl_Tegerup_CV.pdf" download className="cv-button">
        Ladda ner CV
      </a>

      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Byt tema"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}

export default Navbar;
