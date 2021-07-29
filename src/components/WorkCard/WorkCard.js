import React from 'react';

import './workCard.css';

export const WorkCard = ({screenPos, number, id, imgSource, description, hrefGit, hrefDeploy, logoGitSource, logoDeploySource, clickedItem, setClickedItem}) => {

    const handleClick = (item) => {
        setClickedItem(item);
    }

    return (
        <div className="wrapper">
            <div className={`works-grid-element ${screenPos>=4 && "works-grid-element-appear"}`} onClick={() => handleClick(number)}>
                <img id={id} className="works-grid-element-img" alt={`works-${id}`} src={imgSource}/>
            </div>

            <div className={`modal-overlay ${(clickedItem === number && screenPos>=4)&& "show-overlay"}`}>
                    <button className="button-close-overlay" onClick={() => handleClick(0)}>X</button>
                    <p className="description-overlay">{description}</p>
                    <div className="container-link-overlay">
                        <a href={hrefGit} target="_blank" rel="noreferrer" className="button-link-overlay">
                            <img src={logoGitSource} alt="github" className="overlay-logo"/>
                        </a>
                        {logoDeploySource && <a href={hrefDeploy} target="_blank" rel="noreferrer" className="button-link-overlay">
                            <img src={logoDeploySource} alt="demo" className="overlay-logo"/>
                        </a>}
                    </div>
            </div>
        </div>
    )
}
