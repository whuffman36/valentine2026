import './App.css';
import { Link } from 'react-router-dom';

export default function TableOfContents() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  return (
    <div className="page">
      <h1>Feliz Dia de San Valentín!</h1>
      <br></br>
      <div className="page-text">
        Te quiero mucho Carla ❤️ gracias por darme estos meses tan hermosos!
        <br></br>
        
      </div>
      <br></br>
      <div className="page-links">
        <Link to="/page1">
          ❤️ Besos Bajo la Lluvia ❤️
        </Link>
        <br></br>
        <Link to="/page2">
          ❤️ Te Ves Biennnnnn ❤️
        </Link>
        <br></br>
        <Link to="/page3">
          ❤️ Tú Eres el Arte Más Bello ❤️
        </Link>
        <br></br>
        <Link to="/page4">
          ❤️ Photoshoot en Chapultepec ❤️
        </Link>
        <br></br>
        <Link to="/page5">
          ❤️ Amor Joven ❤️
        </Link>
        <br></br>
        <Link to="/page6">
          ❤️ Cita de Acuario ❤️
        </Link>
        <br></br>
        <Link to="/page7">
          ❤️ Mi Pingüino Salvage ❤️
        </Link>
        <br></br>
        <Link to="/page8">
          ❤️ Pensaste Que Olvidé Esta? ❤️
        </Link>
        <br></br>
        <Link to="/page9">
          ❤️ Xochimilco ❤️
        </Link>
        <br></br>
        <Link to="/page10">
          ❤️ Halloween ❤️
        </Link>
        <br></br>
        <Link to="/page11">
          ❤️ Matcha Picante ❤️
        </Link>
        <br></br>
        <Link to="/page12">
          ❤️ Feliz Cumpleaños! ❤️
        </Link>
        <br></br>
        <Link to="/page13">
          ❤️ Despedida Agridulce ❤️
        </Link>
        <br></br>
        <Link to="/page14">
          ❤️ Amor a Larga Distancia ❤️
        </Link>
        <br></br>
        <Link to="/page15">
          ❤️ Photoshoot del Año Nuevo ❤️
        </Link>
        <br></br>
        <Link to="/page16">
          ❤️ Hasta Se Unió Lessy... ❤️
        </Link>
        <br></br>
        <Link to="/page17">
          ❤️ Tenemos Dos Lados ❤️
        </Link>
        <br></br>
        <Link to="/page18">
          ❤️ Empezando el Año Nuevo con Estilo ❤️
        </Link>
        <br></br>
        <Link to="/page19">
          ❤️ Ahogado en Amor ❤️
        </Link>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}
