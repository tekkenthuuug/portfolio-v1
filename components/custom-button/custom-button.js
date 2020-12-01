import React from 'react';
import styles from './custom-button.module.scss';

const CustomButton = ({ children, className, ...otherProps }) => {
  let buttonClassName = styles.button;

  if (className) {
    buttonClassName += ` ${className}`;
  }

  return (
    <button className={buttonClassName} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
