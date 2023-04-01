import { useState } from "react";
import { colorType } from "../../actions";
import "./styles.scss";

const Modal = ({ fn, data }) => {
  const [movesMode, setMovesMode] = useState(false);

  const viewMoves = () => {
    setMovesMode(!movesMode);
  };

  return (
    <div className="modal">
      <div className="modal-container">
        {!movesMode ? (
          <div className="modal-pokemon">
            <div className="modal-header">
              <div className="name">
                <span className="font-extrabold">#{data.id} </span>{" "}
                {data.name.toUpperCase()}
              </div>
              <button className="btn-close" onClick={fn}>
                X
              </button>
            </div>
            <div className="modal-body">
              <div className="sprites">
                <img
                  src={data.sprites.other["official-artwork"].front_default}
                  alt="Default"
                ></img>
                <img
                  src={data.sprites.other["official-artwork"].front_shiny}
                  alt="Default"
                ></img>
              </div>
              <div className="stats">
                <h3>STATS</h3>
                <ul>
                  {data.stats.map((stat) => (
                    <li key={stat.stat.name}>
                      <span className="font-extrabold">{stat.base_stat} </span>
                      {stat.stat.name.substr(0, 11).toUpperCase()}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="modal-footer">
              <div className="types">
                {data.types.map((type) => {
                  const { name } = type.type;
                  return (
                    <label
                      key={name}
                      className={colorType(name)}
                      style={{
                        fontSize: "20px",
                        padding: "5px",
                        borderRadius: "0.8rem",
                      }}
                    >
                      {name.toUpperCase()}
                    </label>
                  );
                })}
              </div>
              <button onClick={viewMoves}>MOVES</button>
            </div>
          </div>
        ) : (
          <div className="modal-moves">
            <div className="moves-header">
              <button onClick={viewMoves}>&#11178;</button>
              <h3>Moves available for {data.name}</h3>
              <button className="btn-close" onClick={fn}>
                X
              </button>
            </div>
            <ul>
              {data.moves.map((move) => {
                return <li key={move.move.name}>{move.move.name} </li>;
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
