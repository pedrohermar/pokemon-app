import { useEffect, useState } from "react";

import Header from "../../components/Header";
import Card from "../../components/Card";
import Modal from "../../components/Modal";
import "./styles.scss";
import useFetch from "../../hooks/useFetch";

function Pokedex() {
  const { pokemons, loading, error } = useFetch();

  const [pokemonData, setPokemonData] = useState({});
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);

  const viewModal = (data) => {
    setModal(!modal);
    setPokemonData(data);
  };

  return (
    <>
      {modal && <Modal fn={viewModal} data={pokemonData} />}
      <Header />

      <div className="cards-container">
        {pokemons.length > 0 &&
          pokemons.map((pokemon) => (
            <Card pokemon={pokemon} key={pokemon.id} viewModal={viewModal} />
          ))}
      </div>
    </>
  );
}

export default Pokedex;
