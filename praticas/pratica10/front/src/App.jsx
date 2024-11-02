import {BrowserRouter, Routes, Route} from "react-router-dom"
import Novo from "./pages/Novo";
import Listar from "./pages/Listar";
import Erro404 from "./pages/Error404";
import Editar from "./pages/Editar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Listar/>}/>
        <Route path="/Novo" element={<Novo/>}/>
        <Route path="/editar/:id" element={<Editar/>}/>
        <Route path="*" element={<Erro404/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;