import CardProjeto from "/src/components/CardProjeto.jsx"
import data from "/src/data/datas.json"

export default function Projects() {
  return (
    <>
    <section className="bg-cinzento text-white flex flex-col gap-6 items-center">
      <h1 className="text-xl">&lt;&gt;Meus Projetos&lt;/&gt;</h1>
      <CardProjeto dados={data}/>
    </section>

    </>
  )
}