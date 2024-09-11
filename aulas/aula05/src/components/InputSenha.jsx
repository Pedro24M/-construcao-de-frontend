function InputSenha(props) {
  return (
    <>
      <label htmlFor="senha">{props.texto}</label>
      <input
        type="password"
        id="senha"
        name="senha"
        onChange={(e) => {props.mudarValor(e.target.value)}}
        value={props.valor}
      ></input>
    </>
  );
}

export default InputSenha;
