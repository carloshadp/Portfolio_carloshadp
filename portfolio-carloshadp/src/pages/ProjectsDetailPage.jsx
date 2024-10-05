import React from "react";
import { useParams } from "react-router-dom";
import {GitBranch} from "lucide-react"
function ProjectsDetail({ dados }) {
    const { id } = useParams();
    const projeto = dados.find((proj) => proj.id === parseInt(id));

  
    return (
      <section className="bg-cinzento text-white flex flex-col w-full h-screen items-center">
        <div className="flex items-center gap-2">
          <img className="w-20 h-20" src={projeto.imagem} alt={projeto.titulo} />
          <h1 className="text-2xl">{projeto.titulo}</h1>
        </div>

        <div>
          <p className="w-[350px]">{projeto.descricao}</p>
          <div className="flex w-full justify-center">
            <GitBranch/>
            <a href={projeto.link} className="hover:text-zinc-500">Link do Repo</a>
          </div>
        </div>
      </section>
    );
  }
  
  export default ProjectsDetail;