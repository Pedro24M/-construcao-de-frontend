import { useState } from "react";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";
import Botao from "../components/botao";

function FormLogin(props) {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    const efetuarLogin = (e) => {
        e.preventDefault()
        props.navegaPara("/Home")
        //Chamada ao backend
    }
    return(
        <form onSubmit={efetuarLogin}>
            <InputEmail texto="E-mail" valor={email} mudarValor={setEmail}/>
            <InputSenha texto="Senha" valor={senha} mudarValor={setSenha}/>
            <Botao texto="Entrar"/>
        </form>
    )
}

export default FormLogin