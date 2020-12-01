import React from 'react';
import SectionWrapper from '../section-wrapper/section-wrapper';
import CustomButton from '../custom-button/custom-button';
import NextSectionArrow from '../next-section-arrow/next-section-arrow';
import styles from './greeting-section.module.scss';

const GreetingSection = () => {
  return (
    <SectionWrapper className={styles.wrapper} id='greeting'>
      <h4 className={styles['name-is']}>Hi, my name is</h4>
      <h1 className={styles.name}>Maksim Pautsina</h1>
      <h1 className={styles.speciality}>I'm a Full Stack Web Developer</h1>
      <h4 className={styles.skills}>
        High level of personal and professional integrity with the ability to
        easily adapt to changing environments
      </h4>
      <CustomButton className={styles.button}>See my projects</CustomButton>
      <NextSectionArrow className={styles.arrow} />
    </SectionWrapper>
  );
};

export default GreetingSection;
