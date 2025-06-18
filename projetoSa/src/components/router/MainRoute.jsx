import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../paginas/home/Home";
import Cadastrar from "../paginas/cadastrar/Cadastrar";
import Login from "../paginas/login/Login";
import Produto from "../paginas/pontoColeta/Produto"
import Sobre from "../paginas/sobre/Sobre";
function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cadastrar" element={<Cadastrar />} />
        <Route path="/login" element={<Login />} />
       <Route path="/produto" element={<Produto/>}/>
       <Route path="/sobre" element={<Sobre/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default MainRouter;
