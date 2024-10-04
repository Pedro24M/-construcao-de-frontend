import Menu from "../components/Menu";
import FormPerfil from "./formPerfil";

function Perfil() {
    return(
        <>
            <h1>Aluno Online</h1>
            <main>
                <Menu />
                <section>
                    <FormPerfil />
                </section>
            </main>
            
        </>
    );
};

export default Perfil