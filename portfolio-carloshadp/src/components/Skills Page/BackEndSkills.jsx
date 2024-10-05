function BackEndSkills() {
  return (
    <section className="grid grid-cols-2 grid-rows-2 place-items-center gap-6 desktop:flex desktop:flex-wrap">
        <div className="bg-cinzento-escuro p-4 rounded-xl text-white flex flex-col items-center hover:border-[2px]">
          <h3 className="text-lg">Python</h3>
          <img src="/src/Assets/Python.svg" alt="PythonLogo" className="w-24 h-24"/>
        </div >

        <div className="bg-cinzento-escuro p-4 rounded-xl text-white flex flex-col items-center hover:border-[2px]">
          <h3 className="text-lg">C++</h3>
          <img src="/src/Assets/C++.svg" alt="C++Logo" className="w-24 h-24"/>
        </div>

        <div className="bg-cinzento-escuro p-4 rounded-xl text-white flex flex-col items-center hover:border-[2px]">
          <h3 className="text-lg">Arduino</h3>
          <img src="/src/Assets/Arduino.svg" alt="ArduinoLogo" className="w-24 h-24"/>
        </div>

        <div className="bg-cinzento-escuro p-4 rounded-xl text-white flex flex-col items-center hover:border-[2px]">
          <h3 className="text-lg">Git</h3>
          <img src="/src/Assets/Git.svg" alt="GitLogo" className="w-24 h-24"/>
        </div>

      </section>
  )
}
export default BackEndSkills;
