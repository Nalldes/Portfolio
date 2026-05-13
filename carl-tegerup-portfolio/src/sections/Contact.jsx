import { useState } from "react";
import "../styles/Contact.css";
// Importera bilderna från assets-mappen
import linkedinLogo from "../assets/linked in logo.png";
import githubLogo from "../assets/github logo.jpg";

function Contact() {
  // useState för att hålla koll på om användaren har klickat på kopiera
  const [copied, setCopied] = useState(false);
  const email = "calletegerup40@gmail.com";

  // Funktionen som körs när man klickar på rutan
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email); // Kopierar till urklipp
    setCopied(true); // Ändrar status till kopierad

    // Återställer tillbaka till din mailadress efter 2,5 sekunder
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  return (
    <section id="kontakt">
      <h2>Kontakta mig</h2>
      <p>
        Om du har frågor eller är intresserad av att höra mer från mig, tveka
        inte att skicka ett meddelande!
      </p>

      <div className="contact-links">
        {/* Bytte <a> mot en <div>, la till onClick och style för muspekaren */}
        <div
          className="contact-email"
          onClick={handleCopyEmail}
          title="Klicka för att kopiera"
        >
          <span className="email-icon">{copied ? "✅" : "📧"}</span>
          <span className="email-text">
            {copied ? "Kopierad till urklipp!" : email}
          </span>
        </div>

        <div className="social-buttons">
          <a
            href="https://www.linkedin.com/in/carl-tegerup-748370281/"
            target="_blank"
            rel="noreferrer"
            className="linkedin-link"
          >
            <img
              src={linkedinLogo}
              alt="LinkedIn Logo"
              className="linkedin-img"
            />
          </a>
          <a
            href="https://github.com/Nalldes"
            target="_blank"
            rel="noreferrer"
            className="github-link"
          >
            <img src={githubLogo} alt="GitHub Logo" className="github-img" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
