import { useState, useEffect } from 'react';
import { MoodData } from '../types';

export const useMoodStorage = () => {
  const [moodEntries, setMoodEntries] = useState<MoodData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load mood entries from localStorage
  useEffect(() => {
    const storedMoods = localStorage.getItem('moodEntries');
    if (storedMoods) {
      try {
        setMoodEntries(JSON.parse(storedMoods));
      } catch (e) {
        console.error('Error parsing stored moods:', e);
        setMoodEntries([]);
      }
    }
    setIsLoading(false);
  }, []);

  // Save mood entries to localStorage
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('moodEntries', JSON.stringify(moodEntries));
    }
  }, [moodEntries, isLoading]);

  const addMoodEntry = (entry: MoodData) => {
    setMoodEntries(prev => [entry, ...prev]);
  };

  const deleteMoodEntry = (id: string) => {
    setMoodEntries(prev => prev.filter(entry => entry.id !== id));
  };

  const updateMoodEntry = (updatedEntry: MoodData) => {
    setMoodEntries(prev => 
      prev.map(entry => entry.id === updatedEntry.id ? updatedEntry : entry)
    );
  };

  return { 
    moodEntries, 
    addMoodEntry, 
    deleteMoodEntry, 
    updateMoodEntry, 
    isLoading 
  };
};