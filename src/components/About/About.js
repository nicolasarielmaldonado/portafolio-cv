import React from 'react'
import photo from '../../assets/photo.webp';
import './about.css';

const About = ({screenPos}) => {
    return (
        <section className="section-container">

            <div id="sobremi" className={`big ${screenPos>=2 && "big-appear"} `}>Sobre mí</div>
            <img className={`personal-photo ${screenPos>=2 && "personal-photo-appear"} `} alt="personal" src={photo}/>
        
            <p className={`tags section ${screenPos>=2 && "tags-appear"}`}><code>{"<"}</code>{`section`}<code>{">"}</code></p>  
            <p className={`tags p ${screenPos>=2 && "tags-appear"}`}><code>{"<"}</code>{`p`}<code>{">"}</code></p>  

            <p className={`paragraph ${screenPos>=2 && "paragraph-appear"}`}>Desarrollador Front-End, me considero una persona creativa, con una gran capacidad de resolución de problemas, proactivo, me gusta trabajar en equipo y aprender de diferentes puntos de vista, apasionado por tecnologías web y siempre estar aprendiendo algo nuevo.</p>  
            
            <p className={`tags p ${screenPos>=2 && "tags-appear"}`}><code>{"</"}</code>{`p`}<code>{">"}</code></p>   

            <p className={`tags p ${screenPos>=2 && "tags-appear"}`}><code>{"<"}</code>{`p`}<code>{">"}</code></p> 

            <p className={`paragraph ${screenPos>=2 && "paragraph-appear"}`}>Actualmente estudiando Desarrollo Web en la Universidad Nacional de La Matanza.</p> 

            <p className={`tags p ${screenPos>=2 && "tags-appear"}`}><code>{"</"}</code>{`p`}<code>{">"}</code></p>  
            <p className={`tags section ${screenPos>=2 && "tags-appear"}`}><code>{"</"}</code>{`section`}<code>{">"}</code></p>
            
        </section>
    )
}

export default About;
