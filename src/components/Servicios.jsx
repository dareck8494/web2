import "../styles-components/Servicios.css";

function Servicios() {
  return (
    <div className="servicios-main-container">
      <h1 className="servicio-title">Nuestros Servicios</h1>
      <p className="servicio-subtitle">
        Te ofrecemos la mejor calidad en pagina. Nuestra
        amplia experiencia nos respalda
      </p>
      <div className="servicios-features">
        <div className="servicio-itself">
          <h1 className="servicio-title">Servicio personalizado</h1>
          <p>
            Ofrecemos el mejor servicio en Diseno y Mantenimiento de tu pagina para que saques el mayor probecho de tu negocio
          </p>
        </div>
        <div className="servicio-itself">
          <h1 className="servicio-title">Diseños únicos</h1>
          <p>
            Hacemos diseños únicos por tipo de cliente en cada uno de los
            segmentos que se desarrollen para generar un negocio rentable y
            atractivo para todas las partes.
          </p>
        </div>
        <div className="servicio-itself">
          <h1 className="servicio-title">Productos de alta calidad.</h1>
          <p>Visita nuestra galería de imágenes</p>
        </div>
        <div className="servicio-itself">
          <h1 className="servicio-title">Calidad garantizada</h1>
          <p>
            Entregamos nuestros productos en las mejores plataformas y con seguridad que tu pagina nunca se caera de la web
          </p>
        </div>
      </div>
      <button className="servicios-button">Contáctanos</button>
    </div>
  );
}

export default Servicios;
