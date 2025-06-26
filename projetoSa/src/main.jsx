import { createRoot } from "react-dom/client";
import "./index.css";

import { GlobalContextProvider } from "./components/contexts/GlobalContext.jsx";
import { RouterProvider } from "react-router-dom";
import Router from "./components/router/MainRoute";
createRoot(document.getElementById("root")).render(
 <GlobalContextProvider>
    <RouterProvider router={Router}></RouterProvider>
   
 </GlobalContextProvider>
    
);

