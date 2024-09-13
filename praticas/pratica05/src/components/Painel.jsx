import "./Painel.css"

function Painel(props) {
    return (
     <article>
       <h3>{props.texto}</h3>
       <ul></ul>
     </article>
    );
  }

export default Painel