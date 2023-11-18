import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Card from "../../components/Card";

const SearchPage = () => {
  const { query } = useParams();
  const { data, loading } = useFetch(
    "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0"
  );
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (data) {
      const results = data.results.filter((pokemon) =>
        pokemon.name.includes(query.toLowerCase())
      );
      setSearchResults(results);
    }
  }, [data, query]);

  return (
    <>
      {searchResults.length > 0 ? (
        <ul className="pokemon-list">
          {searchResults.map(({ name }) => (
            <Card name={name} key={name} />
          ))}
        </ul>
      ) : (
        <h1>
          No pokemon found with name <strong>{query}</strong>
        </h1>
      )}
    </>
  );
};

export default SearchPage;
