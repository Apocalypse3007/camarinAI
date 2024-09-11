"use client";

import React from 'react';
import Image from 'next/image';

export default function ScanPage() {
  return (
    <main className="h-full flex items-center justify-center text-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
          <div className="bg-gray-800 rounded-lg p-8 flex flex-col md:flex-row items-center min-h-[600px] bg-gradient-to-r from-transparent to-emerald-300 frosted-glass">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <div className="text-gray-400 mb-2">Step 1</div>
            <h2 className="text-4xl font-bold mb-4">Scan</h2>
            <div className="text-xl text-emerald-300 mb-4">Precise measurements with a quick scan</div>
            <p className="text-neutral-400">
              The one-time, quick onboarding process simply requires the user to 
              record dimensions using their personal device, allowing our AI to 
              capture their true measurements with exceptional accuracy. The 
              process is swift, patented, and producing results within a matter of seconds.
            </p>
          </div>
          <div className="md:w-1/2 relative ml-36">
            <div className="absolute inset-0 z-0 texture-background"></div>
            <Image
              src="/scan.png" 
              alt="Scanning process"
              width={300}
              height={400}
              className="rounded-lg relative z-10"
            />
            <div className="absolute top-0 right-0 w-4 h-4 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .frosted-glass {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }
        .texture-background {
          background-image: url('/path-to-your-texture.png'); /* Replace with your texture image path */
          background-size: cover;
          background-position: center;
          border-radius: 0.5rem; /* Match the border radius of the image */
        }
      `}</style>
    </main>
  );
}