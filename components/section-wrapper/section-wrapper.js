import React from 'react';
import createClassName from '../../utils/createClassName';
import styles from './section-wrapper.module.scss';

const SectionWrapper = ({
  flippedBackground,
  children,
  className,
  ...otherProps
}) => {
  const sectionClassName = createClassName({
    [styles.background]: true,
    [styles.background180]: flippedBackground,
    [className]: !!className,
  });

  return (
    <section className={sectionClassName} {...otherProps}>
      <div className={styles.wrapper}>{children}</div>
    </section>
  );
};

export default SectionWrapper;
