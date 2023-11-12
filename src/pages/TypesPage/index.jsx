import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Card from "../../components/Card";

const TypesPage = () => {
  const { type } = useParams();
  const { data, loading } = useFetch(`https://pokeapi.co/api/v2/type/${type}/`);

  return (
    <ul className="pokemon-list">
      {!loading &&
        data.pokemon.map((item) => (
          <Card name={item.pokemon.name} key={item.pokemon.name} />
        ))}
    </ul>
  );
};

export default TypesPage;
