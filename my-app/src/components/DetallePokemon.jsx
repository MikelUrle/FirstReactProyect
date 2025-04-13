import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../styles/DetallePokemon.css";

function DetallePokemon() {
  const { nombre } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, [nombre]);

  if (!pokemon) return <p className="text-center mt-5">Cargando...</p>;

  return (
    <div className="container mt-5 text-center detalle-pokemon">
      <div className="card shadow-lg p-4 rounded-4">
        <h2 className="mb-4 text-capitalize">{pokemon.name}</h2>
        <div className="d-flex justify-content-center">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="pokemon-img mb-3"
        />
        </div>

        <div className="info">
          <p><strong>Tipo:</strong> {pokemon.types.map(t => t.type.name).join(", ")}</p>
          <p><strong>Altura:</strong> {pokemon.height / 10} m</p>
          <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
          <p><strong>Habilidades:</strong> {pokemon.abilities.map(a => a.ability.name).join(", ")}</p>
        </div>

      </div>
      <Link to="/" className="btn btn-outline-dark mt-5">Volver</Link>
    </div>
  );
}

export default DetallePokemon;
