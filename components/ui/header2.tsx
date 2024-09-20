import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[#161616] text-white py-2 pt-8">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div
            className="text-2xl font-bold tracking-widest"
            style={{ fontFamily: 'Posterama 2001 W04 Thin', letterSpacing: '0.1em' }}
          >
            CAMARIN
          </div>

          {/* Navigation Links */}
          <nav className="flex justify-center space-x-40 mx-auto">
            <Link href="/about" className="text-white hover:text-gray-300 transition duration-200">
              About
            </Link>
            <Link href="/features" className="text-white hover:text-gray-300 transition duration-200">
              Features
            </Link>
            <Link href="/platform" className="text-white hover:text-gray-300 transition duration-200">
              Platform
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="pr-8">
            <button className="highlight-button px-5 py-3 bg-gradient-to-r from-neutral-700 to-zinc-900 rounded-full text-sm shadow-md hover:shadow-lg transition duration-200">
              Contact us &gt;
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}