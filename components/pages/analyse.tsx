"use client";

import React from 'react';

export default function AnalysePage() {
  return (
    <main className="h-full flex items-center justify-center text-white" style={{ backgroundColor: '#161616' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-[3px] rounded-3xl bg-gradient-to-r from-zinc-800 to-neutral-700">
          <div className="bg-[#161616] rounded-3xl p-8 flex flex-col md:flex-row items-center min-h-[400px]">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <div className="text-gray-400 mb-2">Step 2</div>
              <h2 className="text-4xl font-bold mb-4">Analyse</h2>
              <div className="text-emerald-300 mb-4 text-xl">
                Efficient analysis with AI
              </div>
              <p className="text-neutral-400">
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
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }
      `}</style>
    </main>
  );
}
