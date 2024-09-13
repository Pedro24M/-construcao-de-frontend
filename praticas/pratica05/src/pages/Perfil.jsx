import Botao from "../components/Botao";
import Cabecalho from "../components/Cabecalho";
import Conteudo from "../components/Conteudo";
import InputSenha from "../components/InputSenha";
import Menu from "../components/Menu";
import Secao from "../components/Secao";
import InputEmail from "../components/inputEmail";

function Perfil() {
    return (
     <>
        <Cabecalho/>
        <Conteudo>
            <Menu />
            <Secao texto="Perfil do Usuário">
                <InputSenha />
                <InputEmail />
                <Botao texto="Salvar" />
            </Secao>
        </Conteudo>
     </>
    );
  }

export default Perfil