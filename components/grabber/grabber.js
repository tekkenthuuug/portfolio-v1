import React from 'react';
import styles from './grabber.module.scss';

const Grabber = ({ children }) => {
  return (
    <div>
      <div className={styles.items}>{children}</div>
      <img src='grabber.svg' />
    </div>
  );
};

export default Grabber;
