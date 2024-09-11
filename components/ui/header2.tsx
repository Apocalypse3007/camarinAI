import React from 'react';
import Link from 'next/link';

export default function Header2() {
  return (
    <header className="text-white pt-4" style={{ backgroundColor: '#161616' }}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center ">
            <div className="text-2xl font-bold" style={{ fontFamily: 'Posterama 2001 W04 Thin' }}>CAMARIN</div>
          <nav className="hidden md:flex space-x-4">
            <Link href="/about" className="text-white hover:text-gray-300">About</Link>
            <Link href="/features" className="text-white hover:text-gray-300">Features</Link>
            <Link href="/platform" className="text-white hover:text-gray-300">Platform</Link>
          </nav>
          <button className="highlight-button px-6 py-2 bg-gradient-to-r from-neutral-700 to-zinc-900 rounded-full">
            Contact us &gt;
          </button>
          
        </div>
      </div>
    </header>
  );
}