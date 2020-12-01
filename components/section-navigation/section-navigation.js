import React, { useEffect, useState } from 'react';
import styles from './section-navigation.module.scss';

const sections = ['greeting', 'projects', 'about-me', 'contact-me'];

const SectionNavigation = () => {
  const [sectionId, setSectionId] = useState(0);

  const calculateSectionId = (scrollY, innerHeight) => {
    return Math.floor((scrollY + innerHeight / 2 + 100) / innerHeight);
  };

  const handleScroll = () => {
    setSectionId(calculateSectionId(window.scrollY, window.innerHeight));
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => document.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className={styles.container}>
      {sections.map((id, i) => (
        <a
          key={id}
          href={`/#${id}`}
          className={styles.item}
          style={{ backgroundColor: i === sectionId ? '#DCDDEC' : undefined }}
        />
      ))}
    </div>
  );
};

export default SectionNavigation;
