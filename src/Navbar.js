import React from "react";
import { NavLink, useHistory } from 'react-router-dom'; 

function Navbar(){
    return(
        <div>

            
            <NavLink to ="/aboutme">
           <button className="navbarbuttoncss"> About Me </button>
            </NavLink>
            <NavLink to ="/resume">
            <button className="navbarbuttoncss"> Resume </button>
            </NavLink>
            <NavLink to ="/portfolio">
            <button className="navbarbuttoncss"> Portfolio </button>
            </NavLink>
            <NavLink to ="/connect">
            <button className="navbarbuttoncss"> Connect </button>
            </NavLink>
            <NavLink to ="/">
                <button className="navbarbuttoncss"> Home</button>
            </NavLink>
        </div>
    )
}
export default Navbar;