import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, BookText, ChevronRight, PencilLine, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '../contexts/AuthContext';
const HomePage = () => {
  const {
    user
  } = useAuth();
  return <div className="min-h-screen">
      {/* Hero section */}
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
            {!user && <Link to="/auth">
                <Button variant="outline" className="border-crafted-gold text-lg px-6 py-6 text-amber-500 bg-yellow-900 hover:bg-yellow-800">
                  Sign Up <User className="ml-2" />
                </Button>
              </Link>}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container px-4 md:px-6 py-8 max-w-6xl mx-auto">
        {/* Welcome section */}
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

        {/* Features section */}
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
            {!user && <CardFooter>
                <Link to="/auth" className="w-full">
                  <Button variant="outline" className="w-full">Sign Up Now</Button>
                </Link>
              </CardFooter>}
          </Card>
        </section>

        {/* CTA section */}
        <section className="paper-texture p-8 rounded-lg border border-crafted-gold/30 text-center mb-16">
          <h3 className="text-2xl font-serif font-semibold text-crafted-brown mb-4">Ready to begin your journey?</h3>
          <p className="text-lg text-crafted-lightBrown mb-6">
            Start with Chapter 1: Introduction to Choice, or pick up where you left off.
          </p>
          <Link to="/workbook">
            <Button className="bg-crafted-gold hover:bg-crafted-gold/90 text-crafted-brown">
              Open Workbook
            </Button>
          </Link>
        </section>

        {/* Testimonial section */}
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
      </div>
      
      {/* Footer */}
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
            </div>
          </div>
          <div className="mt-6 text-center text-crafted-cream/50 text-sm">
            <p>© {new Date().getFullYear()} Crafted By Choice. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default HomePage;