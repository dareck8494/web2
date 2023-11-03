import "../styles-components/Form.css";

function Form() {
  return (
    <div className="form-flex-container">
      <h1 className="form-title">Contáctanos</h1>
      <form className="form-main-container">
      
        <h1>Nos encantaría escucharte!</h1>
        <h3>Envianos un mail a dareck8494@hotmail.com</h3>
        <label for="name">Nombre</label>
        <input type="text" id="name" placeholder="Escribe tu nombre"></input>
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Escribe tu email"></input>
        <label for="phone">Telefono</label>
        <input type="number" id="phone" placeholder="+1 915 273 57 00"></input>
        <label for="message">Mensaje</label>
        <input
          type="text"
          id="message"
          placeholder="¿En que podemos ayudarte?"
        ></input>
        <button className="form-button">Enviar</button>
      </form>
    </div>
  );
}
export default Form;
