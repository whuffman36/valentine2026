import './App.css';
import { Link } from 'react-router-dom';

export default function Page15() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  return (
    <div className="page">
      <h1>Photoshoot del Año Nuevo</h1>
      <div className="image-row">
        <div className="image_col">
          <img src="img/photoception.png" alt="picture of us taking a picture"></img>
        </div>
        <div className="image_col">
          <img src="img/looking_at_camera.png" alt="us looking at the camera"></img>
        </div>
        <div className="image_col">
          <img src="img/locos.png" alt="us making funny faces"></img>
        </div>
        <div className="image_col">
          <img src="img/new_years_kiss.jpeg" alt="us kissing with heart"></img>
        </div>
      </div>
      <br></br>
      <div className="page-text">
        Fuimos de vacaciones juntos para el año nuevo, y hicimos un photoshoot con tu cámara.
        <br></br>
        Tuvimos que esconder de tu papá pero valió la pena 😘
        <br></br>
        Qué modelos somos 📸
      </div>
      <br></br>
      <div className="arrow-buttons">
        <Link to="/page14">
          <button className="arrow-button">
            <img src="img/left-arrow.png" alt="left arrow" width="100px"></img>
          </button>
        </Link>
        <Link to="/page16">
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
