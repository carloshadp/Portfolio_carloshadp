import Logo from "./Logo"
import Nav from "./Nav";

export default function Header() {
  return (
    <>
      <header className="bg-cinzento sticky top-0 z-[20] mx-auto flex flex-wrap w-full  items-center justify-between ">
        <Logo />
        <Nav/>

      </header>



    </>
  )
}
