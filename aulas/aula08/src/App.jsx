import { TarefaProvider } from "./contexts/TarefaContext";
import FormTarefa from "./pages/FormTarefa";
import ListaTarefas from "./pages/ListaTarefas";

function App() {
  return (
    <TarefaProvider>
      <h1>Lista de Tarefas</h1>
      <FormTarefa />
      <ListaTarefas />
    </TarefaProvider>
  );
}

export default App;
