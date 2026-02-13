import './App.css';
import { Link } from 'react-router-dom';

export default function Page2() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  return (
    <div className="page">
      <h1>Te Ves Biennnnnn</h1>
      <img className="page-img" src="img/yale_sweater.jpeg" alt="carla with the yale sweater"></img>
      <br></br>
      <div className="page-text">
        Había salido con mis amigos del hostal cuando me mandaste esta foto.
        <br></br>
        Te viste taaan bien, me enamoré de ti esa noche 😍
      </div>
      <br></br>
      <div className="arrow-buttons">
        <Link to="/page1">
          <button className="arrow-button">
            <img src="img/left-arrow.png" alt="left arrow" width="100px"></img>
          </button>
        </Link>
        <Link to="/page3">
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
