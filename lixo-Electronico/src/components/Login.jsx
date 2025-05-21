import "./Login.css";
function Login() {
  return (
    <div className="container-login">
      <div className="espaco-login">
        <h1>login</h1>
        <div>
          <label htmlFor="email">email</label>
          <input type="text" placeholder="Email" />
        </div>
        <div>
          <label htmlFor="senha" placeholder="password">
            senha
          </label>
          <input type="password" />
        </div>
        <div>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}
export default Login;
