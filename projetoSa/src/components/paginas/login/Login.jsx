import { useState, useEffect } from "react";
import Header from "../../layout/header/Header";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate()


  useEffect(() => {
    const usuarioAmazenamento = localStorage.getItem("usuario");
    if (usuarioAmazenamento) {
      setUsuario(JSON.parse(usuarioAmazenamento));
    }
  }, []);

  function AddLogin() {
    if (!nome || !senha) {
      alert("Preencha todos os campos");
      return;
    }
    const usuario = { nome, senha };
    localStorage.setItem("usuario", JSON.stringify(usuario));
    setUsuario(usuario);
 navigate('/agendar')
  }

  return (
    <div className="containerPagina">
      <div>
        <Header />
      </div>

      <div className="containerLogin">
        <h1>Login</h1>
        <div>
          <label htmlFor="">Nome</label>
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Senha</label>
          <input
            type="password"
            placeholder="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <div>
          <button onClick={AddLogin}>Connectar</button>
        </div>
      </div>
    </div>
  );
}
export default Login;
