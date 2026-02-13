import './App.css';
import { Link } from 'react-router-dom';

export default function Page6() {
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
    </div>
  );
}
