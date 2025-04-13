import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PokemonTabla() {
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((res) => res.json())
      .then((data) => setPokemones(data.results));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">📋 Lista de Pokémon</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Detalles</th>
          </tr>
        </thead>
        <tbody>
          {pokemones.map((poke, index) => (
            <tr key={poke.name}>
              <td>{index + 1}</td>
              <td className="text-capitalize">{poke.name}</td>
              <td>
                <Link
                  className="btn btn-outline-primary btn-sm"
                  to={`/pokemon/${poke.name}`}
                  target="_blank"
                >
                  Ver
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PokemonTabla;
