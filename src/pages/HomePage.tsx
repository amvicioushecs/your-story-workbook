
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, BookText, ChevronRight, PencilLine, User, ShoppingCart, Users, Play, Pause, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '../contexts/AuthContext';
import { toast } from "@/hooks/use-toast";

const HomePage = () => {
  const { user } = useAuth();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [audioLoaded, setAudioLoaded] = React.useState(false);
  const [audioError, setAudioError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedData = () => {
      console.log('Audio loaded successfully');
      setAudioLoaded(true);
      setAudioError(false);
      setIsLoading(false);
    };

    const handleCanPlay = () => {
      console.log('Audio can start playing');
      setAudioLoaded(true);
      setIsLoading(false);
    };

    const handleError = (e: Event) => {
      console.error('Audio loading error:', e);
      const target = e.target as HTMLAudioElement;
      console.error('Audio error details:', {
        error: target.error,
        networkState: target.networkState,
        readyState: target.readyState,
        src: target.src
      });
      
      setAudioError(true);
      setAudioLoaded(false);
      setIsPlaying(false);
      setIsLoading(false);
      
      toast({
        title: "Audio Unavailable",
        description: "The audio file could not be loaded. Please check your internet connection and try again.",
        variant: "destructive"
      });
    };

    const handleLoadStart = () => {
      console.log('Audio loading started');
      setIsLoading(true);
    };

    const handleEnded = () => {
      console.log('Audio playback ended');
      setIsPlaying(false);
    };

    const handlePause = () => {
      console.log('Audio paused');
      setIsPlaying(false);
    };

    const handlePlay = () => {
      console.log('Audio started playing');
      setIsPlaying(true);
    };

    // Add all event listeners
    audio.addEventListener('loadeddata', handleLoadedData);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('error', handleError);
    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('play', handlePlay);

    // Load the audio
    audio.load();

    // Cleanup function
    return () => {
      audio.removeEventListener('loadeddata', handleLoadedData);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('play', handlePlay);
    };
  }, []);

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) {
      console.error('Audio element not found');
      return;
    }

    if (audioError) {
      toast({
        title: "Audio Error",
        description: "Audio file is not available. Please refresh the page and try again.",
        variant: "destructive"
      });
      return;
    }

    if (!audioLoaded) {
      toast({
        title: "Audio Loading",
        description: "Audio is still loading. Please wait a moment and try again.",
      });
      return;
    }

    try {
      if (isPlaying) {
        console.log('Pausing audio');
        audio.pause();
      } else {
        console.log('Starting audio playback');
        
        // Reset to beginning if the audio has ended
        if (audio.ended) {
          audio.currentTime = 0;
        }
        
        // Attempt to play
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          await playPromise;
          console.log('Audio playback started successfully');
        }
      }
    } catch (error) {
      console.error("Audio playback failed:", error);
      setIsPlaying(false);
      
      // More specific error handling
      if (error instanceof DOMException) {
        if (error.name === 'NotAllowedError') {
          toast({
            title: "Playback Blocked",
            description: "Audio playback was blocked by your browser. Please interact with the page first and try again.",
            variant: "destructive"
          });
        } else if (error.name === 'NotSupportedError') {
          toast({
            title: "Audio Not Supported",
            description: "This audio format is not supported by your browser.",
            variant: "destructive"
          });
        } else {
          toast({
            title: "Playback Failed",
            description: `Audio playback failed: ${error.message}`,
            variant: "destructive"
          });
        }
      } else {
        toast({
          title: "Playback Failed",
          description: "Unable to play the audio. Please try refreshing the page.",
          variant: "destructive"
        });
      }
    }
  };

  const getAudioStatusText = () => {
    if (audioError) return "Audio temporarily unavailable";
    if (isLoading) return "Loading audio...";
    if (audioLoaded) return "Click to play the audio overview";
    return "Audio loading...";
  };

  const handlePurchaseBook = () => {
    window.open('https://amazon.com/crafted-by-choice', '_blank');
    toast({
      title: "Redirecting to Purchase",
      description: "Opening book purchase page in a new tab.",
    });
  };

  return (
    <div className="min-h-screen">
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

        {/* Audio message from The Deep Dive Podcast */}
        <section className="mb-8">
          <div className="bg-crafted-brown/10 rounded-lg p-6 border border-crafted-gold/30">
            <h3 className="text-2xl font-serif font-semibold text-crafted-brown mb-4 flex items-center">
              <span>Message from The Deep Dive Podcast</span>
            </h3>
            <div className="flex items-center gap-4">
              <Button 
                onClick={toggleAudio} 
                variant="outline" 
                size="icon" 
                className="h-12 w-12 rounded-full border-2 border-crafted-gold bg-crafted-gold/10 hover:bg-crafted-gold/20 disabled:opacity-50"
                disabled={audioError || isLoading}
              >
                {isPlaying ? (
                  <Pause className="h-6 w-6 text-crafted-brown" />
                ) : (
                  <Play className="h-6 w-6 text-crafted-brown ml-1" />
                )}
              </Button>
              <div className="flex-1">
                <p className="text-crafted-lightBrown font-medium">Book Overview and Insights</p>
                <p className="text-sm text-crafted-lightBrown/70">
                  {getAudioStatusText()}
                </p>
              </div>
            </div>
            <audio 
              ref={audioRef} 
              className="hidden" 
              preload="metadata"
              crossOrigin="anonymous"
            >
              <source src="/VERT_The Crafted Life.mp3" type="audio/mpeg" />
              <source src="/VERT_The Crafted Life.mp3" type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </section>

        {/* Book purchase section */}
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
            {!user && (
              <CardFooter>
                <Link to="/auth" className="w-full">
                  <Button variant="outline" className="w-full">Sign Up Now</Button>
                </Link>
              </CardFooter>
            )}
          </Card>
        </section>

        {/* Community section */}
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

        {/* CTA section */}
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
    </div>
  );
};

export default HomePage;
