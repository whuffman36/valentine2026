import './App.css';
import { Link } from 'react-router-dom';

export default function Page4() {
  return (
    <div className="page">
      <h1>Photoshoot</h1>
      <div className="image-row">
        <div className="image_col">
          <img src="img/chapul_kiss_1.jpeg" alt="kissing in chapultepec"></img>
        </div>
        <div className="image_col">
          <img src="img/chapul_kiss_2.jpeg" alt="kissing in chapultepec"></img>
        </div>
      </div>
      <br></br>
      <div className="page-text">
        
      </div>
      <br></br>
      <div className="arrow-buttons">
        <Link to="/page3">
          <button className="arrow-button">
            <img src="img/left-arrow.png" alt="left arrow" width="100px"></img>
          </button>
        </Link>
        <Link to="/page5">
          <button className="arrow-button">
            <img src="img/right-arrow.png" alt="right arrow" width="100px"></img>
          </button>
        </Link>
      </div>
    </div>
  );
}
