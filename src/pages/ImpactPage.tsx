import Navigation from '../components/Navigation';
import Impact from '../components/Impact';
import SocialFooter from '../components/SocialFooter';
import Footer from '../components/Footer';

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-[#0B0D12]">
      <Navigation />
      <Impact />
      <SocialFooter />
      <Footer />
    </div>
  );
}