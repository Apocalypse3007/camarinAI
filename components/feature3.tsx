import React from 'react';

export default function Feature3() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#161616]">
      <h1 className="text-white text-6xl relative tracking-wider">
        Coming Soon
        <span className="absolute left-0 right-0 bottom-0 h-1 bg-emerald-300 underline-gradient"></span>
      </h1>
      <style jsx>{`
        .underline-gradient {
          background: linear-gradient(to right, transparent, rgba(16, 185, 129, 1), transparent);
          height: 4px;
          width: 100%;
          bottom: -4px;
        }
      `}</style>
    </div>
  );
}