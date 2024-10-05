import { Linkedin, Github, Instagram } from "lucide-react"


export default function Home() {
  return (
    <>
      <main className="bg-cinzento flex-1 min-h-screen w-full text-white place-content-around">
        <div className="flex flex-col place-items-center" >
          <p className="text-2xl text-wrap">Hey There!<br/> I'M &lt;&gt;<span className="text-3xl">Carlos Henrique</span>&lt;/&gt; </p>

          <p className="text-2xl">Full Stack Developer |</p>
          <div className="flex gap-6">
            <Linkedin className="w-12 h-12 "/>
            <Github className="w-12 h-12"/>
            <Instagram className="w-12 h-12"/>
          </div>
          <div>
            <img src="/src/imgs/Eu-Programando.png" className="w-[300px] h-[300px] place-self-center" />
          </div>
        </div>
      </main>

    </>


)
}
