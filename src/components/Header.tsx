import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <motion.header 
      className="w-full bg-white shadow-sm py-4 px-6"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <HeartPulse className="text-[#f28c8c] mr-2" size={32} />
          <h1 className="text-2xl md:text-3xl font-poppins font-bold bg-gradient-to-r from-[#7ec8e3] via-[#f28c8c] to-[#8ed9a3] text-transparent bg-clip-text">
            MoodMate
          </h1>
        </motion.div>
        
        <nav>
          <ul className="flex space-x-6">
            <li>
              <motion.a 
                href="#" 
                className="text-gray-700 hover:text-[#7ec8e3] font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Dashboard
              </motion.a>
            </li>
            <li>
              <motion.a 
                href="#" 
                className="text-gray-700 hover:text-[#f28c8c] font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Journal
              </motion.a>
            </li>
            <li>
              <motion.a 
                href="#" 
                className="text-gray-700 hover:text-[#8ed9a3] font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Resources
              </motion.a>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;