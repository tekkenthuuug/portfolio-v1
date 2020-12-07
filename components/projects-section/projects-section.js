import React, { useState } from 'react';
import styles from './projects-section.module.scss';
import SectionWrapper from '../section-wrapper/section-wrapper';
import ProjectsGrid from '../projects-grid/projects-grid';
import DetailedProject from '../detailed-project/detailed-project';

const ProjectsSection = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <SectionWrapper flippedBackground className={styles.wrapper}>
      {selectedProject !== null ? (
        <DetailedProject
          project={projects[selectedProject]}
          onExitClick={() => setSelectedProject(null)}
        />
      ) : (
        <>
          <h3 className='section-title'>Things I've made</h3>
          <ProjectsGrid
            className={styles.projects}
            projects={projects}
            onProjectClick={project => {
              setSelectedProject(project.id);
            }}
          />
        </>
      )}
    </SectionWrapper>
  );
};

export default ProjectsSection;
