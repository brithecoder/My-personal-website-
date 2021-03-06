import React from "react";
import { NavLink, useHistory } from 'react-router-dom'; 

function Navbar(){
    return(
        <div className="navbar">

            
        
            <NavLink to ="/resume">
            <button className="navbarbuttoncss flex-child"> Resume </button>
            </NavLink>
            <NavLink to ="/portfolio">
            <button className="navbarbuttoncss flex-child"> Portfolio </button>
            </NavLink>
            <NavLink to ="/connect">
            <button className="navbarbuttoncss flex-child"> Connect </button>
            </NavLink>
            <NavLink to ="/">
                <button className="navbarbuttoncss flex-child"> Home</button>
            </NavLink>
        </div>
    )
}
export default Navbar;