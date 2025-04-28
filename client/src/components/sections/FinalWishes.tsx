import { motion } from 'framer-motion';
import MessageCard from '../MessageCard';

interface FinalWishesProps {
  visible: boolean;
  onRestart: () => void;
  senderName: string;
}

const FinalWishes: React.FC<FinalWishesProps> = ({ visible, onRestart, senderName }) => {
  return (
    <section 
      id="finalWishes" 
      className={`min-h-screen relative flex flex-col items-center justify-center overflow-hidden py-20 px-4 hidden-section ${visible ? 'flex' : 'hidden'}`}
    >
      <div className="max-w-2xl mx-auto z-10 text-center">
        <motion.div 
          className="mb-8"
          animate={{ 
            y: [0, -10, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <img 
            src="https://images.pexels.com/photos/6203798/pexels-photo-6203798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Birthday celebration" 
            className="w-48 h-48 mx-auto object-cover rounded-full border-4 border-primary shadow-lg"
          />
        </motion.div>
        
        <MessageCard>
          <h2 className="dancing-script text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text">
            Wishing You
          </h2>
          
          <div className="space-y-4 mb-8">
            <motion.p 
              className="text-xl text-white/90"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              A day filled with joy, laughter, and unforgettable moments.
            </motion.p>
            <motion.p 
              className="text-xl text-white/90"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              May this year bring you all the happiness you deserve!
            </motion.p>
            <motion.p 
              className="text-xl text-white/90"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              Thank you for being such an amazing friend.
            </motion.p>
          </div>
          
          <motion.div 
            className="pt-4 border-t border-white/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="dancing-script text-3xl font-bold text-yellow-300">With love, </div>
            <div className="text-white/90 text-xl mt-2">{senderName}</div>
          </motion.div>
        </MessageCard>
        
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <button 
            onClick={onRestart}
            className="bg-white text-background py-3 px-8 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none"
          >
            <span className="mr-2">🔄</span> Celebrate Again
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalWishes;
