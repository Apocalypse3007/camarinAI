"use client";

import { useState } from "react";
import Header from "./ui/header2";

const products = [
  { id: 1, name: "Product 1", image: "/page3_smallbag.spng?height=200&width=200" },
  { id: 2, name: "Product 2", image: "/page3_bigbag.png?height=200&width=200" },
  { id: 3, name: "Product 3", image: "/page3_smallbag.png?height=200&width=200" },
];

export default function Component() {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    setRotation((prev) => (prev + deltaX * 0.5 + 360) % 360);
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="min-h-screen bg-[#161616] text-white">
      <Header />

      <main className="container mx-auto px-4 py-16 text-center">
        <p className="text-teal-400 mb-4">Bring your product to life</p>
        <h1 className="text-5xl font-bold mb-6">Digitised Catalogue</h1>
        <p className="max-w-2xl mx-auto mb-12">
          Offer live and virtual try-ons with personalized avatars, allowing
          customers to visualize individual clothing items and accessories or curate
          unique outfits effortlessly.
        </p>

        <div className="relative bg-[#161616] rounded-3xl p-8 max-w-4xl mx-auto">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-black to-stone-500 p-[2px]">
            <div className="w-full h-full bg-[#161616] rounded-3xl"></div>
          </div>
          <h2 className="text-3xl font-bold mb-4 relative">Boost Engagement and Satisfaction</h2>
          <p className="text-teal-400 text-xl mb-6 relative">Improved Discovery and Customer Experience</p>
          <p className="mb-12 relative">
            By digitizing your store's catalogue, we boost customer engagement, satisfaction,
            and product discovery, ensuring your customers get exactly what they expect from
            your products.      
          </p>

          <div
            className="relative w-full h-[600px] overflow-hidden cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1000px] h-[1000px] bg-white rounded-full transition-transform duration-100 ease-out"
              style={{ transform: `translateX(-50%) rotate(${rotation}deg)` }}
            >
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="absolute top-0 left-1/2 w-1/4 h-1/4 -mt-12 -ml-12 flex justify-center items-center"
                  style={{
                    transform: `
                      rotate(${index * 120}deg)
                      translateY(-300px)
                      rotate(-${rotation}deg)
                    `,
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-400">Drag the disc to rotate and explore products</p>
        </div>
      </main>
      <style jsx global>{`
        body, html {
          background-color: #161616;
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
        }
      `}</style>
    </div>
  );
}