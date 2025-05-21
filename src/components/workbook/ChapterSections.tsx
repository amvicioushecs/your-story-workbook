
import React from 'react';
import { Chapter } from '../../data/chapters';

interface ChapterSectionProps {
  chapter: Chapter;
}

export const ChapterHeader: React.FC<ChapterSectionProps> = ({ chapter }) => {
  // Determine if we should show the chapter-specific heading
  const showReflectRevealSection = chapter.id === 1 || chapter.id === 2 || chapter.id === 3 || 
                                   chapter.id === 4 || chapter.id === 5 || chapter.id === 6 || 
                                   chapter.id === 7 || chapter.id === 8 || chapter.id === 9 ||
                                   chapter.id === 10 || chapter.id === 11 || chapter.id === 12 ||
                                   chapter.id === 13 || chapter.id === 14;
  
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-serif font-bold text-crafted-brown mb-2">
        Chapter {chapter.id}: {chapter.title}
      </h1>
      {chapter.subtitle && (
        <h2 className="text-2xl font-serif text-crafted-lightBrown mb-4">
          {chapter.subtitle}
        </h2>
      )}
      {chapter.snapshot && (
        <div className="bg-crafted-cream bg-opacity-50 p-4 rounded-md border-l-4 border-crafted-gold mb-6">
          <h3 className="font-serif font-semibold text-lg text-crafted-brown mb-2">Chapter Snapshot</h3>
          <p className="italic text-crafted-brown">{chapter.snapshot}</p>
        </div>
      )}
      <p className="text-lg text-crafted-brown italic mb-6">
        {chapter.description}
      </p>
      {showReflectRevealSection && (
        <div className="mb-6">
          <h3 className="font-serif font-semibold text-xl text-crafted-brown mb-2">
            Reflect + Reveal
          </h3>
        </div>
      )}
      <div className="w-full h-1 bg-crafted-gold opacity-30 rounded-full"></div>
    </div>
  );
};

export const ChapterCommitmentSection: React.FC<ChapterSectionProps> = ({ chapter }) => {
  // Determine if we should show the commitment section
  const showCommitmentSection = chapter.id === 1 || chapter.id === 2 || chapter.id === 3 || 
                                chapter.id === 4 || chapter.id === 5 || chapter.id === 6 ||
                                chapter.id === 7 || chapter.id === 8 || chapter.id === 9 ||
                                chapter.id === 10 || chapter.id === 11 || chapter.id === 12 ||
                                chapter.id === 13 || chapter.id === 14;
  
  // Get the commitment section title based on chapter
  const getCommitmentTitle = () => {
    if (chapter.id === 1) return "Commit to the Choice";
    if (chapter.id === 2) return "Commit to the Choice";
    if (chapter.id === 3) return "Commit to the Choice";
    if (chapter.id === 4) return "Commit to the Choice";
    if (chapter.id === 5) return "Commit to the Choice";
    if (chapter.id === 6) return "Commit to the Choice";
    if (chapter.id === 7) return "Commit to the Choice";
    if (chapter.id === 8) return "Commit to the Choice";
    if (chapter.id === 9) return "Commit to the Choice";
    if (chapter.id === 10) return "Commit to the Choice";
    if (chapter.id === 11) return "Commit to the Choice";
    if (chapter.id === 12) return "Commit to the Choice";
    if (chapter.id === 13) return "Commit to the Choice";
    if (chapter.id === 14) return "Commit to the Choice";
    return "Commitment";
  };

  // Get the chapter-specific commitment message
  const getCommitmentMessage = () => {
    if (chapter.id === 1) {
      return "Sign below to acknowledge your commitment to crafting your life by choice.";
    }
    if (chapter.id === 2) {
      return "I honor my wake-up by refusing to go back to sleep.";
    }
    if (chapter.id === 3) {
      return "I will stop reacting. I will start crafting.";
    }
    if (chapter.id === 4) {
      return "I am the author now.";
    }
    if (chapter.id === 5) {
      return "Fear doesn't get the vote. Bias doesn't get the mic. I decide who I become.";
    }
    if (chapter.id === 6) {
      return "I am the pattern-breaker.";
    }
    if (chapter.id === 7) {
      return "Clarity is my compass.";
    }
    if (chapter.id === 8) {
      return "I am the system now.";
    }
    if (chapter.id === 9) {
      return "I am intentional with who gets proximity to my power.";
    }
    if (chapter.id === 10) {
      return "I persist in silence.";
    }
    if (chapter.id === 11) {
      return "I do not flinch. I decide.";
    }
    if (chapter.id === 12) {
      return "I grow without guilt.";
    }
    if (chapter.id === 13) {
      return "I craft in a way that outlives me.";
    }
    if (chapter.id === 14) {
      return "Radical ownership is my freedom.";
    }
    return "";
  };

  if (!showCommitmentSection) return null;
  
  return (
    <div className="mt-10 pt-6 border-t border-crafted-gold">
      <h3 className="font-serif font-semibold text-xl text-crafted-brown mb-2">
        {getCommitmentTitle()}
      </h3>
      <p className="text-crafted-brown italic mb-4">
        {getCommitmentMessage()}
      </p>
    </div>
  );
};
