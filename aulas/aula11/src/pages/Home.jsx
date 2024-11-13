import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import Menu from "../components/Menu"

function Home() {
    const {logout, usuario} = useContext(AuthContext)

    return(
        <>
        <Menu />
        <h1>Home</h1>
        <p>Olá {usuario.email}</p>
        </>
    )
}

export default Home