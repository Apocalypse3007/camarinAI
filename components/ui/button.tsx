import React from 'react';
import Link from 'next/link';

interface DemoButtonProps {
  readonly href: string;
  readonly children: React.ReactNode;
}

export default function button({ href, children }: DemoButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-gray-800 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl"
    >
      {children} <span className="ml-2">&gt;</span>
    </Link>
  );
}