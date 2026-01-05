import Navigation from '../components/Navigation';
import Leadership from '../components/Leadership';
import SocialFooter from '../components/SocialFooter';
import Footer from '../components/Footer';

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-[#0B0D12]">
      <Navigation />
      <Leadership />
      <SocialFooter />
      <Footer />
    </div>
  );
}