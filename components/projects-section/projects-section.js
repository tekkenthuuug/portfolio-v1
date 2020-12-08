import React, { useEffect, useState } from 'react';
import styles from './projects-section.module.scss';
import SectionWrapper from '../section-wrapper/section-wrapper';
import ProjectsGrid from '../projects-grid/projects-grid';
import DetailedProject from '../detailed-project/detailed-project';
import { useRouter } from 'next/router';

const ProjectsSection = ({ projects }) => {
  const router = useRouter();

  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const { pid } = router.query;

    if (pid && projects[pid]) {
      setSelectedProject(pid);
    }
  }, [router]);

  return (
    <SectionWrapper flippedBackground className={styles.wrapper}>
      {selectedProject !== null ? (
        <DetailedProject
          project={projects[selectedProject]}
          onExitClick={() => {
            setSelectedProject(null);
            router.push({ query: {} });
          }}
        />
      ) : (
        <>
          <h3 className='section-title'>Things I've made</h3>
          <ProjectsGrid
            className={styles.projects}
            projects={projects}
            onProjectClick={project => {
              setSelectedProject(project.id);
              router.push({ query: { pid: project.id } });
            }}
          />
        </>
      )}
    </SectionWrapper>
  );
};

export default ProjectsSection;
