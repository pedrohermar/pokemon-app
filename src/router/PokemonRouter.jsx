import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PokedexPage from "../pages/PokedexPage";
import PokemonLayout from "../layout/PokemonLayout";
import GenerationsPage from "../pages/GenerationsPage";
import TypesPage from "../pages/TypesPage";
import SearchPage from "../pages/SearchPage";

const PokemonRouter = () => {
  return (
    <BrowserRouter>
      <PokemonLayout>
        <Routes>
          <Route path="/" element={<PokedexPage />} />
          <Route path="generations/:generation" element={<GenerationsPage />} />
          <Route path="types/:type" element={<TypesPage />} />
          <Route path="search/:query" element={<SearchPage />} />

          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </PokemonLayout>
    </BrowserRouter>
  );
};

export default PokemonRouter;
