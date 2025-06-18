import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="containerHeader">
      <div className="logo">
        <img src="lixo.webp" className="logo" />
        <h1 className="title">Eco-Descart</h1>
      </div>
      <div className="espacoLink">
        <Link to="/">Home</Link>
        <Link to="/Cadastrar">Cadastrar</Link>
        <Link to="/Login">Login</Link>
       
      </div>
    </div>
  );
}
export default Header;
