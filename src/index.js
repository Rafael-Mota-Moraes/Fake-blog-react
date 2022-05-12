import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global-styles.css";
import Home from "./templates/Home";

const element = document.getElementById("root");

const root = ReactDOM.createRoot(element);
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
