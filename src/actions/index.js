import axios from "axios";

// Funciones de llamadas a API
export const getPokemonsApi = () => {
  return axios.get("https://pokeapi.co/api/v2/pokemon?limit=500&offset=0");
};

export const getPokemonData = (url) => {
  return axios.get(url);
};

export const getPokemonTypes = () => {
  return axios("https://pokeapi.co/api/v2/type").then(
    (result) => result.data.results
  );
};

export const getPokemonGeneration = (pokemon) => {
  return axios(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`).then(
    (result) => result.data.generation.name
  );
};

// Función para filtar
export const filtredPokemons = (
  pokemonsArray,
  typesFilter,
  generationFilter
) => {
  if (typesFilter.length > 0 && generationFilter.length > 0) {
    return pokemonsArray
      .filter((pokemon) => {
        return typesFilter.some((type) => {
          return pokemon.types.some(
            (pokemonType) => pokemonType.type.name === type
          );
        });
      })
      .filter((pokemon) => {
        return generationFilter.some(
          (generation) => generation == pokemon.generation
        );
      });
  }

  if (typesFilter.length > 0) {
    return pokemonsArray.filter((pokemon) => {
      return typesFilter.some((type) => {
        return pokemon.types.some(
          (pokemonType) => pokemonType.type.name === type
        );
      });
    });
  }

  if (generationFilter.length > 0) {
    return pokemonsArray.filter((pokemon) => {
      return generationFilter.some(
        (generation) => generation == pokemon.generation
      );
    });
  }

  return pokemonsArray;
};

export const capitalize = (word) => {
  return word[0].toUpperCase() + word.slice(1);
};

export const colorType = (type) => {
  switch (type) {
    case "normal":
      return "bg-gray-300";
      break;
    case "fighting":
      return "bg-orange-400";
      break;
    case "flying":
      return "bg-blue-200";
      break;
    case "poison":
      return "bg-purple-400";
      break;
    case "ground":
      return "bg-yellow-200";
      break;
    case "rock":
      return "bg-gray-500 text-white";
      break;
    case "bug":
      return "bg-green-700 text-white";
      break;
    case "ghost":
      return "bg-purple-700 text-white";
      break;
    case "steel":
      return "bg-gray-400";
      break;
    case "fire":
      return "bg-orange-600 text-white";
      break;
    case "water":
      return "bg-blue-400";
      break;
    case "grass":
      return "bg-green-500";
      break;
    case "electric":
      return "bg-yellow-400";
      break;
    case "psychic":
      return "bg-pink-600 text-white";
      break;
    case "ice":
      return "bg-blue-300";
      break;
    case "dragon":
      return "bg-blue-700 text-white";
      break;
    case "dark":
      return "bg-gray-800 text-white";
      break;
    case "fairy":
      return "bg-pink-300";
      break;
    case "shadow":
      return "bg-black text-white";
      break;
    default:
      break;
  }
};
