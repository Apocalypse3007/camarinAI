import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="text-white pt-4" style={{ backgroundColor: '#161616' }}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center py-2">
            <div className="text-2xl font-bold" style={{ fontFamily: 'Posterama 2001 W04 Thin' }}>CAMARIN</div>
          <nav className="hidden md:flex space-x-4">
            <Link href="/about" className="text-white hover:text-gray-300">About</Link>
            <Link href="/features" className="text-white hover:text-gray-300">Features</Link>
            <Link href="/platform" className="text-white hover:text-gray-300">Platform</Link>
          </nav>
          <button className="highlight-button px-6 py-3 bg-gradient-to-r from-neutral-700 to-zinc-900 rounded-full">
            Contact us &gt;
          </button>
          
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-6 py-6 text-center">
        <div className="inline-flex items-center justify-center mb-1">
          <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
          <span className="text-green-400 text-sm">Find the right fit</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-1">Precise Measurement</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Provide customers with personalized, brand-agnostic sizing based on 
          their measurements and garment type, eliminating the need for size charts.
        </p>
      </div>
    </header>
  );
}