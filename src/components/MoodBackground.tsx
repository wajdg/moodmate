import React from 'react';
import { motion } from 'framer-motion';
import { getMoodByValue } from '../data/moods';

interface MoodBackgroundProps {
  mood: string | null;
}

const MoodBackground: React.FC<MoodBackgroundProps> = ({ mood }) => {
  const moodDetails = mood ? getMoodByValue(mood) : null;
  const bgColor = moodDetails?.bgColor || '#f9fafb';

  // Different animations for different moods
  const getAnimationProps = () => {
    switch (mood) {
      case 'happy':
        return {
          variants: {
            initial: { scale: 0, opacity: 0 },
            animate: { scale: 1, opacity: 0.6 },
          },
          transition: { duration: 0.8, ease: 'easeOut' },
          className: "absolute w-64 h-64 rounded-full bg-[#f28c8c] blur-3xl"
        };
      case 'calm':
        return {
          variants: {
            initial: { y: 100, opacity: 0 },
            animate: { y: 0, opacity: 0.4 },
          },
          transition: { duration: 1.2, ease: 'easeOut' },
          className: "absolute w-96 h-96 rounded-full bg-[#7ec8e3] blur-3xl"
        };
      case 'energetic':
        return {
          variants: {
            initial: { scale: 0.5, opacity: 0 },
            animate: { scale: 1, opacity: 0.5 },
          },
          transition: { duration: 0.6, type: 'spring' },
          className: "absolute w-80 h-80 rounded-full bg-[#8ed9a3] blur-3xl"
        };
      case 'stressed':
        return {
          variants: {
            initial: { scale: 1.5, opacity: 0 },
            animate: { scale: 1, opacity: 0.4 },
          },
          transition: { duration: 1, ease: 'easeOut' },
          className: "absolute w-72 h-72 rounded-full bg-[#f5b971] blur-3xl"
        };
      case 'sad':
        return {
          variants: {
            initial: { y: -50, opacity: 0 },
            animate: { y: 0, opacity: 0.3 },
          },
          transition: { duration: 1.5, ease: 'easeOut' },
          className: "absolute w-80 h-80 rounded-full bg-[#9b88cb] blur-3xl"
        };
      case 'focused':
        return {
          variants: {
            initial: { scale: 0, opacity: 0 },
            animate: { scale: 1, opacity: 0.4 },
          },
          transition: { duration: 0.8, ease: 'easeOut' },
          className: "absolute w-80 h-80 rounded-full bg-[#738ff3] blur-3xl"
        };
      default:
        return {
          variants: {
            initial: { opacity: 0 },
            animate: { opacity: 0.1 },
          },
          transition: { duration: 1 },
          className: "absolute w-80 h-80 rounded-full bg-gray-200 blur-3xl"
        };
    }
  };

  const animationProps = getAnimationProps();

  return (
    <div 
      className="fixed inset-0 w-full h-full overflow-hidden -z-10 transition-colors duration-700"
      style={{ backgroundColor: bgColor }}
    >
      <motion.div
        initial="initial"
        animate="animate"
        variants={animationProps.variants}
        transition={animationProps.transition}
        className={animationProps.className}
        style={{ top: '20%', left: '15%' }}
      />
      
      <motion.div
        initial="initial"
        animate="animate"
        variants={animationProps.variants}
        transition={{...animationProps.transition, delay: 0.2}}
        className={animationProps.className}
        style={{ top: '60%', right: '10%' }}
      />
      
      {mood === 'energetic' && (
        <motion.div
          initial="initial"
          animate="animate"
          variants={animationProps.variants}
          transition={{...animationProps.transition, delay: 0.3}}
          className={animationProps.className}
          style={{ top: '30%', right: '30%' }}
        />
      )}
    </div>
  );
};

export default MoodBackground;