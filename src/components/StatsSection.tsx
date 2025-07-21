import React, { useEffect, useState, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const StatsSection: React.FC = () => {
  const [animatedNumbers, setAnimatedNumbers] = useState([0, 0, 0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const targetNumbers = [500, 150, 50];
  const sectionRef = useRef<HTMLDivElement>(null);
  const animationTimeouts = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isAnimating) {
          // Reset numbers to 0 before animating
          setAnimatedNumbers([0, 0, 0]);
          setIsAnimating(true);
          animateNumbers();
        } else if (!entry.isIntersecting) {
          // Reset when section is out of view
          setIsAnimating(false);
          // Clear any ongoing animations
          animationTimeouts.current.forEach(timeout => clearTimeout(timeout));
          animationTimeouts.current = [];
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      // Clear timeouts on cleanup
      animationTimeouts.current.forEach(timeout => clearTimeout(timeout));
    };
  }, [isAnimating]);

  const animateNumbers = () => {
    targetNumbers.forEach((target, index) => {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
          if (index === targetNumbers.length - 1) {
            // Animation complete, allow re-triggering after a delay
            const timeout = setTimeout(() => {
              setIsAnimating(false);
            }, 500);
            animationTimeouts.current.push(timeout);
          }
        }
        setAnimatedNumbers(prev => {
          const newNumbers = [...prev];
          newNumbers[index] = Math.floor(current);
          return newNumbers;
        });
      }, 50);
    });
  };

  return (
    <div className="snap-always snap-center min-h-screen" ref={sectionRef}>
      <div className="relative h-screen min-h-screen w-full flex">
        <div className="w-full h-full">
          <div className="box-border gap-8 w-full h-screen min-h-screen snap-always snap-center flex flex-col justify-center items-center text-white leading-normal tracking-normal">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 126.3 63.2" className="absolute -top-[50vh] -left-[50vw] lg:top-0 lg:left-0 h-[200vh] w-[200vw] lg:w-full lg:h-full z-[-1] opacity-10">
              <g fill="#3b82f6">
                <circle cx="40" cy="40" r="25" fill="none" stroke="#3b82f6" strokeWidth="2"/>
                <circle cx="40" cy="40" r="15" fill="#3b82f6"/>
                <rect x="32" y="10" width="16" height="8" rx="2"/>
                <rect x="32" y="62" width="16" height="8" rx="2"/>
                <rect x="10" y="32" width="8" height="16" rx="2"/>
                <rect x="62" y="32" width="8" height="16" rx="2"/>
              </g>
            </svg>

            <div className="relative w-full px-4 md:px-8 lg:px-12 mx-auto flex flex-col justify-center">
              <p className="text-4xl md:text-5xl whitespace-pre-wrap mb-12">
                <span className="lg:mr-1 text-white">We don't sell automation.</span>
                <br className="block lg:hidden" />
                <span className="text-white">We sell </span>
                <span className="italic text-blue-400">Results.</span>
              </p>
            </div>

            <div className="flex w-full flex-col lg:flex-row justify-start items-start px-4 md:px-8 lg:px-12 mx-auto gap-4">
              <div className="flex flex-col w-full lg:w-1/3 md:mb-0 mb-0 gap-1 lg:gap-4">
                <p className="lg:text-8xl md:text-7xl text-6xl tracking-widest">
                  <span>{animatedNumbers[0]}</span>+
                </p>
                <hr className={`border-blue-600 border-1 md:my-4 my-0 transition-opacity duration-1000 ${isAnimating ? 'opacity-100' : 'opacity-0'}`} />
                <p className={`text-lg text-white transition-opacity duration-1000 delay-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}>Manufacturing facilities automated</p>
                <a target="_blank" className={`decoration-none flex text-md flex-row items-center gap-1 cursor-pointer transition-opacity duration-1000 delay-500 ${isAnimating ? 'opacity-100' : 'opacity-0'}`} href="#portfolio">
                  <p className="text-md text-blue-400 font-bold">View our portfolio</p>
                  <ArrowUpRight size={18} className="mt-1 text-blue-400" />
                </a>
              </div>

              <div className="flex flex-col w-full lg:w-1/3 md:mb-0 mb-0 gap-1 lg:gap-4">
                <p className="lg:text-8xl md:text-7xl text-6xl tracking-widest">
                  <span>{animatedNumbers[1]}</span>+
                </p>
                <hr className={`border-blue-600 border-1 md:my-4 my-0 transition-opacity duration-1000 ${isAnimating ? 'opacity-100' : 'opacity-0'}`} />
                <p className={`text-lg text-white transition-opacity duration-1000 delay-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}>Automation projects completed</p>
              </div>

              <div className="flex flex-col w-full lg:w-1/3 md:mb-0 mb-0 gap-1 lg:gap-4">
                <p className="lg:text-8xl md:text-7xl text-6xl tracking-widest">
                  <span>{animatedNumbers[2]}</span>+
                </p>
                <hr className={`border-blue-600 border-1 md:my-4 my-0 transition-opacity duration-1000 ${isAnimating ? 'opacity-100' : 'opacity-0'}`} />
                <p className={`text-lg text-white transition-opacity duration-1000 delay-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}>Custom automation systems developed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;