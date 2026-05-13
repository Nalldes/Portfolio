import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <h1 className="nav-title">Carl Tegerup</h1>
        <li>
          <a href="#om-mig">Om Mig</a>
        </li>
        <li>
          <a href="#intressen">Intressen</a>
        </li>
        <li>
          <a href="#erfarenheter">Erfarenheter</a>
        </li>
        <li>
          <a href="#projekt">Projekt</a>
        </li>
        <li>
          <a href="#kontakt">Kontakt</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
