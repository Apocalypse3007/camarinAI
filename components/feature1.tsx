"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ScanPage from './pages/scan';
import AnalysePage from './pages/analyse';
import SuggestPage from './pages/suggest';
import Header from './ui/header';

interface Feature1Props {
  onContactClick: () => void; // Receive the contact click handler as a prop
}

export default function Feature1({ onContactClick }: Feature1Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const pages = [
    { component: ScanPage, title: "Scan" },
    { component: AnalysePage, title: "Analyse" },
    { component: SuggestPage, title: "Suggest" },
  ];

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      if (container) {
        const scrollTop = container.scrollTop;
        const pageHeight = window.innerHeight;
        const newIndex = Math.min(
          Math.floor(scrollTop / pageHeight),
          pages.length - 1
        );
        setCurrentIndex(newIndex);
      }
    };

    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [pages.length]);

  const handlePageChange = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="h-screen flex flex-col text-white" style={{ backgroundColor: '#161616' }}>
      {/* Pass the onContactClick prop to the Header */}
      <Header onContactClick={onContactClick} />
      <div ref={containerRef} className="flex-1 overflow-y-scroll custom-scrollbar">
        {pages.map((page, index) => (
          <div
            key={index}
            className="min-h-screen flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: -10 }}
              animate={{
                opacity: index <= currentIndex ? 1 : 0.5,
                y: 0,
                rotate: 0,
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              style={{
                transform: `perspective(1000px) rotateX(${
                  index < currentIndex ? -30 : 0
                }deg) translateZ(${index < currentIndex ? -100 : 0}px)`,
                opacity: index < currentIndex ? 0.5 : 1,
                transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
              }}
            >
              <page.component />
            </motion.div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {pages.map((page, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index)}
            className={`mx-2 px-4 py-2 rounded-full ${
              currentIndex === index ? 'bg-white text-black' : 'bg-gray-500'
            }`}
          >
            {page.title}
          </button>
        ))}
      </div>

      {/* Implementing the custom scrollbar */}
      <style jsx>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #161616 transparent;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #161616;
          border-radius: 10px;
          border: 2px solid transparent;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #333;
        }
      `}</style>
    </div>
  );
}
