import React from 'react';
import { link } from '../../constants';
import Grabber from '../grabber/grabber';
import styles from './fixed-links.module.scss';

const FixedLinks = ({ slide }) => {
  let containerClassName = styles.container;

  const bottom =
    slide.id > 0 ? (slide.id === 3 ? '-320px' : '-140px') : undefined;

  return (
    <div className={containerClassName} style={{ bottom }}>
      <Grabber>
        <a href={link.github} target='_blank'>
          <img src='socials/github.svg' />
        </a>
        <a href={link.linkedin} target='_blank'>
          <img src='socials/linkedin.svg' />
        </a>
        <a href={link.fiverr} target='_blank'>
          <img src='socials/fiverr.svg' />
        </a>
      </Grabber>
      <Grabber>
        <a href={link.email} target='_blank'>
          <img src='socials/email.svg' />
        </a>
      </Grabber>
    </div>
  );
};

export default FixedLinks;
