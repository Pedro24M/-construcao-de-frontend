import { createContext, useState } from "react";

const AuthContext = createContext();

function authProvaider() {
  const [usuario, setUsuario] = useState({
    email: "",
    perfil: "",
    logado: false,
  });

  const login = (dados) => {
    if (dados === "pedro@iesb.com" && dados.seha === "1234") {
        setUsuario({email: dados.email, perfil: "aluno", logado: true});
    }
  }

  const logout = () => {
    setUsuario({email: "", perfil: "", logado: false});
  };

  const contexto = {
    usuario,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={context}>
        {props.children}
    </AuthContext.Provider>
  )
}
