
import React from 'react';
import { chapters } from '../data/chapters';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ChapterNavigationProps {
  activeChapter: number;
  setActiveChapter: (chapterId: number) => void;
}

const ChapterNavigation: React.FC<ChapterNavigationProps> = ({ 
  activeChapter,
  setActiveChapter
}) => {
  const currentChapter = chapters.find(chapter => chapter.id === activeChapter);

  return (
    <div className="mb-8">
      <h2 className="text-xl font-serif text-crafted-brown mb-4">Chapters</h2>
      <Select 
        value={activeChapter.toString()} 
        onValueChange={(value) => setActiveChapter(parseInt(value))}
      >
        <SelectTrigger className="w-full bg-crafted-cream border-crafted-brown text-crafted-brown hover:bg-crafted-gold/20">
          <SelectValue>
            {currentChapter ? `Chapter ${currentChapter.id}: ${currentChapter.title}` : 'Select a chapter'}
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="bg-white border-crafted-gold max-h-96 overflow-y-auto z-50">
          {chapters.map((chapter) => (
            <SelectItem 
              key={chapter.id} 
              value={chapter.id.toString()}
              className="text-crafted-brown hover:bg-crafted-gold/20 focus:bg-crafted-gold/20 cursor-pointer"
            >
              Chapter {chapter.id}: {chapter.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ChapterNavigation;
