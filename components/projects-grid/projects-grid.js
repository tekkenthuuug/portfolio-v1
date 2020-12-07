import React from 'react';
import ShadowImage from '../shadow-image/shadow-image';
import createClassName from '../../utils/createClassName';
import styles from './projects-grid.module.scss';

const ProjectsGrid = ({ projects, className, onProjectClick }) => {
  const containerClassName = createClassName({
    [styles.container]: true,
    [className]: !!className,
  });

  return (
    <div className={containerClassName}>
      {projects.map(project => (
        <article key={project.id} className={styles['project-card']}>
          <ShadowImage
            src={project.image}
            className={styles['image-container']}
            onClick={() => onProjectClick(project)}
          />
          <h5 className={styles.name}>{project.name}</h5>
          <p className={styles['short-desc']}>{project.shortDesc}</p>
        </article>
      ))}
    </div>
  );
};

export default ProjectsGrid;
