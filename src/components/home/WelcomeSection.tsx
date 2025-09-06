import { useAuth } from '@/contexts/AuthContext';

const WelcomeSection = () => {
  const { user } = useAuth();

  return (
    <section className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-crafted-brown mb-4">
          Welcome{user ? `, ${user.email?.split('@')[0]}` : ''}!
        </h2>
        <p className="text-lg text-crafted-lightBrown max-w-3xl mx-auto">
          This interactive workbook helps you explore how your choices shape your life's journey.
          Work through chapters at your own pace, and save your progress along the way.
        </p>
      </div>
    </section>
  );
};

export default WelcomeSection;