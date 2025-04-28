import { motion } from 'framer-motion';
import MessageCard from '../MessageCard';
import { Heart } from 'lucide-react';

interface SpecialMessageProps {
  visible: boolean;
  onNext: () => void;
}

const SpecialMessage: React.FC<SpecialMessageProps> = ({ visible, onNext }) => {
  return (
    <section 
      id="specialMessage" 
      className={`min-h-screen relative flex flex-col items-center justify-center overflow-hidden py-20 px-4 hidden-section ${visible ? 'flex' : 'hidden'}`}
    >
      <div className="text-center max-w-2xl mx-auto z-10">
        <MessageCard delay={0.3} className="mb-8">
          <div className="flex justify-center mb-4">
            <div className="inline-block relative">
              <span className="absolute -top-1 -right-1 text-xl">✨</span>
              <span className="dancing-script text-3xl font-bold text-yellow-300">
                It's a special day for you...
              </span>
              <span className="absolute -bottom-1 -left-1 text-xl">✨</span>
            </div>
          </div>
          <p className="text-lg text-white/90">
            A day to celebrate all the joy and happiness you bring to everyone around you!
          </p>
        </MessageCard>
        
        <MessageCard delay={0.6}>
          <div className="text-primary text-sm mb-2 flex items-center">
            I love the way you <Heart className="h-3 w-3 ml-1 text-red-500" fill="currentColor" />
          </div>
          <div className="relative overflow-hidden rounded-lg mb-4 h-48 md:h-64">
            <img 
              src="https://images.pexels.com/photos/796606/pexels-photo-796606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Cute bear characters hugging"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
          </div>
          <p className="text-lg text-white/90">
            Your kindness, your smile, and your friendship make this world a better place!
          </p>
        </MessageCard>
        
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <button 
            onClick={onNext}
            className="bg-gradient-to-r from-secondary to-accent text-white py-3 px-8 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none"
          >
            Next Surprise <span className="ml-2">🎁</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialMessage;
