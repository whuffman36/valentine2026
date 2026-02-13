import './App.css';
import { Link } from 'react-router-dom';

export default function Page12() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
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
        Cumpliste 21!! 🎂
        <br></br>
        Fuimos a tu lugar favorito de pasta, donde el alfredo y el tiramisu estuvieron riquísimosss 🤤
        <br></br>
        (Tuve que ayudarte con tu plato como siempre)
        <br></br>
        Ese día conocí a tu familia, y ahora soy parte de ella 🥰
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
      <br></br>
      <br></br>
      <Link to="/table-of-contents">
        <button className="generic-button">Tabla de Contenidos</button>
      </Link>
      <br></br>
    </div>
  );
}
