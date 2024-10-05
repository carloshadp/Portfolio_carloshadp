function FrontEndSkills() {
  return (
    <section className="grid grid-cols-2 grid-rows-2 place-items-center gap-6 desktop:flex desktop:flex-wrap">
          <div className="bg-cinzento-escuro p-4 rounded-xl text-white flex flex-col items-center hover:border-[2px]">
            <h3 className="text-lg">HTML</h3>
            <img src="/src/Assets/Html.svg" alt="Html-logo" className="w-24 h-24"/>
          </div>

          <div className="bg-cinzento-escuro p-4 rounded-xl text-white flex flex-col items-center hover:border-[2px]">
            <h3 className="text-lg">CSS</h3>
            <img src="/src/Assets/Css.svg" alt="Css-logo" className="w-24 h-24"/>
          </div>

          <div className="bg-cinzento-escuro p-4 rounded-xl text-white flex flex-col items-center hover:border-[2px]">
            <h3 className="text-lg">JavaScript</h3>
            <img src="portfolio-carloshadp\src\Assets\JavaScript.svg" alt="Js-logo" className="w-24 h-24"/>
          </div>

          <div className="bg-cinzento-escuro p-4 rounded-xl text-white flex flex-col items-center hover:border-[2px]">
            <h3 className="text-lg">React</h3>
            <img src="/src/Assets/React.svg" alt="React-logo" className="w-24 h-24"/>
          </div>
      </section>
  )
}
export default FrontEndSkills;
