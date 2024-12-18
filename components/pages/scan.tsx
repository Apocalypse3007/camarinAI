"use client";

import React from 'react';
import Image from 'next/image';

export default function ScanPage() {
  return (
    <main className="h-full flex items-center justify-center text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-[3px] rounded-3xl bg-gradient-to-r from-black to-stone-500">
          <div className="bg-[#161616] rounded-3xl p-8 flex flex-col md:flex-row items-center min-h-[550px]">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <div className="text-xl text-gray-400 mb-2">Step 1</div>
              <h2 className="text-5xl mb-4">Scan</h2>
              <div className="text-xl text-emerald-300 mb-4">
                Precise measurements with a quick scan
              </div>
              <p className="text-neutral-400 tracking-wider">
                The one-time, quick onboarding process simply requires the user to
                record dimensions using their personal device, allowing our AI to
                capture their true measurements with exceptional accuracy. The
                process is swift, patented, and producing results within a matter of seconds.
              </p>
            </div>
            <div className="md:w-1/2 relative ml-36">
              <div className="absolute inset-0 z-0 texture-background"></div>
              <Image
                src="/scan-2.png"
                alt="Scanning process"
                className="rounded-lg relative z-10 w-[700px] h-[300px]"
                width={700}
                height={300}
              />
              <div className="absolute top-0 right-0 w-4 h-4 bg-white rounded-full"></div>
            </div>
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
          background-image: url('/path-to-your-texture.png');
          background-size: cover;
          background-position: center;
          border-radius: 0.5rem;
        }
      `}</style>
    </main>
  );
}