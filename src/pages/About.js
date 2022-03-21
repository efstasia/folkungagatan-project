import React from 'react';

export const About = () => {
  return (
    <div className='what-we-do'>
      <h3>vad vi gör</h3>
      <div className='what-we-do-list'>
        <fieldset>
          <legend>Lite av vad vi erbjuder</legend>
          <ul>
            <li>Trycksaker</li>
            <li>Skyltar, fasadskyltar i Neon och LED mm.</li>
            <li>
              Foliering av skyltfönster, kontor och bilar, print och montage
            </li>
            <li>Profilreklam</li>
            <li>Produktionsledning och kampanjhantering</li>
            <li>Årsredovisningar, formgivning, original och tryck</li>
            <li>POS material</li>
            <li>Mäss och utställningsmaterial</li>
            <li>Vepor och banners</li>
            <li>Lager och distribution</li>
            <li>Systemlösningar och webshopar</li>
          </ul>
        </fieldset>
      </div>
      <div className='link-to-customers'>
        <a href='/kunder'>Kolla vad kunderna säger →</a>
        <p>/</p>
        <p>
          Slå gärna en signal eller skicka ett mail så berättar jag mer.{' '}
          <br></br>
          Tomass Lindström<br></br> 0735 308373<br></br>{' '}
          tomass@folkungagatan.com
        </p>
      </div>
    </div>
  );
};
