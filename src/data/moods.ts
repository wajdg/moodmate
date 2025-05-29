import { MoodOption } from '../types';

export const moodOptions: MoodOption[] = [
  {
    value: 'happy',
    label: 'Happy',
    color: '#f28c8c',
    bgColor: '#ffebe3',
    icon: 'Smile',
    description: 'Feeling joyful and content'
  },
  {
    value: 'calm',
    label: 'Calm',
    color: '#7ec8e3',
    bgColor: '#e3f6ff',
    icon: 'Cloud',
    description: 'Feeling peaceful and relaxed'
  },
  {
    value: 'stressed',
    label: 'Stressed',
    color: '#f5b971',
    bgColor: '#fff2e0',
    icon: 'Zap',
    description: 'Feeling overwhelmed or anxious'
  },
  {
    value: 'energetic',
    label: 'Energetic',
    color: '#8ed9a3',
    bgColor: '#e5f8ea',
    icon: 'Sparkles',
    description: 'Feeling lively and motivated'
  },
  {
    value: 'sad',
    label: 'Sad',
    color: '#9b88cb',
    bgColor: '#f0edff',
    icon: 'CloudRain',
    description: 'Feeling down or blue'
  },
  {
    value: 'focused',
    label: 'Focused',
    color: '#738ff3',
    bgColor: '#e8eeff',
    icon: 'Target',
    description: 'Feeling concentrated and productive'
  }
];

export const getMoodByValue = (value: string): MoodOption => {
  return moodOptions.find(mood => mood.value === value) || moodOptions[0];
};