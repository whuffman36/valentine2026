import './App.css';
import { Link } from 'react-router-dom';

export default function Page11() {
  return (
    <div className="page">
      <h1>Matcha Picante</h1>
      <img className="page-img" src="img/spicy_matcha.jpg" alt="carla drinking matcha"></img>
      <br></br>
      <div className="page-text">
        
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
    </div>
  );
}
