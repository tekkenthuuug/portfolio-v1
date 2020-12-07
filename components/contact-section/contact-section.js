import React from 'react';
import styles from './contact-section.module.scss';
import { link } from '../../constants';

const ContactSection = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h4>Found my knowledge valuable for you or your company?</h4>
        <h3>Contact me!</h3>
        <div className={styles['socials-container']}>
          <a href={link.linkedin} target='_blank'>
            <img src='./socials/linkedin.svg' />
          </a>
          <a href={link.email} target='_blank'>
            <img src='./socials/email.svg' className={styles.email} />
          </a>
          <a href={link.fiverr} target='_blank'>
            <img src='./socials/fiverr.svg' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
