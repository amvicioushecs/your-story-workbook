
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useToast } from '@/components/ui/use-toast';

// Initialize Supabase client (using public anon key which is safe to expose in frontend code)
const SUPABASE_URL = process.env.SUPABASE_URL || 'https://your-supabase-url.supabase.co';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || 'your-anon-key';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export interface WorkbookEntry {
  questionId: string;
  answer: string;
}

export function useWorkbookData() {
  const [entries, setEntries] = useState<Record<string, string>>({});
  const [isLoaded, setIsLoaded] = useState(false);
  const { toast } = useToast();

  // Load data when component mounts
  useEffect(() => {
    const loadData = async () => {
      try {
        // Try to get user session first
        const { data: { session } } = await supabase.auth.getSession();
        
        if (session?.user) {
          // User is logged in, fetch data from Supabase
          const { data, error } = await supabase
            .from('workbook_entries')
            .select('question_id, answer')
            .eq('user_id', session.user.id);
          
          if (error) throw error;
          
          // Convert array of entries to Record object
          const entriesObject = data.reduce(
            (acc, entry) => ({ ...acc, [entry.question_id]: entry.answer }),
            {}
          );
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
  }, [toast]);

  // Save entry to state, localStorage, and Supabase if authenticated
  const saveEntry = async (questionId: string, answer: string) => {
    // Update local state immediately for responsive UI
    const updatedEntries = { ...entries, [questionId]: answer };
    setEntries(updatedEntries);
    
    // Save to localStorage as backup
    localStorage.setItem('workbookEntries', JSON.stringify(updatedEntries));

    try {
      // Check if user is authenticated
      const { data: { session } } = await supabase.auth.getSession();
      
      if (session?.user) {
        // User is logged in, save to Supabase
        const { error } = await supabase
          .from('workbook_entries')
          .upsert(
            { 
              user_id: session.user.id,
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
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        // Convert to array of objects for Supabase
        const entriesArray = Object.entries(mergedEntries).map(([questionId, answer]) => ({
          user_id: session.user.id,
          question_id: questionId,
          answer: answer
        }));
        
        // Save each entry
        for (const entry of entriesArray) {
          await supabase
            .from('workbook_entries')
            .upsert(entry, { onConflict: 'user_id,question_id' });
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
