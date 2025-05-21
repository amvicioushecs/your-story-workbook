
import React from 'react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Checkbox } from '../ui/checkbox';

type QuestionRendererProps = {
  questionId: string;
  value: string;
  onInputChange: (questionId: string, value: string) => void;
  onCheckboxChange?: (questionId: string, option: string, checked: boolean) => void;
  isOptionSelected?: (questionId: string, option: string) => boolean;
  placeholder?: string;
  options?: string[];
};

export const RenderSignatureField: React.FC<QuestionRendererProps> = ({ 
  questionId, 
  value, 
  onInputChange 
}) => (
  <div className="mt-2 border-b-2 border-crafted-brown pb-1">
    <Input 
      type="text"
      id={questionId} 
      value={value}
      onChange={(e) => onInputChange(questionId, e.target.value)}
      className="border-0 border-b-0 rounded-none px-0 font-serif italic"
      placeholder="Type your name here"
    />
  </div>
);

export const RenderCommitField: React.FC<QuestionRendererProps> = ({ 
  questionId, 
  value, 
  onInputChange,
  placeholder
}) => (
  <div className="mt-2 border-b-2 border-dashed border-crafted-brown pb-1">
    <Input 
      type="text"
      id={questionId} 
      value={value}
      onChange={(e) => onInputChange(questionId, e.target.value)}
      className="border-0 border-b-0 rounded-none px-0"
      placeholder={placeholder}
    />
  </div>
);

export const RenderCheckboxOptions: React.FC<QuestionRendererProps> = ({
  questionId,
  options = [],
  onCheckboxChange,
  isOptionSelected
}) => (
  <div className="mt-4 space-y-3">
    {options.map((option) => (
      <div key={`${questionId}-${option}`} className="flex items-center space-x-2">
        <Checkbox 
          id={`${questionId}-${option}`}
          checked={isOptionSelected ? isOptionSelected(questionId, option) : false}
          onCheckedChange={(checked) => {
            if (onCheckboxChange) {
              onCheckboxChange(questionId, option, checked === true);
            }
          }}
          className="border-2 border-crafted-brown h-5 w-5 rounded-sm"
        />
        <Label 
          htmlFor={`${questionId}-${option}`}
          className="font-medium text-crafted-brown cursor-pointer"
        >
          {option}
        </Label>
      </div>
    ))}
  </div>
);

export const RenderTextInput: React.FC<QuestionRendererProps> = ({
  questionId,
  value,
  onInputChange,
  placeholder
}) => (
  <Input
    type="text"
    id={questionId}
    value={value}
    onChange={(e) => onInputChange(questionId, e.target.value)}
    className="w-full border-2 rounded-md p-3"
    placeholder={placeholder}
  />
);

export const RenderTextArea: React.FC<QuestionRendererProps> = ({
  questionId,
  value,
  onInputChange,
  placeholder
}) => (
  <Textarea
    id={questionId}
    value={value}
    onChange={(e) => onInputChange(questionId, e.target.value)}
    className="w-full min-h-[150px] border-2 rounded-md p-3"
    placeholder={placeholder}
  />
);
