import './App.css';
import { Link } from 'react-router-dom';

export default function Page7() {
  return (
    <div className="page">
      <h1>Mi pinguino salvage</h1>
      <img className="page-img" src="img/carla_with_penguin.jpg" alt="carla with penguin"></img>
      <br></br>
      <div className="page-text">
        
      </div>
      <br></br>
      <div className="arrow-buttons">
        <Link to="/page6">
          <button className="arrow-button">
            <img src="img/left-arrow.png" alt="left arrow" width="100px"></img>
          </button>
        </Link>
        <Link to="/page8">
          <button className="arrow-button">
            <img src="img/right-arrow.png" alt="right arrow" width="100px"></img>
          </button>
        </Link>
      </div>
    </div>
  );
}
