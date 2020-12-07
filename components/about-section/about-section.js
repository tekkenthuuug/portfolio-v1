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
            Hi, my name is Maksim and I'm ambitious second-year Computer Science
            student with commercial experience of working in software
            development field. I'm passionate about Web Development and
            Teamwork. I was into programming since my young age and started
            learning it passionatly two years ago, mostly spending my time on
            personal projects. Recently started working as a freelancer on
            Fiverr to get experience from commercial real world projects. It
            went really well, since my clients are returning and leaving
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
          <img src='./me.png' className={styles.image} />
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
      <NextSectionArrow
        className={styles.arrow}
        onClick={() => setSlide({ id: 3 })}
      />
    </SectionWrapper>
  );
};

export default AboutSection;
