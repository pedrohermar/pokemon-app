import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import PokemonRouter from "./router/PokemonRouter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PokemonRouter />
  </React.StrictMode>
);
