"use client";
import React from 'react';
import Homepage from "@components/homepage";
import Feature1 from '@components/feature1';
import Feature2 from '@components/feature2';
import Feature3 from '@components/feature3';

const Page = () => {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory custom-scrollbar">
      <section className="h-screen snap-start overflow-hidden">
        <Homepage />
      </section>
      <section className="h-screen snap-start overflow-hidden">
        <Feature1 />
      </section>
      <section className="h-screen snap-start overflow-hidden">
        <Feature2 />
      </section>
      <section className="h-screen snap-start overflow-hidden">
        <Feature3 />
      </section>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px; /* Adjust the width of the scrollbar */
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent; /* Transparent background */
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #161616; /* Same color as the website background */
          border-radius: 10px; /* Rounded corners */
          border: 2px solid transparent; /* Optional: Add some space around the thumb */
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #333; /* Darker color on hover */
        }
      `}</style>
    </div>
  );
};

export default Page;