import './App.css';
import { Link } from 'react-router-dom';

export default function WrongAnswer() {
  return (
    <div className="page">
      Hmmm...sí no es suficiente...
      <br></br>
      Tienes dudas o qué?
      <br></br>
      <Link to="/">
        <button className='generic-button'>
          Intentalo de nuevo
        </button>
      </Link>
    </div>
  );
}