import './App.css';
import { Link } from 'react-router-dom';

export default function Page6() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  return (
    <div className="page">
      <h1>Cita de Acuario</h1>
      <div className="image-row">
        <div className="image_col">
          <img src="img/aquarium_cuddle.jpg" alt="cuddling in aquarium"></img>
        </div>
        <div className="image_col">
          <img src="img/aquarium_kiss.jpg" alt="kissing in aquarium"></img>
        </div>
      </div>
      <br></br>
      <div className="page-text">
        Fuimos al acuario juntos, despues de comer el peor mango del mundo 🤮
        <br></br>
        Estabamos tan enamorados, tomando fotos cada rato en cada exhibición.
        <br></br>
        Estás con un piscis, obvio te voy a llevar a un acuario 🐟
      </div>
      <br></br>
      <div className="arrow-buttons">
        <Link to="/page5">
          <button className="arrow-button">
            <img src="img/left-arrow.png" alt="left arrow" width="100px"></img>
          </button>
        </Link>
        <Link to="/page7">
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
