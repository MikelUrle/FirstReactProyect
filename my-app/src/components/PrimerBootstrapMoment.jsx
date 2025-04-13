import { Link } from "react-router-dom";

function PrimerBootstrapMoment() {
    return (
      <div id="tituloHeader" className="alert alert-primary">
        ¡Hola desde Bootstrap!
        <div className="d-flex justify-content-end">
        <Link to="/" className="btn btn-secondary">Volver</Link>
        </div>
      </div>
    );
  }
  
  export default PrimerBootstrapMoment;
  