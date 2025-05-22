
import React, { useState, useEffect } from 'react';
import ChapterNavigation from '../components/ChapterNavigation';
import WorkbookPage from '../components/WorkbookPage';
import SavePrompt from '../components/SavePrompt';
import { chapters } from '../data/chapters';
import { useWorkbookData } from '../hooks/useWorkbookData';
import { BookText, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Index = () => {
  const [activeChapter, setActiveChapter] = useState(1);
  const [lastSaved, setLastSaved] = useState<Date | undefined>();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { isLoaded } = useWorkbookData();
  const currentChapter = chapters.find(chapter => chapter.id === activeChapter) || chapters[0];

  // Update lastSaved timestamp when entries change
  useEffect(() => {
    if (isLoaded) {
      setLastSaved(new Date());
    }
  }, [isLoaded]);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Header */}
      <div className="wood-texture text-center py-12 px-4 mb-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-crafted-gold mb-4">
            Crafted By Choice
          </h1>
          <h2 className="text-2xl md:text-3xl font-serif text-crafted-cream mb-6">
            Interactive Workbook Edition
          </h2>
          <p className="text-xl text-crafted-cream opacity-90 max-w-2xl mx-auto">
            How the decisions we make shape the life we live
          </p>
          <p className="text-lg text-crafted-cream opacity-70 mt-2 italic">
            By Hector Verdugo
          </p>
        </div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="mb-8 flex items-center justify-center space-x-2">
          <BookText className="h-6 w-6 text-crafted-brown" />
          <h2 className="text-2xl font-serif font-semibold text-crafted-brown">Your Personal Workbook</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar for larger screens */}
          <div 
            className={cn(
              "lg:sticky lg:top-8 transition-all duration-300 ease-in-out overflow-hidden",
              sidebarOpen ? "lg:w-1/4" : "lg:w-0"
            )}
          >
            <div className="lg:pr-4">
              {/* Toggle button for sidebar - moved above chapters */}
              <div className="hidden lg:flex justify-end mb-4">
                <Button
                  onClick={toggleSidebar}
                  variant="outline"
                  size="icon"
                  className="bg-crafted-cream hover:bg-crafted-gold hover:text-crafted-cream border-crafted-gold rounded-full h-8 w-8 shadow-md"
                >
                  {sidebarOpen ? <ChevronLeft /> : <ChevronRight />}
                </Button>
              </div>
              
              <ChapterNavigation 
                activeChapter={activeChapter} 
                setActiveChapter={setActiveChapter} 
              />
              <div className="mt-8 p-4 bg-white bg-opacity-70 rounded-lg border border-crafted-gold">
                <h3 className="font-serif text-lg text-crafted-brown mb-2">Your Progress</h3>
                <p className="text-crafted-lightBrown">
                  All your answers are saved automatically and securely in your browser.
                </p>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className={cn(
            "transition-all duration-300",
            sidebarOpen ? "lg:w-3/4" : "lg:w-full"
          )}>
            {isLoaded && <WorkbookPage chapter={currentChapter} />}
          </div>
        </div>
      </div>

      {/* Bottom navigation for mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white bg-opacity-95 border-t border-crafted-gold p-4">
        <ChapterNavigation 
          activeChapter={activeChapter} 
          setActiveChapter={setActiveChapter} 
        />
      </div>

      {/* Save notification */}
      <SavePrompt lastSaved={lastSaved} />
    </div>
  );
};

export default Index;
