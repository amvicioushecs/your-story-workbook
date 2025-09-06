import { Link } from 'react-router-dom';
import { ChevronRight, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

const HeroSection = () => {
  const { user } = useAuth();

  return (
    <div className="wood-texture text-center py-16 px-4 mb-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-crafted-gold mb-4 animate-fade-in">
          Crafted By Choice
        </h1>
        <h2 className="text-2xl md:text-3xl font-serif text-crafted-cream mb-8 animate-fade-in animation-delay-150">
          Interactive Workbook Experience
        </h2>
        <p className="text-xl text-crafted-cream opacity-90 max-w-2xl mx-auto mb-8 animate-fade-in animation-delay-300">
          Begin your personal journey to understand how the decisions you make shape the life you live
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in animation-delay-450">
          <Link to="/workbook">
            <Button className="bg-crafted-gold hover:bg-crafted-gold/90 text-crafted-brown text-lg px-6 py-6">
              Start Your Workbook <ChevronRight className="ml-2" />
            </Button>
          </Link>
          {!user && (
            <Link to="/auth">
              <Button variant="outline" className="border-crafted-gold text-lg px-6 py-6 text-amber-500 bg-yellow-900 hover:bg-yellow-800">
                Sign Up <User className="ml-2" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;