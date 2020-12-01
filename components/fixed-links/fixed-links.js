import React from 'react';
import Grabber from '../grabber/grabber';
import styles from './fixed-links.module.scss';

const FixedLinks = () => {
  return (
    <div className={styles.container}>
      <Grabber>
        <img src='socials/github.svg' />
        <img src='socials/linkedin.svg' />
        <img src='socials/twitter.svg' />
      </Grabber>
      <Grabber>
        <a href='mailto:sa.soto317@gmail.com' target='_blank'>
          <img src='socials/email.svg' />
        </a>
      </Grabber>
    </div>
  );
};

export default FixedLinks;
