import { useState } from "react";
import { colorType } from "../../actions";
import "./styles.scss";
import { capitalize } from "../../actions";

const Modal = ({ fn, data }) => {
  const [shiny, setShiny] = useState(false);

  return (
    <div className="modal">
      <div className="modal-container">
        <div
          className={`modal-image-area ${colorType(data.types[0].type.name)}`}
        >
          <div className="modal-header">
            <label>#{data.id}</label>
            <button className="btn-close" onClick={() => fn(false)}>
              X
            </button>
          </div>

          <div className="sprites">
            <div className="btn-change-img">
              <button
                className={!shiny ? "selected" : ""}
                onClick={() => setShiny(false)}
              >
                normal
              </button>
              <button
                className={shiny ? "selected" : ""}
                onClick={() => setShiny(true)}
              >
                shiny
              </button>
            </div>
            <img
              src={
                shiny
                  ? data.sprites.other["official-artwork"].front_shiny
                  : data.sprites.other["official-artwork"].front_default
              }
              alt={data.name}
            ></img>
          </div>
        </div>
        <div className="modal-stats-area">
          <h1 className="name">{capitalize(data.name)}</h1>
          <div className="types">
            {data.types.map((type) => {
              const { name } = type.type;
              return (
                <label
                  key={name}
                  className={`${colorType(name)} text-md px-2 rounded-xl`}
                >
                  {name}
                </label>
              );
            })}
          </div>
          <div className="physic-stats">
            <div>
              <h3>{data.weight / 10} KG</h3>
              <label>Weight</label>
            </div>
            <div>
              <h3>{data.height / 10} M</h3>
              <label>Height</label>
            </div>
          </div>
          <h2>Base Stats</h2>
          <div className="stats-table">
            <ul>
              {data.stats.map((stat) => (
                <div className="flex justify-between my-1" key={stat.stat.name}>
                  <label>{stat.stat.name.substr(0, 11).toUpperCase()}</label>
                  <div>
                    <div className="w-56 bg-gray-200 rounded-full">
                      <div
                        className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                        style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                      >
                        {stat.base_stat}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
