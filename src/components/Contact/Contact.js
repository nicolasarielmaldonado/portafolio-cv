import React from 'react';
import './contact.css';

const Contact = ({screenPos}) => {

    return (
        <div className="section-container bottom">
            <div id="contacto" className={`big ${screenPos>=5 && "big-appear"} `}>Contacto</div>
            <p className={`tags section ${screenPos>=5 && "tags-appear"}`}><code>{"<"}</code>{`div`}<code>{">"}</code></p>

            <p className={`tags p ${screenPos>=5 && "tags-appear"}`}><code>{"<"}</code>{`p`}<code>{">"}</code></p>  

            <p className={`paragraph ${screenPos>=5 && "paragraph-appear"}`}>Ante cualquier duda, consulta o interés en trabajar conmigo, no dudes en ponerte en contacto.</p>  
            
            <p className={`tags p ${screenPos>=5 && "tags-appear"}`}><code>{"</"}</code>{`p`}<code>{">"}</code></p>   

            <p className={`tags form ${screenPos>=5 && "tags-appear"}`}><code>{"<"}</code>{`form`}<code>{">"}</code></p>

            <form className={`form-container ${screenPos>=5 && "form-container-appear"}`} action="https://formsubmit.co/nicolasarielmaldonado@gmail.com" method="POST" autoComplete="off">
                <ul className="form-list">
                    <li className="form-list-item">
                        <input className="input-field" type="text" name="name" placeholder="Nombre" required pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"></input>
                    </li>
                    <li className="form-list-item">
                        <input className="input-field" type="email" name="email" placeholder="Email" required pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"></input>
                    </li>
                    <li className="form-list-item-textarea">
                        <textarea className="input-field input-field-textarea" name="comments" placeholder="Mensaje" required></textarea>
                    </li>  
                    <li className="form-list-button">
                        <input className="form-button" id="submit" type="submit" value="Enviar"/>
                        <input type="hidden" name="_next" value="https://nicolasarielmaldonado.github.io/portafolio-cv/"></input>
                    </li>
                </ul>
            </form>

            <p className={`tags form ${screenPos>=5 && "tags-appear"}`}><code>{"</"}</code>{`form`}<code>{">"}</code></p>
            <p className={`tags section ${screenPos>=5 && "tags-appear"}`}><code>{"</"}</code>{`div`}<code>{">"}</code></p>

            
        </div>
    )
}

export default Contact;
