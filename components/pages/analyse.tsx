"use client";

import React from 'react';

export default function AnalysePage() {
  return (
    <main className="h-full flex items-center justify-center text-white" style={{ backgroundColor: '#212121' }}>
      <style jsx>{`
        .frosted-glass {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800 rounded-lg p-12 min-h-[400px] frosted-glass">
          <div className="text-gray-400 mb-2">Step 2</div>
          <h2 className="text-3xl font-bold mb-4">Analyse</h2>
          <div className="text-green-400 mb-4">Efficient analysis with AI</div>
          <p className="text-gray-400">
            Our AI models do the heavy lifting by eliminating the 
            need to study size charts, inter-size conversion between 
            different measurement systems and vague estimates 
            based on reference model photographs.
          </p>
        </div>
      </div>
    </main>
  );
}