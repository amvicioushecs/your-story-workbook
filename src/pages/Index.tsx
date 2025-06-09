
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ChapterNavigation from '../components/ChapterNavigation';
import WorkbookPage from '../components/WorkbookPage';
import SavePrompt from '../components/SavePrompt';
import { chapters } from '../data/chapters';
import { useWorkbookData } from '../hooks/useWorkbookData';
import { BookText, ChevronLeft, ChevronRight, Home, Save, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { AuthButton } from '../components/auth/AuthForm';
import { useAuth } from '../contexts/AuthContext';

const Index = () => {
  const [activeChapter, setActiveChapter] = useState(1);
  const [lastSaved, setLastSaved] = useState<Date | undefined>();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const {
    isLoaded,
    exportData,
    importData
  } = useWorkbookData();
  const { user } = useAuth();
  const currentChapter = chapters.find(chapter => chapter.id === activeChapter) || chapters[0];

  // Update lastSaved timestamp when entries change
  useEffect(() => {
    if (isLoaded) {
      setLastSaved(new Date());
    }
  }, [isLoaded]);
  
  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  // Handle file import
  const handleImportClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        try {
          const jsonData = JSON.parse(content);
          importData(jsonData);
        } catch (error) {
          console.error('Error parsing imported file:', error);
        }
      };
      reader.readAsText(file);
    };
    
    input.click();
  };
  
  return <div className="min-h-screen">
      {/* Hero Header */}
      <div className="wood-texture text-center py-12 px-4 mb-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-crafted-gold mb-4">
            Crafted By Choice
          </h1>
          <h2 className="text-2xl md:text-3xl font-serif text-crafted-cream mb-6">
            Interactive Workbook Edition
          </h2>
          <p className="text-xl text-crafted-cream opacity-90 max-w-2xl mx-auto">How The Decisions We Make Shape The Life We Live</p>
          {user ? (
            <p className="text-lg text-crafted-cream opacity-70 mt-2 italic">By {user.email}</p>
          ) : (
            <p className="text-lg text-crafted-cream opacity-70 mt-2 italic">By Guest User</p>
          )}
        </div>
      </div>

      <div className="container px-4 md:px-6 pb-8">
        {/* Auth controls and action buttons */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center justify-center space-x-2">
            <Link to="/" className="flex items-center text-crafted-brown hover:text-crafted-gold transition-colors mr-4">
              <Home className="h-5 w-5 mr-1" />
              <span>Home</span>
            </Link>
            <BookText className="h-6 w-6 text-crafted-brown" />
            <h2 className="text-2xl font-serif font-semibold text-crafted-brown">Your Personal Workbook</h2>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              onClick={exportData} 
              variant="outline" 
              size="sm" 
              className="border-crafted-gold text-crafted-brown hover:bg-crafted-gold/20"
            >
              <Save className="h-4 w-4 mr-2" /> Export
            </Button>
            <Button 
              onClick={handleImportClick} 
              variant="outline" 
              size="sm" 
              className="border-crafted-gold text-crafted-brown hover:bg-crafted-gold/20"
            >
              <Upload className="h-4 w-4 mr-2" /> Import
            </Button>
            <AuthButton />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 relative">
          {/* Sidebar toggle button - Outside the sidebar for visibility */}
          <div className="hidden lg:block absolute z-10" style={{
            left: sidebarOpen ? "calc(25% - 16px)" : "-16px",
            top: "50px"
          }}>
            <Button onClick={toggleSidebar} variant="outline" size="icon" className="bg-crafted-cream hover:bg-crafted-gold hover:text-crafted-cream border-crafted-gold rounded-full h-8 w-8 shadow-md transition-all duration-300">
              {sidebarOpen ? <ChevronLeft /> : <ChevronRight />}
            </Button>
          </div>

          {/* Sidebar for larger screens */}
          <div className={cn("lg:sticky lg:top-8 transition-all duration-300 ease-in-out overflow-hidden", sidebarOpen ? "lg:w-1/4" : "lg:w-0")}>
            <div className="lg:pr-4">
              <ChapterNavigation activeChapter={activeChapter} setActiveChapter={setActiveChapter} />
              <div className="mt-8 p-4 bg-white bg-opacity-70 rounded-lg border border-crafted-gold">
                <h3 className="font-serif text-lg text-crafted-brown mb-2">Your Progress</h3>
                <p className="text-crafted-lightBrown">
                  {user ? 'Your progress is saved to your account.' : 'Sign in to save your progress across devices.'}
                </p>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className={cn("transition-all duration-300", sidebarOpen ? "lg:w-3/4" : "lg:w-full")}>
            {isLoaded && <WorkbookPage chapter={currentChapter} />}
          </div>
        </div>
      </div>

      {/* Save notification */}
      <SavePrompt lastSaved={lastSaved} />
    </div>;
};
export default Index;
