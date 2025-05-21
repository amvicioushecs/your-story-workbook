
import React from 'react';
import { Chapter } from '../data/chapters';
import { useWorkbookData } from '../hooks/useWorkbookData';
import Question from './workbook/Question';
import { ChapterHeader, ChapterCommitmentSection } from './workbook/ChapterSections';

interface WorkbookPageProps {
  chapter: Chapter;
}

const WorkbookPage: React.FC<WorkbookPageProps> = ({ chapter }) => {
  const { saveEntry, getEntry } = useWorkbookData();

  const handleInputChange = (questionId: string, value: string) => {
    saveEntry(questionId, value);
  };

  const handleCheckboxChange = (questionId: string, option: string, checked: boolean) => {
    // Get current selected options
    const currentValueStr = getEntry(questionId) || '[]';
    let currentOptions: string[] = [];
    
    try {
      currentOptions = JSON.parse(currentValueStr);
      // Ensure it's an array
      if (!Array.isArray(currentOptions)) {
        currentOptions = [];
      }
    } catch (e) {
      // If not valid JSON, start with empty array
      currentOptions = [];
    }
    
    // Update options
    if (checked) {
      // Add option if not already included
      if (!currentOptions.includes(option)) {
        currentOptions.push(option);
      }
    } else {
      // Remove option
      currentOptions = currentOptions.filter(item => item !== option);
    }
    
    // Save as JSON string
    saveEntry(questionId, JSON.stringify(currentOptions));
  };

  // Function to check if an option is selected in a checkbox group
  const isOptionSelected = (questionId: string, option: string): boolean => {
    const currentValueStr = getEntry(questionId) || '[]';
    try {
      const currentOptions = JSON.parse(currentValueStr);
      return Array.isArray(currentOptions) && currentOptions.includes(option);
    } catch (e) {
      return false;
    }
  };

  return (
    <div className="paper-texture p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <ChapterHeader chapter={chapter} />

      <div className="space-y-8">
        {chapter.questions.map((question) => (
          <Question
            key={question.id}
            question={question}
            value={getEntry(question.id)}
            onInputChange={handleInputChange}
            onCheckboxChange={handleCheckboxChange}
            isOptionSelected={isOptionSelected}
          />
        ))}
      </div>

      <ChapterCommitmentSection chapter={chapter} />
    </div>
  );
};

export default WorkbookPage;
