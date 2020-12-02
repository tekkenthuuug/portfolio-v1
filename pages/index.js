import Layout from '../components/layout/layout';
import GreetingSection from '../components/greeting-section/greeting-section';
import ProjectsSection from '../components/projects-section/projects-section';
import AboutSection from '../components/about-section/about-section';
import ContactSection from '../components/contact-section/contact-section';
import SlideControls from '../components/slide-controls/slide-controls';
import { FullPage, Slide } from 'react-full-page';
import { useState } from 'react';

export default function Home() {
  const [slide, setSlide] = useState({ id: null });

  return (
    <Layout>
      <FullPage
        duration={100}
        controls={SlideControls}
        controlsProps={{ slideToScrollTo: slide }}
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
    </Layout>
  );
}
