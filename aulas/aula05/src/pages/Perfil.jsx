import Menu from "../components/Menu";

function Perfil(props) {
    return(
        <>
            <h1>Perfil</h1>
            <Menu navegaPara={props.navegaPara} />
        </>
    )
}

export default Perfil;