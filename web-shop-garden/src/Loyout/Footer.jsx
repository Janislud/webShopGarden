import React from 'react';
import classes from './footer.module.css';
import instagram from '../Components/Media/Footer-media/instagram-icon.svg';
import whatsap from '../Components/Media/Footer-media/whatsapp-icon.svg';
import Map from '../Components/Map/Map';

const Footer = () => {
  return (
    <div className={classes.footerWrapper}>
  <h2 className={classes.contactText}>Contact</h2>

  <div className={classes.footerContactWrapper}>
    <div className={classes.footerWrapFirst}>
      <div className={`${classes.footerCard} ${classes.column1}`}>
        <p className={classes.footerContentText}>Phone</p>
        <p className={classes.footerContentTextSecond}>+49 999 999 99 99</p>
      </div>
      <div className={`${classes.footerCard} ${classes.column1}`}>
        <p className={classes.footerContentText}>Address</p>
        <p className={classes.footerContentTextSecond}>Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland</p>
      </div>
    </div>

    <div className={classes.footerWrapSecond}>
      <div className={`${classes.footerCardSecond} ${classes.column2}`}>
        <p className={classes.footerContentText}>Socials</p>
        <p className={`${classes.footerContentTextSecond} ${classes.socialHeight} `}>
          <a href="#">
            <img src={instagram} alt="Instagram Icon" />
          </a>
          <a href="#">
            <img src={whatsap} alt="WhatsApp Icon" />
          </a>
        </p>
      </div>
      <div className={`${classes.footerCardSecond} ${classes.column2}`}>
        <p className={classes.footerContentText}>Working Hours</p>
        <p className={`${classes.footerContentTextSecond} ${classes.bottomPadding}`}>24 hours a day</p>
      </div>
    </div>
  </div>

    <Map/>

</div>
  );
};

export default Footer;