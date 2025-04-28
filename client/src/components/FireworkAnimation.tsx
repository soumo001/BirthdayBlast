import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface FireworkAnimationProps {
  count?: number;
}

const FireworkAnimation: React.FC<FireworkAnimationProps> = ({ count = 10 }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const createFirework = (x: number, y: number) => {
      if (!containerRef.current) return;
      
      const colors = ['#FF5BA2', '#9C4DF4', '#4CBEFF', '#FFD166', '#FF6B6B', '#7CE0C3'];
      
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'firework';
        
        const angle = Math.random() * Math.PI * 2;
        const spread = 100 + Math.random() * 150;
        const duration = 1 + Math.random() * 2;
        
        particle.style.setProperty('--x', `${x}px`);
        particle.style.setProperty('--y', `${y}px`);
        particle.style.setProperty('--angle', angle.toString());
        particle.style.setProperty('--spread', spread.toString());
        particle.style.setProperty('--duration', `${duration}s`);
        
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.width = '5px';
        particle.style.height = '5px';
        particle.style.left = '0';
        particle.style.top = '0';
        
        containerRef.current.appendChild(particle);
        
        // Remove the particle after animation completes
        setTimeout(() => {
          if (containerRef.current?.contains(particle)) {
            containerRef.current.removeChild(particle);
          }
        }, duration * 1000);
      }
    };

    const createFireworks = (count: number) => {
      for (let i = 0; i < count; i++) {
        setTimeout(() => {
          const x = Math.random() * window.innerWidth;
          const y = Math.random() * (window.innerHeight / 2);
          
          createFirework(x, y);
        }, i * 300);
      }
    };

    createFireworks(count);

    // Create new fireworks randomly
    const interval = setInterval(() => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * (window.innerHeight / 2);
      createFirework(x, y);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <motion.div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
};

export default FireworkAnimation;
