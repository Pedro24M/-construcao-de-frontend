import "./Logo.css"

function Logo(props) {
    const url = ""
    const texto = "Logo da Aplicação"
    return(
        <img className="logo" 
            src={props.imagem} 
            alt={props.texto}
        />
    );
};

export default Logo;