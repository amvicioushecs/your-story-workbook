import { Link } from 'react-router-dom';
import { BookOpen, BookText, PencilLine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';

const FeaturesSection = () => {
  const { user } = useAuth();

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      <Card className="border-crafted-gold/30 hover:border-crafted-gold transition-all hover:shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center">
            <BookOpen className="mr-2 text-crafted-gold" />
            Interactive Chapters
          </CardTitle>
          <CardDescription>Explore 15 thought-provoking chapters</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Each chapter builds on the previous one, guiding you through a journey of self-discovery and personal growth.</p>
        </CardContent>
      </Card>
      
      <Card className="border-crafted-gold/30 hover:border-crafted-gold transition-all hover:shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center">
            <PencilLine className="mr-2 text-crafted-gold" />
            Personal Reflections
          </CardTitle>
          <CardDescription>Document your thoughts and insights</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Answer questions, complete exercises, and record your personal reflections throughout your journey.</p>
        </CardContent>
      </Card>
      
      <Card className="border-crafted-gold/30 hover:border-crafted-gold transition-all hover:shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center">
            <BookText className="mr-2 text-crafted-gold" />
            Save Your Progress
          </CardTitle>
          <CardDescription>Never lose your valuable insights</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{user ? 'Your progress is automatically saved to your account.' : 'Create an account to save your progress across devices and sessions.'}</p>
        </CardContent>
        {!user && (
          <CardFooter>
            <Link to="/auth" className="w-full">
              <Button variant="outline" className="w-full">Sign Up Now</Button>
            </Link>
          </CardFooter>
        )}
      </Card>
    </section>
  );
};

export default FeaturesSection;