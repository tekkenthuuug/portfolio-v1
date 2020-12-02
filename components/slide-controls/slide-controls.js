import React, { useEffect, useState } from 'react';
import styles from './slide-controls.module.scss';
import { sectionAnchors } from '../../constants';

const SlideControls = ({
  getCurrentSlideIndex,
  scrollToSlide,
  slideToScrollTo,
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

    handleScroll();

    return () => document.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (slideToScrollTo.id) {
      scrollToSlide(slideToScrollTo.id);
    }
  }, [slideToScrollTo]);

  return (
    <div className={styles.container}>
      {sectionAnchors.map((id, i) => (
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
