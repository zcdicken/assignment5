import React from 'react';
import {NavLink} from "react-router-dom";

function Nav() {
    return(
        <nav>
            <NavLink exact to={"/"}>Home</NavLink>
            <NavLink to={"/data"}>Data</NavLink>
            <NavLink to={"/cool"}>Cool</NavLink>
        </nav>
    )
}

export default Nav;