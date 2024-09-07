import React from 'react'
import Image from 'next/image'

export default function ScanPage() {
  return (
    <main className="h-full flex items-center justify-center bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800 rounded-lg p-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <div className="text-gray-400 mb-2">Step 1</div>
            <h2 className="text-3xl font-bold mb-4">Scan</h2>
            <div className="text-green-400 mb-4">Precise measurements with a quick scan</div>
            <p className="text-gray-400">
              The one-time, quick onboarding process simply requires the user to 
              record dimensions using their personal device, allowing our AI to 
              capture their true measurements with exceptional accuracy. The 
              process is swift, patented, and producing results within a matter of seconds.
            </p>
          </div>
          <div className="md:w-1/2 relative">
            <Image
              src="/placeholder.svg?height=400&width=300"
              alt="Scanning process"
              width={300}
              height={400}
              className="rounded-lg"
            />
            <div className="absolute top-0 right-0 w-4 h-4 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </main>
  )
}