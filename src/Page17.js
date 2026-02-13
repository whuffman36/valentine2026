import './App.css';
import { Link } from 'react-router-dom';

export default function Page17() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  return (
    <div className="page">
      <h1>Tenemos Dos Lados</h1>
      <div className="image-row">
        <div className="image_col">
          <img src="img/new_years_glasses.jpeg" alt="new years glasses"></img>
        </div>
        <div className="image_col">
          <img src="img/new_years_tongue.jpg" alt="new years tongue"></img>
        </div>
      </div>
      <br></br>
      <div className="page-text">
        Podemos ser cool 😎, y podemos ser locos 🤪
        <br></br>
        Pero siempre estamos en el mismo ritmo ❤️
        <br></br>
        Que 2026 esté lleno de nuestra amor y nuestras locuras 🥳
      </div>
      <br></br>
      <div className="arrow-buttons">
        <Link to="/page16">
          <button className="arrow-button">
            <img src="img/left-arrow.png" alt="left arrow" width="100px"></img>
          </button>
        </Link>
        <Link to="/page18">
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
