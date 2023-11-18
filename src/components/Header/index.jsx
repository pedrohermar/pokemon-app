import NavBar from "../NavBar";
import "./styles.scss";

const Header = () => {
  return (
    <header className="header">
      <picture className="logo">
        <img src="/pokemon-logo.svg" />
      </picture>

      <NavBar />
    </header>
  );
};

export default Header;
