"use client";

import React from 'react';

export default function AnalysePage() {
  return (
    <main className="h-full flex items-center justify-center text-white" style={{ backgroundColor: '#161616' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-[3px] rounded-3xl bg-gradient-to-r from-black to-stone-500">
          <div className="bg-[#161616] rounded-3xl p-8 flex flex-col md:flex-row items-center min-h-[400px]">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <div className="text-xl text-gray-400 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-white">
                Step 2
              </div>
              <h2 className="text-5xl mb-4">Analyse</h2>
              <div className="text-emerald-300 mb-4 text-xl">
                Efficient analysis with AI
              </div>
              <p className="text-neutral-400 tracking-widest">
                Our AI models do the heavy lifting by eliminating the need to study
                size charts, inter-size conversion between different measurement
                systems and vague estimates based on reference model photographs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .frosted-glass {
          background: linear-gradient( rgba(41, 41, 41, 0.5) 1.98%, rgba(22, 22, 22, 1) 100.42%);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }
      `}</style>
    </main>
  );
}