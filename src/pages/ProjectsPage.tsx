import Navigation from '../components/Navigation';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import SocialFooter from '../components/SocialFooter';
import Footer from '../components/Footer';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0B0D12]">
      <Navigation />
      <Projects />
      <Skills />
      <SocialFooter />
      <Footer />
    </div>
  );
}