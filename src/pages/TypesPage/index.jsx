import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Card from "../../components/Card";

const TypesPage = () => {
  const { type } = useParams();
  const { data, loading } = useFetch(`https://pokeapi.co/api/v2/type/${type}/`);

  return (
    <ul className="pokemon-list">
      {!loading &&
        data.pokemon.map(({ pokemon }) => (
          <Card name={pokemon.name} key={pokemon.name} />
        ))}
    </ul>
  );
};

export default TypesPage;
