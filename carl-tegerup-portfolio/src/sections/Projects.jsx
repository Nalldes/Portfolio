import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Men in Black",
      description:
        "Ett projekt där jag och mina gruppmedlemmar arbetade mot lärarnas kravlista på systemet. Vi programmerade i Java och använde oss av Git för versionshantering samt en MySQL-databas.",
    },
    {
      id: 2,
      title: "Hattmakarna",
      description:
        "Ett system för en hattmakare där fokuset låg på att arbeta inom Scrums ramverk. Kravlistan på systemet utökades i takt med projektets gång. Vi utvecklade med Java med JForms och även här implementerades en MySQL-databas samt Git för versionshantering.",
    },
    {
      id: 3,
      title: "Dammsjön Vassklippare",
      description:
        "Ett projekt med fokus på att lära oss grunderna i webbutveckling med html och css där vi skapade en hemsida för en fiktiv vassklipparåterförsäljare. Vi programmerade med hjälp av Java även här och använde Git för versionshantering.",
    },
    {
      id: 4,
      title: "Podcast-hanterare",
      description:
        "Ett projekt där vi utvecklade en bibliotekapplikation som hanterar podcasts. Vi arbetade exclusivt i C# och använde Git för versionshantering.",
    },
    {
      id: 5,
      title: "CV-hanterare",
      description:
        "Utvecklade en komplett webbapplikation i C#, ASP.NET, och Entity Framework. Koden är strukturerad med en flerlagersarkitektur.",
    },
    {
      id: 6,
      title: "HealthStrive",
      description:
        "Mitt slutprojekt som jag gjorde i samband med min examen på Örebro Universitet. Arbetade tillsammans med två goda vänner och vi lyckades skapa en fungerande webbplattform för att spåra kost, ge tips om träning och dagliga hälsomål. Vi utvecklade frontend i JavaScript/React, HTML, CSS. Backend med hjälp av Node.js och implementerade en SQL-databas i molnet genom Azure.",
    },
  ];

  return (
    <section id="projekt">
      <h2>Mina Projekt</h2>
      <p className="projects-intro">
        De projekt jag har skapat och arbetat med.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
