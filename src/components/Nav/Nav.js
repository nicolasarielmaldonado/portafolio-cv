import React from 'react'
import linkedinLogo from "../../assets/logos/linkedin.png";
import githubLogo from "../../assets/logos/github.png";
import './nav.css';

export const Nav = ({open, setOpen}) => {

    return (
        <nav className={`nav-container ${open? "isOpen":""}`}>

            <button onClick={() => setOpen(false)} className="menu-button close">X</button>

            <ul className={`nav-list ${open? "isOpen":""}`}>

                <li onClick={() => setOpen(false)} className="nav-list-element">
                    <a className="nav-item" href="#inicio"><code>{"<"}</code>Inicio<code>{"/>"}</code></a>
                </li>
                <li onClick={() => setOpen(false)} className="nav-list-element">
                    <a className="nav-item" href="#sobremi"><code>{"<"}</code>Sobre mí<code>{"/>"}</code></a>
                </li>
                <li onClick={() => setOpen(false)} className="nav-list-element">
                    <a className="nav-item" href="#tecnologias"><code>{"<"}</code>Tecnologías<code>{"/>"}</code></a>
                </li>
                <li onClick={() => setOpen(false)} className="nav-list-element">
                    <a className="nav-item" href="#trabajos"><code>{"<"}</code>Trabajos<code>{"/>"}</code></a>
                </li>
                <li onClick={() => setOpen(false)} className="nav-list-element">
                    <a className="nav-item" href="#contacto"><code>{"<"}</code>Contacto<code>{"/>"}</code></a>
                </li>

                <div className="network-container">
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
