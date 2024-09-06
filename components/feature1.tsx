"use client";

import React, { ReactNode, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Header from './ui/header'; // Import the Header component

const steps = [
  {
    title: 'Scan',
    subtitle: 'Precise measurements with a quick scan',
    description: 'The one-time, quick onboarding process simply requires the user to record dimensions using their personal device, allowing our AI to capture their true measurements with exceptional accuracy. The process is swift, patented, and producing results within a matter of seconds.',
    image: '/placeholder.svg?height=600&width=800',
  },
  {
    title: 'Analyse',
    subtitle: 'Efficient analysis with AI',
    description: 'Our AI models do the heavy lifting by eliminating the need to study size charts, inter-size conversion between different measurement systems and vague estimates based on reference model photographs.',
    image: '/placeholder.svg?height=600&width=800',
  },
  {
    title: 'Suggest',
    subtitle: 'Get real-time recommendations as you browse',
    description: 'Size recommendations across brands\nReceive ideal size recommendations based on the AI-powered measurements through real-time notifications.',
    image: '/placeholder.svg?height=600&width=800',
  },
];

function Box({ children }: { readonly children: ReactNode }) {
  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
      {children}
    </div>
  );
}

function Feature1() {
  const [currentStep, setCurrentStep] = useState(0);
  const [circlePosition, setCirclePosition] = useState({ top: 0, left: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      const stepHeight = container.clientHeight;
      const currentStep = Math.floor(scrollPosition / stepHeight);
      setCurrentStep(currentStep);

      const progress = (scrollPosition % stepHeight) / stepHeight;
      const boxWidth = container.clientWidth;
      const boxHeight = container.clientHeight;

      let top, left;
      if (progress < 0.25) {
        top = progress * 4 * boxHeight;
        left = 0;
      } else if (progress < 0.5) {
        top = boxHeight;
        left = (progress - 0.25) * 4 * boxWidth;
      } else if (progress < 0.75) {
        top = boxHeight - (progress - 0.5) * 4 * boxHeight;
        left = boxWidth;
      } else {
        top = 0;
        left = boxWidth - (progress - 0.75) * 4 * boxWidth;
      }

      setCirclePosition({ top, left });
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="h-screen w-full bg-gray-900 text-white overflow-hidden" ref={containerRef}>
      <Header /> {/* Add the Header component here */}
      <div className="snap-y snap-mandatory h-full overflow-y-scroll">
        {steps.map((step) => (
          <div key={step.title} className="snap-start h-full w-full flex items-center justify-center relative">
            <Box>
              <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-2">{step.title}</h2>
                <h3 className="text-xl text-green-400 mb-4">{step.subtitle}</h3>
                <p className="mb-8">{step.description}</p>
                <Image src={step.image} alt={step.title} width={800} height={600} className="rounded-lg" />
              </div>
            </Box>
          </div>
        ))}
      </div>
      <div
        className="w-8 h-8 bg-green-400 rounded-full absolute transition-all duration-300 ease-linear"
        style={{ top: `${circlePosition.top}px`, left: `${circlePosition.left}px` }}
      />
    </div>
  );
}

export default Feature1;