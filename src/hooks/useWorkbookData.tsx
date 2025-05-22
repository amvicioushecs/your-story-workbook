
import { useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '../contexts/AuthContext';

export interface WorkbookEntry {
  questionId: string;
  answer: string;
}

export function useWorkbookData() {
  const [entries, setEntries] = useState<Record<string, string>>({});
  const [isLoaded, setIsLoaded] = useState(false);
  const { toast } = useToast();
  const { user, supabase } = useAuth();

  // Load data when component mounts or when auth state changes
  useEffect(() => {
    const loadData = async () => {
      try {
        if (user) {
          // User is logged in, fetch data from Supabase
          const { data, error } = await supabase
            .from('workbook_entries')
            .select('question_id, answer')
            .eq('user_id', user.id);
          
          if (error) throw error;
          
          // Convert array of entries to Record object
          const entriesObject = data && data.length > 0 
            ? data.reduce(
                (acc, entry) => ({ ...acc, [entry.question_id]: entry.answer }),
                {}
              )
            : {};
          
          setEntries(entriesObject);
        } else {
          // No user session, fall back to localStorage
          const savedEntries = localStorage.getItem('workbookEntries');
          if (savedEntries) {
            setEntries(JSON.parse(savedEntries));
          }
        }
      } catch (e) {
        console.error('Error loading workbook data', e);
        // On error, try to load from localStorage as fallback
        const savedEntries = localStorage.getItem('workbookEntries');
        if (savedEntries) {
          try {
            setEntries(JSON.parse(savedEntries));
          } catch (e) {
            console.error('Error parsing saved workbook entries', e);
          }
        }
        toast({
          title: "Error loading data",
          description: "Your data may not be synced to the cloud.",
          variant: "destructive"
        });
      } finally {
        setIsLoaded(true);
      }
    };

    loadData();
  }, [user, supabase, toast]);

  // Save entry to state, localStorage, and Supabase if authenticated
  const saveEntry = async (questionId: string, answer: string) => {
    // Update local state immediately for responsive UI
    const updatedEntries = { ...entries, [questionId]: answer };
    setEntries(updatedEntries);
    
    // Save to localStorage as backup
    localStorage.setItem('workbookEntries', JSON.stringify(updatedEntries));

    try {
      // Check if user is authenticated
      if (user) {
        // User is logged in, save to Supabase
        const { error } = await supabase
          .from('workbook_entries')
          .upsert(
            { 
              user_id: user.id,
              question_id: questionId,
              answer: answer
            },
            { onConflict: 'user_id,question_id' }
          );
        
        if (error) throw error;
      }
    } catch (e) {
      console.error('Error saving entry to Supabase', e);
      // Don't show error toast on every save attempt
      // Only show if explicitly requested or on important operations
    }
  };

  // Get a specific entry
  const getEntry = (questionId: string): string => {
    return entries[questionId] || '';
  };

  // Export workbook data
  const exportData = () => {
    try {
      const dataStr = JSON.stringify(entries, null, 2);
      const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
      
      // Create a download link and trigger it
      const exportFileDefaultName = 'crafted-by-choice-workbook.json';
      const linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileDefaultName);
      linkElement.click();
      
      toast({
        title: "Export successful",
        description: "Your workbook data has been downloaded.",
      });
    } catch (e) {
      console.error('Error exporting workbook data', e);
      toast({
        title: "Export failed",
        description: "There was a problem downloading your data.",
        variant: "destructive"
      });
    }
  };

  // Import workbook data from a file
  const importData = async (jsonData: Record<string, string>) => {
    try {
      // Merge imported data with existing data
      const mergedEntries = { ...entries, ...jsonData };
      setEntries(mergedEntries);
      
      // Save to localStorage
      localStorage.setItem('workbookEntries', JSON.stringify(mergedEntries));
      
      // Save to Supabase if user is authenticated
      if (user) {
        // Convert to array of objects for Supabase
        const entriesArray = Object.entries(mergedEntries).map(([questionId, answer]) => ({
          user_id: user.id,
          question_id: questionId,
          answer: answer
        }));
        
        // Save entries in batches to avoid too many requests
        const batchSize = 50;
        for (let i = 0; i < entriesArray.length; i += batchSize) {
          const batch = entriesArray.slice(i, i + batchSize);
          const { error } = await supabase
            .from('workbook_entries')
            .upsert(batch, { onConflict: 'user_id,question_id' });
            
          if (error) throw error;
        }
      }
      
      toast({
        title: "Import successful",
        description: "Your workbook data has been imported.",
      });
    } catch (e) {
      console.error('Error importing workbook data', e);
      toast({
        title: "Import failed", 
        description: "There was a problem importing your data.",
        variant: "destructive"
      });
    }
  };

  return {
    entries,
    isLoaded,
    saveEntry,
    getEntry,
    exportData,
    importData
  };
}
