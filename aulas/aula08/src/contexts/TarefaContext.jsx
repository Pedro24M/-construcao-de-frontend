import { useState, createContext } from "react";

const TarefaContext = createContext();

function TarefaProvider(props) {
  const [tarefas, setTarefas] = useState([]);

  const carregar = () => {
    fetch("http://localhost:3000/tarefas")
      .then((response) => response.json())
      .then((data) => setTarefas(data))
      .catch((error) => console.log("deu ruim!", error.message));
  };

  const incluir = (tarefa) => {
    setTarefas([...tarefas, tarefa]);
  };

  const remover = (tarefa) => {
    setTarefas(tarefas.filter((item) => item != tarefa));
  };

  const contexto = { tarefas, incluir, remover, carregar};

  return (
    <TarefaContext.Provider value={contexto}>
      {props.children}
    </TarefaContext.Provider>
  );
}

export { TarefaContext, TarefaProvider };
