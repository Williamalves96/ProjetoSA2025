import { useContext } from "react";
import Header from "../../layout/header/Header";
import "./Produto.css";
import { GlobalContext } from "../../contexts/GlobalContext";

function Produto() {
  const { endereco, nome } = useContext(GlobalContext);

  return (
    <div className="containerProduto">
      <div>
        <Header />
      </div>
      <div className="contextProduto">
        <div className="produto">
          <li>
            <ul> {endereco.logradouro}</ul>
            <ul>  {endereco.localidade}</ul>
            <ul> {endereco.estado}</ul>
            <ul> {endereco.bairro}</ul>
            <ul> {endereco.cep}</ul>
          <ul>{endereco.regiao}</ul>
          </li>
        </div>
        <p>{` ${nome} `}</p>
      </div>
    </div>
  );
}
export default Produto;
