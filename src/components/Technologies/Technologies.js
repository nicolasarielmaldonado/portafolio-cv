import React from 'react'
import javascriptLogo from '../../assets/logos/javascript.png';
import htmlLogo from '../../assets/logos/html.png';
import cssLogo from '../../assets/logos/css.png';
import jqueryLogo from '../../assets/logos/jquery.png';
import bootstrapLogo from '../../assets/logos/bootstrap.png';
import gitLogo from '../../assets/logos/git.png';
import nodeLogo from '../../assets/logos/node.png';
import npmLogo from '../../assets/logos/npm.png';
import reactLogo from '../../assets/logos/react.png';
import styledLogo from '../../assets/logos/styled.png';
import tailwindLogo from '../../assets/logos/tailwind.png';
import javaLogo from '../../assets/logos/java.png';
import { TechnologiesElement } from '../TechnologiesElement/TechnologiesElement';

import './technologies.css';

const TecElements= [
    {
        id:1,
        imgSource: javascriptLogo,
        description: "Javascript",
        alt:"javascript-logo",
    },
    {
        id:2,
        imgSource: htmlLogo,
        description: "HTML5",
        alt:"html-logo",
    },
    {
        id:3,
        imgSource: cssLogo,
        description: "CSS3",
        alt:"css-logo",
    },
    {   
        id:4,
        imgSource: jqueryLogo,
        description: "JQuery",
        alt:"jquery-logo",
    },
    {
        id:5,
        imgSource: bootstrapLogo,
        description: "Bootstrap",
        alt:"bootstrap-logo",
    },
    {
        id:6,
        imgSource: gitLogo,
        description: "Git",
        alt:"git-logo",
    },
    {
        id:7,
        imgSource: nodeLogo,
        description: "Node.js",
        alt:"node-logo",
    },
    {
        id:8,
        imgSource: npmLogo,
        description: "npm",
        alt:"npm-logo",
    },
    {
        id:9,
        imgSource: reactLogo,
        description: "React.js",
        alt:"react-logo",
    },
    {
        id:10,
        imgSource: styledLogo,
        description: "Styled Components",
        alt:"styled-components-logo",
    },
    {
        id:11,
        imgSource: tailwindLogo,
        description: "Tailwind.css",
        alt:"tailwind-logo",
    },
    {
        id:12,
        imgSource: javaLogo,
        description: "Java",
        alt:"java-logo",
    },
];

const Technologies = ({screenPos}) => {
    return (
        <section className="section-container" >
            <div id="tecnologias" className={`big ${screenPos>=3 && "big-appear"} `}>Tecnologías</div>

            <p className={`tags section ${screenPos>=3 && "tags-appear"}`}><code>{"<"}</code>{`section`}<code>{">"}</code></p>
            <p className={`tags grid ${screenPos>=3 && "tags-appear"}`}><code>{"<"}</code>{`div`}<code>{">"}</code></p>

            <div className="tec-grid">

                {TecElements.map(({id, imgSource, description, alt}) => (
                                <TechnologiesElement
                                    key={id}
                                    screenPos={screenPos}
                                    imgSource={imgSource} 
                                    description={description}
                                    alt={alt}
                            
                        />
                    ))}
                    
            </div>
            
            <p className={`tags grid ${screenPos>=3? "tags-appear": ""}`}><code>{"</"}</code>{`div`}<code>{">"}</code></p>
            <p className={`tags section ${screenPos>=3? "tags-appear": ""}`}><code>{"</"}</code>{`section`}<code>{">"}</code></p>
        </section>
    )
}

export default Technologies;
