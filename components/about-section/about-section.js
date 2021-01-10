import React from 'react';
import NextSectionArrow from '../next-section-arrow/next-section-arrow';
import SectionWrapper from '../section-wrapper/section-wrapper';
import TechnologiesGird from '../technologies-grid/technologies-grid';
import styles from './about-section.module.scss';

const AboutSection = ({ technologies }) => {
  return (
    <SectionWrapper className={styles.wrapper}>
      <div className={styles['about-me']}>
        <div>
          <h3 className={`section-title ${styles['about-me-title']}`}>
            About Me
          </h3>
          <p className={styles['about-me-text']}>
            Hi, my name is Maksim and I'm ambitious third-year Computer Science
            student with commercial experience of working in software
            development field. I'm passionate about Web Development and
            Teamwork. I was into programming since my young age and started
            learning it passionatly two years ago, mostly spending my time on
            personal projects. Recently started working as a freelancer on
            Fiverr to get experience from commercial real world projects. It
            went really well, since my clients are returning and I receive
            positive feedback.
          </p>
          <p className={styles['about-me-text']}>
            Currently based in Poland, Warsaw.
          </p>
          <p className={styles['about-me-text']}>
            Looking for some job offers.
          </p>
        </div>
        <div className={styles['image-container']}>
          <img src='./me.png' className={styles.image} alt='Maksim Pautsina' />
        </div>
      </div>
      <div>
        <h4 className={`section-title ${styles['technoligies-title']}`}>
          Technologies I enjoy working with
        </h4>
      </div>
      <TechnologiesGird
        technologies={technologies}
        className={styles.technologies}
      />
    </SectionWrapper>
  );
};

export default AboutSection;
