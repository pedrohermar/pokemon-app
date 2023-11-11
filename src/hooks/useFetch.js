import { useEffect, useState } from "react";

const useFetch = (
  url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
) => {
  const [currentData, setCurrentData] = useState(null);
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getPokemonsData = async (url) => {
    try {
      const result = await fetch(url);
      const pokemonList = await result.json();
      setCurrentData(pokemonList);

      const pokemonsData = await Promise.all(
        pokemonList.results.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          const data = await response.json();
          return data;
        })
      );

      setPokemons([...pokemons, ...pokemonsData]);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPokemonsData(url);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Obtener la posición actual de desplazamiento
      const scrollPosition = window.innerHeight + window.scrollY;

      // Obtener la altura total del documento
      const documentHeight = document.documentElement.scrollHeight;

      // Verificar si hemos llegado al final de la página
      if (scrollPosition >= documentHeight) {
        // Se ejecuta al llegar al final de la página
        getPokemonsData(currentData.next);
      }
    };

    // Agregar el evento de desplazamiento al montar el componente
    window.addEventListener("scroll", handleScroll);

    // Limpiar el evento al desmontar el componente para evitar pérdidas de memoria
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pokemons]);

  return { pokemons, loading, error };
};

export default useFetch;
