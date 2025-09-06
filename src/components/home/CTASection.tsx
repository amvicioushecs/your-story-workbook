import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="paper-texture p-8 rounded-lg border border-crafted-gold/30 text-center mb-16 bg-yellow-900">
      <h3 className="text-2xl font-serif font-semibold mb-4 text-amber-500">Ready to begin your journey?</h3>
      <p className="text-lg mb-6 text-orange-300">
        Start with Chapter 1: Introduction to Choice, or pick up where you left off.
      </p>
      <Link to="/workbook">
        <Button className="bg-crafted-gold hover:bg-crafted-gold/90 text-crafted-brown">
          Open Workbook
        </Button>
      </Link>
    </section>
  );
};

export default CTASection;