import {BrowserRouter ,Route, Routes} from "react-router-dom"
import { useState } from "react"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Perfil from "./pages/Perfil"
import Error404 from "./pages/Error404"

function App() {
  const [logado, setLogado] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        {logado ? (
        <>
          <Route path="/home" element={<Home/>}/>
          <Route path="/perfil" element={<Perfil/>}/>
        </>
        ) : (
        <Route path="/" element={<Login onEntrar={setLogado}/>}/>
        )}
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App