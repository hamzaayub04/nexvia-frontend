import { Helmet } from 'react-helmet-async';
import Projects from '../components/sections/Projects';

export default function ProjectsPage() {
  return (
    <>
      <Helmet>
        <title>Projects | Nexvia</title>
        <meta name="description" content="Explore Nexvia's portfolio of PCB design and manufacturing projects." />
      </Helmet>
      <section className="section" style={{ paddingTop: '140px' }}></section>
      <Projects showHeader={true} />
    </>
  );
}
