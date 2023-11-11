import Header from "../../components/Header";
import "./styles.scss";

const PokemonLayout = ({ children }) => {
  return (
    <>
      <Header />

      <main>{children}</main>
    </>
  );
};

export default PokemonLayout;
