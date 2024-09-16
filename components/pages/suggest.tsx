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
        <div className="p-[3px] rounded-3xl bg-gradient-to-r from-zinc-800 to-neutral-700">
          <div className="bg-[#161616] rounded-3xl p-8 flex flex-col md:flex-row items-center min-h-[600px]">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <div className="text-neutral-400 mb-2">Step 3</div>
              <h2 className="text-4xl font-bold mb-4">Suggest</h2>
              <p className="text-xl text-emerald-300 mt-2">Get real-time recommendations as you browse</p>
              <br />

              <div
                className={`mb-4 cursor-pointer ${
                  activeSection === 'sizeRecommendations' ? 'text-white' : 'text-zinc-800'
                }`}
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
                className={`mb-4 cursor-pointer ${
                  activeSection === 'materialDetails' ? 'text-white' : 'text-zinc-800'
                }`}
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
                className={`mb-4 cursor-pointer ${
                  activeSection === 'relatedProducts' ? 'text-white' : 'text-zinc-800'
                }`}
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
                {/* Render only suggest.png when the first or third section is active */}
                {activeSection !== 'materialDetails' && (
                  <div>
                    <Image
                      src="/suggest.png"
                      alt="Clothing item"
                      width={300}
                      height={400}
                      className="rounded-lg"
                    />
                  </div>
                )}

                {activeSection === 'materialDetails' && (
                  <div className="ml-4">
                    <Image
                      src="/suggest2text.png"
                      alt="Additional background"
                      width={500}
                      height={450}
                      className="background-image"
                    />
                  </div>
                )}
              </div>

              {/* Size Bar */}
              {activeSection === 'sizeRecommendations' && (
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
                              : 'bg-red-500'
                            : 'bg-gray-700'
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
      </div>
      <style jsx>{`
        .shine {
          box-shadow: 0 0 20px rgba(0, 255, 0, 1);
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
        .fixed-height-content-box {
          height: 100px; /* Set a consistent height for the content box */
          overflow: hidden; /* Hide overflowing content */
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </main>
  );
}
