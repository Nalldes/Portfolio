import { useState, useEffect } from "react";
import "../styles/Hero.css";
import profileImg from "/calle cv bild.jpg";

function Hero() {
  const nameToType = "Carl.";
  const [currentName, setCurrentName] = useState("");
  const typingSpeed = 200;
  const startDelay = 500;

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      let currentIndex = 0;

      const typingInterval = setInterval(() => {
        if (currentIndex < nameToType.length) {
          setCurrentName(nameToType.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, typingSpeed);

      return () => clearInterval(typingInterval);
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, []);

  return (
    <section id="om-mig">
      <div className="hero-avatar">
        <img src={profileImg} alt="Carl Tegerup" />
      </div>
      <h1>
        Hej, mitt namn är{" "}
        <span className="typed-name">{currentName || "\u200B"}</span>
      </h1>
      <p>
        Jag är en nyexaminerad student som fått upp intresset för programmering
        tack vare mina studier på Örebro Universitets Systemvetenskapliga
        kandidatprogram. Jag har sedan en väldigt ung ålder alltid varit
        fascinerad av datorer och teknik, men det var under min tid på
        universitetet som jag verkligen började utforska programmering. Jag har
        funnit en passion för att skapa saker och jobba tillsammans med andra i
        den processen.
      </p>
    </section>
  );
}

export default Hero;
