import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Pokedex from "../pages/Pokedex";
import PokemonLayout from "../layout/PokemonLayout";

const PokemonRouter = () => {
  return (
    <BrowserRouter>
      <PokemonLayout>
        <Routes>
          <Route path="/" element={<Pokedex />} />
          <Route
            path="generations/:generation"
            element={<h1>Página de generaciones</h1>}
          />
          <Route path="types/:type" element={<h1>Página de typos</h1>} />
          <Route path="search/:name" element={<h1>Página de búsqueda</h1>} />

          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </PokemonLayout>
    </BrowserRouter>
  );
};

export default PokemonRouter;
