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
    <article className={containerClassName}>
      <button className={styles.exit} onClick={onExitClick}>
        <img src='./back-arrow.svg' />
      </button>
      <div className={styles.head}>
        <ShadowImage
          src={`./projects/${project.image}`}
          alt={project.name}
          className={styles['image-container']}
        />
        <div className={styles.info}>
          <h1>{project.name}</h1>
          <p>{project.shortDesc}</p>
          {project.repositories.length ? (
            project.repositories.map(repo => (
              <a
                className={styles.link}
                href={repo.link}
                key={repo.id}
                target='_blank'
              >
                <img src='./folder.svg' />
                <span>
                  Repository {repo.name && <span>({repo.name})</span>}
                </span>
              </a>
            ))
          ) : (
            <div className={`${styles.link} ${styles['closed-source']}`}>
              <img src='./lock.svg' />
              <span>Closed source</span>
            </div>
          )}
          {project.link.length && (
            <a className={styles.link} href={project.link} target='_blank'>
              <img src='./external-link.svg' />
              <span>See it live</span>
            </a>
          )}
        </div>
      </div>
      <p className={styles.desc}>{project.desc}</p>
    </article>
  );
};

export default DetailedProject;
