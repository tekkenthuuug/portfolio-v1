import React from 'react';
import NextSectionArrow from '../next-section-arrow/next-section-arrow';
import SectionWrapper from '../section-wrapper/section-wrapper';
import TechnologiesGird from '../technologies-grid/technologies-grid';
import styles from './about-section.module.scss';
import { technologies } from './about-section.data';

const AboutSection = ({ setSlide }) => {
  return (
    <SectionWrapper className={styles.wrapper}>
      <div className={styles['about-me']}>
        <div>
          <h3 className={`section-title ${styles['about-me-title']}`}>
            More About Me
          </h3>
          <p className={styles['about-me-text']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className={styles['image-container']}>
          <img src='./me.png' className={styles.image} />
        </div>
      </div>
      <div>
        <h4 className={`section-title ${styles['technoligies-title']}`}>
          Technologies I enjoy working with
        </h4>
      </div>
      <TechnologiesGird technologies={technologies} />
      <NextSectionArrow
        className={styles.arrow}
        onClick={() => setSlide({ id: 3 })}
      />
    </SectionWrapper>
  );
};

export default AboutSection;
