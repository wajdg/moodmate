import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import MoodSelector from '../components/MoodSelector';
import MoodActivities from '../components/MoodActivities';
import MoodPlaylists from '../components/MoodPlaylists';
import MoodJournal from '../components/MoodJournal';
import MoodHistory from '../components/MoodHistory';
import MoodBackground from '../components/MoodBackground';
import { useMoodStorage } from '../hooks/useMoodStorage';
import { Mood } from '../types';

const Dashboard: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  const { moodEntries, addMoodEntry, isLoading } = useMoodStorage();

  const handleMoodSelect = (mood: Mood) => {
    setSelectedMood(mood);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <MoodBackground mood={selectedMood} />
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <MoodSelector 
            selectedMood={selectedMood} 
            onMoodSelect={handleMoodSelect} 
          />
        </motion.div>
        
        {selectedMood && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <MoodJournal 
              addMoodEntry={addMoodEntry} 
              selectedMood={selectedMood} 
            />
            
            <MoodActivities currentMood={selectedMood} />
            
            <MoodPlaylists currentMood={selectedMood} />
          </motion.div>
        )}
        
        {moodEntries.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8"
          >
            <MoodHistory moodEntries={moodEntries} />
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;