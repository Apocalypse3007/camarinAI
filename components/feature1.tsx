"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import ScanPage from './pages/scan';
import AnalysePage from './pages/analyse';
import SuggestPage from './pages/suggest';
import Header from './ui/header';

interface Feature1Props {
  onContactClick: () => void;
}

export default function Feature1({ onContactClick }: Feature1Props) {
  const PAGES = [
    {
      id: 0,
      title: 'Scan',
      component: <ScanPage />,
    },
    {
      id: 1,
      title: 'Analyse',
      component: <AnalysePage />,
    },
    {
      id: 2,
      title: 'Suggest',
      component: <SuggestPage />,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // To prevent rapid state changes
  const [direction, setDirection] = useState(0); // 1 for up, -1 for down

  useEffect(() => {
    // Disable body scroll when Feature1 is active
    document.body.style.overflow = 'hidden';
    return () => {
      // Re-enable body scroll on cleanup (when Feature1 unmounts)
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (isAnimating) return; // Prevent state changes during animation

    const threshold = 100; // Increased threshold for swipe

    console.log('Drag offset y:', info.offset.y);

    if (info.offset.y < -threshold && currentIndex < PAGES.length - 1) {
      // Swipe Up
      console.log('Swiped Up');
      setDirection(1);
      setIsAnimating(true);
      setCurrentIndex((prev) => prev + 1);
    } else if (info.offset.y > threshold && currentIndex > 0) {
      // Swipe Down
      console.log('Swiped Down');
      setDirection(-1);
      setIsAnimating(true);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };

  const stackVariants = {
    initial: (i: number) => ({
      scale: 1 - i * 0.05,
      y: i * -20,
      zIndex: PAGES.length - i,
      opacity: 1 - i * 0.1,
      x: 0,
    }),
    animate: (i: number) => ({
      scale: 1 - i * 0.05,
      y: i * -20,
      zIndex: PAGES.length - i,
      opacity: 1 - i * 0.1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    }),
    exitUp: {
      opacity: 0,
      scale: 0.9,
      y: -50,
      x: 0,
      transition: { duration: 0.5, ease: 'easeIn' },
    },
    exitDown: {
      opacity: 0,
      scale: 0.9,
      y: 50,
      x: 0,
      transition: { duration: 0.5, ease: 'easeIn' },
    },
    enterUp: {
      opacity: 0,
      scale: 1.05,
      y: 50,
      x: 0,
    },
    enterDown: {
      opacity: 0,
      scale: 1.05,
      y: -50,
      x: 0,
    },
  };

  return (
    <div
      className="h-screen flex flex-col text-white"
      style={{ backgroundColor: '#161616', overflow: 'hidden' }}
    >
      <Header onContactClick={onContactClick} />
      <div className="flex-1 flex items-center justify-center w-full relative">
        <AnimatePresence>
          {PAGES.slice(currentIndex, currentIndex + 3).map((page, index) => (
            <motion.div
              key={page.id}
              className="absolute w-full h-full flex items-center justify-center"
              custom={index}
              variants={stackVariants}
              initial={direction === 1 ? "enterUp" : direction === -1 ? "enterDown" : "initial"}
              animate="animate"
              exit={direction === 1 ? "exitUp" : direction === -1 ? "exitDown" : "exit"}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              drag={index === 0 ? "y" : false} // Only top card is draggable
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.2}
              onDragEnd={index === 0 ? handleDragEnd : undefined}
              whileDrag={
                index === 0
                  ? { scale: 1.05, boxShadow: '0px 10px 30px rgba(0,0,0,0.2)' }
                  : {}
              }
              onAnimationComplete={index === 0 ? handleAnimationComplete : undefined}
            >
              <div className="w-full h-full">{page.component}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
