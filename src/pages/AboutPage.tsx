import Navigation from '../components/Navigation';
import About from '../components/About';
import SocialFooter from '../components/SocialFooter';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0B0D12]">
      <Navigation />
      <About />
      <SocialFooter />
      <Footer />
    </div>
  );
}