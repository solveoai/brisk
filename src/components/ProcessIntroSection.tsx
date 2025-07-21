import React from 'react';

const ProcessIntroSection = () => {
  return (
    <div className="snap-always snap-center min-h-screen">
      <div className="relative h-screen min-h-screen w-full flex">
        <div className="w-full h-full">
          <div className="box-border w-full snap-always snap-center h-screen min-h-screen flex flex-col items-center justify-center px-4 md:px-8 lg:px-12">
            <div className="w-full flex flex-col items-center justify-center gap-12 px-4 md:px-8 lg:px-12 mx-auto">
              <div className="text-center">
                <h2 className="text-5xl md:text-7xl lg:text-8xl text-white leading-[0.85] mb-8">
                  Our Process
                </h2>
                <p className="text-2xl md:text-3xl lg:text-3xl tracking-normal text-gray-300">
                  How we work with you
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessIntroSection;