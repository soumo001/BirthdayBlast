import { useState, useEffect, useRef } from 'react';

export const useAudio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio('https://assets.mixkit.co/music/preview/mixkit-cheerful-flutes-and-piano-2866.mp3');
    audioRef.current.loop = true;
    
    // Clean up on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      // Play and catch any autoplay restrictions
      audioRef.current.play().catch(e => {
        console.log('Audio playback was prevented:', e);
      });
    }
    
    setIsPlaying(!isPlaying);
  };

  return {
    isPlaying,
    toggleAudio
  };
};
