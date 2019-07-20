import React from "react"
import { NavLink } from "react-router-dom"

const NavBar = ({...props})=>{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <h1 className="nav-brand text-light">Google Book Search</h1>
            <NavLink className="nav-link" 
                         to="/" 
                         activeClassName="active">
                    Search
            </NavLink>
            <NavLink className="nav-link" 
                         to="/saved" 
                         activeClassName="active">
                    Saved
            </NavLink>
        </nav>
    )
}

export default NavBar;