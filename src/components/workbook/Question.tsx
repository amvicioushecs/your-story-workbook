
import React from 'react';
import { WorkbookQuestion } from '../../data/chapters';
import { Label } from '../ui/label';
import { 
  RenderSignatureField, 
  RenderCommitField, 
  RenderCheckboxOptions,
  RenderTextInput,
  RenderTextArea
} from './QuestionRenderers';

interface QuestionProps {
  question: WorkbookQuestion;
  value: string;
  onInputChange: (questionId: string, value: string) => void;
  onCheckboxChange: (questionId: string, option: string, checked: boolean) => void;
  isOptionSelected: (questionId: string, option: string) => boolean;
}

const Question: React.FC<QuestionProps> = ({
  question,
  value,
  onInputChange,
  onCheckboxChange,
  isOptionSelected
}) => {
  return (
    <div className="mb-6">
      <Label 
        htmlFor={question.id} 
        className="block text-xl font-serif font-medium text-crafted-brown mb-2"
      >
        {question.question}
      </Label>
      
      {question.type === "signature" ? (
        <RenderSignatureField 
          questionId={question.id} 
          value={value}
          onInputChange={onInputChange}
        />
      ) : question.type === "commit" ? (
        <RenderCommitField 
          questionId={question.id} 
          value={value}
          onInputChange={onInputChange}
          placeholder={question.placeholder}
        />
      ) : question.type === "circle-cross" && question.options ? (
        <RenderCheckboxOptions 
          questionId={question.id} 
          options={question.options}
          onCheckboxChange={onCheckboxChange}
          isOptionSelected={isOptionSelected}
          value={value}
          onInputChange={onInputChange}
        />
      ) : question.multiline ? (
        <RenderTextArea
          questionId={question.id}
          value={value}
          onInputChange={onInputChange}
          placeholder={question.placeholder}
        />
      ) : (
        <RenderTextInput
          questionId={question.id}
          value={value}
          onInputChange={onInputChange}
          placeholder={question.placeholder}
        />
      )}
    </div>
  );
};

export default Question;
