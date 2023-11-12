import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { capitalize, colorType } from "../../actions";
import "./styles.scss";

const Card = ({ name, viewModal, pokemonURL }) => {
  const { data, loading, error, getApiData } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (error) {
      fetch(pokemonURL)
        .then((result) => result.json())
        .then((resultJSON) =>
          getApiData(`https://pokeapi.co/api/v2/pokemon/${resultJSON.id}`)
        );
    }
  }, [error]);

  return (
    <li
      className="card"
      onClick={() => viewModal(data)}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      style={{ order: data?.id }}
    >
      {!loading ? (
        !error ? (
          <>
            <header className="card-header">
              <label>
                <span>#{data.id} </span>
                {capitalize(data.name)}
              </label>
            </header>
            <div className="card-body">
              {data.sprites && (
                <img
                  src={
                    hover
                      ? data.sprites.versions["generation-v"]["black-white"]
                          .animated.front_default
                      : data.sprites.front_default
                  }
                  alt="Pokemon image"
                />
              )}
            </div>
            <div className="card-footer">
              {data.types &&
                data.types.map((type) => {
                  return (
                    <label
                      className={colorType(type.type.name)}
                      style={{ width: "100%", textAlign: "center" }}
                      key={type.type.name}
                    >
                      {type.type.name}
                    </label>
                  );
                })}
            </div>
          </>
        ) : (
          <h1>Pokemon not found</h1>
        )
      ) : (
        <h1>Loading data</h1>
      )}
    </li>
  );
};

export default Card;
