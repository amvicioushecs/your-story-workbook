
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface SavePromptProps {
  lastSaved?: Date;
}

const SavePrompt: React.FC<SavePromptProps> = ({ lastSaved }) => {
  const [showSavedMessage, setShowSavedMessage] = useState(false);
  
  useEffect(() => {
    if (lastSaved) {
      setShowSavedMessage(true);
      const timer = setTimeout(() => setShowSavedMessage(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [lastSaved]);
  
  if (!lastSaved) return null;
  
  return (
    <div 
      className={cn(
        "fixed bottom-4 right-4 bg-crafted-cream border border-crafted-gold rounded-md px-4 py-2 shadow-lg transition-opacity duration-300",
        showSavedMessage ? "opacity-100" : "opacity-0"
      )}
    >
      <p className="text-crafted-brown">
        <span className="font-semibold">Saved</span> • {lastSaved.toLocaleTimeString()}
      </p>
    </div>
  );
};

export default SavePrompt;
