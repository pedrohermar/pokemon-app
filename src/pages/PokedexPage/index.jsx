import { useEffect, useState } from "react";

import Card from "../../components/Card";
import { useFetch } from "../../hooks/useFetch";

function PokedexPage() {
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
  );
  const { data, loading } = useFetch(url);
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    if (data) setPokemonList([...pokemonList, ...data.results]);
  }, [data]);

  useEffect(() => {
    const handleScroll = () => {
      // Obtener la posición actual de desplazamiento
      const scrollPosition = window.innerHeight + window.scrollY;

      // Obtener la altura total del documento
      const documentHeight = document.documentElement.scrollHeight;

      // Cambiar la URL de consulta a la API si se ha llegado al final de la página
      if (scrollPosition >= documentHeight) {
        setUrl(data?.next);
      }
    };

    // Agregar el evento de desplazamiento al montar el componente
    window.addEventListener("scroll", handleScroll);

    // Limpiar el evento al desmontar el componente para evitar pérdidas de memoria
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pokemonList]);

  return (
    <>
      <ul className="pokemon-list">
        {pokemonList.length > 0 &&
          pokemonList.map((pokemon) => (
            <Card name={pokemon.name} key={pokemon.name} />
          ))}
      </ul>
    </>
  );
}

export default PokedexPage;
