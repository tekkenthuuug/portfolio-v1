import React, { useEffect, useState, useMemo } from 'react';
import styles from './slide-controls.module.scss';

const SlideControls = ({
  slidesCount,
  getCurrentSlideIndex,
  scrollToSlide,
  slideToScrollTo,
  ...p
}) => {
  // scrolling is controlled by react-full-page,
  // but highlighting current section with own calculations,
  // so when scrolling through more than 1 section, it changes one-by-one

  const [sectionId, setSectionId] = useState(getCurrentSlideIndex());

  const calculateSectionId = (scrollY, innerHeight) => {
    return Math.floor((scrollY + innerHeight / 2 + 100) / innerHeight);
  };

  const handleScroll = () => {
    setSectionId(calculateSectionId(window.scrollY, window.innerHeight));
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (slideToScrollTo.id !== null) {
      scrollToSlide(slideToScrollTo.id);
    }
  }, [slideToScrollTo]);

  const sections = useMemo(() => [...Array(slidesCount).keys()], [slidesCount]);

  return (
    <div className={styles.container}>
      {sections.map((id, i) => (
        <div
          key={id}
          onClick={() => scrollToSlide(i)}
          className={styles.item}
          style={{ backgroundColor: i === sectionId ? '#DCDDEC' : undefined }}
        />
      ))}
    </div>
  );
};

export default SlideControls;
