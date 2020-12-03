import React from 'react';
import styles from './technologies-grid.module.scss';

const TechnologiesGird = ({ technologies }) => {
  return (
    <div className={styles.container}>
      {technologies.map(technology => (
        <div
          key={technology.id}
          className={styles['technology-card']}
          style={{ backgroundColor: technology.color }}
        >
          <div className={styles.name}>{technology.name}</div>
          <img src={`./tech/${technology.logo}`} className={styles.logo} />
        </div>
      ))}
    </div>
  );
};

export default TechnologiesGird;
