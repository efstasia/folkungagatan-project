import React from 'react';

export const StartPage = () => {
  return (
    <div className='start-page-container'>
      <p className='start-page-text'>
        Välkommen till ett personligare och smidigare sätt att köpa trycksaker,
        skyltar och profilreklam med allt som hör till som formgivning, montage,
        kampanjhantering, lager, distribution, systemlösningar mm. Vi jobbar med
        dom bästa leverantörerna och då vi inte är bundna till en enskild
        leverantör så kan vi alltid ge er den bästa lösningen utifrån era unika
        förutsättningar.
      </p>
      <div className='start-page-link-container'>
        <a className='start-page-link' href='/projekt'>
          kolla in våra tidigare projekt →
        </a>
      </div>
    </div>
  );
};
