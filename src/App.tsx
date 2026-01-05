import { Toaster } from './components/ui/sonner';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Leadership from './components/Leadership';
import Research from './components/Research';
import Impact from './components/Impact';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0D12] via-[#111827] via-50% to-[#0B0D12]">
      {/* Global geometric triangle motifs - architectural accents */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Partial triangle cropped by viewport edge - top right */}
        <svg className="absolute -top-20 -right-20 w-80 h-80 opacity-[0.015]" viewBox="0 0 100 100">
          <polygon points="50,10 10,90 90,90" fill="none" stroke="#F8FAFC" strokeWidth="0.3" />
        </svg>
        
        {/* Partial triangle cropped by viewport edge - bottom left */}
        <svg className="absolute -bottom-32 -left-32 w-96 h-96 opacity-[0.012]" viewBox="0 0 100 100">
          <polygon points="50,90 10,10 90,10" fill="none" stroke="#E5E7EB" strokeWidth="0.3" />
        </svg>
        
        {/* Small wireframe triangle - structural accent mid-right */}
        <svg className="absolute top-[45%] right-[8%] w-20 h-20 opacity-[0.02]" viewBox="0 0 100 100">
          <polygon points="50,15 15,85 85,85" fill="none" stroke="#F8FAFC" strokeWidth="0.25" />
          <line x1="50" y1="15" x2="50" y2="50" stroke="#F8FAFC" strokeWidth="0.15" opacity="0.4" />
        </svg>
        
        {/* Overlapping triangle fragment - depth accent left side */}
        <svg className="absolute top-[30%] left-[6%] w-32 h-32 opacity-[0.018]" viewBox="0 0 100 100">
          <polygon points="50,20 20,80 80,80" fill="none" stroke="#E5E7EB" strokeWidth="0.3" />
          <polygon points="50,30 30,75 70,75" fill="none" stroke="#E5E7EB" strokeWidth="0.2" opacity="0.5" />
        </svg>
      </div>

      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Experience />
        <Education />
        <About />
        <Projects />
        <Skills />
        <Leadership />
        <Research />
        <Impact />
        <FAQ />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </div>
  );
}