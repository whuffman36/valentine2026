import './App.css';
import { Link } from 'react-router-dom';

export default function Page19() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  return (
    <div className="page">
      <h1>Ahogado en Amor</h1>
      <img className="page-img" src="img/face_kisses.png" alt="face kisses"></img>
      <br></br>
      <div className="page-text">
        Me pintaste con tu amor para que todos lo vean 😍
        <br></br>
        Me causó acne bien feo pero valió la pena 😎
        <br></br>
        Lo presumí con orgullo
      </div>
      <br></br>
      <div className="arrow-buttons">
        <Link to="/page18">
          <button className="arrow-button">
            <img src="img/left-arrow.png" alt="left arrow" width="100px"></img>
          </button>
        </Link>
        <Link to="/table-of-contents">
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
