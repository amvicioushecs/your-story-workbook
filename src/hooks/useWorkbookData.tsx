
import { useState, useEffect } from 'react';

export interface WorkbookEntry {
  questionId: string;
  answer: string;
}

export function useWorkbookData() {
  const [entries, setEntries] = useState<Record<string, string>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Load data from localStorage when component mounts
  useEffect(() => {
    const savedEntries = localStorage.getItem('workbookEntries');
    if (savedEntries) {
      try {
        setEntries(JSON.parse(savedEntries));
      } catch (e) {
        console.error('Error parsing saved workbook entries', e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save entry to state and localStorage
  const saveEntry = (questionId: string, answer: string) => {
    const updatedEntries = { ...entries, [questionId]: answer };
    setEntries(updatedEntries);
    localStorage.setItem('workbookEntries', JSON.stringify(updatedEntries));
  };

  // Get a specific entry
  const getEntry = (questionId: string): string => {
    return entries[questionId] || '';
  };

  return {
    entries,
    isLoaded,
    saveEntry,
    getEntry
  };
}
