import './App.css';
import { Link } from 'react-router-dom';

export default function Page18() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  return (
    <div className="page">
      <h1>Empezando el Año Nuevo con Estilo</h1>
      <img className="page-img" src="img/new_year_mirror.png" alt="us in the mirror on nye"></img>
      <br></br>
      <div className="page-text">
        Nos pusimos elegantes para la última cena de 2025.
        <br></br>
        Por dios, te veías divina esa noche 😍
        <br></br>
        Me sentía como el hombre más afortunado del mundo por tenerte
        <br></br>
        (y todavía me siento así, duh)
        <br></br>
        Celebramos el año nuevo juntos, y me enseñaste todos los costumbres mexicanos 🇲🇽
      </div>
      <br></br>
      <div className="arrow-buttons">
        <Link to="/page17">
          <button className="arrow-button">
            <img src="img/left-arrow.png" alt="left arrow" width="100px"></img>
          </button>
        </Link>
        <Link to="/page19">
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
