"use client";

import React, { useState } from 'react';
import Image from 'next/image';

export default function SuggestPage() {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('sizeRecommendations');
  const [currentImage, setCurrentImage] = useState<string>('/suggest.png');

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  const handleSectionClick = (section: string) => {
    setActiveSection((prevSection) => (prevSection === section ? '' : section));
  };

  const handleImageClick = (image: string) => {
    setCurrentImage(image);
  };

  return (
    <main
      className="h-full flex items-center justify-center text-white"
      style={{ backgroundColor: '#161616' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-[3px] rounded-3xl bg-gradient-to-r from-black to-stone-500">
          <div className="bg-[#161616] rounded-3xl p-8 flex flex-col md:flex-row items-center min-h-[650px]">
            {/* Left Section */}
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 fixed-width-container">
              <div className="text-xl text-neutral-400 mb-2">Step 3</div>
              <h2 className="text-5xl mb-4">Suggest</h2>
              <p className="text-xl text-emerald-300 mt-2">
                Get real-time recommendations as you browse
              </p>
              <br />

              {/* Clickable Headings with Conditional Bullet Points */}
              {/* Size Recommendations */}
              <div
                className={`mb-4 cursor-pointer flex items-center ${
                  activeSection === 'sizeRecommendations' ? 'text-white' : 'text-zinc-700'
                }`}
                onClick={() => handleSectionClick('sizeRecommendations')}
              >
                <span
                  className={`triangle mr-2 ${
                    activeSection === 'sizeRecommendations' ? 'triangle-down' : ''
                  }`}
                ></span>
                <span>Size recommendations across brands</span>
              </div>
              {activeSection === 'sizeRecommendations' && (
                <p className="text-neutral-500 mb-4 blend-in">
                  Receive ideal size recommendations based on the AI-powered measurements through real-time notifications.
                </p>
              )}

              {/* Material Details */}
              <div
                className={`mb-4 cursor-pointer flex items-center ${
                  activeSection === 'materialDetails' ? 'text-white' : 'text-zinc-700'
                }`}
                onClick={() => handleSectionClick('materialDetails')}
              >
                <span
                  className={`triangle mr-2 ${
                    activeSection === 'materialDetails' ? 'triangle-down' : ''
                  }`}
                ></span>
                <span>Material details and high definition renders</span>
              </div>
              {activeSection === 'materialDetails' && (
                <p className="text-neutral-500 mb-4 blend-in">
                  Get detailed information about material, quality, fit and view it in a high-definition 360 movable realistic render.
                </p>
              )}

              {/* Related Products */}
              <div
                className={`mb-4 cursor-pointer flex items-center ${
                  activeSection === 'relatedProducts' ? 'text-white' : 'text-zinc-700'
                }`}
                onClick={() => handleSectionClick('relatedProducts')}
              >
                <span
                  className={`triangle mr-2 ${
                    activeSection === 'relatedProducts' ? 'triangle-down' : ''
                  }`}
                ></span>
                <span>Related product assistance</span>
              </div>
              {activeSection === 'relatedProducts' && (
                <p className="text-neutral-500 mb-4 blend-in">
                  Find related products to build the perfect outfit within seconds using AI.
                </p>
              )}
            </div>

            {/* Right Section */}
            <div className="md:w-full flex justify-center relative ml-40 image-container">
              {/* Image Container */}
              <div className="flex">
                {/* Render suggest.png when the section is sizeRecommendations */}
                {activeSection === 'sizeRecommendations' && (
                  <div>
                    <Image
                      src="/suggest.png"
                      alt="Clothing item"
                      width={400}
                      height={400}
                      className="rounded-lg"
                    />
                  </div>
                )}

                {/* Render suggest2text.png when the section is materialDetails */}
                {activeSection === 'materialDetails' && (
                  <div className="relative ml-4">
                    <div
                      className="absolute bg-gradient-to-r from-cyan-400 to-transparent opacity-20 blur-2xl"
                      style={{
                        width: '100%',
                        height: '40%',
                        top: '30%',
                        left: '1%',
                        zIndex: 19, // Lower zIndex to ensure it is behind the image
                      }}
                    />
                    <Image
                      src="/suggest2text.png"
                      alt="Additional background"
                      width={500}
                      height={450}
                      className="background-image"
                      style={{
                        position: 'relative', // Ensure the image respects the zIndex stacking context
                        zIndex: 100, // Higher zIndex to ensure it is in front of the blur
                      }}
                    />
                  </div>
                )}

                {/* Render suggest.png and additional images when the section is relatedProducts */}
                {activeSection === 'relatedProducts' && (
                  <div className="relative">
                    <Image
                      src={currentImage}
                      alt="Clothing item"
                      width={400}
                      height={400}
                      className="rounded-lg"
                    />
                    <div className="absolute bottom-0 left-[40%] transform -translate-x-1/2 flex space-x-4 mb-4">
                      <Image
                        src="/white_suggest.png"
                        alt="White Suggest"
                        width={100}
                        height={100}
                        className="rounded-lg cursor-pointer"
                        onClick={() => handleImageClick('/white_tshirt_render.png')}
                      />
                      <Image
                        src="/black_suggest.png"
                        alt="Black Suggest"
                        width={100}
                        height={100}
                        className="rounded-lg cursor-pointer"
                        onClick={() => handleImageClick('/black_tshirt_render.png')}
                      />
                      <Image
                        src="/red_suggest.png"
                        alt="Red Suggest"
                        width={100}
                        height={100}
                        className="rounded-lg cursor-pointer"
                        onClick={() => handleImageClick('/red_tshirt_render.png')}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Size Bar */}
              {activeSection === 'sizeRecommendations' && (
                <div className="flex flex-col items-center mt-4 w-full absolute bottom-[10%] right-[5%]">
                  <div className="size-bar flex justify-center space-x-6 mt-6">
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
                        className={`relative w-14 h-14 flex items-center justify-center rounded-full text-sm cursor-pointer ${
                          selectedSize === size ? 'shine selected' : 'bg-gray-700'
                        } ${selectedSize === size ? (size === 'M' ? 'bg-teal-400' : 'bg-orange-700') : ''}`}
                      >
                        {selectedSize === size && (
                          <>
                            <span className="absolute inset-0 flex items-center justify-center">
                              <span
                                className={`absolute ${
                                  size === 'M' ? 'bg-teal-400' : 'bg-orange-700'
                                } w-20 h-20 opacity-50 rounded-full`}
                              ></span>
                              <span
                                className={`absolute ${
                                  size === 'M' ? 'bg-teal-400' : 'bg-orange-700'
                                } w-24 h-24 opacity-30 rounded-full`}
                              ></span>
                            </span>
                          </>
                        )}
                        <span
                          className={`relative ${
                            size === 'M' ? 'text-lg font-bold' : ''
                          }`}
                        >
                          {size}
                        </span>
                      </span>
                    ))}
                  </div>

                  {/* Size Recommendations */}
                  <div className="flex justify-center">
                    {selectedSize === 'L' && (
                      <div className="mt-4 text-red-500 text-center">
                        <p>
                          Sleeves might be long for you, loose around the chest ❌
                        </p>
                        <p>
                          We recommend you choose the size M instead for a perfect fit.
                        </p>
                      </div>
                    )}
                    {selectedSize === 'M' && (
                      <div className="mt-4 text-green-500 text-center">
                        <p>We recommend the size M for a perfect fit ✅</p>
                      </div>
                    )}
                    {selectedSize === 'S' && (
                      <div className="mt-4 text-red-500 text-center">
                        <p>
                          Sleeves might be short for you, tight around the chest ❌
                        </p>
                        <p>
                          We recommend you choose the size M instead for a perfect fit.
                        </p>
                      </div>
                    )}
                    {selectedSize === 'XL' && (
                      <div className="mt-4 text-red-500 text-center">
                        <p>
                          Sleeves might be long for you, tight around the chest ❌
                        </p>
                        <p>
                          We recommend you choose the size M instead for a perfect fit.
                        </p>
                      </div>
                    )}
                    {selectedSize === 'XS' && (
                      <div className="mt-4 text-red-500 text-center">
                        <p>
                          Sleeves might be short for you, tight around the chest ❌
                        </p>
                        <p>
                          We recommend you choose the size M instead for a perfect fit.
                        </p>
                      </div>
                    )}
                  </div>
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
        .fixed-width-container {
          width: 800px; /* Set a fixed width for the container */
        }
        .fixed-height-content-box {
          height: 800px; /* Set a fixed width for the container */
        }
        .selected::before,
        .selected::after {
          content: '';
          position: absolute;
          border-radius: 50%;
          opacity: 0.5;
        }
        .selected::before {
          width: 40px;
          height: 40px;
          background-color: rgba(0, 128, 128, 0.5); /* Adjust color and opacity */
          z-index: -1;
        }
        .selected::after {
          width: 60px;
          height: 60px;
          background-color: rgba(0, 128, 128, 0.3); /* Adjust color and opacity */
          z-index: -2;
        }

        /* Triangle Bullet Point */
        .triangle {
          width: 0;
          height: 0;
          border-left: 6px solid white;
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
          transform: rotate(0deg);
          margin-right: 0.5rem;
          transition: transform 0.3s ease;
        }

        /* Rotate triangle downward when active */
        .triangle-down {
          transform: rotate(90deg);
        }
      `}</style>
    </main>
  );
}
