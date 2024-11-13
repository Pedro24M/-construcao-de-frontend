function InputEmail(props) {
  const regras = {
    require: "Email é Obrigatorio",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Formato de email inválido",
    },
  };

  return (
    <>
      <label htmlFor="email">Email:</label>
      <input type="email" {...props.register("email", regras)} />
      {props.error && <p>{props.error}</p>}
    </>
  );
}

export default InputEmail;
