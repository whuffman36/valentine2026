import './App.css';
import { Link } from 'react-router-dom';

export default function Page10() {
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
    </div>
  );
}
