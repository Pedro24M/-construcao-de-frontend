import {useForm} from "react-hook-form"
import InputEmail from "../components/inputEmail";
import InputSenha from "../components/inputSenha";
import InputNome from "../components/inputNome";

function FormPerfil() {
    const {register, handleSubmit, formState: {errors}} = useForm()
    return(
        <>
            <form onSubmit={handleSubmit((data) => {})}>
                <InputNome register={register} error={errors.nome}/>
                <InputEmail register={register} error={errors.email}/>
                <InputSenha register={register} error={errors.senha}/>
                <button>Entrar</button>
            </form>
        </>
    );
};

export default FormPerfil