// File: components/Header.jsx
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-[#161616] text-white pt-8">
      <div className="w-full px-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="text-center">
            <Image
              src="/camarin.svg" 
              alt="Camarin Logo"
              className="w-32 h-auto mx-auto"
              width={128} 
              height={128} 
              aria-label="Camarin Logo"
            />
          </div>

          {/* Navigation Links */}
          <nav className="flex justify-center space-x-44 mx-auto">
            <Link href="/about" className="text-lg text-white hover:text-gray-300 transition duration-200">
              About
            </Link>
            <Link href="/features" className="text-lg text-white hover:text-gray-300 transition duration-200">
              Features
            </Link>
            <Link href="/platform" className="text-lg text-white hover:text-gray-300 transition duration-200">
              Platform
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="pr-8">
          <button className="relative inline-block px-6 py-3 bg-gradient-to-r from-neutral-700 to-zinc-900 rounded-full shadow-[inset_0_0_0_2px_transparent,0_0_10px_2px_rgba(255,255,255,0.5)] transition-shadow duration-300 ease-in-out hover:shadow-[inset_0_0_0_2px_transparent,0_0_10px_2px_rgba(255,255,255,1)]">
            Contact Us &gt;
          </button>
          </div>
        </div>
      </div>
    </header>
  );
}