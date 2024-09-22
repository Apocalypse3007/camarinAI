"use client";

import React, { useRef, useState, useEffect } from 'react';

const Homepage = () => {
  const scrollContainerRef = useRef(null);
  const pathRef1 = useRef(null);
  const pathRef2 = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollTop = scrollContainerRef.current.scrollTop;
      const scrollHeight =
        scrollContainerRef.current.scrollHeight - scrollContainerRef.current.clientHeight;
      const scrollFraction = scrollTop / scrollHeight;
      setScrollPosition(scrollFraction);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const getCirclePosition = (pathRef) => {
    if (!pathRef.current) return { cx: 0, cy: 0 };
    const pathLength = pathRef.current.getTotalLength();
    const point = pathRef.current.getPointAtLength(scrollPosition * pathLength);
    return { cx: point.x, cy: point.y };
  };

  const { cx: cx1, cy: cy1 } = getCirclePosition(pathRef1);
  const { cx: cx2, cy: cy2 } = getCirclePosition(pathRef2);

  return (
    <div ref={scrollContainerRef} className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {/* First Section */}
      <section className="h-screen flex flex-col justify-center items-center text-white snap-start relative bg-neutral-900">
        {/* Background Waveform and Moving Circle */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full">
            <path
              ref={pathRef1}
              d="M0 539.5C485.833 526.333 604.4 383.2 788 -26C1117.5 -537.5 1655.5 -96.9999 1284 406.5C1012.5 910 1839 975.5 2142 470"
              stroke="white"
              strokeWidth="2"
              fill="none"
              className="drop-shadow-[0_0_10px_white]"
            />
            <circle
              cx={cx1}
              cy={cy1}
              r="10"
              fill="white"
              className="drop-shadow-[0_0_10px_white]"
            />
          </svg>
        </div>
        {/* Camarin Logo */}
        <img
          src="/camarin.svg"
          alt="Camarin Logo"
          className="mt-2 mx-auto w-[400px] h-auto"
          aria-label="Camarin Logo"
        />
        {/* Subtitle */}
        <p className="text-xl mt-4 animate-[textFlow_2s_ease-in-out_forwards]">Powered by AI</p>
      </section>

      {/* Second Section */}
      <section className="h-screen flex flex-col justify-center items-center text-white snap-start relative bg-neutral-900">
        {/* Background Waveform and Moving Circle */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full">
            <path
              ref={pathRef2}
              d="M0 539.5C485.833 526.333 604.4 383.2 788 -26C1117.5 -537.5 1655.5 -96.9999 1284 406.5C1012.5 910 1839 975.5 2142 47"
              stroke="white"
              strokeWidth="2"
              fill="none"
              className="drop-shadow-[0_0_10px_white]"
            />
            <circle
              cx={cx2}
              cy={cy2}
              r="10"
              fill="white"
              className="drop-shadow-[0_0_10px_white]"
            />
          </svg>
        </div>
        {/* Content */}
        <div className="text-center max-w-xl py-4">
          <h2 className="text-3xl tracking-wide">
            The{' '}
            <span
              className="relative inline-block underline decoration-3 underline-offset-2"
              style={{
                textDecoration: "none",
                backgroundImage: 'linear-gradient(to right, transparent, #64CAB9, transparent)',
                backgroundSize: '100% 3px',
                backgroundPosition: '0 100%',
                backgroundRepeat: 'no-repeat',
              }}
            >
              convenience
            </span>{' '}
            of online shopping with the{' '}
            <span
              className="relative inline-block underline decoration-3 underline-offset-2"
              style={{
                textDecoration: "none",
                backgroundImage: 'linear-gradient(to right, transparent, #64CAB9, transparent)',
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
      </section>
    </div>
  );
};

export default Homepage;