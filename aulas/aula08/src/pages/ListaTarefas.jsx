import { useContext } from "react";
import { TarefaContext } from "../contexts/TarefaContext";

function ListaTarefas() {
    const { tarefas, remover } = useContext(TarefaContext)

    return(
        <ul>
            {tarefas.map((item, index) => <li key={index}>{item} <button onClick={() => remover(item)}>Remover</button></li>)}
        </ul>
    );
};

export default ListaTarefas;