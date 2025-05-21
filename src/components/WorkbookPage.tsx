
import React, { useState } from 'react';
import { Chapter } from '../data/chapters';
import { useWorkbookData } from '../hooks/useWorkbookData';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';

interface WorkbookPageProps {
  chapter: Chapter;
}

const WorkbookPage: React.FC<WorkbookPageProps> = ({ chapter }) => {
  const { saveEntry, getEntry } = useWorkbookData();

  const handleInputChange = (questionId: string, value: string) => {
    saveEntry(questionId, value);
  };

  const handleCheckboxChange = (questionId: string, option: string) => {
    const currentValue = getEntry(questionId) || '';
    const values = currentValue ? JSON.parse(currentValue) : [];
    
    if (values.includes(option)) {
      // Remove option if already selected
      saveEntry(questionId, JSON.stringify(values.filter((val: string) => val !== option)));
    } else {
      // Add option if not already selected
      saveEntry(questionId, JSON.stringify([...values, option]));
    }
  };

  const renderSignatureField = (questionId: string) => (
    <div className="mt-2 border-b-2 border-crafted-brown pb-1">
      <Input 
        type="text"
        id={questionId} 
        value={getEntry(questionId)}
        onChange={(e) => handleInputChange(questionId, e.target.value)}
        className="border-0 border-b-0 rounded-none px-0 font-serif italic"
        placeholder="Type your name here"
      />
    </div>
  );

  const renderCommitField = (questionId: string, placeholder: string) => (
    <div className="mt-2 border-b-2 border-dashed border-crafted-brown pb-1">
      <Input 
        type="text"
        id={questionId} 
        value={getEntry(questionId)}
        onChange={(e) => handleInputChange(questionId, e.target.value)}
        className="border-0 border-b-0 rounded-none px-0"
        placeholder={placeholder}
      />
    </div>
  );

  const renderCircleCrossOptions = (question: any) => {
    const selectedOptions = getEntry(question.id) ? JSON.parse(getEntry(question.id)) : [];
    
    return (
      <div className="mt-4 space-y-3">
        {question.options && question.options.map((option: string) => (
          <div key={option} className="flex items-center space-x-2">
            <Checkbox 
              id={`${question.id}-${option}`}
              checked={selectedOptions.includes(option)}
              onCheckedChange={() => handleCheckboxChange(question.id, option)}
              className="border-crafted-brown data-[state=checked]:bg-crafted-gold data-[state=checked]:border-crafted-gold"
            />
            <Label 
              htmlFor={`${question.id}-${option}`}
              className="text-crafted-brown font-medium cursor-pointer text-lg"
            >
              {option}
            </Label>
          </div>
        ))}
      </div>
    );
  };

  // Determine if we should show the chapter-specific heading
  const showReflectRevealSection = chapter.id === 1 || chapter.id === 2 || chapter.id === 3;
  // Determine if we should show the commitment section
  const showCommitmentSection = chapter.id === 1 || chapter.id === 2 || chapter.id === 3;
  
  // Get the commitment section title based on chapter
  const getCommitmentTitle = () => {
    if (chapter.id === 1) return "Commit to the Choice";
    if (chapter.id === 2) return "Commit to the Choice";
    if (chapter.id === 3) return "Commit to the Choice";
    return "Commitment";
  };

  return (
    <div className="paper-texture p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
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

      <div className="space-y-8">
        {chapter.questions.map((question) => (
          <div key={question.id} className="mb-6">
            <Label 
              htmlFor={question.id} 
              className="block text-xl font-serif font-medium text-crafted-brown mb-2"
            >
              {question.question}
            </Label>
            
            {question.type === "signature" ? (
              renderSignatureField(question.id)
            ) : question.type === "commit" ? (
              renderCommitField(question.id, question.placeholder)
            ) : question.type === "circle-cross" ? (
              renderCircleCrossOptions(question)
            ) : question.multiline ? (
              <Textarea
                id={question.id}
                value={getEntry(question.id)}
                onChange={(e) => handleInputChange(question.id, e.target.value)}
                className="w-full min-h-[150px] border-2 rounded-md p-3"
                placeholder={question.placeholder}
              />
            ) : (
              <Input
                type="text"
                id={question.id}
                value={getEntry(question.id)}
                onChange={(e) => handleInputChange(question.id, e.target.value)}
                className="w-full border-2 rounded-md p-3"
                placeholder={question.placeholder}
              />
            )}
          </div>
        ))}
      </div>

      {showCommitmentSection && (
        <div className="mt-10 pt-6 border-t border-crafted-gold">
          <h3 className="font-serif font-semibold text-xl text-crafted-brown mb-4">
            {getCommitmentTitle()}
          </h3>
          {chapter.id === 1 && (
            <p className="text-crafted-brown italic mb-4">
              Sign below to acknowledge your commitment to crafting your life by choice.
            </p>
          )}
          {chapter.id === 2 && (
            <p className="text-crafted-brown italic mb-4">
              I honor my wake-up by refusing to go back to sleep.
            </p>
          )}
          {chapter.id === 3 && (
            <p className="text-crafted-brown italic mb-4">
              I will stop reacting. I will start crafting.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default WorkbookPage;
