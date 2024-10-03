import React from 'react'
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
        <>
            <nav className="w-1/3">
                <div className="flex justify-between text-white">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/Projects" className="">Projects</NavLink>
                    <NavLink to="/Skills" className="">Skills</NavLink>
                    <NavLink to="/About" className="">About</NavLink>
                </div>
                <button></button>
            </nav>
        </>
    )
}
