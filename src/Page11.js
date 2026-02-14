import './App.css';
import { Link } from 'react-router-dom';

export default function Page11() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  return (
    <div className="page">
      <h1>Matcha Picante</h1>
      <img className="page-img" src="img/spicy_matcha.png" alt="carla drinking matcha"></img>
      <br></br>
      <div className="page-text">
        Fuimos por matcha y pudding, y por alguna razón tu matcha estuvo...picante? 🤔
        <br></br>
        No sé cómo, ni por qué, pero casi moriste ese día.
        <br></br>
        Gracias a dios aún sigues viva 🙏
      </div>
      <br></br>
      <div className="arrow-buttons">
        <Link to="/page10">
          <button className="arrow-button">
            <img src="img/left-arrow.png" alt="left arrow" width="100px"></img>
          </button>
        </Link>
        <Link to="/page12">
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
