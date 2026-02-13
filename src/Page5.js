import './App.css';
import { Link } from 'react-router-dom';

export default function Page5() {
  return (
    <div className="page">
      <h1>Amor joven</h1>
      <img className="page-img" src="img/sex_hair_in_mirror.jpeg" alt="us in the mirror in coyo"></img>
      <br></br>
      <div className="page-text">
        
      </div>
      <br></br>
      <div className="arrow-buttons">
        <Link to="/page4">
          <button className="arrow-button">
            <img src="img/left-arrow.png" alt="left arrow" width="100px"></img>
          </button>
        </Link>
        <Link to="/page6">
          <button className="arrow-button">
            <img src="img/right-arrow.png" alt="right arrow" width="100px"></img>
          </button>
        </Link>
      </div>
    </div>
  );
}
