import './App.css';
import { Link } from 'react-router-dom';

export default function Page16() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  return (
    <div className="page">
      <h1>Hasta Se Unió Lessy...</h1>
      <div className="image-row">
        <div className="image_col">
          <img src="img/shooting_lessy.jpg" alt="taking a picture of lessy"></img>
        </div>
        <div className="image_col">
          <img src="img/loca_lessy.jpg" alt="lessy powering up"></img>
        </div>
        <div className="image_col">
          <img src="img/happy_family.jpeg" alt="us with lessy"></img>
        </div>
      </div>
      <br></br>
      <div className="page-text">
        La verdadera estrella ese día fue Lessy, y nos enseñó qué significa ser modelo
      </div>
      <br></br>
      <div className="arrow-buttons">
        <Link to="/page15">
          <button className="arrow-button">
            <img src="img/left-arrow.png" alt="left arrow" width="100px"></img>
          </button>
        </Link>
        <Link to="/page17">
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
