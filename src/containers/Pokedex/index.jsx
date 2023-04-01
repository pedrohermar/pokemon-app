import { useEffect, useState } from "react";
import { getPokemonGeneration, getPokemonsApi } from "../../actions";
import Header from "../../components/Header";
import Filters from "../../components/Filters";
import Card from "../../components/Card";
import Modal from "../../components/Modal";
import "./styles.scss";

function Pokedex() {
  const [pokemonsArray, setPokemonsArray] = useState([]);
  const [pokemonsFiltred, setPokemonsFiltred] = useState([]);
  const [pokemonData, setPokemonData] = useState({});
  const [typesFilter, setTypesFilter] = useState([]);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    // Llamada a la API para devolver el listado de pokemons, con nombre y URL
    const fetchPokemons = async () => {
      const pokemonList = await getPokemonsApi().then(
        (res) => res.data.results
      );
      // Llamada iterada por cada Pokemon para devolver sus datos
      const pokemonsInfo = await Promise.all(
        pokemonList.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          const data = await response.json();
          return data;
        })
      );
      // Llamada por cada pokemon a diferente endpoint para obtener el número de generación de cada uno, y añadirlo al objeto.
      pokemonsInfo.forEach((pokemon, index) => {
        getPokemonGeneration(pokemon.name).then(
          (generation) => (pokemonsInfo[index].generation = generation)
        );
      });

      // Se almacena en el estado el array con los pokemosn con sus datos y la generación
      setPokemonsArray(pokemonsInfo);
    };
    fetchPokemons();
  }, []);

  useEffect(() => {
    const filtrarPokemons = pokemonsArray.filter((pokemon) => {
      return typesFilter.some((type) => {
        return pokemon.types.some(
          (pokemonType) => pokemonType.type.name === type
        );
      });
    });

    setPokemonsFiltred(filtrarPokemons);
  }, [typesFilter]);

  const viewModal = (data) => {
    setModal(!modal);
    setPokemonData(data);
  };

  const handleTypesSelect = (typeSelect) => {
    if (typesFilter.includes(typeSelect)) {
      setTypesFilter(typesFilter.filter((type) => type != typeSelect));
    } else {
      setTypesFilter([...typesFilter, typeSelect]);
    }
  };

  return (
    <>
      {modal && <Modal fn={viewModal} data={pokemonData} />}
      <Header />
      <Filters
        search={setSearch}
        handleTypesSelect={handleTypesSelect}
        typesFilter={typesFilter}
      />
      <div className="cards-container">
        {typesFilter.length > 0
          ? pokemonsFiltred
              .filter((element) => element.name.includes(search.toLowerCase()))
              .map((pokemon) => {
                return (
                  <Card
                    pokemon={pokemon}
                    key={pokemon.name}
                    viewModal={viewModal}
                  />
                );
              })
          : pokemonsArray
              .filter((element) => element.name.includes(search.toLowerCase()))
              .map((pokemon) => {
                return (
                  <Card
                    pokemon={pokemon}
                    key={pokemon.name}
                    viewModal={viewModal}
                  />
                );
              })}
      </div>
    </>
  );
}

export default Pokedex;
