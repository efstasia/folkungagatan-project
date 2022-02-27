import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <h1>HEADER</h1>
      <nav>
        <a href='/'>home</a>
        <a href='/projekt'>earlier projects</a>
        <a href='/about'>about</a>
      </nav>
    </div>
  );
};
