
import main from "../images/main.png";
import "../styles-components/Hero.css";

function Hero() {
  return (
    <div className="hero-main-container">
      <div className="hero-left-container">
        <h1>Somos su mejor opcion para creacion y manetenimiento de paginas</h1>
        <button className="hero-button">Comenzar</button>
      </div>
      <div className="hero-right-container">
        <img className="hero-img" src={main} alt="portada"/>
      </div>
    </div>
  );
}

export default Hero;
