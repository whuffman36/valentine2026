import './App.css';
import { Link } from 'react-router-dom';

export default function Page1() {
  return (
    <div className="page">
      <h1>Besos bajo la lluvia</h1>
      <img className="page-img" src="img/ponchos.jpeg" alt="us in ponchos (check whatsapp)"></img>
      <br></br>
      <div className="page-text">
        Nuestra segunda cita, fuimos a un partido de las chivas y llovió bien fuerte.
        <br></br>
        Te agarré y nos quedams un poco atras del grupo para besarnos bajo la lluvia, que romantico 😉
        <br></br>
        Ganaron las chivas...pero a qué costo?
      </div>
      <br></br>
      <div className="arrow-buttons">
        <Link to="/">
          <button className="arrow-button">
            <img src="img/left-arrow.png" alt="left arrow" width="100px"></img>
          </button>
        </Link>
        <Link to="/page2">
          <button className="arrow-button">
            <img src="img/right-arrow.png" alt="right arrow" width="100px"></img>
          </button>
        </Link>
      </div>
    </div>
  );
}
