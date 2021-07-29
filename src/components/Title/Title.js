import React from 'react';
import './title.css';

export const Title = ({scrollRef, screenPos}) => {

    return (
        <>
            <div className="main-container">
                
                <div className="title-container">

                    <div className={`big ${screenPos>=1 && "big-appear"} `}>Hola, soy</div>
                    <p className={`tags ${screenPos>=1 && "tags-appear"} h1`}><code>{"<"}</code>{`h1`}<code>{">"}</code></p>

                    <h1 className={`title ${screenPos>=1 && "title-appear"}`}><span className="first-letter">N</span>icolás <span className="first-letter">M</span>aldonado</h1>
                    
                    <p className={`tags ${screenPos>=1 && "tags-appear"} h1`}><code>{"</"}</code>{`h1`}<code>{">"}</code></p>

                </div>

                <div className="h3-container">

                    <p className={`tags ${screenPos>=1 && "tags-appear"} h2`}><code>{"<"}</code>{`h2`}<code>{">"}</code></p>

                    <h2 className={`h3-title ${screenPos>=1 && "h3-title-appear"}`}>Desarrollador Front-End</h2>
                    
                    <p className={`tags ${screenPos>=1 && "tags-appear"} h2`} ><code>{"</"}</code>{`h2`}<code>{">"}</code></p>

                </div>
            </div>


            <div ref={scrollRef} className="scroll-left">
                    <span>Scroll Down</span>
                    <svg className="arrow-container" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" >
                        <path className="arrow" d="M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z"></path>
                    </svg>
            </div>
        </>
    )
}
