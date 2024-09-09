"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@components/ui/card';
import Header from './ui/header';

const Model = ({ outfit }: { outfit: string }) => {
  return (
    <div className="w-full h-auto">
      <img src={outfit} alt="Outfit" className="w-full h-auto" />
    </div>
  );
};

interface ButtonProps {
  className?: string;
  variant?: 'outline' | 'solid';
  onClick?: () => void;
  children: React.ReactNode;
}

const Button = ({ className, variant = 'solid', onClick, children }: ButtonProps) => {
  const baseClasses = 'px-4 py-2 rounded';
  const variantClasses = variant === 'outline' ? 'border border-white text-white' : 'bg-white text-black';
  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default function Feature2() {
  const [currentOutfit, setCurrentOutfit] = useState('default');

  const features = [
    { title: 'Check Fitting with Each Size', description: 'Offer live and virtual try-ons with personalized avatars, allowing customers to visualize individual clothing items and accessories or curate unique outfits effortlessly.' },
    { title: 'Real-Time Try-On', description: 'Visualize individual clothing items and accessories' },
    { title: 'Create outfit combinations', description: 'Mix and match to create unique looks' },
    { title: 'Personalized Recommendations', description: 'Get style suggestions based on preferences' }
  ];

    return (
    <div className="min-h-screen" style={{ backgroundColor: '#212121', color: 'white' }}> 
      <main className="relative h-screen flex flex-col items-center justify-center p-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Virtual Try-On</h2>
          <p className="max-w-md mx-auto">
            Experience the future of shopping with our virtual try-on feature. See how clothes fit and look on you before making a purchase.
          </p>
        </div>
  
        <div className="flex flex-col items-center justify-center mb-16">
          <Model outfit={currentOutfit} />
          <div className="absolute top-1/4 left-1/4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
            Good fit around the chest
          </div>
          <div className="absolute bottom-1/4 left-1/4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
            Good fit around the waist
          </div>
          <div className="absolute bottom-1/4 right-1/4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
            Length is short
          </div>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-20">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="w- h-72 bg-gray-800/80 border-gray-700 backdrop-blur-sm"
            >
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
                <Button 
                  variant="outline"
                  onClick={() => setCurrentOutfit(feature.title.toLowerCase().replace(' ', '-'))}
                >
                  Try it
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}