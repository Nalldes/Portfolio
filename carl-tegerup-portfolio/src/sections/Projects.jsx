import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Men in Black",
      description:
        "Ett projekt där jag och mina gruppmedlemmar fick skapa ett affärssystem för en fiktiv agent-grupp, vi arbetade genomgående mot lärarnas kravlista på systemet. Vi programmerade i Java och använde oss av GitHub för versionshantering samt en MySQL-databas.",
      tags: [
        {
          name: "Java",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "GitHub",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
      ],
    },
    {
      id: 2,
      title: "Hattmakarna",
      description:
        "Ett system för en hattmakare där fokuset låg på att arbeta inom Scrums ramverk. Kravlistan på systemet utökades i takt med projektets gång. Vi utvecklade med Java med JForms och även här implementerades en MySQL-databas samt GitHub för versionshantering.",
      tags: [
        {
          name: "Java",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "GitHub",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
      ],
    },
    {
      id: 3,
      title: "Dammsjön Vassklippare",
      description:
        "Ett projekt med fokus på att lära oss grunderna i webbutveckling med html och css där vi skapade en hemsida för en fiktiv vassklipparåterförsäljare. Vi programmerade med hjälp av Java även här och använde GitHub för versionshantering.",
      tags: [
        {
          name: "HTML",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "Java",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
          name: "GitHub",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
      ],
    },
    {
      id: 4,
      title: "Podcast-hanterare",
      description:
        "Ett projekt där vi utvecklade en bibliotekapplikation som hanterar podcasts. Vi arbetade exclusivt i C# och använde GitHub för versionshantering.",
      tags: [
        {
          name: "C#",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        },
        {
          name: "GitHub",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
          name: "XML",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xml/xml-original.svg",
        },
      ],
    },
    {
      id: 5,
      title: "CV-hanterare",
      description:
        "Utvecklade en komplett webbapplikation i C#, ASP.NET, och Entity Framework. Koden är strukturerad med en flerlagersarkitektur.",
      tags: [
        {
          name: "C#",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        },
        {
          name: "ASP.NET",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
        },
        {
          name: "GitHub",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
      ],
    },
    {
      id: 6,
      title: "HealthStrive",
      description:
        "Mitt slutprojekt som jag gjorde i samband med min examen på Örebro Universitet. Arbetade tillsammans med två goda vänner och vi lyckades skapa en fungerande webbplattform för att spåra kost, ge tips om träning och dagliga hälsomål.",
      tags: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Azure",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
        },
        {
          name: "GitHub",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
          name: "HTML",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "C#",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        },
      ],
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
            <hr className="project-divider" />
            <div className="project-tags">
              {project.tags.map((tag) => (
                <div key={tag.name} className="project-tag">
                  <img src={tag.icon} alt={tag.name} />
                  <span>{tag.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
