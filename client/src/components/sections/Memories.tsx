import { motion } from 'framer-motion';
import MessageCard from '../MessageCard';

interface MemoriesProps {
  visible: boolean;
  onNext: () => void;
}

const memories = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/2774197/pexels-photo-2774197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Beautiful Memories",
    description: "Time spent with you is always filled with joy and laughter!"
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/4141691/pexels-photo-4141691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Celebrations Together",
    description: "Every moment shared with you becomes a treasured memory!"
  }
];

const Memories: React.FC<MemoriesProps> = ({ visible, onNext }) => {
  return (
    <section 
      id="memories" 
      className={`min-h-screen relative flex flex-col items-center justify-center overflow-hidden py-20 px-4 hidden-section ${visible ? 'flex' : 'hidden'}`}
    >
      <div className="text-center max-w-4xl mx-auto z-10">
        <h2 className="dancing-script text-5xl md:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-300 to-accent inline-block text-transparent bg-clip-text">
          Wonderful Memories
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              className="message-card bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.3 + (index * 0.2),
                type: "spring",
                stiffness: 100 
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative h-48">
                <img 
                  src={memory.image} 
                  alt={memory.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-4">
                  <span className="text-white font-medium">{memory.title}</span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-white/80 text-sm">{memory.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <button 
            onClick={onNext}
            className="bg-gradient-to-r from-primary to-yellow-300 text-white py-3 px-8 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none"
          >
            Final Surprise <span className="ml-2">✨</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Memories;
