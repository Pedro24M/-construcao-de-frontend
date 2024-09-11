function InputEmail(props) {
  return (
    <>
      <label htmlFor="email">{props.texto}</label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={(e) => {
          props.mudarValor(e.target.value);
        }}
        value={props.valor}
      />
    </>
  );
}

export default InputEmail;
