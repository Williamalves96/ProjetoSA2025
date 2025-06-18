import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./components/paginas/home/Home";
import MainRouter from "./components/router/MainRoute";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainRouter>
      <Home />
    </MainRouter>
  </StrictMode>
);
