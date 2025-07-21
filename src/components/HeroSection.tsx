import React, { useState, useEffect } from 'react';

// Simple fade animation for morphing text
const MorphingText = ({ texts, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsAnimating(false);
      }, 200);
    }, 2500);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className={`${className} transition-all duration-300 ${
      isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
    }`}>
      {texts[currentIndex]}
    </div>
  );
};
const HeroSection = ({ onContactClick }) => {
  const words = ['Automation', 'Consulting', 'Education', 'Training'];

  return (
    <div className="snap-always snap-center min-h-screen">
      <div className="relative h-screen min-h-screen w-full flex">
        <div className="w-full h-full">
          <div className="box-border w-full snap-always snap-center h-screen min-h-screen flex flex-col items-center justify-center px-4 md:px-8 lg:px-12">

            {/* Main content with animated morphing text only */}
            <div className="w-full flex flex-col items-center justify-center gap-12 px-4 md:px-8 lg:px-12 mx-auto">
              <div>
                <p className="text-5xl md:text-7xl lg:text-8xl text-white text-center leading-[0.85]">We are not an AI</p>
                <div className="h-auto flex w-full flex-row items-center justify-center">
                  <MorphingText 
                    texts={words}
                    className="text-5xl md:text-7xl lg:text-8xl text-blue-400 italic leading-[0.85] text-center"
                  />
                </div>
                <p className="text-5xl md:text-7xl lg:text-8xl w-full text-white text-center leading-[0.85]">Company</p>
              </div>
              <p className="text-2xl md:text-3xl lg:text-3xl tracking-normal text-gray-300">We are all of the above.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;

keep everything the same chagne the swapping text animation the the compoennt the training automation etc that part