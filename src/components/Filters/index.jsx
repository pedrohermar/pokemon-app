import { useEffect, useState } from "react";
import { getPokemonTypes } from "../../actions";
import "./styles.scss";

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
            <div className="filters-column">
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
            <div className="filters-column">
              <h3>Generation</h3>
              <label>
                <input
                  type="checkbox"
                  value="generation-i"
                  onChange={(e) => handleGenerationSelect(e.target.value)}
                  checked={generationFilter.includes("generation-i")}
                />{" "}
                I
              </label>
              <label>
                <input
                  type="checkbox"
                  value="generation-ii"
                  onChange={(e) => handleGenerationSelect(e.target.value)}
                  checked={generationFilter.includes("generation-ii")}
                />{" "}
                II
              </label>
              <label>
                <input
                  type="checkbox"
                  value="generation-iii"
                  onChange={(e) => handleGenerationSelect(e.target.value)}
                  checked={generationFilter.includes("generation-iii")}
                />{" "}
                III
              </label>
              <label>
                <input
                  type="checkbox"
                  value="generation-iv"
                  onChange={(e) => handleGenerationSelect(e.target.value)}
                  checked={generationFilter.includes("generation-iv")}
                />{" "}
                IV
              </label>
              <label>
                <input
                  type="checkbox"
                  value="generation-v"
                  onChange={(e) => handleGenerationSelect(e.target.value)}
                  checked={generationFilter.includes("generation-v")}
                />{" "}
                V
              </label>
              <label>
                <input
                  type="checkbox"
                  value="generation-vi"
                  onChange={(e) => handleGenerationSelect(e.target.value)}
                  checked={generationFilter.includes("generation-vi")}
                />{" "}
                VI
              </label>
              <label>
                <input
                  type="checkbox"
                  value="generation-vii"
                  onChange={(e) => handleGenerationSelect(e.target.value)}
                  checked={generationFilter.includes("generation-vii")}
                />{" "}
                VII
              </label>
              <label>
                <input
                  type="checkbox"
                  value="generation-viii"
                  onChange={(e) => handleGenerationSelect(e.target.value)}
                  checked={generationFilter.includes("generation-viii")}
                />{" "}
                VIII
              </label>
              <label>
                <input
                  type="checkbox"
                  value="generation-ix"
                  onChange={(e) => handleGenerationSelect(e.target.value)}
                  checked={generationFilter.includes("generation-ix")}
                />{" "}
                IX
              </label>
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
