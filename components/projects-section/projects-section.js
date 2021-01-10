import React, { useEffect, useRef, useState } from 'react';
import styles from './projects-section.module.scss';
import SectionWrapper from '../section-wrapper/section-wrapper';
import ProjectsGrid from '../projects-grid/projects-grid';
import DetailedProject from '../detailed-project/detailed-project';

const ProjectsSection = ({ projects }) => {
  const detailsRef = useRef(null);

  const [selectedProject, setSelectedProject] = useState(null);

  const closeProjectDetails = () => {
    if (!detailsRef.current) {
      return;
    }

    detailsRef.current.classList.add(styles['details-container--closing']);

    setTimeout(() => {
      setSelectedProject(null);
    }, 200);
  };

  useEffect(() => {
    document.addEventListener('scroll', closeProjectDetails);

    return () => document.removeEventListener('scroll', closeProjectDetails);
  }, []);

  return (
    <SectionWrapper
      flippedBackground
      className={styles.wrapper}
      containerClassName={styles.container}
    >
      {selectedProject !== null && (
        <div className={styles['details-container']} ref={detailsRef}>
          <DetailedProject
            project={projects[selectedProject]}
            onExitClick={closeProjectDetails}
          />
        </div>
      )}
      <h3 className='section-title'>Things I've made</h3>
      <ProjectsGrid
        className={styles.projects}
        projects={projects}
        onProjectClick={project => {
          setSelectedProject(project.id);
        }}
      />
    </SectionWrapper>
  );
};

export default ProjectsSection;
