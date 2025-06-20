
import { createRoot } from "react-dom/client";
import "./index.css";
import MainRoute from './components/router/MainRoute'
import { GlobalContextProvider } from "./components/contexts/GlobalContext";
import { RouterProvider } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <GlobalContextProvider>
    <RouterProvider router={MainRoute}>

    </RouterProvider>
  </GlobalContextProvider>
);
