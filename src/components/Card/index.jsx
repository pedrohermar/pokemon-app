import { useState, useEffect } from "react";
import { getPokemonData, capitalize, colorType } from "../../actions";
import "./styles.scss";

const Card = ({ pokemon, viewModal }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="card"
      onClick={() => viewModal(pokemon)}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <header className="card-header">
        <label>
          <span>#{pokemon.id} </span>
          {capitalize(pokemon.name)}
        </label>
      </header>
      <div className="card-body">
        {pokemon.sprites && (
          <img
            src={
              hover
                ? pokemon.sprites.versions["generation-v"]["black-white"]
                    .animated.front_default
                : pokemon.sprites.front_default
            }
            alt="Pokemon image"
          />
        )}
      </div>
      <div className="card-footer">
        {pokemon.types &&
          pokemon.types.map((type) => {
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
    </div>
  );
};

export default Card;
