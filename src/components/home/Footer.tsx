import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-crafted-brown text-crafted-cream py-8">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-serif font-semibold text-crafted-gold">Crafted By Choice</h3>
            <p className="text-crafted-cream/70">Interactive Workbook Edition</p>
          </div>
          <div className="flex space-x-4">
            <Link to="/workbook" className="text-crafted-cream hover:text-crafted-gold transition-colors">
              Workbook
            </Link>
            <Link to="/auth" className="text-crafted-cream hover:text-crafted-gold transition-colors">
              Account
            </Link>
            <Link to="/community" className="text-crafted-cream hover:text-crafted-gold transition-colors">
              Community
            </Link>
          </div>
        </div>
        <div className="mt-6 text-center text-crafted-cream/50 text-sm">
          <p>© {new Date().getFullYear()} Crafted By Choice. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;