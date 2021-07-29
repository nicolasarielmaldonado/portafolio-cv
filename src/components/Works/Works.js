import React, { useState } from 'react';
import { WorkCard } from '../WorkCard/WorkCard';
import { CustomSlider } from '../CustomSlider/CustomSlider';
import useWindowSize from '../../hooks/useWindowSize';

import ecommerce1 from '../../assets/screenshots/ecommerce-1.webp';
import socialmedia1 from '../../assets/screenshots/socialmedia-2.webp';
import step1 from '../../assets/screenshots/step-1.webp';
import card1 from '../../assets/screenshots/card-1.webp';
import deployedLogo from "../../assets/logos/deployed.png";
import githubLogo from "../../assets/logos/github.png";

import './works.css';


const cards= [
    {
        number:1,
        id:"ecommerceimg",
        imgSource:ecommerce1,
        description:"Pagina de E-Commerce desarrollada utilizando ReactJs y llamadas a API.",
        hrefGit:"https://github.com/nicolasarielmaldonado/react-ecommerce",
        hrefDeploy:"https://nicolasarielmaldonado.github.io/react-ecommerce/#/",
        logoGitSource:githubLogo,
        logoDeploySource:deployedLogo,
    },
    {
        number:2,
        id:"socialmediaimg",
        imgSource:socialmedia1,
        description:"Diseño de dashboard de redes sociales, utilizando ReactJs y Tailwind.css.",
        hrefGit:"https://github.com/nicolasarielmaldonado/social-media-dashboard",
        hrefDeploy:"https://nicolasarielmaldonado.github.io/social-media-dashboard",
        logoGitSource:githubLogo,
        logoDeploySource:deployedLogo,
    },
    {   
        number:3,
        id:"cardimg",
        imgSource:card1,
        description:"Ejercicio de diseño de Front-End Mentor.",
        hrefGit:"https://github.com/nicolasarielmaldonado/EjercicioFrontEndMentor-formSignUp",
        logoGitSource:githubLogo,
    },
    {
        number:4,
        id:"stepimg",
        imgSource:step1,
        description:"Juego Web desarrollado integramente en Js. Proyecto en desarollo.",
        hrefGit:"https://github.com/nicolasarielmaldonado/ProyectoStep",
        logoGitSource:githubLogo,
    },
];

const Works = ({screenPos}) => {

    const [clickedItem, setClickedItem] = useState(0);

    let size = useWindowSize();

    return (
        <section className="section-container" >
            <div id="trabajos" className={`big ${screenPos>=4 && "big-appear"} `}>Trabajos</div>
            <p className={`tags section ${screenPos>=4 && "tags-appear"}`}><code>{"<"}</code>{`section`}<code>{">"}</code></p>
            <p className={`tags grid ${screenPos>=4 && "tags-appear"}`}><code>{"<"}</code>{`div`}<code>{">"}</code></p>
            
            { size.width < 700 ?
                <div className="works-grid">
                    {cards.map(({number, id, imgSource, description, hrefGit, hrefDeploy, logoGitSource, logoDeploySource}) => (
                            <WorkCard
                            key={id}
                            screenPos={screenPos}
                            clickedItem={clickedItem}
                            setClickedItem={setClickedItem}
                            number={number} 
                            id={id} 
                            imgSource={imgSource} 
                            description={description}
                            hrefGit={hrefGit}
                            hrefDeploy={hrefDeploy}
                            logoGitSource={logoGitSource}
                            logoDeploySource={logoDeploySource}
                            
                        />
                    ))}
                </div>
            :
                <CustomSlider cards={cards} screenPos={screenPos} clickedItem={clickedItem} setClickedItem={setClickedItem}/>
            }

            
            <p className={`tags grid ${screenPos>=4 && "tags-appear"}`}><code>{"</"}</code>{`div`}<code>{">"}</code></p>
            <p className={`tags section ${screenPos>=4 && "tags-appear"}`}><code>{"</"}</code>{`section`}<code>{">"}</code></p>
        </section>
    )
}

export default Works;