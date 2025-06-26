import { useContext, useEffect, useState } from "react";
import "./Body.css";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";

function Body() {
  const [cep, setCep] = useState("");
  //  const [endereco, setEndereco] = useState({});
const {endereco, setEndereco} = useContext(GlobalContext)

  useEffect(() => {
    if (cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((Response) => {
          return Response.json();
        })
        .then((data) => {
          setEndereco(data);
          //console.log(data);
        });
    }
    console.log(cep);
  }, [cep]);
  useEffect(() => {
     console.log(endereco);
  }, [endereco]);

  const navigate = useNavigate();
  function AddProduto() {
   if(endereco.localidade == "Florianopolis"){
    alert("parabeen")
   }else{
    alert("Localidade nõo encontrado")
   }
    navigate("/produto");
   
  }

  function AddSobre() {
    navigate("/sobre");
  }

  function AddAgendamento() {
    let quest = prompt("Tem cadastro??");
    if (quest == "Não") {
      navigate("/cadastrar");
    } else {
      navigate("/agendar");
    }
  }
  return (
    <div className="containerBody">
      <div className="intro">
        <div className="espacoVazia">
          <strong>
            <p>Conheça a plataforma de descart de lixo electronico</p>
          </strong>
          <button onClick={AddSobre}>Clique e saiba Mais</button>
        </div>

        <div className="espacoImagem"></div>
      </div>

      <div className="descart">
        <div className="tituleDescarte">
          <h1>QUER DESCARTAR?</h1>
        </div>

        <div className="containerParaInput">
          <div className="paragraf">
            <p className="paragrafDescart">
              Digite seu CEP, escoha o produto e encontra os pontos de
              recebemento para o descarte correto.
            </p>
          </div>

          <div className="inputDesacrt">
            <input
              type="text"
              placeholder=" Digite o CEP"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
            />

            <button className="butPonto" onClick={AddProduto}>
              Encontrar Pontos
            </button>
          </div>
        </div>

        <div className="espacoSalvo">
          <button onClick={AddAgendamento}>Quero Agendar</button>
        </div>
      </div>
    </div>
  );
}
export default Body;
