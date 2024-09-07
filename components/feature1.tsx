import React from 'react';
import ScanPage from './pages/scan';
import AnalysePage from './pages/analyse';
import SuggestPage from './pages/suggest';
import Header from './ui/header'; 

export default function Feature1() {
  return (
    <div className="h-screen flex flex-col bg-black">
      <Header /> 
      <div className="flex-1 overflow-y-scroll snap-y snap-mandatory">
        <div className="snap-start h-screen w-full">
          <ScanPage />
        </div>
        <div className="snap-start h-screen w-full">
          <AnalysePage />
        </div>
        <div className="snap-start h-screen w-full">
          <SuggestPage />
        </div>
      </div>
    </div>
  );
}