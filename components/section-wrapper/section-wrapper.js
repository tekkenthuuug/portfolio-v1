import React from 'react';
import createClassName from '../../utils/createClassName';
import styles from './section-wrapper.module.scss';

const SectionWrapper = ({
  flippedBackground,
  children,
  className,
  containerClassName: _containerClassName,
  ...otherProps
}) => {
  const sectionClassName = createClassName({
    [styles.background]: true,
    [styles.background180]: flippedBackground,
    [className]: !!className,
  });

  const containerClassName = createClassName({
    [styles.container]: true,
    [_containerClassName]: !!_containerClassName,
  });

  return (
    <section className={sectionClassName} {...otherProps}>
      <div className={containerClassName}>{children}</div>
    </section>
  );
};

export default SectionWrapper;
