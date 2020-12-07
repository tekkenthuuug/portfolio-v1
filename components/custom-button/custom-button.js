import React from 'react';
import createClassName from '../../utils/createClassName';
import styles from './custom-button.module.scss';

const CustomButton = ({ children, className, ...otherProps }) => {
  const buttonClassName = createClassName({
    [styles.button]: true,
    [className]: !!className,
  });

  return (
    <button className={buttonClassName} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
