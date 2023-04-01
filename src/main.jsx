import React from "react";
import ReactDOM from "react-dom/client";
import Pokedex from "./containers/Pokedex";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Pokedex />
  </React.StrictMode>
);
