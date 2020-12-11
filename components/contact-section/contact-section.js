import React from 'react';
import styles from './contact-section.module.scss';
import { link } from '../../constants';
import ExternalLink from '../external-link/external-link';

const ContactSection = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h4>Found my knowledge valuable for you or your company?</h4>
        <h3>Contact me!</h3>
        <div className={styles['socials-container']}>
          <ExternalLink href={link.linkedin}>
            <img src='./socials/linkedin.svg' />
          </ExternalLink>
          <ExternalLink href={link.email}>
            <img src='./socials/email.svg' className={styles.email} />
          </ExternalLink>
          <ExternalLink href={link.fiverr}>
            <img src='./socials/fiverr.svg' />
          </ExternalLink>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
