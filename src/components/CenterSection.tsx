import React from 'react';

const CenterSection: React.FC = () => {
  return (
    <div className="snap-always snap-center min-h-screen">
      <div className="relative h-screen min-h-screen w-full flex">
        <div className="w-full h-full">
          <div className="box-border gap-8 w-full h-screen min-h-screen snap-always snap-center flex flex-col justify-center items-center text-white leading-normal tracking-normal">
            <p className="text-4xl md:text-6xl lg:text-7xl text-center h-fit whitespace-pre-wrap w-full">
              <span className="text-white">We </span>
              <span className="text-white">put </span>
              <span className="text-blue-400">automation </span>
              <br className="block md:hidden" />
              <span className="text-blue-400">at </span>
              <span className="text-white">the </span>
              <span className="text-white">center </span>
              <br className="hidden lg:block" />
              <span className="text-white">of </span>
              <br className="block lg:hidden" />
              <span className="text-blue-400">everything </span>
              <span className="text-white">we </span>
              <span className="text-white">do.</span>
            </p>
            <p className="text-xl lg:text-2xl w-10/12 lg:w-full text-center text-gray-300">
              Your trusted partner in becoming an automation-first manufacturing company.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterSection;