import React from 'react';
import { motion } from 'framer-motion';
import { Activity } from '../types';
import { getActivitiesForMood } from '../data/activities';
import { Clock, ArrowRight } from 'lucide-react';

interface MoodActivitiesProps {
  currentMood: string | null;
}

const MoodActivities: React.FC<MoodActivitiesProps> = ({ currentMood }) => {
  if (!currentMood) {
    return null;
  }

  const activities = getActivitiesForMood(currentMood);

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-poppins font-semibold text-gray-800 mb-4">
        Recommended Activities
      </h2>
      
      {activities.length === 0 ? (
        <div className="text-center py-8 text-gray-500 bg-white rounded-xl shadow-sm">
          No activities found for this mood.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activities.map((activity: Activity) => (
            <motion.div
              key={activity.id}
              className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow"
              whileHover={{ y: -3 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-poppins font-medium text-lg text-gray-800 mb-2">
                {activity.title}
              </h3>
              <p className="text-gray-600 mb-3">{activity.description}</p>
              <div className="flex items-center text-gray-500 text-sm">
                <Clock size={16} className="mr-1" />
                <span>{activity.duration}</span>
              </div>
              <motion.button
                className="mt-4 flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                whileHover={{ x: 3 }}
              >
                Try this activity <ArrowRight size={16} className="ml-1" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MoodActivities;