import { useEffect, useState } from "react";

import Card from "../../components/Card";
import Modal from "../../components/Modal";
import "./styles.scss";
import { useFetch } from "../../hooks/useFetch";

function PokedexPage() {
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
  );
  const { data } = useFetch(url);

  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonData, setPokemonData] = useState({});
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (data) setPokemonList([...pokemonList, ...data.results]);
  }, [data]);

  const viewModal = (data) => {
    setModal(!modal);
    setPokemonData(data);
  };

  const handleClick = () => {
    setUrl(data.next);
  };

  return (
    <>
      {modal && <Modal fn={viewModal} data={pokemonData} />}

      <ul className="pokemon-list">
        {pokemonList.length > 0 &&
          pokemonList.map((pokemon) => (
            <Card
              name={pokemon.name}
              key={pokemon.name}
              viewModal={viewModal}
            />
          ))}
      </ul>

      {pokemonList.length < data?.count && (
        <button
          className="h-11 w-[96%] my-6 bg-gray-300 border border-gray-400 rounded-lg"
          onClick={handleClick}
        >
          View More
        </button>
      )}
    </>
  );
}

export default PokedexPage;
