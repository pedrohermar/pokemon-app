import { useState } from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "../../icons/SearchIcon";

const NavBar = () => {
  const [inputSearch, setInputSearch] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`search/${inputSearch}`);
    setInputSearch("");
  };

  return (
    <div className="nav-bar">
      <nav></nav>
      <form className="search" onSubmit={handleSubmit}>
        <input
          value={inputSearch}
          onChange={handleChange}
          placeholder="Search Pokemon"
          type="search"
        />
        <SearchIcon className="search-icon" />
      </form>
    </div>
  );
};

export default NavBar;
