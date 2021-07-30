import React from 'react'
import linkedinLogo from "../../assets/logos/linkedin.png";
import githubLogo from "../../assets/logos/github.png";
import './menu.css';

export const Menu = () => {

    return (
        <nav className="menu" >
            <ul className="menu-list-container">

                <li className="menu-list-element">
                    <a className="menu-item" href="#inicio"><code>{"<"}</code>Inicio<code>{"/>"}</code></a>
                </li>
                <li className="menu-list-element">
                    <a className="menu-item" href="#sobremi"><code>{"<"}</code>Sobre mí<code>{"/>"}</code></a>
                </li>
                <li className="menu-list-element">
                    <a className="menu-item" href="#tecnologias"><code>{"<"}</code>Tecnologías<code>{"/>"}</code></a>
                </li>
                <li className="menu-list-element">
                    <a className="menu-item" href="#trabajos"><code>{"<"}</code>Trabajos<code>{"/>"}</code></a>
                </li>
                <li className="menu-list-element">
                    <a className="menu-item" href="#contacto"><code>{"<"}</code>Contacto<code>{"/>"}</code></a>
                </li>

                <div className="menu-network-container">
                    <a href="https://github.com/nicolasarielmaldonado" rel="noreferrer" target="_blank">
                        <img src={githubLogo} alt="github" className="network-logos" />
                    </a>

                    <a href="https://www.linkedin.com/in/nicolas-maldonado-646922198/" rel="noreferrer" target="_blank">
                        <img src={linkedinLogo} alt="linkedin" className="network-logos" />
                    </a>
                </div>

            </ul>
        </nav>
    )
}
