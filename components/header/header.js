import React from 'react';
import CustomButton from '../custom-button/custom-button';
import styles from './header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <CustomButton className={styles['resume-button']}>Resume</CustomButton>
    </div>
  );
};

export default Header;
