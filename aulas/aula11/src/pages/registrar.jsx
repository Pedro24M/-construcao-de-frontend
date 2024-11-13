import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Formulario from "./Formulario";

function Registrar() {
  const [msg, setMsg] = useState("")
  const navigate = useNavigate();
  const { registrar } = useContext(AuthContext);

  const onEnviar = async (data) => {
    setMsg("");
    const erro = await registrar(data)
    if (erro) {
      setMsg(erro);
    } else {
      navigate("/")
    }
  }
  return (
    <>
      <h1>Registrar</h1>
      {msg && <p>{msg}</p>}
      <Formulario onEnviar={onEnviar} />
      <Link to="/" >Voltar</Link>
    </>
  );
}

export default Registrar;