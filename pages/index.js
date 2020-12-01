import Layout from '../components/layout/layout';
import GreetingSection from '../components/greeting-section/greeting-section';
import ProjectsSection from '../components/projects-section/projects-section';

export default function Home() {
  return (
    <Layout>
      <GreetingSection />
      <ProjectsSection />
    </Layout>
  );
}
