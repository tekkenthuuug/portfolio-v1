import React from 'react';
import createClassName from '../../utils/createClassName';
import styles from './shadow-image.module.scss';

const ShadowImage = ({ className, ...otherProps }) => {
  const imageContainerClassName = createClassName({
    [styles['image-container']]: true,
    [className]: !!className,
  });

  return (
    <div className={imageContainerClassName}>
      <img className={styles.image} {...otherProps} />
      <img className={styles['shadow-image']} src={otherProps.src} />
    </div>
  );
};

export default ShadowImage;
