import { useState } from "react";
import "./Body.css";
import { useNavigate } from "react-router-dom";
function Body() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [usuario, setUsuario] = useState([]);

  function cadastrar() {
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
  }

  return (
    <div className="container-body">
      <div className="container-telaCadastro">
        <h1>CADASTRAR-SE</h1>
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

        <button onClick={cadastrar} disabled={email == "" || senha.length < 6}>
          CADASTRAR
        </button>
        <p>JA TEM CONTA?</p>
        <button onClick={() => navigate("login")}>FAZER LOGIN</button>
      </div>
    </div>
  );
}
export default Body;
