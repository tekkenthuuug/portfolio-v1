import React from 'react';

const ExternalLink = ({ children, ...otherProps }) => {
  return (
    <a target='_blank' rel='noopener noreferrer' {...otherProps}>
      {children}
    </a>
  );
};

export default ExternalLink;
