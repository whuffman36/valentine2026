import './App.css';
import { Link } from 'react-router-dom';

export default function Page5() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  return (
    <div className="page">
      <h1>Amor Joven</h1>
      <img className="page-img" src="img/sex_hair_in_mirror.jpeg" alt="us in the mirror in coyo"></img>
      <br></br>
      <div className="page-text">
        Me estaba quedando en Coyoacán, y siempre encontrábamos maneras de divertirnos.
        <br></br>
        10 Things I Hate About You, sushi, las hamburguesasss 😋
        <br></br>
        Me contaste sobre tu familia aquí, y desde ese día he querido conocerte más y más.
        <br></br>
        Me dijiste suave y estaba taaan confundido 😉
      </div>
      <br></br>
      <div className="arrow-buttons">
        <Link to="/page4">
          <button className="arrow-button">
            <img src="img/left-arrow.png" alt="left arrow" width="100px"></img>
          </button>
        </Link>
        <Link to="/page6">
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
