import React from 'react';
import styles from './contact-section.module.scss';

const ContactSection = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h4>Found my knowledge valuable for you or your company?</h4>
        <h3>Contact me!</h3>
        <div className={styles['socials-container']}>
          <img src='./socials/linkedin.svg' />
          <img src='./socials/email.svg' className={styles.email} />
          <img src='./socials/fiverr.svg' />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
