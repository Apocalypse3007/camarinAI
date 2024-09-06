"use client"

import { useEffect, useRef, useState } from "react"

const Homepage = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return
      const scrollTop = scrollContainerRef.current.scrollTop
      const maxScrollTop = scrollContainerRef.current.scrollHeight - window.innerHeight
      const scrollFraction = scrollTop / maxScrollTop
      setScrollPosition(scrollFraction)
    }
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll)
      return () => {
        scrollContainer.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  const getCirclePosition = () => {
    if (!pathRef.current) return { cx: 0, cy: 0 }
    const pathLength = pathRef.current.getTotalLength()
    const point = pathRef.current.getPointAtLength(scrollPosition * pathLength)
    return { cx: point.x, cy: point.y }
  }

  const { cx, cy } = getCirclePosition()

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
          background: linear-gradient(to right, transparent, #39ff14 50%, transparent);
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
        .highlight-text {
          font-family: 'Posterama 2001 W04 Thin', sans-serif;
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.6), 0 0 10px rgba(255, 255, 255, 0.4), 0 0 15px rgba(255, 255, 255, 0.2);
        }
      `}</style>
      <section className="h-screen flex flex-col justify-center items-center bg-black text-white snap-start relative">
        <div className="absolute top-0 left-0 w-full h-full">
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
        <h1 className="text-6xl font-bold highlight-text">CAMARIN</h1>
        <p className="text-xl mt-4 animated-text">Powered by AI</p>
      </section>
      <section className="h-screen flex flex-col justify-center items-center bg-black text-white snap-start relative">
        <div className="absolute top-0 left-0 w-full h-full">
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
        <div className="text-center max-w-xl py-4">
          <h2 className="text-3xl letter-spacing">
            The <span className="underline no-underline">convenience</span> of online shopping with the{" "}
            <span className="underline no-underline">certainty</span> {" "}
            of an in-store experience.
          </h2>
          <p className="text-lg mt-4 text-slate-500">
            All this, and more, with our cutting-edge SaaS library integrates seamlessly with your web-app.
          </p>
          <button className="highlight-button mt-10 px-6 py-3 bg-slate-900 text-white rounded-full">Book a demo &gt; </button>
        </div>
      </section>
    </div>
  )
}

export default Homepage;