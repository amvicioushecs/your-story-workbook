import React, { useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from "@/hooks/use-toast";

const AudioSection = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [audioLoaded, setAudioLoaded] = React.useState(false);
  const [audioError, setAudioError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedData = () => {
      console.log('Audio loaded successfully');
      setAudioLoaded(true);
      setAudioError(false);
      setIsLoading(false);
    };

    const handleCanPlay = () => {
      console.log('Audio can start playing');
      setAudioLoaded(true);
      setIsLoading(false);
    };

    const handleError = (e: Event) => {
      console.error('Audio loading error:', e);
      const target = e.target as HTMLAudioElement;
      console.error('Audio error details:', {
        error: target.error,
        networkState: target.networkState,
        readyState: target.readyState,
        src: target.src
      });
      
      setAudioError(true);
      setAudioLoaded(false);
      setIsPlaying(false);
      setIsLoading(false);
      
      toast({
        title: "Audio Unavailable",
        description: "The audio file could not be loaded. Please check your internet connection and try again.",
        variant: "destructive"
      });
    };

    const handleLoadStart = () => {
      console.log('Audio loading started');
      setIsLoading(true);
    };

    const handleEnded = () => {
      console.log('Audio playback ended');
      setIsPlaying(false);
    };

    const handlePause = () => {
      console.log('Audio paused');
      setIsPlaying(false);
    };

    const handlePlay = () => {
      console.log('Audio started playing');
      setIsPlaying(true);
    };

    // Add all event listeners
    audio.addEventListener('loadeddata', handleLoadedData);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('error', handleError);
    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('play', handlePlay);

    // Load the audio
    audio.load();

    // Cleanup function
    return () => {
      audio.removeEventListener('loadeddata', handleLoadedData);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('play', handlePlay);
    };
  }, []);

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) {
      console.error('Audio element not found');
      return;
    }

    if (audioError) {
      toast({
        title: "Audio Error",
        description: "Audio file is not available. Please refresh the page and try again.",
        variant: "destructive"
      });
      return;
    }

    if (!audioLoaded) {
      toast({
        title: "Audio Loading",
        description: "Audio is still loading. Please wait a moment and try again.",
      });
      return;
    }

    try {
      if (isPlaying) {
        console.log('Pausing audio');
        audio.pause();
      } else {
        console.log('Starting audio playback');
        
        // Reset to beginning if the audio has ended
        if (audio.ended) {
          audio.currentTime = 0;
        }
        
        // Attempt to play
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          await playPromise;
          console.log('Audio playback started successfully');
        }
      }
    } catch (error) {
      console.error("Audio playback failed:", error);
      setIsPlaying(false);
      
      // More specific error handling
      if (error instanceof DOMException) {
        if (error.name === 'NotAllowedError') {
          toast({
            title: "Playback Blocked",
            description: "Audio playback was blocked by your browser. Please interact with the page first and try again.",
            variant: "destructive"
          });
        } else if (error.name === 'NotSupportedError') {
          toast({
            title: "Audio Not Supported",
            description: "This audio format is not supported by your browser.",
            variant: "destructive"
          });
        } else {
          toast({
            title: "Playback Failed",
            description: `Audio playback failed: ${error.message}`,
            variant: "destructive"
          });
        }
      } else {
        toast({
          title: "Playback Failed",
          description: "Unable to play the audio. Please try refreshing the page.",
          variant: "destructive"
        });
      }
    }
  };

  const getAudioStatusText = () => {
    if (audioError) return "Audio temporarily unavailable";
    if (isLoading) return "Loading audio...";
    if (audioLoaded) return "Click to play the audio overview";
    return "Audio loading...";
  };

  return (
    <section className="mb-8">
      <div className="bg-crafted-brown/10 rounded-lg p-6 border border-crafted-gold/30">
        <h3 className="text-2xl font-serif font-semibold text-crafted-brown mb-4 flex items-center">
          <span>Message from The Deep Dive Podcast</span>
        </h3>
        <div className="flex items-center gap-4">
          <Button 
            onClick={toggleAudio} 
            variant="outline" 
            size="icon" 
            className="h-12 w-12 rounded-full border-2 border-crafted-gold bg-crafted-gold/10 hover:bg-crafted-gold/20 disabled:opacity-50"
            disabled={audioError || isLoading}
          >
            {isPlaying ? (
              <Pause className="h-6 w-6 text-crafted-brown" />
            ) : (
              <Play className="h-6 w-6 text-crafted-brown ml-1" />
            )}
          </Button>
          <div className="flex-1">
            <p className="text-crafted-lightBrown font-medium">Book Overview and Insights</p>
            <p className="text-sm text-crafted-lightBrown/70">
              {getAudioStatusText()}
            </p>
          </div>
        </div>
        <audio 
          ref={audioRef} 
          className="hidden" 
          preload="metadata"
          crossOrigin="anonymous"
        >
          <source src="/VERT_The Crafted Life.mp3" type="audio/mpeg" />
          <source src="/VERT_The Crafted Life.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </section>
  );
};

export default AudioSection;