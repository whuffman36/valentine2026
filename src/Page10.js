import './App.css';
import { Link } from 'react-router-dom';

export default function Page10() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  return (
    <div className="page">
      <h1>Halloween</h1>
      <div className="image-row">
        <div className="image_col">
          <img src="img/blurry_halloween.jpg" alt="us on halloween"></img>
        </div>
        <div className="image_col">
          <img src="img/mirror_halloween.jpeg" alt="us with my sister on halloween"></img>
        </div>
      </div>
      <br></br>
      <div className="page-text">
        Nos invitaste a una fiesta de Halloween a mi hermana y yo 🎃
        <br></br>
        Mi hermana es tan vieja que no sabía tomar una foto bien pero igual salimos guapos 😉
        <br></br>
        Te divertiste mucho esa noche, hasta measte en tus botas 😳
        <br></br>
        (y te salvé la vida)
      </div>
      <br></br>
      <div className="arrow-buttons">
        <Link to="/page9">
          <button className="arrow-button">
            <img src="img/left-arrow.png" alt="left arrow" width="100px"></img>
          </button>
        </Link>
        <Link to="/page11">
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
