"use client";

import React, { useState, useEffect, useRef } from 'react';
import ScanPage from './pages/scan';
import AnalysePage from './pages/analyse';
import SuggestPage from './pages/suggest';
import Header from './ui/header';

export default function Feature1() {
  const [activePage, setActivePage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const pages = [
    { component: ScanPage, title: "Scan" },
    { component: AnalysePage, title: "Analyse" },
    { component: SuggestPage, title: "Suggest" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollTop = containerRef.current.scrollTop;
        const pageHeight = window.innerHeight;
        const newActivePage = Math.round(scrollTop / pageHeight);
        setActivePage(newActivePage);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const handlePageChange = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="h-screen flex flex-col text-white overflow-hidden parentDiv" style={{ backgroundColor: '#212121' }}>
      <Header />
      <div ref={containerRef} className="flex-1 relative childDiv overflow-y-scroll">
        <div className="relative h-[300vh] stack-cards js-stack-cards">
          {pages.map((Page, index) => (
            <div
              key={index}
              className={`h-screen w-full absolute top-0 left-0 transition-transform duration-500 ease-in-out stack-cards__item js-stack-cards__item bg radius-lg shadow-md ${index === activePage ? 'active' : ''}`}
              style={{
                zIndex: pages.length - index, // Ensures stacking order
                transform: `
                  translateY(${100 * index}%)
                  scale(${index === activePage ? 1 : 0.95})`,
                opacity: index === activePage ? 1 : 0.8,
                boxShadow: index < activePage ? "4px 0 10px rgba(0, 0, 0, 0.3)" : "none",
                borderRight: index < activePage ? "2px solid rgba(255, 255, 255, 0.2)" : "none",
              }}
            >
              <div className="relative z-10 h-full">
                <Page.component />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-50">
        {pages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === activePage ? "bg-white" : "bg-gray-500"}`}
            onClick={() => handlePageChange(index)}
            aria-label={`Go to ${pages[index].title} page`}
          />
        ))}
      </div>
      <style jsx>{`
        .stack-cards {
          position: relative;
          perspective: 1000px;
        }

        .stack-cards__item {
          transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
        }

        .stack-cards__item.active {
          transform: translateY(0) scale(1);
          opacity: 1;
        }

        /* Custom scrollbar styling */
        .childDiv::-webkit-scrollbar {
          width: 8px;
        }

        .childDiv::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.5);
          border-radius: 4px;
        }

        .childDiv::-webkit-scrollbar-track {
          background-color: rgba(33, 33, 33, 0.5);
        }
      `}</style>
    </div>
  );
}