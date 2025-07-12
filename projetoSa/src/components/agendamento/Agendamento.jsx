import Header from "../layout/header/Header";
import "./Agendamento.css";
import { GlobalContext } from "../contexts/GlobalContext.jsx";
import { useContext, useState } from "react";
function Agendamento() {
  const [nomeiten, setNomeIten] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [dia, setDia] = useState("");
  const [itens, setItens] = useState([]);

  const { nome } = useContext(GlobalContext);

  function Addagendamento() {
    let itenDescarte = {
      Nome: nomeiten,
      Tamanho: tamanho,
      Dia: dia,
     
    };
    setItens([itenDescarte, ...itens]);
    console.log(itenDescarte);
    alert(`Agendamento Registrado com succeso`);
  }
  return (
    <div className="containre">
      <div className="espacoHeader">
        <Header />
      </div>
      <div className="useName">
        <h1>
          <strong>{` ${nome}`}</strong>
        </h1>
      </div>
      <div className="containerform">
        <div className="containerIdentidade">
          <h1>Agendamento</h1>

          <div className="espacoAgendamento">
            <div>
              <label htmlFor="">Nome</label>
              <input
                type="text"
                value={nomeiten}
                onChange={(e) => setNomeIten(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">Tamanho</label>
              <input
                type="text"
                value={tamanho}
                onChange={(e) => setTamanho(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">Dia de descarte</label>
              <input
                type="date"
                value={dia}
                onChange={(e) => setDia(e.target.value)}
              />
            </div>
            {/* <div>
              <label htmlFor="">Hora de descarte</label>
              <input
                type="hora"
                value={hora}
                onChange={(e) => setHora(e.target.value)}
              />
            </div> */}
          </div>
          <div>
            <button onClick={Addagendamento}>Agendar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Agendamento;
