import { useEffect, useState } from "react";
import { getPokemonTypes } from "../../actions";
import "./styles.scss";

const Filters = ({ search, handleTypesSelect, typesFilter }) => {
  const [types, setTypes] = useState([]);
  const [filtersArea, setFiltersArea] = useState(false);

  useEffect(() => {
    getPokemonTypes()
      .then((result) => setTypes(result))
      .catch((error) => console.log(error));
  }, []);

  const handleClickFilters = (e) => {
    if (e.target.className === "filters-btn") setFiltersArea(!filtersArea);
  };

  return (
    <div className="options">
      <div className="filters-btn" onClick={(e) => handleClickFilters(e)}>
        Filtros
        {filtersArea && (
          <div className="filters-area">
            <div className="types">
              <h3>Types</h3>
              {types.map((type) => (
                <label key={type.name}>
                  <input
                    type="checkbox"
                    value={type.name}
                    url={type.url}
                    onChange={(e) => handleTypesSelect(e.target.value)}
                    checked={typesFilter.includes(type.name)}
                  />{" "}
                  {type.name}
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
      <input
        className="search"
        type={"text"}
        placeholder="Search Pokemon..."
        onChange={(e) => search(e.target.value)}
      />
    </div>
  );
};

export default Filters;
