import React from "react"
import { Link } from "react-router-dom"

function Header() {
    return (
        <header>
            <Link to={"/"} className="site-logo">#VANLIFE</Link>
            <nav>
                <Link to={"/host"}>HOST</Link>
                <Link to={"/about"}>ABOUT</Link>
                <Link to={"/vans"}>VANS</Link>
            </nav>
        </header>
           
    )
}

export default Header