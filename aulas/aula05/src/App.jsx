import { useState } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";

function App() {
  const [rota, setRota] = useState("/Login")
  return (
    <>
      {rota == "/Login" && <Login navegaPara={setRota} />}
      {rota == "/Home" && <Home navegaPara={setRota} />}
      {rota == "/Perfil" && <Perfil navegaPara={setRota}  />}
    </>
  )
}

export default App