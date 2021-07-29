import React, { useRef, useState } from 'react';
import { Nav } from '../Nav/Nav';
import { Title } from '../Title/Title';

import './main.css';

export const Main = ({scrollRef, screenPos}) => {

    const button = useRef(null);

    const [open, setOpen] = useState(false);
    
    return (
        <div className="home-container" id="inicio">
            <div className="top-container">

                <p className={`tags ${screenPos>=1 && "tags-appear"}`}><code>{"<"}</code>{`html`}<code>{">"}</code></p>
                <p className={`tags ${screenPos>=1 && "tags-appear"} body`}><code>{"<"}</code>{`body`}<code>{">"}</code></p> 

                <button ref={button} onClick={() => setOpen(true)} className="menu-button" aria-label="Menu">
                    <span className="dots"></span>
                    <span className="dots"></span>
                    <span className="dots"></span>
                </button>
                
            </div>

            <Nav open={open} setOpen={setOpen}/>

            <Title screenPos={screenPos} scrollRef={scrollRef}/>
                
        </div>
    )
}
