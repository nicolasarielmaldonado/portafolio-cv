import React from 'react';
import Slider from 'infinite-react-carousel';
import { CarouselWorkCard } from '../CarouselWorkCard/CarouselWorkCard';

import './customSlider.css'



export const CustomSlider = ({cards , screenPos}) => {

    return (
		<Slider className={`carousel-main ${screenPos>=4 && "carousel-main-appear"}`} centerMode={true} adaptiveHeight={true} centerPadding={60} shift={30}>
			{cards.map(({number, id, imgSource, description, hrefGit, hrefDeploy, logoGitSource, logoDeploySource}) => (
					<CarouselWorkCard
					key={id}
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
		</Slider>
        )
      }