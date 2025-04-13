import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function AcordeonEjemplo() {
    const [pokemones, setPokemones] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
          .then((res) => res.json())
          .then((data) => setPokemones(data.results));
      }, []);

    return (
    <div className="accordion" id="accordionExample">

        {pokemones.map((poke, index) => {
            const collapseId = `collapse${index}`;
            const headingId = `heading${index}`;
        return (
        <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={headingId}>
            <button className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}  type="button" data-bs-toggle="collapse" data-bs-target={`#${collapseId}`} aria-expanded="true" aria-controls="collapseOne">
            {poke.name}
            </button>
            </h2>
            <div id={collapseId} className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`} aria-labelledby={headingId} data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <Link
                  className="btn btn-outline-primary btn-sm"
                  to={`/pokemon/${poke.name}`}
                >
                    Moar info
                </Link>
            </div>
            </div>
        </div>
        )})}

    </div>
    );
  }
  
  export default AcordeonEjemplo;
  