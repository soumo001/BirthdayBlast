import { motion } from 'framer-motion';
import MessageCard from '../MessageCard';

interface IntroductionProps {
  visible: boolean;
  onContinue: () => void;
  friendName: string;
}

const Introduction: React.FC<IntroductionProps> = ({ visible, onContinue, friendName }) => {
  return (
    <section 
      id="intro" 
      className={`min-h-screen relative flex flex-col items-center justify-center overflow-hidden py-20 px-4 hidden-section ${visible ? 'flex' : 'hidden'}`}
    >
      <div className="text-center max-w-lg mx-auto z-10">
        <motion.div 
          className="inline-block"
          animate={{ y: [0, -10, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <span className="dancing-script text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text">
            Happy Birthday!
          </span>
        </motion.div>
        
        <MessageCard delay={0.5} className="mt-8">
          <h2 className="dancing-script text-3xl md:text-4xl font-bold text-primary mb-4">
            {friendName}
          </h2>
          <p className="text-lg text-white/90">
            Today is all about celebrating the amazing person you are!
          </p>
        </MessageCard>
        
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <button 
            onClick={onContinue}
            className="bg-gradient-to-r from-primary to-secondary text-white py-3 px-8 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none"
          >
            Continue <span className="ml-2">↓</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;
