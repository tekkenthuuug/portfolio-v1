import React from 'react';
import createClassName from '../../utils/createClassName';
import styles from './technologies-grid.module.scss';

const TechnologiesGird = ({ technologies, className }) => {
  const containerClassName = createClassName({
    [styles.container]: true,
    [className]: !!className,
  });

  return (
    <div className={containerClassName}>
      {technologies.map(technology => (
        <div
          key={technology.id}
          className={styles['technology-card']}
          style={{ backgroundColor: technology.color }}
        >
          <div className={styles.name}>{technology.name}</div>
          <img
            src={`./tech/${technology.logo}`}
            className={styles.logo}
            alt={technology.name}
          />
        </div>
      ))}
    </div>
  );
};

export default TechnologiesGird;
