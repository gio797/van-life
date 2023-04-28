import React from "react"
import { Link } from "react-router-dom"

function Header() {
    return (
        <header>
            <Link to={"/"} className="site-logo">
                <h1>#VANLIFE</h1>
            </Link>
            <nav>
                <Link to={"/about"}>
                <h3>ABOUT</h3>
                </Link>
            </nav>
        </header>
           
    )
}

export default Header