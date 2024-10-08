import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import {Menu, X} from "lucide-react";
import "../StyleSheets/hovers.css";

export default function Nav() {

    const [isOpen, setIsOpen] = useState(false)

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

  return (
        <>
            <nav className="flex w-1/3 justify-end">
                <div className="hidden w-full tablet:flex justify-between text-white items-center mr-5">
                    <NavLink to="/" className="hovers" >Home</NavLink>
                    <NavLink to="/Projects" className="hovers">Projects</NavLink>

                    <NavLink to="/Skills" className="hovers">Skills</NavLink>

                    <NavLink to="/About" className="hovers">About</NavLink>
                </div>
                <div className="tablet:hidden">
                    <button onClick={toggleNavbar}>{isOpen ? <X className="text-white" /> : <Menu className="text-white mr-5"/>}</button>
                </div>
            </nav>
            {isOpen && (
                <div className="tablet:hidden text-white text-xl flex flex-col items-center basis-full mb-5"> 
                    <NavLink to="/" className="hovers">Home</NavLink>
                    <NavLink to="/Projects" className="hovers">Projects</NavLink>
                    <NavLink to="/Skills" className="hovers">Skills</NavLink>
                    <NavLink to="/About" className="hovers">About</NavLink>
                </div>
            )}
        </>
    )
}
