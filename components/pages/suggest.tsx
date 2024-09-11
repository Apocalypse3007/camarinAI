"use client";

import React, { useState } from 'react';
import Image from 'next/image';

export default function SuggestPage() {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('sizeRecommendations');

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <main className="h-full flex items-center justify-center text-white" style={{ backgroundColor: '#161616' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800 rounded-lg p-8 flex flex-col md:flex-row items-center min-h-[600px] frosted-glass">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <div className="text-neutral-400 mb-2">Step 3</div>
            <h2 className="text-4xl font-bold mb-4">Suggest</h2>
            <p className="text-xl text-emerald-300 mt-2">Get real-time recommendations as you browse</p>
            <br />
            <div
              className={"mb-4 text-white-900"  }
              onClick={() => handleSectionClick('sizeRecommendations')}
            >
              Size recommendations across brands
            </div>
            {activeSection === 'sizeRecommendations' && (
              <p className="text-neutral-400 mb-4 blend-in">
                Receive ideal size recommendations based on the AI-powered measurements through real-time notifications.
              </p>
            )}
            <div
              className={`mb-4 ${activeSection === 'materialDetails' ? 'active-section' : 'inactive-section'}`}
              onClick={() => handleSectionClick('materialDetails')}
            >
              Material details and high definition renders
            </div>
            {activeSection === 'materialDetails' && (
              <p className="text-neutral-400 mb-4 blend-in">
                Get detailed information about material, quality, fit and view it in a high-definition 360 movable realistic render.
              </p>
            )}
            <div
              className={`mb-4 ${activeSection === 'relatedProducts' ? 'active-section' : 'inactive-section'}`}
              onClick={() => handleSectionClick('relatedProducts')}
            >
              Related product assistance
            </div>
            {activeSection === 'relatedProducts' && (
              <p className="text-neutral-400 mb-4 blend-in">
                Find related products to build the perfect outfit within seconds using AI.
              </p>
            )}
          </div>
          <div className="md:w-full flex justify-center relative ml-40 image-container">
            {/* Image Container */}
            <div className="flex">
              {/* First Image - suggest.png */}
              <div>
                <Image
                  src="/suggest.png"
                  alt="Clothing item"
                  width={300}
                  height={400}
                  className="rounded-lg"
                />
              </div>

              {/* Second Image - suggest2text.png */}
              {activeSection === 'materialDetails' && (
                <div className="ml-4">
                  <Image
                    src="/suggest2text.png"
                    alt="Additional background"
                    width={200}
                    height={250}
                    className="background-image"
                  />
                </div>
              )}
            </div>

            {/* Size Bar */}
            {activeSection === 'materialDetails' && (
              <div className="flex flex-col items-center mt-4 w-full">
                <div className="size-bar flex justify-center space-x-2 mt-4">
                  {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                    <span
                      key={size}
                      onClick={() => handleSizeClick(size)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                          handleSizeClick(size);
                        }
                      }}
                      tabIndex={0}
                      role="button"
                      className={`px-3 py-1 rounded-full text-sm cursor-pointer ${
                        selectedSize === size
                        ? selectedSize === 'M'
                          ? 'bg-green-500 shine'
                          : 'bg-red-500 '
                        : 'bg-gray-700'
                    }
                      }`}
                    >
                      {size}
                    </span>
                  ))}
                </div>
                {selectedSize === 'L' && (
                  <div className="mt-4 text-red-500">
                    <p>Sleeves might be long for you, loose around the chest ❌</p>
                    <p>We recommend you choose the size M instead for a perfect fit.</p>
                  </div>
                )}
                {selectedSize === 'M' && (
                  <div className="mt-4 text-green-500">
                    <p>We recommend the size M for a perfect fit ✅</p>
                  </div>
                )}
                {selectedSize === 'S' && (
                  <div className="mt-4 text-red-500">
                    <p>Sleeves might be short for you, loose around the chest ❌</p>
                    <p>We recommend you choose the size M instead for a perfect fit.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .shine {
          box-shadow: 0 0 20px rgba(0, 255, 0, 1);
        }
        .active-section {
          color: #00ff00;
          cursor: pointer;
        }
        .inactive-section {
          color: #555555;
          cursor: pointer;
        }
        .blend-in {
          animation: blendIn 0.5s ease-in-out;
        }
        @keyframes blendIn {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .image-container {
          position: relative;
          display: flex;
          align-items: center;
          flex-direction: column;
        }
        .frosted-glass {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }
      `}</style>
    </main>
  );
}
