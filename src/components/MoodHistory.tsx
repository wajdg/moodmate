import React, { useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';
import { MoodData } from '../types';
import { getMoodByValue } from '../data/moods';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface MoodHistoryProps {
  moodEntries: MoodData[];
}

const MoodHistory: React.FC<MoodHistoryProps> = ({ moodEntries }) => {
  const chartData = useMemo(() => {
    // Sort entries by date (oldest to newest)
    const sortedEntries = [...moodEntries].sort((a, b) => a.timestamp - b.timestamp);
    
    // Take only the last 14 entries for better visualization
    const recentEntries = sortedEntries.slice(-14);
    
    // Map moods to y-values (happy: 5, calm: 4, focused: 3, energetic: 2, stressed: 1, sad: 0)
    const moodValues: Record<string, number> = {
      'happy': 5,
      'calm': 4,
      'focused': 3,
      'energetic': 2,
      'stressed': 1,
      'sad': 0
    };
    
    // Format dates for display
    const labels = recentEntries.map(entry => {
      const date = new Date(entry.date);
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    });
    
    // Get data points and colors
    const dataPoints = recentEntries.map(entry => moodValues[entry.mood] || 0);
    const pointColors = recentEntries.map(entry => getMoodByValue(entry.mood).color);
    
    return {
      labels,
      datasets: [
        {
          label: 'Mood',
          data: dataPoints,
          borderColor: '#7ec8e3',
          backgroundColor: 'rgba(126, 200, 227, 0.1)',
          borderWidth: 2,
          tension: 0.4,
          pointBackgroundColor: pointColors,
          pointBorderColor: '#fff',
          pointRadius: 5,
          pointHoverRadius: 7,
          fill: true,
        },
      ],
    };
  }, [moodEntries]);

  const chartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const index = context.dataIndex;
            const entry = moodEntries.sort((a, b) => a.timestamp - b.timestamp).slice(-14)[index];
            return entry ? getMoodByValue(entry.mood).label : '';
          },
        }
      }
    },
    scales: {
      y: {
        min: 0,
        max: 5,
        ticks: {
          callback: function(value) {
            const moodLabels = ['Sad', 'Stressed', 'Energetic', 'Focused', 'Calm', 'Happy'];
            return moodLabels[value as number];
          },
          stepSize: 1
        }
      }
    }
  };

  if (moodEntries.length < 2) {
    return (
      <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-6 mt-8">
        <h2 className="text-2xl font-poppins font-semibold text-gray-800 mb-4">Mood History</h2>
        <div className="text-center py-8 text-gray-500">
          Add at least 2 mood entries to see your mood history chart.
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-6 mt-8">
      <h2 className="text-2xl font-poppins font-semibold text-gray-800 mb-4">Mood History</h2>
      <div className="h-[300px] w-full">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default MoodHistory;