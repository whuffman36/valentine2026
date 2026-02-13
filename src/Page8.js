import './App.css';
import { Link } from 'react-router-dom';

export default function Page8() {
  return (
    <div className="page">
      <h1>Pensaste que olvidé esta?</h1>
      <img className="page-img" src="img/aquarium_surf.jpeg" alt="surfing in the aquarium"></img>
      <br></br>
      <div className="page-text">
        
      </div>
      <br></br>
      <div className="arrow-buttons">
        <Link to="/page7">
          <button className="arrow-button">
            <img src="img/left-arrow.png" alt="left arrow" width="100px"></img>
          </button>
        </Link>
        <Link to="/page9">
          <button className="arrow-button">
            <img src="img/right-arrow.png" alt="right arrow" width="100px"></img>
          </button>
        </Link>
      </div>
    </div>
  );
}
