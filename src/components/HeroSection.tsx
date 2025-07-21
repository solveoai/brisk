import React, { useState, useEffect } from 'react';
import { BlurText } from '@/components/ui/animated-blur-text';

// BlurText morphing animation
const MorphingText = ({ texts, className }: { texts: string[], className: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setKey(prev => prev + 1); // Force re-render for animation
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <BlurText
      key={key}
      text={texts[currentIndex]}
      className={className}
      delay={100}
      animateBy="words"
      direction="bottom"
      stepDuration={0.4}
    />
  );
};
const HeroSection = ({ onContactClick }: { onContactClick: () => void }) => {
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