import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Login() {
  const { login, msg } = useContext(AuthContext);

  return (
    <>
      <h1>Login</h1>
      {msg && <p>{msg}</p>}
      <button
        onClick={(e) => login({ email: "jose@iesb.br", senha: "abcd1234" })}
      >
        Entrar
      </button>
      <Link to="/registrar">Registrar</Link>
    </>
  );
}

export default Login;
