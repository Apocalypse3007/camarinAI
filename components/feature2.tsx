"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three'; // Import THREE for color manipulation
import Image from 'next/image';
import Header2 from './ui/header2';

// Avatar Model Component with Smooth Color Transition
const AvatarModel = ({ outfit }) => {
  // Define color mapping
  const colorMap = {
    'default': '#161616',
    'red': '#161616',
    'black': '#161616',
    'red_black': '#161616', // Red T-shirt + Black shorts
    'red_green': '#161616', // Red T-shirt + Green shorts
    'green': '#161616',     // Green shorts only
  };

  // Refs for current and target colors
  const materialRef = useRef();
  const [currentColor] = useState(new THREE.Color(colorMap['default']));
  const [targetColor, setTargetColor] = useState(new THREE.Color(colorMap[outfit] || colorMap['default']));

  useEffect(() => {
    setTargetColor(new THREE.Color(colorMap[outfit] || colorMap['default']));
  }, [outfit]);

  useFrame(() => {
    if (materialRef.current) {
      materialRef.current.color.lerp(targetColor, 0.1); // Adjust the lerp factor for speed
    }
  });

  return (
    <mesh>
      <boxGeometry args={[1, 2, 0.5]} />
      <meshStandardMaterial ref={materialRef} color={currentColor} />
    </mesh>
  );
};

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
    className={`absolute w-2/5 h-72 rounded-3xl bg-opacity-80 backdrop-blur-md cursor-pointer transition-all duration-300 p-6 pr-24 overflow-visible ${position} ${
      isActive ? 'scale-105' : 'opacity-50'
    }`}
    onClick={onClick}
    style={{
      background: isInactive ? '#161616' : gradient,
      zIndex: 20,
      borderRadius: '24px',
      margin: '4px',
      transform: isInactive ? 'translateX(-8px)' : 'none',
      border: isInactive ? '2px solid transparent' : 'none',
      backgroundClip: isInactive ? 'padding-box, border-box' : undefined,
      borderImage: isInactive
        ? 'linear-gradient(to right, #3f3f46, #27272a) 1'
        : 'none',
      borderImageSlice: 1,
    }}
  >
    {/* Text Content Container */}
    <div className="text-container w-full max-w-[70%]">
      <h3 className={`text-3xl font-bold mb-2 ${isInactive ? 'text-gray-500' : 'text-white'}`}>{title}</h3>
      <p className={`text-lg py-2 ${isInactive ? 'text-gray-500' : 'text-emerald-300'}`}>{caption}</p>
      <p className={`text-sm ${isInactive ? 'text-gray-500' : 'text-gray-300'}`}>{description}</p>
    </div>
    {children}
  </div>
);

// Fit Label Component
const FitLabel = ({ text, position }: { text: string; position: string }) => (
  <div className={`absolute ${position} text-white px-3 py-1 rounded-full text-sm z-30 backdrop-blur-3xl`}>
    {text}
  </div>
);

// Main Component
export default function VirtualTryOn() {
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
    } else if (selectedTop === null && selectedBottom === 'black') {
      triggerImageChange('/page3_image3.png');
      setAvatarOutfit('black');
    } else if (selectedTop === null && selectedBottom === 'green') {
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

  // Fixed container dimensions
  const containerWidth = 450; // Adjust as needed
  const containerHeight = 700; // Adjust as needed

  const features = [
    {
      title: 'Check Fitting with Each Size',
      caption: 'Enhance engagement with interactive try on',
      description:
        'Offer live and virtual try-ons with personalized avatars, allowing customers to visualize individual clothing items and accessories or curate unique outfits effortlessly.',
      position: 'top-0 left-0',
      gradient: 'linear-gradient(135deg, rgba(0,128,128,0.6) 0%, rgba(0,0,0,0) 100%)',
    },
    {
      title: 'Real-Time Try-On',
      caption: 'Enhance engagement with interactive try on',
      description:
        'Offer live and virtual try-ons with personalized avatars, allowing customers to visualize individual clothing items and accessories or curate unique outfits effortlessly.',
      position: 'top-0 right-0',
      gradient: 'linear-gradient(225deg, rgba(0,128,128,0.6) 0%, rgba(0,0,0,0) 100%)',
    },
    {
      title: 'High-Fidelity Avatars',
      caption: 'Enhance engagement with interactive try on',
      description:
        'Offer live and virtual try-ons with personalized avatars, allowing customers to visualize individual clothing items and accessories or curate unique outfits effortlessly.',
      position: 'bottom-0 left-0',
      gradient: 'linear-gradient(45deg, rgba(0,128,128,0.6) 0%, rgba(0,0,0,0) 100%)',
    },
    {
      title: 'Create outfit combinations',
      caption: 'Enhance engagement with interactive try on',
      description:
        'Offer live and virtual try-ons with personalized avatars, allowing customers to visualize individual clothing items and accessories or curate unique outfits effortlessly.',
      position: 'bottom-0 right-0',
      gradient: 'linear-gradient(315deg, rgba(0,128,128,0.6) 0%, rgba(0,0,0,0) 100%)',
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
    setSelectedTop((prev) => (prev === 'red' ? null : 'red'));
    // Toggling top selection: clicking again deselects the top
  };

  const handleBlackShortClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the FeatureBox onClick

    // Toggle bottom between 'black' and 'green'
    setSelectedBottom((prev) => (prev === 'black' ? 'green' : 'black'));
  };

  return (
    <div className="min-h-screen w-full bg-[#161616] text-white">
      <Header2 />
      <main className="relative h-screen w-full flex flex-col items-center justify-center p-8">
        <div className="text-center mb-8">
          <div className="inline-block px-2 py-1 bg-teal-500 bg-opacity-20 text-teal-300 text-sm rounded-full mb-2">
            Your digital changing room
          </div>
          <h2 className="text-4xl font-bold mb-4">Virtual Try-On</h2>
          <p className="max-w-2xl mx-auto text-gray-400">
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
              {/* Previous Image for Fade-Out */}
              {prevImage && (
                <Image
                  src={prevImage}
                  alt="Previous Outfit"
                  fill
                  style={{ objectFit: 'contain', zIndex: 10 }}
                  className="object-contain absolute transition-opacity duration-500 opacity-0"
                />
              )}

              {/* Current Image with Fade-In */}
              <Image
                src={imageSrc}
                alt="Outfit"
                fill
                style={{ objectFit: 'contain', zIndex: 20 }}
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
                  <Image
                    src="/red_tshirt.png"
                    alt="Red T-Shirt"
                    width={200}
                    height={250}
                    className="object-contain cursor-pointer absolute transition-transform duration-300 transform hover:scale-105"
                    style={{
                      right: '-170px',
                      top: '-130px',
                      zIndex: 30,
                    }}
                    onClick={handleRedTshirtClick}
                  />
                </div>
              )}
              {index === 3 && activeFeature === index && (
                <div className="relative">
                  <Image
                    src={shortsImage}
                    alt={
                      selectedBottom === 'black' ? 'Black Shorts' : 'Green Shorts'
                    }
                    width={200}
                    height={250}
                    className="object-contain cursor-pointer absolute transition-transform duration-300 transform hover:scale-105"
                    style={{
                      right: '-170px',
                      top: '-130px',
                      zIndex: 30,
                    }}
                    onClick={handleBlackShortClick}
                  />
                </div>
              )}
            </FeatureBox>
          ))}

          {/* Fit Labels for the First Feature */}
          {activeFeature === 0 && (
            <>
              <FitLabel
                text="Good fit around the chest ✅"
                position="top-1/4 right-1/3"
              />
              <FitLabel
                text="Good fit around the waist ✅"
                position="bottom-2/4 left-1/3"
              />
              <FitLabel
                text="Length is short ❌"
                position="bottom-1/2 right-1/3"
              />
            </>
          )}
        </div>
      </main>
    </div>
  );
}
