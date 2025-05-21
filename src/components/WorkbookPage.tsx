
import React from 'react';
import { Chapter } from '../data/chapters';
import { useWorkbookData } from '../hooks/useWorkbookData';

interface WorkbookPageProps {
  chapter: Chapter;
}

const WorkbookPage: React.FC<WorkbookPageProps> = ({ chapter }) => {
  const { saveEntry, getEntry } = useWorkbookData();

  const handleInputChange = (questionId: string, value: string) => {
    saveEntry(questionId, value);
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
        <p className="text-lg text-crafted-brown italic mb-6">
          {chapter.description}
        </p>
        <div className="w-full h-1 bg-crafted-gold opacity-30 rounded-full"></div>
      </div>

      <div className="space-y-8">
        {chapter.questions.map((question) => (
          <div key={question.id} className="mb-6">
            <label 
              htmlFor={question.id} 
              className="block text-xl font-serif font-medium text-crafted-brown mb-2"
            >
              {question.question}
            </label>
            
            {question.multiline ? (
              <textarea
                id={question.id}
                value={getEntry(question.id)}
                onChange={(e) => handleInputChange(question.id, e.target.value)}
                className="w-full min-h-[150px] border-2 rounded-md p-3"
                placeholder={question.placeholder}
              />
            ) : (
              <input
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
    </div>
  );
};

export default WorkbookPage;
