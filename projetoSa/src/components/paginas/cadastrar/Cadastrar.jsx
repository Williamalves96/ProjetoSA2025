import {useContext, useState } from "react";
import Header from "../../layout/header/Header";
import "./Cadastrar.css";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
function Cadastrar() {
  // const [nome, setNome] = useState("");
   const [email, setEmail] = useState("");
   const [senha, setSenha] = useState("");
   const [usuario, setUsuario] = useState([]);

  const {nome, setNome,} = useContext(GlobalContext)

  const navigate = useNavigate();
  function AddUsuario(){
    let username = {
      nome: nome,
      email: email,
      senha: senha,
    };
    if (nome == "") {
      alert("Os campos de nome  esta vazia");
    } else if (email == "") {
      alert("Ocampo de email esta vazia!!");
    } else if (senha.length < 6) {
      alert("O tamanho de senha esta menor que 6 caractere!!!");
    }
    setUsuario([username, ...usuario]);

    console.log(username);
    navigate("/produto")
  }
  

  return (
    <div className="containerCadastro">
      <div className="espacoHeader">
        <Header />
      </div>

      <div className="contextCadastro">
        <h1>CADASTRAR-SE</h1>
        <div className="forum">
          <div>
            <label htmlFor="Nome Completo">Nome</label>
            <input
              type="text"
              placeholder="Nome Completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="Senha">Senha</label>
            <input
              type="text"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <button onClick={AddUsuario}   disabled={email == "" || senha == "" || email == ""} >Cadastrar</button>
        
          <p>Ja tem conta?</p>
          <button>Fazer Login</button>
        </div>
      </div>
    </div>
  );
}
export default Cadastrar;
