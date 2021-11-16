import React from 'react'
import "./menu.scss"

const Menu = ({ menuOpen, setMenuOpen }) => {

    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li>
                    <a href="#intro" onClick={() => !setMenuOpen()}>INTRO</a>
                </li>
                <li>
                    <a href="#portfolio" onClick={() => !setMenuOpen()}>PORTFOLIO</a>
                </li>
                {/* <li>
                    <a href="#works" onClick={() => !setMenuOpen()}>WORKS</a>
                </li>
                <li>
                    <a href="#projects" onClick={() => !setMenuOpen()}>PROJECTS</a>
                </li>
                <li>
                    <a href="#contact" onClick={() => !setMenuOpen()}>CONTACT</a>
                </li> */}
            </ul>
        </div>
    )
}

export default Menu