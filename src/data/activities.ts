import { Activity } from '../types';

export const activities: Activity[] = [
  {
    id: '1',
    title: 'Deep Breathing',
    description: 'Take 10 deep breaths, inhaling for 4 seconds and exhaling for 6 seconds.',
    duration: '2 minutes',
    moods: ['stressed', 'sad']
  },
  {
    id: '2',
    title: 'Gratitude Journal',
    description: 'Write down three things you\'re grateful for today.',
    duration: '5 minutes',
    moods: ['sad', 'stressed', 'happy']
  },
  {
    id: '3',
    title: 'Quick Stretch',
    description: 'Stand up and stretch your arms, legs, and back to release tension.',
    duration: '3 minutes',
    moods: ['stressed', 'focused', 'energetic']
  },
  {
    id: '4',
    title: 'Dance Break',
    description: 'Put on your favorite upbeat song and dance like nobody\'s watching!',
    duration: '4 minutes',
    moods: ['happy', 'energetic']
  },
  {
    id: '5',
    title: 'Mindful Observation',
    description: 'Choose an object and observe its details, texture, and colors for 2 minutes.',
    duration: '2 minutes',
    moods: ['calm', 'focused']
  },
  {
    id: '6',
    title: 'Body Scan',
    description: 'Close your eyes and mentally scan your body from head to toe, noticing sensations.',
    duration: '5 minutes',
    moods: ['calm', 'stressed']
  },
  {
    id: '7',
    title: 'Quick Walk',
    description: 'Take a short walk outside, focusing on the sensations and surroundings.',
    duration: '10 minutes',
    moods: ['sad', 'stressed', 'energetic', 'focused']
  },
  {
    id: '8',
    title: 'Positive Affirmations',
    description: 'Repeat 3 positive statements about yourself out loud.',
    duration: '2 minutes',
    moods: ['sad', 'stressed', 'happy']
  },
  {
    id: '9',
    title: 'Progressive Muscle Relaxation',
    description: 'Tense and then relax each muscle group, starting from your toes and working upward.',
    duration: '7 minutes',
    moods: ['stressed', 'calm']
  },
  {
    id: '10',
    title: 'Creative Doodle',
    description: 'Take a piece of paper and draw whatever comes to mind without judgment.',
    duration: '5 minutes',
    moods: ['happy', 'focused', 'stressed', 'sad']
  }
];

export const getActivitiesForMood = (mood: string): Activity[] => {
  return activities.filter(activity => activity.moods.includes(mood));
};