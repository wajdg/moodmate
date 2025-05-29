import { Playlist } from '../types';

export const playlists: Playlist[] = [
  {
    id: '1',
    title: 'Uplifting Happy Vibes',
    embedUrl: 'https://www.youtube.com/embed/videoseries?list=PLvLX2y1VZ-tEmqtj_tG8P01po2TzbG9dQ&enablejsapi=1',
    moods: ['happy', 'energetic']
  },
  {
    id: '2',
    title: 'Calm & Relaxing',
    embedUrl: 'https://www.youtube.com/embed/videoseries?list=PLvLX2y1VZ-tFJCfRG7hi_OjIAyCriNUT2&enablejsapi=1',
    moods: ['calm', 'stressed']
  },
  {
    id: '3',
    title: 'Focus & Concentration',
    embedUrl: 'https://www.youtube.com/embed/videoseries?list=PLvLX2y1VZ-tHKQzJZzF-5ZondVBw7l_OD&enablejsapi=1',
    moods: ['focused']
  },
  {
    id: '4',
    title: 'Energetic & Motivational',
    embedUrl: 'https://www.youtube.com/embed/videoseries?list=PLvLX2y1VZ-tEHxjBJrFw5UtY4CfXtJtJQ&enablejsapi=1',
    moods: ['energetic', 'happy']
  },
  {
    id: '5',
    title: 'Comforting Melodies',
    embedUrl: 'https://www.youtube.com/embed/videoseries?list=PLvLX2y1VZ-tGZbVNLoZ6US6prT8UhWWLq&enablejsapi=1',
    moods: ['sad', 'calm']
  },
  {
    id: '6',
    title: 'Stress Relief',
    embedUrl: 'https://www.youtube.com/embed/videoseries?list=PLvLX2y1VZ-tEmqtj_tG8P01po2TzbG9dQ&enablejsapi=1',
    moods: ['stressed']
  }
];

export const getPlaylistsForMood = (mood: string): Playlist[] => {
  return playlists.filter(playlist => playlist.moods.includes(mood));
};