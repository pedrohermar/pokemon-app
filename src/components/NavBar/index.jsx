import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { SearchIcon } from "../../icons/SearchIcon";
import NavMenu from "../NavMenu";
import "./styles.scss";

const navLinks = {
  generations: [
    { name: "I", url: "/generations/1" },
    { name: "II", url: "/generations/2" },
    { name: "III", url: "/generations/3" },
    { name: "IV", url: "/generations/4" },
    { name: "V", url: "/generations/5" },
    { name: "VI", url: "/generations/6" },
    { name: "VII", url: "/generations/7" },
    { name: "VIII", url: "/generations/8" },
  ],
  types: [
    { name: "normal", url: "/types/normal" },
    { name: "fighting", url: "/types/fighting" },
    { name: "flying", url: "/types/flying" },
    { name: "poison", url: "/types/poison" },
    { name: "ground", url: "/types/ground" },
    { name: "rock", url: "/types/rock" },
    { name: "bug", url: "/types/bug" },
    { name: "ghost", url: "/types/ghost" },
    { name: "steel", url: "/types/steel" },
    { name: "fire", url: "/types/fire" },
    { name: "water", url: "/types/water" },
    { name: "grass", url: "/types/grass" },
    { name: "electric", url: "/types/electric" },
    { name: "psychic", url: "/types/psychic" },
    { name: "ice", url: "/types/ice" },
    { name: "dragon", url: "/types/dragon" },
    { name: "dark", url: "/types/dark" },
    { name: "fairy", url: "/types/fairy" },
    { name: "shadow", url: "/types/shadow" },
  ],
};

const NavBar = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [navSelected, setNavSelected] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setNavSelected(null);
  }, [location]);

  const handleChange = (e) => {
    setInputSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`search/${inputSearch}`);
    setInputSearch("");
  };

  const handleClick = (e) => {
    setNavSelected(
      navSelected !== e.target.textContent ? e.target.textContent : null
    );
  };

  return (
    <>
      <div className="nav-bar">
        <nav>
          <ul className="nav-list">
            <li className="nav-item" onClick={handleClick}>
              <Link to="/">pokedex</Link>
            </li>
            <li className="nav-item" onClick={handleClick}>
              generations
              {navSelected === "generations" && (
                <NavMenu navItems={navLinks.generations} />
              )}
            </li>
            <li className="nav-item" onClick={handleClick}>
              types
              {navSelected === "types" && <NavMenu navItems={navLinks.types} />}
            </li>
          </ul>
        </nav>
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            className="search-input"
            value={inputSearch}
            onChange={handleChange}
            placeholder="Search Pokemon"
            type="search"
          />
          <SearchIcon className="search-icon" />
        </form>
      </div>
      {/* {navSelected && <NavMenu navItems={navLinks[navSelected]} />} */}
    </>
  );
};

export default NavBar;
