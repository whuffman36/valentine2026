import './App.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="Home">
      <div className="Home-body">
        <br></br>
        <div className="text-emoji">
          <h2 className="red-heart-emoji">😍</h2>
          <h1>Carla Montserrat</h1>
          <h2 className="red-heart-emoji">😍</h2>
        </div>
        <br></br>

        <div className="photo-emoji">
          <h2 className="emoji">✨</h2>
          <img src="img/carla.jpeg" alt="carla"></img>
          <h2 className="emoji">✨</h2>
        </div>
        <br></br>

        <div className="text-emoji">
          <h2 className="red-heart-emoji">❤️</h2>
          <h1>Mi amor</h1>
          <h2 className="red-heart-emoji">❤️</h2>
        </div>
        <br></br>

        <div className="photo-emoji">
          <h2 className="emoji">✨</h2>
          <img src="img/otters_hugging.png" alt="otters hugging"></img>
          <h2 className="emoji">✨</h2>
        </div>
        <br></br>

        <div className="text-emoji">
          <h2 className="red-heart-emoji">👩🏽‍❤️‍💋‍👨🏻</h2>
          <h1>Mi vida</h1>
          <h2 className="red-heart-emoji">👩🏽‍❤️‍💋‍👨🏻</h2>
        </div>
        <br></br>

        <div className="photo-emoji">
          <h2 className="emoji">✨</h2>
          <img src="img/kittens_kissing.jpg" alt="kittens kissing"></img>
          <h2 className="emoji">✨</h2>
        </div>
        <br></br>

        <div className="text-emoji">
          <h2 className="red-heart-emoji">🐰</h2>
          <h1>Mi bunny</h1>
          <h2 className="red-heart-emoji">🐰</h2>
        </div>
        <br></br>

        <div className="photo-emoji">
          <h2 className="emoji">✨</h2>
          <img src="img/bunny_smiling.gif" alt="bunny smiling"></img>
          <h2 className="emoji">✨</h2>
        </div>
        <br></br>

        <div className="text-emoji">
          <h2 className="red-heart-emoji">👸🏽</h2>
          <h1>Mi princesa preciosa</h1>
          <h2 className="red-heart-emoji">👸🏽</h2>
        </div>
        <br></br>

        <div className="photo-emoji">
          <h2 className="emoji">✨</h2>
          <img src="img/princess_kitten.jpeg" alt="princess kitten"></img>
          <h2 className="emoji">✨</h2>
        </div>
        <br></br>

        <div className="text-emoji">
          <h2 className="red-heart-emoji">💘</h2>
          <h1>Serás mi valentín?</h1>
          <h2 className="red-heart-emoji">💘</h2>
        </div>
        <div className="photo-emoji">
          <h2 className="emoji">✨</h2>
          <img src="img/kitten_holding_flowers.jpg" alt="kitten holding flowers" height="300px"></img>
          <h2 className="emoji">✨</h2>
        </div>
        <br></br>

        <div className="button-container">
          <Link to="/wrong-answer">
            <button>Sí</button>
          </Link>
          <Link to="/page1">
            <button>Claro que sí</button>
          </Link>
        </div>
        <br></br>
      </div>
    </div>
  );
}
