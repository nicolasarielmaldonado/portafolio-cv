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

import './technologies.css';



const Technologies = ({screenPos}) => {
    return (
        <section className="section-container" >
            <div id="tecnologias" className={`big ${screenPos>=3 && "big-appear"} `}>Tecnologías</div>

            <p className={`tags section ${screenPos>=3 && "tags-appear"}`}><code>{"<"}</code>{`section`}<code>{">"}</code></p>
            <p className={`tags grid ${screenPos>=3 && "tags-appear"}`}><code>{"<"}</code>{`div`}<code>{">"}</code></p>

            <div className="tec-grid">
                <div className={`tec-grid-element ${screenPos>=3 && "tec-grid-element-appear"}`}>
                    <img className="tec-grid-element-img" alt="javascript-logo" src={javascriptLogo}/>
                    <h3 className="tec-grid-element-subtitle">Javascript</h3>
                </div>
                <div className={`tec-grid-element ${screenPos>=3 && "tec-grid-element-appear"}`}>
                    <img className="tec-grid-element-img" alt="html-logo" src={htmlLogo}/>
                    <h3 className="tec-grid-element-subtitle">HTML5</h3>
                </div>
                <div className={`tec-grid-element ${screenPos>=3 && "tec-grid-element-appear"}`}>
                    <img className="tec-grid-element-img" alt="css-logo" src={cssLogo}/>
                    <h3 className="tec-grid-element-subtitle">CSS3</h3>
                </div>
                <div className={`tec-grid-element ${screenPos>=3 && "tec-grid-element-appear"}`}>
                    <img className="tec-grid-element-img" alt="jquery-logo" src={jqueryLogo}/>
                    <h3 className="tec-grid-element-subtitle">JQuery</h3>
                </div>
                <div className={`tec-grid-element ${screenPos>=3 && "tec-grid-element-appear"}`}>
                    <img className="tec-grid-element-img" alt="bootstrap-logo" src={bootstrapLogo}/>
                    <h3 className="tec-grid-element-subtitle">Bootstrap</h3>
                </div>
                <div className={`tec-grid-element ${screenPos>=3 && "tec-grid-element-appear"}`}>
                    <img className="tec-grid-element-img" alt="git-logo" src={gitLogo}/>
                    <h3 className="tec-grid-element-subtitle">Git</h3>
                </div>
                <div className={`tec-grid-element ${screenPos>=3 && "tec-grid-element-appear"}`}>
                    <img className="tec-grid-element-img" alt="node-logo" src={nodeLogo}/>
                    <h3 className="tec-grid-element-subtitle">Node.js</h3>
                </div>
                <div className={`tec-grid-element ${screenPos>=3 && "tec-grid-element-appear"}`}>
                    <img className="tec-grid-element-img" alt="npm-logo" src={npmLogo}/>
                    <h3 className="tec-grid-element-subtitle">npm</h3>
                </div>
                <div className={`tec-grid-element ${screenPos>=3 && "tec-grid-element-appear"}`}>
                    <img className="tec-grid-element-img" alt="react-logo" src={reactLogo}/>
                    <h3 className="tec-grid-element-subtitle">React.js</h3>
                </div>
                <div className={`tec-grid-element ${screenPos>=3 && "tec-grid-element-appear"}`}>
                    <img className="tec-grid-element-img" alt="styled-components-logo" src={styledLogo}/>
                    <h3 className="tec-grid-element-subtitle">Styled Components</h3>
                </div>
                <div className={`tec-grid-element ${screenPos>=3 && "tec-grid-element-appear"}`}>
                    <img className="tec-grid-element-img" alt="tailwind-logo" src={tailwindLogo}/>
                    <h3 className="tec-grid-element-subtitle">Tailwind.css</h3>
                </div>
                <div className={`tec-grid-element ${screenPos>=3 && "tec-grid-element-appear"}`}>
                    <img className="tec-grid-element-img" alt="java-logo" src={javaLogo}/>
                    <h3 className="tec-grid-element-subtitle">Java</h3>
                </div>
            </div>
            
            <p className={`tags grid ${screenPos>=3? "tags-appear": ""}`}><code>{"</"}</code>{`div`}<code>{">"}</code></p>
            <p className={`tags section ${screenPos>=3? "tags-appear": ""}`}><code>{"</"}</code>{`section`}<code>{">"}</code></p>
        </section>
    )
}

export default Technologies;
