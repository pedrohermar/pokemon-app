import { useEffect, useState } from "react";
import { getPokemonTypes } from "../../actions";
import "./styles.scss";

const generations = [
  "generation-i",
  "generation-ii",
  "generation-iii",
  "generation-iv",
  "generation-v",
];

const Filters = ({
  search,
  handleTypesSelect,
  handleGenerationSelect,
  typesFilter,
  generationFilter,
}) => {
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
            <div className="filters-col">
              <h3>Types</h3>
              {types.map((type) => (
                <label key={type.name}>
                  <input
                    type="checkbox"
                    value={type.name}
                    onChange={(e) => handleTypesSelect(e.target.value)}
                    checked={typesFilter.includes(type.name)}
                  />{" "}
                  {type.name}
                </label>
              ))}
            </div>
            <div className="filters-col">
              <h3>Generation</h3>
              {generations.map((generation) => (
                <label key={generation}>
                  <input
                    type="checkbox"
                    value={generation}
                    onChange={(e) => handleGenerationSelect(e.target.value)}
                    checked={generationFilter.includes(generation)}
                  />{" "}
                  {generation.split("-")[1].toUpperCase()}
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
