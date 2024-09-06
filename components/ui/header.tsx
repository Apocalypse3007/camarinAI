import React from 'react';
import Link from 'next/link';
import Button from './button'; 

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-6 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-16">
          <div className="text-2xl font-bold highlight-text">CAMARIN</div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/about" className="hover:text-gray-300 highlight-text">About</Link>
            <Link href="/features" className="hover:text-gray-300 highlight-text">Features</Link>
            <Link href="/platform" className="hover:text-gray-300 highlight-text">Platform</Link>
          </nav>
          <Button variant="secondary" size="small">
            Contact us
          </Button>
        </div>
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block mb-4">
            <span className="bg-green-500 rounded-full w-2 h-2 inline-block mr-2"></span>
            <span className="text-green-500 text-sm highlight-text">Find the right fit</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 highlight-text">Precise Measurement</h1>
          <p className="text-gray-400 text-sm md:text-base">
            Provide customers with personalized, brand-agnostic sizing based on 
            their measurements and garment type, eliminating the need for size charts.
          </p>
        </div>
      </div>
    </header>
  );
}