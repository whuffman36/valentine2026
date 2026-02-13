import './App.css';
import { Link } from 'react-router-dom';

export default function Page9() {
  return (
    <div className="page">
      <h1>Xochimilco</h1>
      <div className="image-row">
        <div className="image_col">
          <img src="img/carla_holds_snake.jpg" alt="carla holding a snake"></img>
        </div>
        <div className="image_col">
          <img src="img/xochimilco_smiles.jpg" alt="carla smiling in xochimilco"></img>
        </div>
      </div>
      <br></br>
      <div className="page-text">
        
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
    </div>
  );
}
