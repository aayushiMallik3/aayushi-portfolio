import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import SocialFooter from '../components/SocialFooter';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0B0D12]">
      <Navigation />
      <Hero />
      <SocialFooter />
      <Footer />
    </div>
  );
}