import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Registrar() {
  const navigate = useNavigate();
  const { Registrar } = useContext(AuthContext);
  return (
    <>
      <h1>Registrar</h1>
      <button
        onClick={() => {
          Registrar({ email: "pedro@iesb.br", senha: "123456" });
          navigate("/")
        }}
      >
        Enviar
      </button>
    </>
  );
}

export default Registrar;
