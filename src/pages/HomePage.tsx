
import HeroSection from '@/components/home/HeroSection';
import AudioSection from '@/components/home/AudioSection';
import BookPurchaseSection from '@/components/home/BookPurchaseSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import CommunitySection from '@/components/home/CommunitySection';
import CTASection from '@/components/home/CTASection';
import TestimonialSection from '@/components/home/TestimonialSection';
import Footer from '@/components/home/Footer';
import WelcomeSection from '@/components/home/WelcomeSection';

const HomePage = () => {

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      <div className="container px-4 md:px-6 py-8 max-w-6xl mx-auto">
        <WelcomeSection />
        <AudioSection />
        <BookPurchaseSection />
        <FeaturesSection />
        <CommunitySection />
        <CTASection />
        <TestimonialSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default HomePage;
