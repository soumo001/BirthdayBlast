import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAudio } from '@/hooks/useAudio';
import AudioController from './AudioController';
import ParticleBackground from './ParticleBackground';
import FireworkAnimation from './FireworkAnimation';
import Introduction from './sections/Introduction';
import SpecialMessage from './sections/SpecialMessage';
import Memories from './sections/Memories';
import FinalWishes from './sections/FinalWishes';

const BirthdayPage = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [showFireworks, setShowFireworks] = useState(true);
  const { isPlaying, toggleAudio } = useAudio();

  const sections = ['intro', 'specialMessage', 'memories', 'finalWishes'];

  const showSection = (sectionId: string) => {
    // Trigger new fireworks when section changes
    setShowFireworks(false);
    setTimeout(() => {
      setShowFireworks(true);
      setActiveSection(sectionId);
    }, 300);
  };

  // Create intersection observer for section animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenSections = document.querySelectorAll('.hidden-section');
    hiddenSections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      hiddenSections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [activeSection]);

  // Auto-show first section
  useEffect(() => {
    setTimeout(() => {
      const introSection = document.getElementById('intro');
      if (introSection) {
        introSection.classList.add('visible');
      }
    }, 500);
  }, []);

  return (
    <motion.div 
      className="bg-background text-white min-h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <AudioController isPlaying={isPlaying} toggleAudio={toggleAudio} />
      <ParticleBackground />
      
      {showFireworks && (
        <FireworkAnimation count={15} />
      )}

      <Introduction 
        visible={activeSection === 'intro'} 
        onContinue={() => showSection('specialMessage')} 
        friendName="Madam Ji"
      />

      <SpecialMessage 
        visible={activeSection === 'specialMessage'} 
        onNext={() => showSection('memories')} 
      />

      <Memories 
        visible={activeSection === 'memories'} 
        onNext={() => showSection('finalWishes')} 
      />

      <FinalWishes 
        visible={activeSection === 'finalWishes'} 
        onRestart={() => showSection('intro')} 
        senderName="Your Special Friend"
      />
    </motion.div>
  );
};

export default BirthdayPage;
