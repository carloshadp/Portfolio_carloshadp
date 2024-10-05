import {MessageCircle, Mail} from "lucide-react"


export default function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-b from-cinzento to-black w-full flex flex-col justify-around tablet:justify-center">
        <div className="text-white flex flex-col items-center gap-4 tablet:flex-row tablet:justify-around ">
        <div>
          <img src="/src/imgs/carloshadp-logo.png" alt="Logo Carlos" className="w-16 h-16" />
        </div>
          <div className="flex flex-col items-center">
            <div>
              <h3 className="text-lg">Personal Contact</h3>
            </div>
            <div className="flex">
              <MessageCircle />
              <a className="hover:text-zinc-500" href="https://wa.me/5511949843889" target="blank">(11)94984-3889</a>
            </div>
            <div className="flex">
              <Mail />
              <a className="hover:text-zinc-500" href="mailto:carloshadp@gmail.com" target="blank">carloshadp@gmail.com</a>
            </div>
          </div>
          <div>
            <p>©2024 Carloshadp </p>
          </div>
        </div>
      </footer>
    </>
  )
}
