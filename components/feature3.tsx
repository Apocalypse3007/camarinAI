"use client";

import { useState, useRef } from "react";
import Header from "./ui/header";

interface Feature3Props {
  onContactClick: () => void; // Receive the contact click handler as a prop
}
export default function Component({ onContactClick }: Feature3Props): JSX.Element {
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
    setRotation((prevRotation) => (prevRotation + deltaX * 0.2) % 360);
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const contactRef = useRef<HTMLDivElement>(null);

  const handleContactClick = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const discObjects = [
    {
      angle: 0,
      distance: 350, // Adjusted distance to accommodate larger embeds
      embedSrc:
        "https://embed.360-javascriptviewer.com?presentation=eyJzcGVlZCI6ODAsImluZXJ0aWEiOjIwLCJzdG9wQXRFZGdlcyI6ZmFsc2UsImRlZmF1bHRQcm9ncmVzc0JhciI6dHJ1ZSwibWFpbkltYWdlVXJsIjoiaHR0cHM6Ly9hcGkuY2FtYXJpbi5haS9wcm9kdWN0cy9kdW1teV9pZDAwMy9mcmFtZV8wMDAuanBnIiwiaW1hZ2VVcmxGb3JtYXQiOiJmcmFtZV94eHguanBnIiwidG90YWxGcmFtZXMiOjEwMCwic3RhcnRGcmFtZU5vIjoxLCJsaWNlbnNlIjoiNHVtenVkbXltbzY9PTIwMjQvMDkvMTctLWNhbWFyaW4uYWkifQ==",
      alt: "Product 1",
    },
    {
      angle: 72,
      distance: 350,
      embedSrc:
        "https://embed.360-javascriptviewer.com?presentation=eyJzcGVlZCI6ODAsImluZXJ0aWEiOjIwLCJzdG9wQXRFZGdlcyI6ZmFsc2UsImRlZmF1bHRQcm9ncmVzc0JhciI6dHJ1ZSwibWFpbkltYWdlVXJsIjoiaHR0cHM6Ly9hcGkuY2FtYXJpbi5haS9wcm9kdWN0cy9kdW1teV9pZDAwMi9mcmFtZV8wMDAuanBnIiwiaW1hZ2VVcmxGb3JtYXQiOiJmcmFtZV94eHguanBnIiwidG90YWxGcmFtZXMiOjEwOCwic3RhcnRGcmFtZU5vIjowLCJsaWNlbnNlIjoiNXNreHNia3drbWdnZzU9PTIwMjQvMDkvMjMtLXd3dy5jYW1hcmluLmFpIiwiYXV0b1JvdGF0ZSI6MCwiYXV0b1JvdGF0ZVNwZWVkIjowLCJhdXRvUm90YXRlUmV2ZXJzZSI6ZmFsc2UsInpvb20iOnRydWUsInpvb21NYXgiOjIsInpvb21XaGVlbFNwZWVkIjoyMn0=",
      alt: "Product 2",
    },
    {
      angle: 144,
      distance: 350,
      embedSrc:
        "https://api.cappasity.com/api/player/0704fe3f-0928-47de-bbea-e110e74d7f49/embedded?arbutton=0&autorun=1&closebutton=0&logo=0&analytics=1&uipadx=0&uipady=0&enablestoreurl=0&storeurl=&hidehints=1&language=&autorotate=0&autorotatetime=10&autorotatedelay=2&autorotatedir=1&hidefullscreen=1&hideautorotateopt=0&hidesettingsbtn=1",
      alt: "Product 3",
    },
    {
      angle: 216,
      distance: 350,
      embedSrc:
        "https://embed.360-javascriptviewer.com?presentation=eyJzcGVlZCI6ODAsImluZXJ0aWEiOjIwLCJzdG9wQXRFZGdlcyI6ZmFsc2UsImRlZmF1bHRQcm9ncmVzc0JhciI6dHJ1ZSwibWFpbkltYWdlVXJsIjoiaHR0cHM6Ly9hcGkuY2FtYXJpbi5haS9wcm9kdWN0cy9kdW1teV9pZDAwNC9mcmFtZV8wMDAuanBnIiwiaW1hZ2VVcmxGb3JtYXQiOiJmcmFtZV94eHguanBnIiwidG90YWxGcmFtZXMiOjExMiwic3RhcnRGcmFtZU5vIjowLCJsaWNlbnNlIjoiNXNreHNia3drbWdnZzU9PTIwMjQvMDkvMjMtLXd3dy5jYW1hcmluLmFpIiwiYXV0b1JvdGF0ZSI6MCwiYXV0b1JvdGF0ZVNwZWVkIjowLCJhdXRvUm90YXRlUmV2ZXJzZSI6ZmFsc2UsInpvb20iOnRydWUsInpvb21NYXgiOjIsInpvb21XaGVlbFNwZWVkIjoyMn0=",
      alt: "Product 4",
    },
    {
      angle: 288,
      distance: 350,
      embedSrc:
        "https://embed.360-javascriptviewer.com?presentation=eyJzcGVlZCI6ODAsImluZXJ0aWEiOjIwLCJzdG9wQXRFZGdlcyI6ZmFsc2UsImRlZmF1bHRQcm9ncmVzc0JhciI6dHJ1ZSwibWFpbkltYWdlVXJsIjoiaHR0cHM6Ly9hcGkuY2FtYXJpbi5haS9wcm9kdWN0cy9kdW1teV9pZDAwMS9mcmFtZV8wMDAuanBnIiwiaW1hZ2VVcmxGb3JtYXQiOiJmcmFtZV94eHguanBnIiwidG90YWxGcmFtZXMiOjEwNiwic3RhcnRGcmFtZU5vIjoxLCJsaWNlbnNlIjoiNXNreHNia3drbWdnZzU9PTIwMjQvMDkvMjMtLXd3dy5jYW1hcmluLmFpIn0=",
      alt: "Product 5",
    },
  ];

  // Disc size and embed size variables
  const discSize = 1000; // Disc diameter in pixels
  const embedSize = 215; // Increased embed size
  const embedPosition = (discSize - embedSize) / 2; // Centering calculation
  return (
    <div className="min-h-screen bg-[#161616] text-white relative">
      <Header onContactClick={onContactClick} />

      <main className="container mx-auto px-4 py-16 text-center relative">
      <div className="inline-flex items-center justify-center mb-4">
            <div className="w-2 h-2 bg-emerald-300 rounded-3xl mr-2 shine"></div>
            <span className="text-emerald-300 text-sm">Bring your product to life</span>
            </div>
        <h1 className="text-5xl font-bold mb-6">Digitised Catalogue</h1>
        <p className="max-w-2xl mx-auto mb-12">
          Offer live and virtual try-ons with personalized avatars, allowing
          customers to visualize individual clothing items and accessories or curate
          unique outfits effortlessly.
        </p>

        {/* Disc Section */}
        <div
          className="absolute cursor-grab active:cursor-grabbing"
          style={{
            top: "470px",
            left: "50%",
            transform: "translate(-50%, 0)",
            zIndex: 20,
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div
            className="relative rounded-full bg-zinc-50"
            style={{
              width: `${discSize}px`,
              height: `${discSize}px`,
              transform: `rotate(${rotation}deg)`,
              transformOrigin: "center center",
              boxShadow: "0 0 30px 10px rgba(255, 255, 255, 0.5)",
            }}
          >
            {/* Hollow center */}
            <div
              className="absolute bg-[#161616] rounded-full"
              style={{
                width: "200px", // Size of the hollow center
                height: "200px",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            ></div>

            {/* Product embeds positioned around the disc */}
            {discObjects.map((obj, index) => (
              <div
                key={index}
                className="absolute overflow-hidden"
                style={{
                  width: `${embedSize}px`,
                  height: `${embedSize}px`,
                  top: `${embedPosition}px`,
                  left: `${embedPosition}px`,
                  transform: `
                    rotate(${obj.angle}deg)
                    translate(${obj.distance}px)
                    rotate(${-obj.angle - rotation}deg)
                  `,
                  transformOrigin: "center center",
                }}
              >
                <iframe
                  src={obj.embedSrc}
                  title={obj.alt}
                  className="w-full h-full"
                  style={{ border: 0 }}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
            </div>
          </div>

        

        {/* Box Component */}
        <div
          className="relative bg-[#161616] rounded-3xl p-8 max-w-4xl mx-auto"
          style={{
            zIndex: 10,
            position: "absolute",
            top: "260px",
            left: "50%",
            transform: "translateX(-50%)",
            height: "calc(100vh - 250px)",
          }}
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-black to-stone-500 p-[2px]">
            <div className="w-full h-full bg-[#161616] rounded-3xl"></div>
          </div>
          <h2 className="text-3xl font-bold mb-4 relative">
            Boost Engagement and Satisfaction
          </h2>
          <p className="text-teal-400 text-xl mb-6 relative">
            Improved Discovery and Customer Experience
          </p>
          <p className="mb-12 relative">
          By digitizing your store&#39;s catalogue, we boost customer engagement,
          satisfaction, and product discovery, ensuring your customers get exactly
          what they expect from your products.
        </p>

        </div>
      </main>
      <style jsx global>{`
        body,
        html {
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



