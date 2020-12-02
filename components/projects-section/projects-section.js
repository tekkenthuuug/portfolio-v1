import React from 'react';
import styles from './projects-section.module.scss';
import SectionWrapper from '../section-wrapper/section-wrapper';
import ProjectsGrid from '../projects-grid/projects-grid';
import { projects } from './projects-section.data';

const ProjectsSection = () => {
  return (
    <SectionWrapper flippedBackground className={styles.wrapper}>
      <h3 className={styles.title}>Things I've made</h3>
      <ProjectsGrid className={styles.projects} projects={projects} />
    </SectionWrapper>
  );
};

export default ProjectsSection;
