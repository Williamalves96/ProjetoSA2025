import {  createBrowserRouter } from "react-router-dom";
import Home from "../paginas/home/Home";
import Cadastrar from "../paginas/cadastrar/Cadastrar";
import Login from "../paginas/login/Login";
import Produto from "../paginas/pontoColeta/Produto"
import Sobre from "../paginas/sobre/Sobre";
import Agendamento from "../agendamento/Agendamento";

  
    const Router = createBrowserRouter([
    {path: "/", element: <Home /> },
    {path: "/Cadastrar", element: <Cadastrar />},
    {path: "/login", element: <Login />},
    {path: "/produto", element: <Produto/>},
    {path: "/sobre", element: <Sobre/>},
    {path: "/agendar", element: <Agendamento/>}
    
    ])
export default Router;
