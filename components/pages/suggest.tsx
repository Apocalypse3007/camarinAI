"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

export default function SuggestPage() {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('sizeRecommendations');

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  const Model = () => {
    const { scene } = useGLTF('/suggestmodel.glb');
    return <primitive object={scene} scale={12} />; // Increased scale
  };

  return (
    <main className="h-full flex items-center justify-center text-white" style={{ backgroundColor: '#161616' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-[3px] rounded-3xl bg-gradient-to-r from-black to-stone-500">
          <div className="bg-[#161616] rounded-3xl p-8 flex flex-col md:flex-row items-center min-h-[600px]">
            {/* Left Section */}
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 fixed-width-container">
              <div className="text-xl text-neutral-400 mb-2">Step 3</div>
              <h2 className="text-5xl mb-4">Suggest</h2>
              <p className="text-xl text-emerald-300 mt-2">Get real-time recommendations as you browse</p>
              <br />

              {/* Clickable Headings with Conditional Bullet Points */}
              <div
                className={`mb-4 cursor-pointer flex items-center ${
                  activeSection === 'sizeRecommendations' ? 'text-white' : 'text-zinc-700'
                }`}
                onClick={() => handleSectionClick('sizeRecommendations')}
              >
                {activeSection === 'sizeRecommendations' && (
                  <span className="inline-block w-3 h-3 bg-white rounded-full mr-2"></span>
                )}
                <span>Size recommendations across brands</span>
              </div>
              {activeSection === 'sizeRecommendations' && (
                <p className="text-neutral-400 mb-4 blend-in">
                  Receive ideal size recommendations based on the AI-powered measurements through real-time notifications.
                </p>
              )}

              <div
                className={`mb-4 cursor-pointer flex items-center ${
                  activeSection === 'materialDetails' ? 'text-white' : 'text-zinc-700'
                }`}
                onClick={() => handleSectionClick('materialDetails')}
              >
                {activeSection === 'materialDetails' && (
                  <span className="inline-block w-3 h-3 bg-white rounded-full mr-2"></span>
                )}
                <span>Material details and high definition renders</span>
              </div>
              {activeSection === 'materialDetails' && (
                <p className="text-neutral-400 mb-4 blend-in">
                  Get detailed information about material, quality, fit and view it in a high-definition 360 movable realistic render.
                </p>
              )}

              <div
                className={`mb-4 cursor-pointer flex items-center ${
                  activeSection === 'relatedProducts' ? 'text-white' : 'text-zinc-700'
                }`}
                onClick={() => handleSectionClick('relatedProducts')}
              >
                {activeSection === 'relatedProducts' && (
                  <span className="inline-block w-3 h-3 bg-white rounded-full mr-2"></span>
                )}
                <span>Related product assistance</span>
              </div>
              {activeSection === 'relatedProducts' && (
                <p className="text-neutral-400 mb-4 blend-in">
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
                      width={300}
                      height={400}
                      className="rounded-lg"
                    />
                  </div>
                )}

                {/* Render suggest2text.png when the section is materialDetails */}
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

                {/* Render 3D model when the section is relatedProducts */}
                {activeSection === 'relatedProducts' && (
                  <div className="w-full h-full">
                    <Canvas camera={{ position: [0, 0, 20] }}>
                      <ambientLight intensity={1} />
                      <directionalLight position={[5, 5, 5]} intensity={1} />
                      <directionalLight position={[-5, -5, -5]} intensity={0.5} />
                      <Model />
                      <OrbitControls />
                    </Canvas>
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
                        className={`w-10 h-10 flex items-center justify-center rounded-full text-sm cursor-pointer ${
                          selectedSize === size
                            ? selectedSize === 'M'
                              ? 'bg-teal-400 shine'
                              : 'bg-orange-700'
                            : 'bg-gray-700'
                        }`}
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                  {/* Size Recommendations */}
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
        .fixed-width-container {
          width: 800px; /* Set a fixed width for the container */
        }
        .fixed-height-content-box {
          height: 800px; /* Set a fixed width for the container */
        }
        .shine {
          box-shadow: 0 0 20px rgba(0, 255, 0, 1);
        }
      `}</style>
    </main>
  );
}