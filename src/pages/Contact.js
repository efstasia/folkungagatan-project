import React from 'react';

export const Contact = () => {
  return (
    <div className='contact-container'>
      <p className='contact-title'>KONTAKT</p>
      <p>Tomass Lindström</p>
      <p>0735 308373</p>
      <p>tomass@folkungagatan.com</p>
      <p>Folkungagatan 88B</p>
      <p>116 22 Stockholm</p>
      <div className='map-container'>
        <h4>Här hittar ni oss, välkomna!</h4>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4072.199055572693!2d18.080888!3d59.314595000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77f9967f7e23%3A0xc6f1c911227a8f38!2sFolkungagatan%2088B%2C%20116%2022%20Stockholm!5e0!3m2!1sen!2sse!4v1646153857896!5m2!1sen!2sse'
          allowfullscreen=''
          loading='lazy'
          title='store-map'
        ></iframe>
      </div>
    </div>
  );
};
