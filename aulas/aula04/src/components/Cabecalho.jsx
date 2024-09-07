import Logo from "./Logo"
import Titulo from "./Titulo"
import InputPesquisar from "./InputPesquisar"

function Cabecalho() {
    return (
        <header>
            <Logo imagem="" texto="Logo da aplicação"/>
            <Titulo texto="Aluno Online" />
            <InputPesquisar />
            <Logo imagem="" texto="Icone pesquisar" />
        </header>
    )
}

export default Cabecalho