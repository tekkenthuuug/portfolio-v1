import React from 'react';
import ShadowImage from '../shadow-image/shadow-image';
import createClassName from '../../utils/createClassName';
import styles from './detailed-project.module.scss';

const DetailedProject = ({ project, onExitClick, className }) => {
  const containerClassName = createClassName({
    [styles.container]: true,
    [className]: !!className,
  });

  return (
    <div className={containerClassName}>
      <button className={styles.exit} onClick={onExitClick}>
        <img src='./back-arrow.svg' />
      </button>
      <div className={styles.head}>
        <ShadowImage
          src={project.image}
          className={styles['image-container']}
        />
        <div className={styles.info}>
          <h2>{project.name}</h2>
          <p>{project.shortDesc}</p>
          {project.repoLink.length ? (
            <a className={styles.link} href={project.repoLink} target='_blank'>
              <img src='./folder.svg' />
              <span>Repository</span>
            </a>
          ) : (
            <div className={styles.link}>
              <img src='./lock.svg' />
              <span>Closed source</span>
            </div>
          )}
          {project.liveLink.length && (
            <a className={styles.link} href={project.liveLink} target='_blank'>
              <img src='./external-link.svg' />
              <span>See it live</span>
            </a>
          )}
        </div>
      </div>
      <p className={styles.desc}>{project.desc}</p>
    </div>
  );
};

export default DetailedProject;