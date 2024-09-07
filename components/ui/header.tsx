import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold">CAMARIN</div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/about" className="text-white hover:text-gray-300">About</Link>
            <Link href="/features" className="text-white hover:text-gray-300">Features</Link>
            <Link href="/platform" className="text-white hover:text-gray-300">Platform</Link>
          </nav>
          <a href="/contact" className="button">
            Contact us &gt;
          </a>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
        <div className="inline-flex items-center justify-center mb-2">
          <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
          <span className="text-green-400 text-sm">Find the right fit</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Precise Measurement</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Provide customers with personalized, brand-agnostic sizing based on 
          their measurements and garment type, eliminating the need for size charts.
        </p>
      </div>
    </header>
  );
}