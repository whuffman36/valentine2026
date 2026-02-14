import './App.css';
import { Link } from 'react-router-dom';

export default function Page9() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  return (
    <div className="page">
      <h1>Xochimilco</h1>
      <div className="image-row">
        <div className="image_col">
          <img src="img/carla_holds_snake.png" alt="carla holding a snake"></img>
        </div>
        <div className="image_col">
          <img src="img/xochimilco_smiles.png" alt="carla smiling in xochimilco"></img>
        </div>
      </div>
      <br></br>
      <div className="page-text">
        Te invité a xochimilco y conociste a mi familia.
        <br></br>
        Se llevaron bien y ahora mi mamá está tomando clases de Español por ti 🇲🇽
        <br></br>
        Fuiste muy valiente y tocaste la serpiente! Aunque no creo que te gustara...
      </div>
      <br></br>
      <div className="arrow-buttons">
        <Link to="/page8">
          <button className="arrow-button">
            <img src="img/left-arrow.png" alt="left arrow" width="100px"></img>
          </button>
        </Link>
        <Link to="/page10">
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
