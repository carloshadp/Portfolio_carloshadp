import React from "react";
import { useParams } from "react-router-dom";

function DetalhesProjeto({ dados }) {
    const { id } = useParams();
    const projeto = dados.find((proj) => proj.id === parseInt(id));

  
    return (
      <div>
        <h1>{projeto.titulo}</h1>
        <img src={projeto.imagem} alt={projeto.titulo} />
        <p>{projeto.descricao}</p>
      </div>
    );
  }
  
  export default DetalhesProjeto;