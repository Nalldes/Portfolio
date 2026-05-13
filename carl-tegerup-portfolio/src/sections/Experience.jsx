import "../styles/Experience.css";

function Experience() {
  // Här fyller du i dina utbildningar, jobb eller andra relevanta erfarenheter.
  // Kopiera bara ett objekt och klistra in under för att lägga till fler!
  const experiences = [
    {
      id: 1,
      role: "Kandidatprogram (180 hp), Systemvetenskap",
      company: "Örebro Universitet",
      period: "2023 - 2026",
      description:
        "Studier med fokus på systemutveckling, databaser, och interaktionsdesign. Stort fokus på problemlösning och att arbeta i agila team.",
      tags: [
        "Scrum",
        "Agil utveckling",
        "Systemutveckling",
        "Databaser",
        "Interaktionsdesign",
        "Webbutveckling",
      ],
    },
    {
      id: 2,
      role: "Grundkurs (30 hp), Psykologi",
      company: "Örebro Universitet",
      period: "2025",
      description:
        "Studier med fokus på grunderna inom psykologi, inklusive kognitiv psykologi, socialpsykologi och utvecklingspsykologi. Förståelse för mänskligt beteende och hur det påverkar sociala interaktioner",
      tags: [
        "Kognitiv psykologi",
        "Socialpsykologi",
        "Utvecklingspsykologi",
        "Mänskligt beteende",
        "Sociala interaktioner",
      ],
    },
    {
      id: 3,
      role: "Tekniska Färdigheter & Verktyg",
      company: "Självlärd & Universitetsstudier",
      period: "Ständigt pågående",
      description:
        "Praktisk erfarenhet av Java, JavaScript, C#, Datamodellering, MySQL, SQL Server, React, HTML, CSS och GitHub. Har även en stark grundförståelse för UI/UX och hur man bygger användarvänliga gränssnitt.",
      tags: [
        "Java",
        "JavaScript",
        "C#",
        "Datamodellering",
        "MySQL",
        "SQL Server",
        "React.js",
        "HTML",
        "CSS",
        "GitHub",
        "UI/UX-design",
      ],
    },
  ];

  return (
    <section id="erfarenheter">
      <h2>Erfarenheter</h2>
      <p className="experience-intro">
        En översikt av min akademiska bakgrund och mina tekniska kunskaper.
      </p>

      <div className="experience-grid">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-card">
            <div className="experience-header">
              <h3>{exp.role}</h3>
              <span className="experience-period">{exp.period}</span>
            </div>
            <h4 className="experience-company">{exp.company}</h4>
            <p>{exp.description}</p>

            {exp.tags && (
              <div className="experience-tags">
                {exp.tags.map((tag) => (
                  <span key={tag} className="experience-tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
