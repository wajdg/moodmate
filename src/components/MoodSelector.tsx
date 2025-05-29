import React from 'react';
import { motion } from 'framer-motion';
import { MoodOption } from '../types';
import { moodOptions } from '../data/moods';
import * as Icons from 'lucide-react';

interface MoodSelectorProps {
  selectedMood: string | null;
  onMoodSelect: (mood: string) => void;
}

const MoodSelector: React.FC<MoodSelectorProps> = ({ selectedMood, onMoodSelect }) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-poppins font-semibold text-gray-800 mb-4">How are you feeling today?</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {moodOptions.map((mood: MoodOption) => {
          const IconComponent = Icons[mood.icon as keyof typeof Icons];
          const isSelected = selectedMood === mood.value;
          
          return (
            <motion.button
              key={mood.value}
              onClick={() => onMoodSelect(mood.value)}
              className={`p-4 rounded-xl flex flex-col items-center justify-center transition-all duration-300 ${
                isSelected 
                  ? `bg-${mood.value}-500 text-white shadow-lg scale-105` 
                  : `bg-${mood.value}-100 text-gray-700 hover:shadow-md hover:scale-[1.02]`
              }`}
              style={{ 
                backgroundColor: isSelected ? mood.color : mood.bgColor,
                color: isSelected ? 'white' : '#333d4b',
                minHeight: '120px',
              }}
              whileHover={{ scale: isSelected ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-3xl mb-2">
                {IconComponent && <IconComponent size={32} />}
              </div>
              <span className="font-poppins font-medium text-lg">{mood.label}</span>
              <span className="text-xs text-center mt-1 opacity-80">
                {mood.description}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default MoodSelector;