import './App.css';
import { Link } from 'react-router-dom';

export default function Page13() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  return (
    <div className="page">
      <h1>Despedida Agridulce</h1>
      <div className="image-row">
        <div className="image_col">
          <img src="img/favorite_pic.jpeg" alt="carla's favorite pic of me"></img>
        </div>
        <div className="image_col">
          <img src="img/elevator_mirror.jpeg" alt="us in the elevator mirror"></img>
        </div>
      </div>
      <br></br>
      <div className="page-text">
        Tuve que ir a Taiwan y Japón, y nos despedimos en un momento muy agridulce 😔
        <br></br>
        Pero creo que era más dulce 😉
      </div>
      <br></br>
      <div className="arrow-buttons">
        <Link to="/page12">
          <button className="arrow-button">
            <img src="img/left-arrow.png" alt="left arrow" width="100px"></img>
          </button>
        </Link>
        <Link to="/page14">
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
