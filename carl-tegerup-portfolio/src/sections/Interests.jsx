import "../styles/Interests.css";

function Interests() {
  const interests = [
    {
      title: "Sport",
      description:
        "Jag är en aktiv person som alltid älskat att både titta och utöva sport, favoriten är Ishockey. Spelat från jag var 6 år gammal och har spelat i Örebros Universitetslag allra senast.",
    },
    {
      title: "Musik",
      description:
        "Musik har alltid varit en stor del av mitt liv och är den absolut viktigaste formen av konstnärlighet för mig. Jag lyssnar på allt från David Bowie till The Smiths och Avicii. Har även spelat som trummis i ett band tills jag tog studenten år 2020.",
    },
    {
      title: "Datorspel",
      description:
        "Datorspel har alltid varit en stor del av mitt liv vid sidan av sport och musik. Det är något jag håller på med fortfarande och ser inte mig själv sluta än på ett tag.",
    },
    {
      title: "Utveckling",
      description:
        "Jag har alltid varit intresserad av att skapa saker och ser mig själv som en kreativ person. Har alltid byggt mina egna datorer och suttit framför datorn vilket jag tror är anledningen till att det känns så naturligt för mig att arbeta framför en skärm idag.",
    },
  ];

  return (
    <section id="intressen">
      <h2>Mina Intressen</h2>
      <div className="interests-grid">
        {interests.map((interest, index) => (
          <div key={index} className="interest-card">
            <h3>{interest.title}</h3>
            <p>{interest.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Interests;
