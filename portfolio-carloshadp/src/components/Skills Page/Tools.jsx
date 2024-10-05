function Tools() {
  return (
    <section className="grid grid-cols-2 grid-rows-2 place-items-center gap-6 desktop:flex desktop:flex-wrap">
      <div className="bg-cinzento-escuro p-4 rounded-xl text-white flex flex-col items-center hover:border-[2px]">
        <h3 className="text-lg">VsCode</h3>
        <img src="/src/Assets/VsCode.svg" alt="VsCodeLogo" className="w-24 h-24"/>
      </div>

      <div className="bg-cinzento-escuro p-4 rounded-xl text-white flex flex-col items-center hover:border-[2px]">
        <h3 className="text-lg">Figma</h3>
        <img src="/src/Assets/Figma.svg" alt="FigmaLogo" className="w-24 h-24"/>
      </div>

      <div className="bg-cinzento-escuro p-4 rounded-xl text-white flex flex-col items-center hover:border-[2px]">
      <h3 className="flex flex-col items-center"><span className="text-lg">Adobe</span><span className="text-lg">Illustrator</span></h3>
        <img src="/src/Assets/adobe-illustrator.svg" alt="IlustratorLogo" className="w-24 h-24"/>
      </div>

      <div className="bg-cinzento-escuro p-4 rounded-xl text-white flex flex-col items-center hover:border-[2px]">
        <h3 className="flex flex-col items-center "><span className="text-lg">Adobe</span><span className="text-lg">Photoshop</span></h3>
        <img src="/src/Assets/adobe-photoshop.svg" alt="PhotoshorLogo" className="w-24 h-24"/>
      </div>
      
    </section>
  )
}
export default Tools;