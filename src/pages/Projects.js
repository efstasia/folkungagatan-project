import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import placeholder1 from '../images/placeholder1.png';
import placeholder2 from '../images/placeholder2.png';
import placeholder3 from '../images/placeholder3.png';
import placeholder4 from '../images/placeholder4.png';
import { SpecificProject } from './SpecificProject';

export const Projects = () => {
  return (
    <div>
      <p className='earlier-projects-text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
      {/* håll datormusen över bilden för att pausa */}
      <AliceCarousel infinite autoPlay autoPlayInterval='3000'>
        <div className='image-container'>
          <img src={placeholder1} alt='placeholder1' className='sliderimg' />
          <p>text om projekt</p>
        </div>
        <div className='image-container'>
          <img src={placeholder2} alt='placeholder2' className='sliderimg' />

          <a href='/projekt/:id'>
            <p>text om projekt LÄNK TILL FLER BILDER</p>
          </a>
        </div>
        <div className='image-container'>
          <img src={placeholder3} alt='placeholder3' className='sliderimg' />
          <p>text om projekt</p>
        </div>
        <div className='image-container'>
          <img src={placeholder4} alt='placeholder4' className='sliderimg' />
          <p>text om projekt</p>
        </div>
      </AliceCarousel>
    </div>
  );
};
