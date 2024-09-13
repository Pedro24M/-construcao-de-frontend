import Icone from "./Icone";
import InputPesquisar from "./InputPesquisar";
import Titulo from "./Titulo";
import "./Cabecalho.css"

function Cabecalho() {
    return (
     <header>
        <div>
            <Icone imagem="" texto=""/>
            <Titulo texto="" />
        </div>
        <div>
            <InputPesquisar />
            <Icone imagem="" texto="" />
        </div>
     </header>
    );
  }

export default Cabecalho