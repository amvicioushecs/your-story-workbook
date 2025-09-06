import { ShoppingCart, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from "@/hooks/use-toast";

const BookPurchaseSection = () => {
  const handlePurchaseBook = () => {
    window.open('https://amazon.com/crafted-by-choice', '_blank');
    toast({
      title: "Redirecting to Purchase",
      description: "Opening book purchase page in a new tab.",
    });
  };

  return (
    <section className="mb-16">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 flex justify-center">
          <div className="relative transform hover:scale-105 transition-all duration-300">
            <img 
              src="/lovable-uploads/a7789139-634a-468b-9f13-2ea2a4eec425.png" 
              alt="Crafted By Choice Book" 
              className="w-full max-w-md shadow-2xl rounded-md" 
            />
            <div className="absolute -bottom-4 -right-4 bg-crafted-gold text-crafted-brown px-4 py-2 rounded-full font-bold shadow-lg">
              Now Available!
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-crafted-brown mb-4">
            Get The Physical Book
          </h2>
          <div className="bg-yellow-50 border-l-4 border-crafted-gold p-4 mb-6">
            <p className="italic text-xl font-serif text-crafted-brown mb-2">
              "Not lucky. Not stuck. Just uncrafted—until now."
            </p>
            <p className="text-crafted-lightBrown">
              — Hector Verdugo
            </p>
          </div>
          <p className="text-lg text-crafted-lightBrown mb-6">
            Take your journey further with the complete physical book. Featuring additional exercises, 
            insights, and a beautifully crafted hardcover design that makes a perfect gift.
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={handlePurchaseBook}
                className="bg-crafted-brown hover:bg-crafted-brown/90 text-crafted-gold text-lg px-6 py-6 flex-1"
              >
                <ShoppingCart className="mr-2" />
                Purchase on Amazon
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => {
                  window.open('https://bookshop.org/search?keywords=crafted+by+choice', '_blank');
                  toast({
                    title: "Redirecting to Bookshop",
                    description: "Supporting independent bookstores.",
                  });
                }}
                className="border-crafted-gold text-crafted-brown hover:bg-crafted-gold/10 text-lg px-6 py-6 flex-1"
              >
                Support Local Bookstores
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="bg-crafted-brown/10 p-4 rounded-lg">
              <h3 className="font-serif text-lg font-semibold text-crafted-brown mb-2">Book Details</h3>
              <ul className="text-crafted-lightBrown space-y-1">
                <li>• Hardcover Edition - 280 pages</li>
                <li>• 15 Interactive Chapters</li>
                <li>• Bonus Reflection Exercises</li>
                <li>• Premium Paper Quality</li>
              </ul>
            </div>
          </div>
          
          <p className="text-sm text-crafted-lightBrown">
            *Shipping available worldwide. Orders typically arrive within 5-7 business days.
            <br />
            **eBook version also available on major platforms.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookPurchaseSection;