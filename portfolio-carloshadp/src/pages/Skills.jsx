import FrontEndSkills from "../components/Skills Page/FrontEndSkills"
import BackEndSkills from "../components/Skills Page/BackEndSkills"
import Tools from "../components/Skills Page/Tools"



export default function Skills() {
  return (
    <>
    <section className="bg-cinzento text-white desktop:h-screen">

      <div className="flex flex-col items-center gap-4 mb-8">
        <h1 className="text-2xl">Front-End</h1>
        <FrontEndSkills/>
      </div>

      <div className="flex flex-col items-center gap-4 mb-8">
        <h1 className="text-2xl">Back-End</h1>
        <BackEndSkills/>
      </div>

      <div className="flex flex-col items-center gap-4 ">
        <h1 className="text-2xl">Tools</h1>
        <Tools/>
      </div>
    </section>
    </>


  )
}
