import './App.css';
import { Link } from 'react-router-dom';

export default function Page14() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  return (
    <div className="page">
      <h1>Amor a Larga Distancia</h1>
      <img className="page-img" src="img/japan_jersey.jpg" alt="Me in a japan jersey"></img>
      <br></br>
      <div className="page-text">
        Aunque estaba en el otro lado del planeta,
        <br></br>
        Siempre pensaba en ti, y siempre te extrañaba.
        <br></br>
        La próxima vez que vaya será contigo 🇯🇵
        <br></br>
        Regresé con kimonos para nosotros 😏
      </div>
      <br></br>
      <div className="arrow-buttons">
        <Link to="/page13">
          <button className="arrow-button">
            <img src="img/left-arrow.png" alt="left arrow" width="100px"></img>
          </button>
        </Link>
        <Link to="/page15">
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
