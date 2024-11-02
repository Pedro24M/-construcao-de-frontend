import { useForm } from "react-hook-form";
import InputNome from "../components/InputNome";
import InputTelefone from "../components/InputTelefone";

function Formulario(props) {
  console.log(props.dados)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ values: props.dados});

  return (
    <form onSubmit={handleSubmit(props.trataEnviar)}>
      <InputNome register={register} error={errors.nome} />
      <InputTelefone register={register} error={errors.telefone} />
      <button type="submit">Salvar</button>
    </form>
  );
}

export default Formulario