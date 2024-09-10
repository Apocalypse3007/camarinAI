"use client";

import React, { useRef, useState, useEffect } from 'react';

const Homepage = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const pathRef1 = useRef<SVGPathElement>(null);
  const pathRef2 = useRef<SVGPathElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollTop = scrollContainerRef.current.scrollTop;
      const scrollHeight = scrollContainerRef.current.scrollHeight - scrollContainerRef.current.clientHeight;
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

  const getCirclePosition = (pathRef: React.RefObject<SVGPathElement>, isSecondPage: boolean) => {
    if (!pathRef.current) return { cx: 0, cy: 0 };
    const pathLength = pathRef.current.getTotalLength();
    const point = pathRef.current.getPointAtLength(scrollPosition * pathLength);
    return { cx: point.x, cy: point.y };
  };

  const { cx: cx1, cy: cy1 } = getCirclePosition(pathRef1, false);
  const { cx: cx2, cy: cy2 } = getCirclePosition(pathRef2, true);

  return (
    <div ref={scrollContainerRef} className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <style jsx>{`
        @import url('https://db.onlinewebfonts.com/c/d056bcf9dfd6ac922b71535de69e8827?family=Posterama+2001+W04+Thin');
        
        @keyframes textFlow {
          0% {
            color: transparent;
          }
          100% {
            color: white;
          }
        }
        .animated-text {
          animation: textFlow 2s ease-in-out forwards;
        }
        .letter-spacing {
          letter-spacing: 0.1em;
        }
        .underline {
          position: relative;
          display: inline-block;
        }
        .underline::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -2px;
          height: 3px;
          background: linear-gradient(to right, transparent, #64CAB9 50%, transparent);
        }
        .highlight-button {
          position: relative;
          display: inline-block;
          box-shadow: inset 0 0 0 2px transparent, 0 0 10px 2px rgba(255, 255, 255, 0.5);
          transition: box-shadow 0.3s ease-in-out;
        }
        .highlight-button:hover {
          box-shadow: inset 0 0 0 2px transparent, 0 0 10px 2px rgba(255, 255, 255, 1);
        }
        .camarin {
          font-family: 'Posterama 2001 W04 Thin', sans-serif;
        }
        .shine-ball {
          filter: drop-shadow(0 0 10px white);
        }
        .waveform {
          filter: drop-shadow(0 0 10px white);
        }
        .gradient-background {
          background: linear-gradient(to bottom, #161616, #000000);
        }
      `}</style>
      <section className="h-screen flex flex-col justify-center items-center text-white snap-start relative gradient-background">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg width="100%" height="100%">
            <path
              ref={pathRef1}
              d="M0 539.5C485.833 526.333 604.4 383.2 788 -26C1117.5 -537.5 1655.5 -96.9999 1284 406.5C1012.5 910 1839 975.5 2142 470"
              stroke="white"
              strokeWidth="2"
              fill="none"
              className="waveform"
            />
            <circle cx={cx1} cy={cy1} r="10" fill="white" className="shine-ball" />
          </svg>
        </div>
        <h1 className="text-6xl font-bold highlight-text posterama-font">CAMARIN</h1>
        <p className="text-xl mt-4 animated-text">Powered by AI</p>
      </section>
      <section className="h-screen flex flex-col justify-center items-center text-white snap-start relative bg-neutral-900">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg width="100%" height="100%">
            <path
              ref={pathRef2}
              d="M0 539.5C485.833 526.333 604.4 383.2 788 -26C1117.5 -537.5 1655.5 -96.9999 1284 406.5C1012.5 910 1839 975.5 2142 47"
              stroke="white"
              strokeWidth="2"
              fill="none"
              className="waveform"
            />
            <circle cx={cx2} cy={cy2} r="10" fill="white" className="shine-ball" />
          </svg>
        </div>
        <div className="text-center max-w-xl py-4">
          <h2 className="text-3xl letter-spacing">
            The <span className="underline no-underline">convenience</span> of online shopping with the{" "}
            <span className="underline no-underline">certainty</span> {" "}
            of an in-store experience.
          </h2>
          <p className="text-lg mt-4 text-slate-500">
            All this, and more, with our cutting-edge SaaS library integrates seamlessly with your web-app.
          </p>
          <button className="highlight-button mt-10 px-6 py-3 bg-gradient-to-r from-neutral-700 to-zinc-900 rounded-full">Book a demo &gt; </button>
        </div>
      </section>
    </div>
  );
};

export default Homepage;