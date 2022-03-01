import React from 'react';
import image from '../images/headerImage.jpg';
import Toggle from './Toggler';

export const Header = ({ theme, themeToggler }) => {
  return (
    <header>
      <div className='nav-bar-container'>
        <nav className='nav-bar'>
          <h1>folkungagatan.com</h1>
          <div className='nav-bar-buttons'>
            <a href='/'>Hem</a>
            <a href='/projekt'>Tidigare projekt</a>
            <a href='/kontakt'>Kontakt</a>
            <a href='/om-oss'>Vad vi gör</a>
            <a href='/kunder'>Vad säger kunderna</a>
            <a href='/miljö'>Miljö</a>
            <Toggle theme={theme} toggleTheme={themeToggler} />
          </div>
        </nav>
      </div>

      <div className='header-image-container'>
        {/* <h2>BEST PLACE ON EARTH</h2> */}
        <img className='header-image' src={image} alt='printer' />
      </div>
    </header>
  );
};
