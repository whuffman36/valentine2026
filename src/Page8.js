import './App.css';
import { Link } from 'react-router-dom';

export default function Page8() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  return (
    <div className="page">
      <h1>Pensaste Que Olvidé Esta?</h1>
      <img className="page-img" src="img/aquarium_surf.png" alt="surfing in the aquarium"></img>
      <br></br>
      <div className="page-text">
        JAJA jamás olvidaré esta foto, aprendimos a surfear ese día 🏄‍♂️
        <br></br>
        Está bien amor puedes relajarte, no es real 🤣
      </div>
      <br></br>
      <div className="arrow-buttons">
        <Link to="/page7">
          <button className="arrow-button">
            <img src="img/left-arrow.png" alt="left arrow" width="100px"></img>
          </button>
        </Link>
        <Link to="/page9">
          <button className="arrow-button">
            <img src="img/right-arrow.png" alt="right arrow" width="100px"></img>
          </button>
        </Link>
      </div>
      <br></br>
      <br></br>
      <Link to="/table-of-contents">
        <button className="generic-button">Tabla de Contenidos</button>
      </Link>
      <br></br>
    </div>
  );
}
