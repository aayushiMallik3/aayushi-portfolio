import Navigation from '../components/Navigation';
import FAQ from '../components/FAQ';
import SocialFooter from '../components/SocialFooter';
import Footer from '../components/Footer';

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#0B0D12]">
      <Navigation />
      <FAQ />
      <SocialFooter />
      <Footer />
    </div>
  );
}