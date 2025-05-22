
import React from 'react';
import { chapters } from '../data/chapters';
import { cn } from '@/lib/utils';

interface ChapterNavigationProps {
  activeChapter: number;
  setActiveChapter: (chapterId: number) => void;
}

const ChapterNavigation: React.FC<ChapterNavigationProps> = ({ 
  activeChapter,
  setActiveChapter
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-serif text-crafted-brown mb-4">Chapters</h2>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
        {chapters.map((chapter) => (
          <button
            key={chapter.id}
            onClick={() => setActiveChapter(chapter.id)}
            className={cn(
              "flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 font-medium",
              activeChapter === chapter.id 
                ? "bg-crafted-brown text-crafted-cream shadow-md" 
                : "bg-crafted-cream text-crafted-brown border border-crafted-brown hover:bg-crafted-gold hover:border-crafted-gold"
            )}
          >
            {chapter.id}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChapterNavigation;
