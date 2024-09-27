import {useParams} from "react-router-dom";
import Secao from "../components/secao";
import InputEmail from "../components/InputEmail";
import Botao from "../components/Botao";
import InputSenha from "../components/InputSenha";


function Perfil() {
    const { id } = useParams();
    return(
        <>
            {id == 1 ? 
                <Secao texto="Perfil do Usuário">
                    <InputEmail valor="aluno@email.com" mudaValor={()=>{}} />
                    <InputSenha valor="" mudaValor={()=>{}} />
                    <Botao texto="Salvar" />
                </Secao>
            : <p>Usuário não encontrado</p> }
        </>

    )
}

export default Perfil