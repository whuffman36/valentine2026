import './App.css';
import { Link } from 'react-router-dom';

export default function Page7() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  return (
    <div className="page">
      <h1>Mi Pingüino Salvage</h1>
      <img className="page-img" src="img/carla_with_penguin.png" alt="carla with penguin"></img>
      <br></br>
      <div className="page-text">
        Aunque tengas el tamaño de un pingüino, te quiero igaul ❤️
        <br></br>
        Siempre serás mi pingüino salvaje 😉
      </div>
      <br></br>
      <div className="arrow-buttons">
        <Link to="/page6">
          <button className="arrow-button">
            <img src="img/left-arrow.png" alt="left arrow" width="100px"></img>
          </button>
        </Link>
        <Link to="/page8">
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
