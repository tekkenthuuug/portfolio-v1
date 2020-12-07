import React, { useState } from 'react';
import styles from './projects-section.module.scss';
import SectionWrapper from '../section-wrapper/section-wrapper';
import ProjectsGrid from '../projects-grid/projects-grid';
import { PROJECTS_DATA } from './projects-section.data';

const ProjectsSection = () => {
  const [projects] = useState(PROJECTS_DATA);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <SectionWrapper flippedBackground className={styles.wrapper}>
      <h3 className='section-title'>Things I've made</h3>
      {selectedProject !== null ? (
        <div>
          <div onClick={() => setSelectedProject(null)}>EXIT</div>
          <div>{projects[selectedProject].name}</div>
        </div>
      ) : (
        <ProjectsGrid
          className={styles.projects}
          projects={projects}
          onProjectClick={project => {
            setSelectedProject(project.id);
          }}
        />
      )}
    </SectionWrapper>
  );
};

export default ProjectsSection;
