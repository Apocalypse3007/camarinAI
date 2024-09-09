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
      <div ref={containerRef} className="flex-1 relative childDiv overflow-y-scroll snap-y snap-mandatory">
        <div className="relative h-full">
          {pages.map((Page, index) => (
            <div
              key={index}
              className={`h-screen w-full snap-start transition-transform duration-500 ease-in-out ${index === activePage ? 'active' : ''}`}
              style={{
                zIndex: index <= activePage ? pages.length - index : 0, // Ensures stacking order
                transform: index <= activePage ? `translateY(${index * 10}px) scale(${1 - index * 0.05})` : 'translateY(0)',
                opacity: index === activePage ? 1 : 0.8,
              }}
            >
              <Page.component />
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

        .childDiv {
          scroll-snap-type: y mandatory;
        }

        .snap-start {
          scroll-snap-align: start;
        }
      `}</style>
    </div>
  );
}