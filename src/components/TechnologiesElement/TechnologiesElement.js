import React from 'react'

export const TechnologiesElement = ({screenPos, imgSource, description, alt}) => {
    return (
        <div className={`tec-grid-element ${screenPos>=3 && "tec-grid-element-appear"}`}>
            <img className="tec-grid-element-img" alt={alt} src={imgSource}/>
            <h3 className="tec-grid-element-subtitle">{description}</h3>
        </div>
    )
}
