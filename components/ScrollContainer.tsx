"use client";

import React, { useEffect, useRef, useState } from 'react';

interface ScrollContainerProps {
  children: React.ReactNode;
}

const ScrollContainer: React.FC<ScrollContainerProps> = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;
      const scrollTop = scrollContainerRef.current.scrollTop;
      const maxScrollTop = scrollContainerRef.current.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      setScrollPosition(scrollFraction);
    };
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => {
        scrollContainer.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const getCirclePosition = () => {
    if (!pathRef.current) return { cx: 0, cy: 0 };
    const pathLength = pathRef.current.getTotalLength();
    const point = pathRef.current.getPointAtLength(scrollPosition * pathLength);
    return { cx: point.x, cy: point.y };
  };

  const { cx, cy } = getCirclePosition();

  return (
    <div className="h-screen flex flex-col bg-black relative">
      <div ref={scrollContainerRef} className="flex-1 overflow-y-scroll snap-y snap-mandatory relative">
        <div className="absolute inset-0 pointer-events-none">
          <svg width="100%" height="100%">
            <path
              ref={pathRef}
              d="M0,150 C150,50 350,250 500,150 C650,50 850,250 1000,150 C1150,50 1350,250 1500,150"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
            <circle cx={cx} cy={cy} r="10" fill="white" />
          </svg>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ScrollContainer;