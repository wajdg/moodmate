import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MoodData } from '../types';
import { getMoodByValue } from '../data/moods';

interface MoodJournalProps {
  addMoodEntry: (entry: MoodData) => void;
  selectedMood: string | null;
}

const MoodJournal: React.FC<MoodJournalProps> = ({ addMoodEntry, selectedMood }) => {
  const [notes, setNotes] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedMood) return;
    
    const newEntry: MoodData = {
      id: Date.now().toString(),
      mood: selectedMood,
      notes,
      date: new Date().toISOString(),
      timestamp: Date.now()
    };
    
    addMoodEntry(newEntry);
    setNotes('');
    setShowSuccess(true);
    
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  // Get mood details for styling
  const moodDetails = selectedMood ? getMoodByValue(selectedMood) : null;

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-sm p-6 mt-8">
      <h2 className="text-2xl font-poppins font-semibold text-gray-800 mb-4">
        Mood Journal
      </h2>
      
      {selectedMood ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your mood today:
            </label>
            <div 
              className="inline-flex items-center px-3 py-2 rounded-lg"
              style={{ backgroundColor: moodDetails?.bgColor }}
            >
              <span className="font-medium" style={{ color: moodDetails?.color }}>
                {moodDetails?.label}
              </span>
            </div>
          </div>
          
          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
              Journal Notes (optional)
            </label>
            <textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="How are you feeling? What's on your mind today?"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px]"
            />
          </div>
          
          <div className="flex justify-end">
            <motion.button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Save Entry
            </motion.button>
          </div>
        </form>
      ) : (
        <div className="text-center py-8 text-gray-500">
          Please select a mood above to journal about it.
        </div>
      )}
      
      {showSuccess && (
        <motion.div 
          className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          Journal entry saved successfully!
        </motion.div>
      )}
    </div>
  );
};

export default MoodJournal;