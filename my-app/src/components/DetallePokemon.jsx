import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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
    <div className="container mt-5 text-center">
      <h2 className="mb-4 text-capitalize">{pokemon.name}</h2>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        style={{ width: "150px" }}
      />
      <div className="mt-3">
        <p><strong>Tipo:</strong> {pokemon.types.map(t => t.type.name).join(", ")}</p>
        <p><strong>Altura:</strong> {pokemon.height}</p>
        <p><strong>Peso:</strong> {pokemon.weight}</p>
        <p><strong>Habilidades:</strong> {pokemon.abilities.map(a => a.ability.name).join(", ")}</p>
      </div>
    </div>
  );
}

export default DetallePokemon;
