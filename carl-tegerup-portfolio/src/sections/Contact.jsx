import "../styles/Contact.css";
// Importera bilderna från assets-mappen
import linkedinLogo from "../assets/linked in logo.png";
import githubLogo from "../assets/github logo.jpg";

function Contact() {
  return (
    <section id="kontakt">
      <h2>Kontakta mig</h2>
      <p>
        Om du har frågor eller är intresserad av att höra mer från mig, tveka
        inte att skicka ett meddelande!
      </p>

      <div className="contact-links">
        <a href="mailto:calletegerup40@gmail.com" className="contact-email">
          <span className="email-icon">📧</span>
          <span className="email-text">calletegerup40@gmail.com</span>
        </a>

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
