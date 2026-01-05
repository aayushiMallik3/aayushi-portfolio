import Navigation from '../components/Navigation';
import Research from '../components/Research';
import SocialFooter from '../components/SocialFooter';
import Footer from '../components/Footer';

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-[#0B0D12]">
      <Navigation />
      <Research />
      <SocialFooter />
      <Footer />
    </div>
  );
}