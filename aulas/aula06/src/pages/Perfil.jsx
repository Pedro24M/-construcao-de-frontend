import { useParams } from "react-router-dom";

function Perfil() {
    const {id} = useParams()
    return(
        <>
            {id == 1
            ? <h2>Pagina de Usuario</h2>
            : <p>Nun pode!!!</p>}
        </>
    );
};

export default Perfil