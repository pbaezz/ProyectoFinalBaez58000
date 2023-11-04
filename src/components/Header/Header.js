import React from 'react';
import Logo from "./assets/level.jpg";

function Header() {
    return (
        <nav id="levelNav">
            <a className="navbar-brand" href="index.html">
                <img src={Logo} alt="LogoPink" />
            </a>
        </nav>
    )
}

export default Header;