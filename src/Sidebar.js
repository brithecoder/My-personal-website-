import React from "react";
import { NavLink, useHistory } from 'react-router-dom'; 

function Sidebar(){
    return(
        <div className="sidebar">
            <div>   
            <NavLink to ="/aboutme">
           <button className="navbarbuttoncss flex-child"> About Me </button>
            </NavLink>
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
        </div>

    )
}
export default Sidebar;