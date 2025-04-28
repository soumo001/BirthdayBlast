import React from 'react';
import { motion } from 'framer-motion';

interface MessageCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const MessageCard: React.FC<MessageCardProps> = ({ 
  children, 
  className = "", 
  delay = 0 
}) => {
  return (
    <motion.div 
      className={`message-card bg-white/10 rounded-xl p-6 md:p-8 shadow-lg border border-white/20 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay,
        type: "spring",
        stiffness: 100 
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
    >
      {children}
    </motion.div>
  );
};

export default MessageCard;
