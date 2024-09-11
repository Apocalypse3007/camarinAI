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
        <div className="h-screen flex flex-col text-white overflow-hidden" style={{ backgroundColor: '#161616' }}>
          <Header />
          <div ref={containerRef} className="flex-1 overflow-y-scroll snap-y snap-mandatory">
            {pages.map((page, index) => (
              <div key={index} className="h-screen snap-start">
                <page.component />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            {pages.map((page, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index)}
                className={`mx-2 px-4 py-2 rounded-full ${activePage === index ? 'bg-white text-black' : 'bg-gray-500'}`}
              >
                {page.title}
              </button>
            ))}
          </div>
        </div>
      );
    }