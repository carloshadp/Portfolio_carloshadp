import { Link } from "react-router-dom"

 function CardProjeto({dados}) {
  return (
    <>
      {
        dados.map((card, index) => (
            <Link to={`/Projects/${card.id}`} key={index}>
                <section className="bg-cinzento-escuro w-48 h-56 rounded-2xl flex flex-col items-center justify-center hover:border-[2px] ">
                    <h3>Projeto {index + 1}</h3>
                    <img src={card.imagem} className="w-28" />
                    <h2 className="text-lg ">{card.titulo}</h2>
                    <p className="text-sm ">Clique para <br/>saber mais..</p>
                </section>
            </Link>
        ))
      }
    </>
  )
}

export default CardProjeto;