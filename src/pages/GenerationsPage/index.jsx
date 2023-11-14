import { useParams } from "react-router-dom";
import Card from "../../components/Card";
import { useFetch } from "../../hooks/useFetch";

const GenerationsPage = () => {
  const { generation } = useParams();
  const { data, loading } = useFetch(
    `https://pokeapi.co/api/v2/generation/${generation}/`
  );

  return (
    <ul className="pokemon-list">
      {!loading &&
        data.pokemon_species.map((pokemon) => (
          <Card
            name={pokemon.name}
            key={pokemon.name}
            pokemonURL={pokemon.url}
            orderList={true}
          />
        ))}
    </ul>
  );
};

export default GenerationsPage;
