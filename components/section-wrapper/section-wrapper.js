import React from 'react';
import styles from './section-wrapper.module.scss';

const SectionWrapper = ({
  flippedBackground,
  children,
  className,
  ...otherProps
}) => {
  let sectionClassName = styles.background;

  if (flippedBackground) {
    sectionClassName += ` ${styles.background180}`;
  }

  if (className) {
    sectionClassName += ` ${className}`;
  }

  return (
    <section className={sectionClassName} {...otherProps}>
      <div className={styles.wrapper}>{children}</div>
    </section>
  );
};

export default SectionWrapper;
