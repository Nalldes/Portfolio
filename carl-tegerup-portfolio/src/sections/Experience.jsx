import "../styles/Experience.css";

function Experience() {
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
      role: "Tekniskt Basår (60 hp)",
      company: "Linköpings Universitet",
      period: "2020 - 2021",
      description:
        "Basår med kunskaper inom ämnen som Kemi, Fysik och Matematik",
      tags: ["Matematik 4", "Fysik 2", "Kemi 1"],
    },
    {
      id: 4,
      role: "Samhällsvetenskapliga programmet - inriktning beteende",
      company: "Nyköpings Enskilda Gymnasium",
      period: "2016 - 2020",
    },
    {
      id: 5,
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
