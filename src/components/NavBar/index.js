import React from "react"
import { NavLink } from "react-router-dom"

const NavBar = ({...props})=>{
    return (
        <ul>
            <li><h1>Google Book Search</h1></li>
            <li>
                <NavLink to="/" activeClassName="active">
                    Search
                </NavLink>
            </li>
            <li>
                <NavLink to="/saved" activeClassName="active">
                    Saved
                </NavLink>
            </li>
        </ul>
    )
}

export default NavBar;