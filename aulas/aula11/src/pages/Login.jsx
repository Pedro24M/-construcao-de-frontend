import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import Formulario from "./Formulario";

function Login() {
  const [msg, setMsg] = useState("")
  const { login} = useContext(AuthContext);

  const onEnviar = async (data) => {
    setMsg("");
    const erro = await login(data)
    if (erro) {
      setMsg(erro)
    }
  }

  return (
    <>
      <h1>Login</h1>
      {msg && <p>{msg}</p>}
      <Formulario onEnviar={onEnviar} />
      <Link to="/registrar">Registrar</Link>
    </>
  );
}

export default Login;
