import { useEffect, useState } from 'react';
import { FullPage, Slide } from 'react-full-page';
import AboutSection from '../components/about-section/about-section';
import ContactSection from '../components/contact-section/contact-section';
import FixedLinks from '../components/fixed-links/fixed-links';
import GreetingSection from '../components/greeting-section/greeting-section';
import Layout from '../components/layout/layout';
import ProjectsSection from '../components/projects-section/projects-section';
import SlideControls from '../components/slide-controls/slide-controls';
import projects from '../data/projects.json';
import technologies from '../data/technologies.json';

export default function Home({ staticData }) {
  const [slide, setSlide] = useState({ id: null });

  useEffect(() => {
    let tid = null;

    if (!localStorage.getItem('visited')) {
      localStorage.setItem('visited', true);

      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      tid = setTimeout(() => {
        document.body.style.overflow = 'initial';
        document.documentElement.style.overflow = 'initial';

        setSlide({ id: 0 });
      }, 5000);
    }

    return () => tid && clearTimeout(tid);
  }, []);

  return (
    <Layout slide={slide}>
      <FullPage
        duration={200}
        controls={SlideControls}
        controlsProps={{ slideToScrollTo: slide }}
        beforeChange={({ to }) => {
          setSlide({ id: to });
        }}
      >
        <Slide>
          <GreetingSection setSlide={setSlide} />
        </Slide>
        <Slide>
          <ProjectsSection projects={staticData.projects} />
        </Slide>
        <Slide>
          <AboutSection technologies={staticData.technologies} />
        </Slide>
        <Slide>
          <ContactSection />
        </Slide>
      </FullPage>
      <FixedLinks slide={slide} />
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      staticData: {
        ...projects,
        ...technologies,
      },
    },
  };
}
