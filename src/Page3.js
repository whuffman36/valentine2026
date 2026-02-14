import './App.css';
import { Link } from 'react-router-dom';

export default function Page3() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  return (
    <div className="page">
      <h1>Tú Eres el Arte Más Bello</h1>
      <div className="image-row">
        <div className="image_col">
          <img src="img/bellas_artes_smiles.jpeg" alt="us at palacio de bellas artes"></img>
        </div>
        <div className="image_col">
          <img src="img/bellas_artes_kiss.png" alt="us at palacio de bellas artes"></img>
        </div>
      </div>
      <br></br>
      <div className="page-text">
        Nuestra primera foto juntos!
        <br></br>
        Fuimos a Finca Don Porfirio para ver el palacio de bellas artes.
        <br></br>
        Me di cuenta en esa cita que quería un futuro contigo 😘
        <br></br>
        El palacio está lleno de arte pero ya tenía el arte más bello a mi lado 😉
      </div>
      <br></br>
      <div className="arrow-buttons">
        <Link to="/page2">
          <button className="arrow-button">
            <img src="img/left-arrow.png" alt="left arrow" width="100px"></img>
          </button>
        </Link>
        <Link to="/page4">
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
