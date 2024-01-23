import React from "react";
import Map from "../Components/Map/Map";
import instagram from "../Components/Media/Footer-media/instagram-icon.svg";
import whatsap from "../Components/Media/Footer-media/whatsapp-icon.svg";
import { useApi } from "../themaContext";
import classes from "./footer.module.css";

export const Footer = () => {
  const { theme } = useApi();
  return (
    <footer
      className={`${classes.footer} ${
        theme === "light" ? classes.lightTheme : classes.darkTheme
      }`}
    >
      <div
        className={`${classes.footerWrapper} ${
          theme === "light" ? classes.lightTheme : classes.darkTheme
        }`}
      >
        <h2
          className={`${classes.contactText} ${
            theme === "light" ? classes.lightTheme : classes.darkTheme
          }`}
        >
          Contact
        </h2>

        <div className={classes.footerContactWrapper}>
          <div className={classes.footerWrapFirst}>
            <div className={`${classes.footerCard} ${classes.column1}`}>
              <p className={classes.footerContentText}>Phone</p>
              <p className={classes.footerContentTextSecond}>
                +49 999 999 99 99
              </p>
            </div>
            <div className={`${classes.footerCard} ${classes.column1}`}>
              <p className={classes.footerContentText}>Address</p>
              <p className={classes.footerContentTextSecond}>
                Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland
              </p>
            </div>
          </div>

          <div className={classes.footerWrapSecond}>
            <div className={`${classes.footerCardSecond} ${classes.column2}`}>
              <p className={classes.footerContentText}>Socials</p>
              <p
                className={`${classes.footerContentTextSecond} ${classes.socialHeight} `}
              >
                <a href="https://www.instagram.com/">
                  <img src={instagram} alt="Instagram Icon" />
                </a>
                <a href="https://web.whatsapp.com/">
                  <img src={whatsap} alt="WhatsApp Icon" />
                </a>
              </p>
            </div>
            <div className={`${classes.footerCardSecond} ${classes.column2}`}>
              <p className={classes.footerContentText}>Working Hours</p>
              <p
                className={`${classes.footerContentTextSecond} ${classes.bottomPadding}`}
              >
                24 hours a day
              </p>
            </div>
          </div>
        </div>
        <Map />
      </div>
    </footer>
  );
};
