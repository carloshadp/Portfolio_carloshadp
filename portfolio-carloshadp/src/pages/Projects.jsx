import CardProject from "/src/components/CardProject.jsx"
import data from "/src/data/datas.json"

export default function Projects() {
  return (
    <>
    <section className="bg-cinzento text-white flex flex-col gap-6 items-center">
      <h1 className="text-xl">&lt;&gt;My Projects&lt;/&gt;</h1>
      <CardProject dados={data} />
    </section>

    </>
  )
}