

import React from 'react';
import classes from './map.module.css';

const Map = () => {
  return (
    <div className={classes.mapWrapper}>
      <iframe
        className={classes.iframeStyles}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4090427799065!2d13.3724697776281!3d52.50793613712151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sru!2slv!4v1702996513924!5m2!1sru!2slv"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;