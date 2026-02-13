import './App.css';
import { Link } from 'react-router-dom';

export default function Page12() {
  return (
    <div className="page">
      <h1>Feliz Cumpleaños!</h1>
      <div className="image-row">
        <div className="image_col">
          <img src="img/birthday_smiles.jpg" alt="carla happy on her birthday"></img>
        </div>
        <div className="image_col">
          <img src="img/carla_confronts_pasta.jpg" alt="carla confronts pasta"></img>
        </div>
        <div className="image_col">
          <img src="img/cake.jpeg" alt="birthday cake!"></img>
        </div>
      </div>
      <br></br>
      <div className="page-text">
        
      </div>
      <br></br>
      <div className="arrow-buttons">
        <Link to="/page11">
          <button className="arrow-button">
            <img src="img/left-arrow.png" alt="left arrow" width="100px"></img>
          </button>
        </Link>
        <Link to="/page13">
          <button className="arrow-button">
            <img src="img/right-arrow.png" alt="right arrow" width="100px"></img>
          </button>
        </Link>
      </div>
    </div>
  );
}
