import React from 'react';

import './carouselWorkCard.css';

export const CarouselWorkCard = ({id, imgSource, description, hrefGit, hrefDeploy, logoGitSource, logoDeploySource}) => {
    return (
        <div className="carousel-wrapper">
            <div className="carousel-works-element">
                <img id={id} className="carousel-works-grid-element-img" alt={`works-${id}`} src={imgSource}/>
            </div>

            <div className="carousel-bottom">
                <p className="carousel-description">{description}</p>

                <div className="carousel-container-link">
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
