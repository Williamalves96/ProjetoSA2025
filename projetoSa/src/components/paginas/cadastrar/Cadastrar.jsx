import { useState } from "react";
import Header from "../../layout/header/Header";
import "./Cadastrar.css";
function Cadastrar() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [usuario, setUsuario] = useState([]);

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

          <button>Cadastrar</button>
          {/* disabled={email == "" || senha.length < 6} */}
          <p>Ja tem conta?</p>
          <button>Fazer Login</button>
        </div>
      </div>
    </div>
  );
}
export default Cadastrar;
