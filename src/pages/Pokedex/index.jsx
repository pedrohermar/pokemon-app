import { useEffect, useState } from "react";

import useFetch from "../../hooks/useFetch";
import Card from "../../components/Card";
import Modal from "../../components/Modal";
import "./styles.scss";

function Pokedex() {
  const { pokemons, loading, error } = useFetch();

  const [pokemonData, setPokemonData] = useState({});
  const [modal, setModal] = useState(false);

  const viewModal = (data) => {
    setModal(!modal);
    setPokemonData(data);
  };

  return (
    <>
      {modal && <Modal fn={viewModal} data={pokemonData} />}

      {pokemons.length > 0 &&
        pokemons.map((pokemon) => (
          <Card pokemon={pokemon} key={pokemon.id} viewModal={viewModal} />
        ))}
    </>
  );
}

export default Pokedex;
