import { Card, CardContent } from '@/components/ui/card';

const TestimonialSection = () => {
  return (
    <section className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif font-semibold text-crafted-brown mb-4">
          From Our Readers
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-white/70">
          <CardContent className="pt-6">
            <p className="italic text-crafted-lightBrown mb-4">
              "This workbook helped me realize how my daily choices were affecting my long-term goals. 
              The reflective exercises were exactly what I needed to gain clarity."
            </p>
            <p className="font-semibold text-crafted-brown">— Sarah K.</p>
          </CardContent>
        </Card>
        <Card className="bg-white/70">
          <CardContent className="pt-6">
            <p className="italic text-crafted-lightBrown mb-4">
              "I've tried many self-help books, but the interactive nature of this workbook made all the difference. 
              It's like having a personal coach guiding you through important life decisions."
            </p>
            <p className="font-semibold text-crafted-brown">— Michael T.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TestimonialSection;