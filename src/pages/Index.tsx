
import React, { useState, useEffect } from 'react';
import ChapterNavigation from '../components/ChapterNavigation';
import WorkbookPage from '../components/WorkbookPage';
import SavePrompt from '../components/SavePrompt';
import { chapters } from '../data/chapters';
import { useWorkbookData } from '../hooks/useWorkbookData';
import { BookText } from 'lucide-react';

const Index = () => {
  const [activeChapter, setActiveChapter] = useState(1);
  const [lastSaved, setLastSaved] = useState<Date | undefined>();
  const { isLoaded } = useWorkbookData();
  const currentChapter = chapters.find(chapter => chapter.id === activeChapter) || chapters[0];

  // Update lastSaved timestamp when entries change
  useEffect(() => {
    if (isLoaded) {
      setLastSaved(new Date());
    }
  }, [isLoaded]);

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
          <div className="lg:w-1/4">
            <div className="sticky top-8">
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
          <div className="lg:w-3/4">
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
