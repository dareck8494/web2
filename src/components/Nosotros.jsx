
import dev from "../images/deve.png"
import azure from "../images/azure.png";
import google from "../images/google.png";
import AWS from "../images/aws.png";
import "../styles-components/Nosotros.css";

function Nosotros() {
  return (
    <div className="nosotros-main-container">
      <img clasname= "nosotros-img" src={dev} alt="dev"/>
      <div className="nosotros-text-container">
        <h1>Nuestros socios</h1>
        <p>
          Contamos con alianzas comerciales para todo tipo de empresas o
          negocios.
        </p>
        <p>
          Nuestros clientes son top en sus especialidades abarcando el aréa de
          USA, México y CentroAmérica
        </p>
        <h2>Clientes que confían en Nosotros</h2>
        <div className="logos-socios">
          <img className="logo-socio" src={AWS} alt="amazon"/>
          <img className="logo-socio" src={azure} alt="Azure"/>
          <img className="logo-socio" src={google} alt="google"/>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;
