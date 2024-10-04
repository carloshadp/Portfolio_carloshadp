import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import {Menu, X} from "lucide-react";

export default function Nav() {

    const [isOpen, setIsOpen] = useState(false)

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

  return (
        <>
            <nav className="flex w-1/3 justify-end">
                <div className="hidden w-full tablet:flex justify-between text-white items-center mr-5">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/Projects" className="">Projects</NavLink>
                    <NavLink to="/Skills" className="">Skills</NavLink>
                    <NavLink to="/About" className="">About</NavLink>
                </div>
                <div className="tablet:hidden">
                    <button onClick={toggleNavbar}>{isOpen ? <X className="text-white" /> : <Menu className="text-white"/>}</button>
                </div>
            </nav>
            {isOpen && (
                <div className="tablet:hidden text-white flex flex-col items-center basis-full mb-5"> 
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/Projects" className="">Projects</NavLink>
                    <NavLink to="/Skills" className="">Skills</NavLink>
                    <NavLink to="/About" className="">About</NavLink>
                </div>
            )}
        </>
    )
}
