import React from 'react';
import Homepage from "@components/homepage";
import Feature1 from '@components/feature1';
import Feature2 from '@components/feature2';

const Page = () => {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <section className="h-screen snap-start">
        <Homepage />
      </section>
      <section className="h-screen snap-start">
        <Feature1 />
      </section>
      <section className="h-screen snap-start">
        <Feature2 />
      </section>
    </div>
  );
};

export default Page;