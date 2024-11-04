// Homepage.tsx
"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

const Homepage = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const beadRef = useRef<SVGCircleElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [pathLength, setPathLength] = useState(0);

  // Handle internal scroll events
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollTop = scrollContainerRef.current.scrollTop;
      const scrollHeight = scrollContainerRef.current.scrollHeight - scrollContainerRef.current.clientHeight;
      const scrollFraction = scrollTop / scrollHeight;
      setScrollPosition(scrollFraction);
    }
  };

  // Attach scroll event listener
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Get the total length of the SVG path
  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  // Update bead position based on scroll
  useEffect(() => {
    if (pathRef.current && beadRef.current) {
      const position = scrollPosition * pathLength;
      const point = pathRef.current.getPointAtLength(position);
      beadRef.current.setAttribute('cx', point.x.toString());
      beadRef.current.setAttribute('cy', point.y.toString());
    }
  }, [scrollPosition, pathLength]);

  return (
    <section className="relative h-screen snap-start" style={{ backgroundColor: '#161616' }}>
      {/* SVG Path and Bead confined to Homepage */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <svg className="w-full h-full">
          <path
            ref={pathRef}
            d="M0 539.5C485.833 526.333 604.4 383.2 788 -26C1117.5 -537.5 1655.5 -96.9999 1284 406.5C1012.5 910 1839 975.5 2142 470"
            stroke="white"
            strokeWidth="2"
            fill="none"
            className="drop-shadow-[0_0_10px_white]"
          />
          <circle
            ref={beadRef}
            cx="0"
            cy="0"
            r="10"
            fill="white"
            className="drop-shadow-[0_0_10px_white]"
          />
        </svg>
      </div>

      {/* Internal Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="h-full overflow-y-scroll overscroll-auto custom-scrollbar"
        style={{ overscrollBehavior: 'auto' }}
      >
        <div className="relative" style={{ height: '200vh' }}>
          {/* Content Container */}
          <div
            className="text-center max-w-xl mx-auto py-4"
            style={{
              position: 'sticky',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          >
            {/* First Content Block */}
            <div
              style={{
                opacity: 1 - scrollPosition * 2,
                transform: `translateY(${scrollPosition * 50}px)`,
              }}
              className={`transition-all duration-500 ${
                scrollPosition > 0.5 ? 'hidden' : 'block'
              }`}
            >
              <Image
                src="/camarin.svg"
                alt="Camarin Logo"
                className="mt-2 mx-auto w-[400px] h-auto"
                aria-label="Camarin Logo"
                width={400}
                height={400}
              />
              
              {/* Subtitle */}
              <p className="text-xl mt-4">Powered by AI</p>
            </div>

            {/* Second Content Block */}
            <div
              style={{
                opacity: (scrollPosition - 0.5) * 2,
                transform: `translateY(${(1 - scrollPosition) * 50}px)`,
              }}
              className={`transition-all duration-500 ${
                scrollPosition < 0.5 ? 'hidden' : 'block'
              }`}
            >
              <h2 className="text-3xl tracking-wide">
                The{' '}
                <span
                  className="relative inline-block"
                  style={{
                    textDecoration: 'none',
                    backgroundImage:
                      'linear-gradient(to right, transparent, #64CAB9, transparent)',
                    backgroundSize: '100% 3px',
                    backgroundPosition: '0 100%',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  convenience
                </span>{' '}
                of online shopping with the{' '}
                <span
                  className="relative inline-block"
                  style={{
                    textDecoration: 'none',
                    backgroundImage:
                      'linear-gradient(to right, transparent, #64CAB9, transparent)',
                    backgroundSize: '100% 3px',
                    backgroundPosition: '0 100%',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  certainty
                </span>{' '}
                of an in-store experience.
              </h2>
              <p className="text-lg mt-4 text-slate-500">
                All this, and more, with our cutting-edge SaaS library that integrates seamlessly with
                your web-app.
              </p>
              <button className="relative inline-block mt-10 px-6 py-3 bg-gradient-to-r from-neutral-700 to-zinc-900 rounded-full shadow-[inset_0_0_0_2px_transparent,0_0_10px_2px_rgba(255,255,255,0.5)] transition-shadow duration-300 ease-in-out hover:shadow-[inset_0_0_0_2px_transparent,0_0_10px_2px_rgba(255,255,255,1)]">
                Book a demo &gt;
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
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
    </section>
  );
};

export default Homepage;