// components/ui/Header.tsx

'use client';

import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  onContactClick: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  return (
    <header className="bg-[#161616] text-white py-4">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="text-center">
            <Image
              src="/camarin.svg"
              alt="Camarin Logo"
              className="mt-2 w-32 h-auto mx-auto"
              width={128}
              height={128}
              aria-label="Camarin Logo"
            />
          </div>

          {/* Navigation Links */}
          <nav className="flex justify-center space-x-8">
            <Link
              href="/about"
              className="text-lg text-white hover:text-gray-300 transition duration-200"
            >
              About
            </Link>
            <Link
              href="/features"
              className="text-lg text-white hover:text-gray-300 transition duration-200"
            >
              Features
            </Link>
            <Link
              href="/platform"
              className="text-lg text-white hover:text-gray-300 transition duration-200"
            >
              Platform
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="pr-6">
            <button
              onClick={onContactClick} // Use the passed handler
              className="relative inline-block px-6 py-3 bg-gradient-to-r from-neutral-700 to-zinc-900 rounded-full shadow-[inset_0_0_0_2px_transparent,0_0_10px_2px_rgba(255,255,255,0.5)] transition-shadow duration-300 ease-in-out hover:shadow-[inset_0_0_0_2px_transparent,0_0_10px_2px_rgba(255,255,255,1)]"
            >
              Contact Us &gt;
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}