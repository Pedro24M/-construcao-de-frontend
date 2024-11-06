import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

function Home() {
    const {logout, usuario} = useContext(AuthContext)

    return(
        <>
        <h1>Home</h1>
        <p>Olá {usuario.email}</p>
        <button onClick={(e) => logout()}>Sair</button>
        </>
    )
}

export default Home