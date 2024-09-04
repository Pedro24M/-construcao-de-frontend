function InputUsuario() {
    return(
        <>
            <label htmlFor="usuario">Usuario</label>
            <input type="email" id="usuario" name="usuario" required></input>
        </>
    );
};

export default InputUsuario;