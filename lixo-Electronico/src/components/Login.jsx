import "./Login.css";
function Login() {
  return (
    <div className="login">
      <div className="container-login">
        <h1>login</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" placeholder="Email" />
        </div>
        <div>
          <label htmlFor="senha" >
            Senha
          </label>
          <input type="password" placeholder="password" />
        </div>
        <div>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}
export default Login;
