import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[#161616] text-white py-4">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div
            className="text-2xl font-bold tracking-widest"
            style={{ fontFamily: 'Posterama 2001 W04 Thin', letterSpacing: '0.1em' }}
          >
            CAMARIN
          </div>

          {/* Navigation Links */}
          <nav className=" flex justify-center space-x-16 mx-auto">
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
          <button className=" highlight-button px-5 py-3 bg-gradient-to-r from-neutral-700 to-zinc-900 rounded-full text-sm shadow-md hover:shadow-lg transition duration-200">
            Contact us &gt;
          </button>
        </div>
      </div>

      {/* Header Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
        <div className="inline-flex items-center justify-center mb-4">
          <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
          <span className="text-green-400 text-sm">Find the right fit</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Precise Measurement</h1>
        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Provide customers with personalized, brand-agnostic sizing based on their measurements and
          garment type, eliminating the need for size charts.
        </p>
      </div>
    </header>
  );
}
