import React from 'react';
import { motion } from 'framer-motion';
import { Playlist } from '../types';
import { getPlaylistsForMood } from '../data/playlists';
import { Music } from 'lucide-react';

interface MoodPlaylistsProps {
  currentMood: string | null;
}

const MoodPlaylists: React.FC<MoodPlaylistsProps> = ({ currentMood }) => {
  if (!currentMood) {
    return null;
  }

  const playlists = getPlaylistsForMood(currentMood);

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-poppins font-semibold text-gray-800 mb-4">
        Music for Your Mood
      </h2>
      
      {playlists.length === 0 ? (
        <div className="text-center py-8 text-gray-500 bg-white rounded-xl shadow-sm">
          No playlists found for this mood.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {playlists.map((playlist: Playlist) => (
            <motion.div
              key={playlist.id}
              className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-3">
                <Music className="text-blue-500 mr-2" size={20} />
                <h3 className="font-poppins font-medium text-lg text-gray-800">
                  {playlist.title}
                </h3>
              </div>
              
              <div className="relative overflow-hidden pt-[56.25%] rounded-lg">
                <iframe
                  className="absolute top-0 left-0 w-full h-full border-0"
                  src={playlist.embedUrl}
                  title={playlist.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MoodPlaylists;