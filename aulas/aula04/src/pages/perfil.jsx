import BotaoSubmit from "../components/BotaoSubmit"
import Cabecalho from "../components/Cabecalho"
import Conteudo from "../components/Conteudo"
import InputSenha from "../components/InputSenha"
import InputUsuario from "../components/InputUsusario"
import Menu from "../components/Menu"
import Secao from "../components/Secao"

function Perfil() {
    return (
        <>
            <Cabecalho />
            <Conteudo>
                <Menu />
                <Secao texto="Perfil de Usuario">
                    <InputUsuario />
                    <InputSenha />
                    <BotaoSubmit texto="salvar" />
                </Secao>
            </Conteudo>
        </>
    )
}

export default Perfil