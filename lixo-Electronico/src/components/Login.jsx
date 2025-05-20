function Login() {
  return (
    <div className='container-login'>
      <h1>login</h1>
      <div>
        <label htmlFor="email">email</label>
        <input type="text" placeholder="Email" />
      </div>
      <div>
        <label htmlFor="senha" placeholder='password'>senha</label>
        <input type="password" />
      </div>
      <div>
        <button>Login</button>
      </div>
    </div>
  );
}
export default Login;
