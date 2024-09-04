import BotaoSubmit from "../components/BotaoSubmit"
import Link from "../components/Link"
import Logo from "../components/Logo"
import Rodape from "../components/Rodape"
import Titulo from "../components/Titulo"
import InputSenha from "../components/inputSenha"
import InputUsuario from "../components/inputUsusario"
import "./login.css";

function Login() {
    const urlImagem = "https://www.svgrepo.com/show/489120/school.svg"
    const textoLogo = "Logo da Aplicação"
    return (
        <>
            <main className="login-form">
                <Logo imagem={urlImagem} texto={textoLogo} />
                <Titulo texto="Aluno Online"/>
                <InputUsuario />
                <InputSenha />
                <BotaoSubmit texto="Entrar"/>
                <Link texto="Esqueceu a Senha" linky="#"/>
                <Link texto="Criar uma Conta" linky="#"/>
            </main>
            <Rodape />
        </>
    )
}

export default Login