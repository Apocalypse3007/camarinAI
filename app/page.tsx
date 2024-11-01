"use client";

import React, { useRef } from 'react';
import Homepage from "@components/homepage";
import Feature1 from '@components/feature1';
import Feature2 from '@components/feature2';
import Feature3 from '@components/feature3';
import Feature4 from '@components/feature4';


const Page = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  const handleContactClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory custom-scrollbar">
        <section className="min-h-screen snap-start overflow-hidden">
          <Homepage />
        </section>
        <section className="min-h-screen snap-start overflow-hidden">
          <Feature1 onContactClick={handleContactClick} />
        </section>
        <section className="min-h-screen snap-start overflow-hidden">
          <Feature2/>
        </section>
        <section className="min-h-screen snap-start overflow-hidden">
          <Feature3 />
        </section>
        <section className="min-h-screen snap-start overflow-hidden">
          <Feature4 />
        </section>
        <style jsx>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }

          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #161616;
            border-radius: 10px;
            border: 2px solid transparent;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background-color: #333;
          }
        `}</style>
      </div>
    </>
  );
};

export default Page;
