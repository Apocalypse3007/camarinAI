"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three'; 
import Image from 'next/image';
import Header from './ui/header';

// Feature Box Component
type FeatureBoxProps = {
  title: string;
  caption: string;
  description: string;
  isActive: boolean;
  isInactive: boolean;
  onClick: () => void;
  position: string;
  gradient: string;
  children?: React.ReactNode;
};

const FeatureBox = ({
  title,
  caption,
  description,
  isActive,
  isInactive,
  onClick,
  position,
  gradient,
  children,
}: FeatureBoxProps) => (
  <div
    className={`absolute w-[38%] h-[48%] bg-opacity-80 backdrop-blur-md cursor-pointer transition-all duration-300 p-6 pr-24 overflow-visible rounded-3xl border-2 border-stone-500 border-b-black ${position} ${
      isActive ? 'scale-105' : 'opacity-30'
    }`}
    onClick={onClick}
    style={{
      background: isInactive ? '#161616' : gradient,
      zIndex: 20,
      margin: '6px', // Adjust the margin to move the boxes towards the center
      transform: isInactive ? 'translateX(-8px)' : 'none',
      backdropFilter: 'blur(10px)',
    }}
  >
    {/* Gradient Overlay */}
    {isActive && (
      <div
        className="absolute inset-0 rounded-3xl"
        style={{
          background: 'linear-gradient( rgba(16,185,129,0.1) 0%, rgba(6,182,212,0.3) 100%)',
          zIndex: -1,
        }}
      />
    )}
    {/* Text Content Container */}
    <div className="text-container w-full max-w-[70%]">
      <h3 className={`text-3xl mb-2 ${isInactive ? 'text-gray-500' : 'text-gray-300'}`}>{title}</h3>
      <p
        className={`text-xl tracking-[0.1em] py-2 ${
          isInactive ? 'text-gray-600' : 'text-emerald-300'
        }`}
      >
        {caption}
      </p>
      <p className={`text-md ${isInactive ? 'text-gray-700' : 'text-gray-300'}`}>{description}</p>
    </div>
    {children}
  </div>
);

// Fit Label Component
const FitLabel = ({
  text,
  position,
  className,
}: {
  text: React.ReactNode;
  position: string;
  className?: string;
}) => (
  <div className={`absolute ${position} z-30 ${className || ''}`}>
    <div className="p-[2px] rounded-3xl bg-gradient-to-r from-[#7777] to-[#7777]">
      <div className="text-white text-lg px-5 py-2 rounded-3xl bg-gradient-to-r from-[rgba(38,38,38,0.3)] to-[rgba(24,24,27,0.3)] backdrop-blur-lg backdrop-filter backdrop-blur-md bg-opacity-30">
        {text}
      </div>
    </div>
  </div>
);

export { FitLabel };

interface Feature2Props {
  onContactClick: () => void; // Receive the contact click handler as a prop
}
// Main Component
export default function VirtualTryOn({ onContactClick }: Feature2Props) {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [selectedTop, setSelectedTop] = useState<string | null>(null);
  const [selectedBottom, setSelectedBottom] = useState<string | null>('green'); // Initialized to 'green'
  const [imageSrc, setImageSrc] = useState('/page3_image1.png'); // Matches 'green' shorts
  const [avatarOutfit, setAvatarOutfit] = useState<string>('green'); // Matches 'green' shorts

  // State for managing image transitions
  const [prevImage, setPrevImage] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  useEffect(() => {
    // Determine the new image and outfit based on selections
    if (selectedTop === 'red' && selectedBottom === 'black') {
      triggerImageChange('/redtshirt_blackshorts.png');
      setAvatarOutfit('red_black');
    } else if (selectedTop === 'red' && selectedBottom === 'green') {
      triggerImageChange('/page3_image2.png');
      setAvatarOutfit('red');
    } else if (selectedTop === 'white' && selectedBottom === 'black') {
      triggerImageChange('/page3_image3.png');
      setAvatarOutfit('black');
    } else if (selectedTop === 'white' && selectedBottom === 'green') {
      triggerImageChange('/page3_image1.png');
      setAvatarOutfit('green');
    } else if (selectedTop === 'red' && selectedBottom === null) {
      triggerImageChange('/page3_image2.png');
      setAvatarOutfit('red');
    } else {
      triggerImageChange('/page3_image1.png'); // Default state
      setAvatarOutfit('default');
    }
  }, [selectedTop, selectedBottom]);

  // Function to handle image change with transition
  const triggerImageChange = (newSrc: string) => {
    if (newSrc === imageSrc) return; // No change needed

    setPrevImage(imageSrc); // Set the previous image for fade-out
    setImageSrc(newSrc); // Update to the new image
    setIsTransitioning(true); // Start transition

    // After transition duration, remove the previous image
    setTimeout(() => {
      setPrevImage(null);
      setIsTransitioning(false);
    }, 500); // Duration should match the CSS transition duration
  };

  // Derive shortsImage from imageSrc
  const shortsImage = (() => {
    switch (imageSrc) {
      case '/page3_image1.png':
      case '/page3_image2.png':
        return '/black_short.png';
      case '/page3_image3.png':
      case '/redtshirt_blackshorts.png':
        return '/green_shorts.png';
      default:
        return '/black_short.png'; // Default to green shorts
    }
  })();

  // Derive topImage from selectedTop
  const topImage = selectedTop === 'red' ? '/white_tshirt.png' : '/red_tshirt.png';

  // Fixed container dimensions
  const containerWidth = 550; // Adjust as needed
  const containerHeight = 700; // Adjust as needed

  const features = [
    {
      title: 'Check Fitting with Each Size',
      caption: 'Enhance engagement with interactive try on',
      description:
        'Offer live and virtual try-ons with personalized avatars, allowing customers to visualize individual clothing items and accessories or curate unique outfits effortlessly.',
      position: 'top-0 left-0',
      gradient: 'linear-gradient(315deg, rgba(0,128,128,0.6) 0%, rgba(0,0,0,0.6) 100%)',
    },
    {
      title: 'Real-Time Try-On',
      caption: 'Enhance engagement with interactive try on',
      description:
        'Offer live and virtual try-ons with personalized avatars, allowing customers to visualize individual clothing items and accessories or curate unique outfits effortlessly.',
      position: 'top-0 right-0',
      gradient: 'linear-gradient(315deg, rgba(0,128,128,0.6) 0%, rgba(0,0,0,0.6) 100%)',
    },
    {
      title: 'High-Fidelity Avatars',
      caption: 'Enhance engagement with interactive try on',
      description:
        'Offer live and virtual try-ons with personalized avatars, allowing customers to visualize individual clothing items and accessories or curate unique outfits effortlessly.',
      position: 'bottom-0 left-0',
      gradient: 'linear-gradient(315deg, rgba(0,0,0,0) 0%, rgba(0,128,128,0.6) 100%)',
    },
    {
      title: 'Create outfit combinations',
      caption: 'Enhance engagement with interactive try on',
      description:
        'Offer live and virtual try-ons with personalized avatars, allowing customers to visualize individual clothing items and accessories or curate unique outfits effortlessly.',
      position: 'bottom-0 right-0',
      gradient: 'linear-gradient(315deg, rgba(0,128,128,0.6) 0%, rgba(0,0,0,0.6) 100%)',
    },
  ];

  const handleFeatureClick = (index: number) => {
    setActiveFeature(index === activeFeature ? null : index);
    // Reset selections if a different feature is clicked
    if (index !== 1 && index !== 3) {
      setSelectedTop(null);
      setSelectedBottom('green'); // Reset to default
    }
  };

  const handleRedTshirtClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the FeatureBox onClick
    setSelectedTop((prev) => (prev === 'red' ? 'white' : 'red'));
    // Toggling top selection: clicking again swaps to white t-shirt
  };

  const handleBlackShortClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the FeatureBox onClick

    // Toggle bottom between 'black' and 'green'
    setSelectedBottom((prev) => (prev === 'black' ? 'green' : 'black'));
  };

  return (
    <div className="min-h-screen w-full bg-[#161616] text-white">
      <Header onContactClick={onContactClick} />
      <main className="relative h-screen w-full flex flex-col items-center justify-center p-8">
        <div className="text-center mb-8">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-6 text-center">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-2 h-2 bg-emerald-300 rounded-3xl mr-2 shine"></div>
              <span className="text-emerald-300 text-sm">Your digital changing room</span>
            </div>
            </div>
          <h2 className="text-4xl font-bold mb-4">Virtual Try-On</h2>
          <p className="max-w-xl mx-auto text-gray-400">
            Offer live and virtual try-ons with personalized avatars, allowing customers to visualize individual clothing
            items and accessories or curate unique outfits effortlessly.
          </p>
        </div>

        <div className="relative w-full h-[600px]">
          {/* Fixed Container for the Model Image */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 15 }}>
            <div
              className="relative"
              style={{
                width: `${containerWidth}px`,
                height: `${containerHeight}px`,
                backgroundColor: 'transparent', // Ensure the background is transparent
              }}
            >
              <div
                className="absolute bg-gradient-to-r from-cyan-400 to-transparent opacity-20 blur-2xl"
                style={{
                  width: '100%',
                  height: '40%',
                  top: '30%', 
                  left: '15%', 
                  zIndex: 19, 
                }}
              />

              {/* Previous Image for Fade-Out */}
              {prevImage && (
                <Image
                  src={prevImage}
                  alt="Previous Outfit"
                  fill
                  style={{ objectFit: 'contain', zIndex: 10, width: '100%', height: '100%' }}
                  className="object-contain absolute transition-opacity duration-500 opacity-0"
                />
              )}

              {/* Current Image with Fade-In */}
              <Image
                src={imageSrc}
                alt="Outfit"
                fill
                style={{ objectFit: 'contain', zIndex: 20, width: '100%', height: '100%' }}
                className={`object-contain absolute transition-opacity duration-500 ${
                  isTransitioning ? 'opacity-0' : 'opacity-100'
                }`}
              />
            </div>
          </div>

          {/* Feature Boxes */}
          {features.map((feature, index) => (
            <FeatureBox
              key={index}
              title={feature.title}
              caption={feature.caption}
              description={feature.description}
              isActive={activeFeature === index}
              isInactive={activeFeature !== null && activeFeature !== index}
              onClick={() => handleFeatureClick(index)}
              position={feature.position}
              gradient={feature.gradient}
            >
              {index === 1 && activeFeature === index && (
                <div className="relative">
                  <div
                    className="absolute bg-gradient-to-r from-cyan-400 to-transparent opacity-20 blur-2xl"
                    style={{
                      width: '100%',
                      height: '40%',
                      top: '30%', 
                      left: '15%', 
                      zIndex: 19, 
                    }}
                  />
                  <Image
                    src={topImage}
                    alt={selectedTop === 'red' ? 'Red T-Shirt' : 'White T-Shirt'}
                    width={200}
                    height={250}
                    className="object-contain cursor-pointer absolute transition-transform duration-300 transform hover:scale-105"
                    style={{
                      right: '-150px',
                      top: '-200px',
                      zIndex: 30,
                    }}
                    onClick={handleRedTshirtClick}
                  />
                  <div
                    className="absolute w-full h-full bg-cyan-300 opacity-50 blur-lg"
                    style={{
                      right: '-170px',
                      top: '-200px',
                      zIndex: 29,
                    }}
                  />
                </div>
              )}
              {index === 3 && activeFeature === index && (
                  <div className="relative">
                    <div
                      className="absolute bg-gradient-to-r from-cyan-400 to-transparent opacity-80 blur-2xl"
                      style={{
                        width: '100%',
                        height: '40%',
                        top: '100%', 
                        left: '75%', 
                        zIndex: 19, 
                      }}
                    />
                    <Image
                      src={shortsImage}
                      alt={selectedBottom === 'black' ? 'Black Shorts' : 'Green Shorts'}
                      width={200}
                      height={250}
                      className="object-contain cursor-pointer absolute transition-transform duration-300 transform hover:scale-105"
                      style={{
                        right: '-160px',
                        top: '-220px',
                        zIndex: 30,
                      }}
                      onClick={handleBlackShortClick}
                    />
                    <div
                      className="absolute w-full h-full bg-cyan-300 opacity-50 blur-lg"
                      style={{
                        right: '-160px',
                        top: '-220px',
                        zIndex: 29,
                      }}
                    />
                  </div>
                )}
            </FeatureBox> 
          ))}

          {/* Fit Labels for the First Feature */}
          {activeFeature === 0 && (
            <>
              <FitLabel
                text={<><span className="text-teal-400">Good fit</span> around the chest ✅</>}
                position="top-[18%] right-[31.5%]"
              />
              <FitLabel
                text={<><span className="text-teal-400">Good fit</span> around the waist ✅</>}
                position="bottom-[48%] left-[32%]"
              />
              <FitLabel
                text={<>Length is <span className="text-orange-700">short</span> ❌</>}
                position="bottom-[55%] right-[36.5%]"
              />
            </>
          )}
        </div>
        <style jsx>{`

        .feature-box::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px; /* Adjust the height of the border */
          background: linear-gradient(to right, black, #78716c); /* Gradient from black to stone-500 */
          border-radius: 0 0 1.5rem 1.5rem; /* Match the border radius of the box */
        }
`}</style>
      </main>
    </div>
  );
}