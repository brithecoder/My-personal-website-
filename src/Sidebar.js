import React from "react";
import { NavLink, useHistory } from 'react-router-dom'; 

function Sidebar({setOpen}){

    return(
        <div className="sidebar">
            <div>   
            <NavLink to ="/resume">
            <button className="navbarbuttoncss flex-child" onClick={()=>setOpen(false)}> Resume </button>
            </NavLink>
            <NavLink to ="/portfolio">
            <button className="navbarbuttoncss flex-child" onClick={()=>setOpen(false)}> Portfolio </button>
            </NavLink>
            <NavLink to ="/connect">
            <button className="navbarbuttoncss flex-child" onClick={()=>setOpen(false)}> Connect </button>
            </NavLink>
            <NavLink to ="/">
                <button className="navbarbuttoncss flex-child" onClick={()=>setOpen(false)}> Home</button>
            </NavLink>
            </div>   
        </div>

    )
}
export default Sidebar;