import { useState } from 'react';
import { FullPage, Slide } from 'react-full-page';
import AboutSection from '../components/about-section/about-section';
import ContactSection from '../components/contact-section/contact-section';
import FixedLinks from '../components/fixed-links/fixed-links';
import GreetingSection from '../components/greeting-section/greeting-section';
import Layout from '../components/layout/layout';
import ProjectsSection from '../components/projects-section/projects-section';
import SlideControls from '../components/slide-controls/slide-controls';

export default function Home() {
  const [slide, setSlide] = useState({ id: null });

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
          <ProjectsSection />
        </Slide>
        <Slide>
          <AboutSection />
        </Slide>
        <Slide>
          <ContactSection />
        </Slide>
      </FullPage>
      <FixedLinks slide={slide} />
    </Layout>
  );
}
