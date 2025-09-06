import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CommunitySection = () => {
  return (
    <section className="mb-16 paper-texture p-8 rounded-lg">
      <div className="text-center mb-6">
        <Users className="h-12 w-12 mx-auto text-crafted-gold mb-4" />
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-crafted-brown mb-4">
          Join Our Community
        </h2>
        <p className="text-lg text-crafted-lightBrown max-w-3xl mx-auto mb-6">
          You don't have to go at it alone. Connect with the Crafted By Choice community of like-minded 
          individuals who are also on their journey of rewriting their story, holding each other 
          accountable, and encouraging each other to be their best selves.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white bg-opacity-70 p-6 rounded-lg border border-crafted-gold/30 shadow-sm">
          <h3 className="font-serif text-xl font-semibold text-crafted-brown mb-2">Accountability</h3>
          <p className="text-crafted-lightBrown">
            Share your goals and progress with others who understand the journey and will help keep you on track.
          </p>
        </div>
        
        <div className="bg-white bg-opacity-70 p-6 rounded-lg border border-crafted-gold/30 shadow-sm">
          <h3 className="font-serif text-xl font-semibold text-crafted-brown mb-2">Support</h3>
          <p className="text-crafted-lightBrown">
            Get encouragement and advice from others who are facing similar challenges in their life transformation.
          </p>
        </div>
        
        <div className="bg-white bg-opacity-70 p-6 rounded-lg border border-crafted-gold/30 shadow-sm">
          <h3 className="font-serif text-xl font-semibold text-crafted-brown mb-2">Inspiration</h3>
          <p className="text-crafted-lightBrown">
            Be inspired by success stories and creative approaches from community members on similar journeys.
          </p>
        </div>
      </div>
      
      <div className="text-center">
        <Link to="/community">
          <Button className="bg-crafted-gold hover:bg-crafted-gold/90 text-crafted-brown text-lg px-6 py-5">
            Join Our Community
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CommunitySection;