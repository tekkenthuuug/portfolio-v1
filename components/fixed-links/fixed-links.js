import React from 'react';
import { link } from '../../constants';
import Grabber from '../grabber/grabber';
import ExternalLink from '../external-link/external-link';
import styles from './fixed-links.module.scss';

const FixedLinks = ({ slide }) => {
  let containerClassName = styles.container;

  const bottom =
    slide.id > 0 ? (slide.id === 3 ? '-320px' : '-140px') : undefined;

  return (
    <div className={containerClassName} style={{ bottom }}>
      <Grabber>
        <ExternalLink href={link.github}>
          <img src='socials/github.svg' />
        </ExternalLink>
        <ExternalLink href={link.linkedin}>
          <img src='socials/linkedin.svg' />
        </ExternalLink>
        <ExternalLink href={link.fiverr}>
          <img src='socials/fiverr.svg' />
        </ExternalLink>
      </Grabber>
      <Grabber>
        <ExternalLink href={link.email}>
          <img src='socials/email.svg' />
        </ExternalLink>
      </Grabber>
    </div>
  );
};

export default FixedLinks;
