import { Linkedin, Github, Instagram } from "lucide-react"

export default function Home() {
  return (
    <>
      <main className="bg-cinzento flex-1 min-h-screen w-full  text-white place-content-around ">
        <div className="flex flex-col desktop:grid desktop:grid-rows-2 desktop:grid-cols-2 place-items-center gap-5" >
          <div>
            <div>
              <p className="text-2xl desktop:text-4xl text-wrap">Hey There!<br/> I'M &lt;&gt;<span className="text-3xl">Carlos Henrique</span>&lt;/&gt; </p>
              <p className="text-2xl desktop:text-4xl">Full Stack Developer |</p>
            </div>

            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/carlos-henrique-048a4b270/"><Linkedin className="w-12 h-12 "/></a>
              <a href="https://github.com/carloshadp"><Github className="w-12 h-12"/></a>
              <a href="https://www.instagram.com/carloshadp/"><Instagram className="w-12 h-12"/></a>
            </div>

          </div>
          <div className="row-span-2">
            <img src="/../imgs/Eu-Programando.png" className="w-[300px] h-[300px] desktop:w-[450px] desktop:h-[450px] place-self-center" />
          </div>
        </div>
      </main>

    </>


)
}
