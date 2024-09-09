"use client";

import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Image from 'next/image';

const AvatarModel = ({ outfit }: { outfit: string }) => (
  <mesh>
    <boxGeometry args={[1, 2, 0.5]} />
    <meshStandardMaterial color={outfit} />
  </mesh>
);

type FeatureBoxProps = {
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
  position: string;
  gradient: string;
};

const FeatureBox = ({ title, description, isActive, onClick, position, gradient }: FeatureBoxProps) => (
  <div 
    className={`absolute w-[45%] h-1/3 bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-lg p-4 cursor-pointer transition-all duration-300 ${position} ${isActive ? 'border-2 border-teal-500 scale-105' : 'opacity-50'}`}
    onClick={onClick}
    style={{ background: gradient, zIndex: 20 }}
  >
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-sm text-gray-300">{description}</p>
    {isActive && (
      <div className="absolute bottom-4 right-4 bg-teal-500 text-white px-3 py-1 rounded-full text-xs">
        Active
      </div>
    )}
  </div>
);

const FitLabel = ({ text, color, position }: { text: string; color: string; position: string }) => (
  <div className={`absolute ${position} ${color} text-white px-3 py-1 rounded-full text-sm z-30`}>
    {text}
  </div>
);

export default function VirtualTryOn() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [outfit, setOutfit] = useState('white');

  const features = [
    { title: "Check Fitting with Each Size", description: "Enhance engagement with interactive try on", position: "top-0 left-0", gradient: "linear-gradient(135deg, rgba(0,128,128,0.6) 0%, rgba(0,0,0,0) 100%)" },
    { title: "Real-Time Try-On", description: "Visualize individual clothing items and accessories", position: "top-0 right-0", gradient: "linear-gradient(225deg, rgba(0,128,128,0.6) 0%, rgba(0,0,0,0) 100%)" },
    { title: "High-Fidelity Avatars", description: "Create personalized avatars for accurate representation", position: "bottom-0 left-0", gradient: "linear-gradient(45deg, rgba(0,128,128,0.6) 0%, rgba(0,0,0,0) 100%)" },
    { title: "Create outfit combinations", description: "Mix and match to create unique looks", position: "bottom-0 right-0", gradient: "linear-gradient(315deg, rgba(0,128,128,0.6) 0%, rgba(0,0,0,0) 100%)" }
  ];

  const handleFeatureClick = (index: number) => {
    setActiveFeature(index === activeFeature ? null : index);
    setOutfit([index]);
  };

  return (
    <div className="min-h-screen w-full bg-[#212121] text-white">
      <main className="relative h-screen w-full flex flex-col items-center justify-center p-8">
        <div className="text-center mb-8">
          <div className="inline-block px-2 py-1 bg-teal-500 bg-opacity-20 text-teal-300 text-sm rounded-full mb-2">
            Your digital changing room
          </div>
          <h2 className="text-4xl font-bold mb-4">Virtual Try-On</h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Offer live and virtual try-ons with personalized avatars, allowing
            customers to visualize individual clothing items and accessories or curate
            unique outfits effortlessly.
          </p>
        </div>

        <div className="relative w-full h-[600px]">
          <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 15 }}>
            <Image
              src="/page3_image1.png" 
              alt="Outfit"
              width={300}
              height={500}
              className="object-contain"
            />
          </div>

          <Canvas className="absolute inset-0" style={{ zIndex: 10 }}>
            <OrbitControls />
            <ambientLight intensity={0.5} />
            <AvatarModel outfit={outfit} />
          </Canvas>

          {features.map((feature, index) => (
            <FeatureBox
              key={index}
              title={feature.title}
              description={feature.description}
              isActive={activeFeature === index}
              onClick={() => handleFeatureClick(index)}
              position={feature.position}
              gradient={feature.gradient}
            />
          ))}

          <FitLabel text="Good fit around the chest" color="bg-green-500" position="top-1/4 left-1/4" />
          <FitLabel text="Good fit around the waist" color="bg-green-500" position="bottom-1/3 left-1/4" />
          <FitLabel text="Length is short" color="bg-red-500" position="bottom-1/4 right-1/4" />
        </div>
      </main>
    </div>
  );
}