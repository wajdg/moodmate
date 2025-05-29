export type Mood = 'happy' | 'calm' | 'stressed' | 'energetic' | 'sad' | 'focused';

export interface MoodData {
  id: string;
  mood: Mood;
  notes: string;
  date: string;
  timestamp: number;
}

export interface MoodOption {
  value: Mood;
  label: string;
  color: string;
  bgColor: string;
  icon: string;
  description: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  duration: string;
  moods: Mood[];
}

export interface Playlist {
  id: string;
  title: string;
  embedUrl: string;
  moods: Mood[];
}