import { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

interface AudioControllerProps {
  isPlaying: boolean;
  toggleAudio: () => void;
}

const AudioController: React.FC<AudioControllerProps> = ({ isPlaying, toggleAudio }) => {
  return (
    <motion.div 
      className="fixed top-4 right-4 z-50 flex items-center space-x-2 bg-black/30 rounded-full px-3 py-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <button 
        onClick={toggleAudio}
        className="text-white hover:text-primary transition-colors"
        aria-label={isPlaying ? "Mute music" : "Play music"}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5" />
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
      </button>
      <span className="text-xs text-white/70">Music</span>
    </motion.div>
  );
};

export default AudioController;
