import React from 'react';
import styles from './projects-grid.module.scss';

const ProjectsGrid = ({ projects, className }) => {
  let containerClassName = styles.container;

  if (className) {
    containerClassName += ` ${className}`;
  }

  return (
    <div className={containerClassName}>
      {projects.map(project => (
        <article key={project.id} className={styles['project-card']}>
          <div className={styles['image-container']}>
            <img src={project.image} className={styles.image} />
            <img src={project.image} className={styles['shadow-image']} />
          </div>
          <h5 className={styles.name}>{project.name}</h5>
          <p className={styles['short-desc']}>{project.shortDesc}</p>
        </article>
      ))}
    </div>
  );
};

export default ProjectsGrid;
