// File: components/Header.jsx
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-[#161616] text-white py-2 pt-8">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
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
            <button className="highlight-button px-6 py-3 bg-gradient-to-r from-neutral-700 to-zinc-900 rounded-full text-sm shadow-md hover:shadow-lg transition duration-200">
              <div className="text-lg">Contact us &gt;</div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}