import React, { useEffect, useRef, useState } from 'react';

const ProcessIntroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="snap-always snap-center min-h-screen" ref={sectionRef}>
      <div className="relative h-screen min-h-screen w-full flex">
        <div className="w-full h-full">
          <div className="box-border w-full h-screen min-h-screen flex flex-col justify-center items-center text-white px-4 md:px-8 lg:px-12">
            
            {/* Main content */}
            <div className="w-full max-w-6xl mx-auto text-center">
              <p className={`text-4xl md:text-6xl lg:text-7xl leading-tight mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <span className="text-white">We spend our days guiding manufacturers through our 3-step </span>
                <span className="text-blue-400 italic">Automation Transformation </span>
                <span className="text-white">Journey.</span>
              </p>
              
              {/* Clean simple visual */}
              <div className="flex justify-center">
                <div className={`relative transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-500/30 to-blue-600/50 border border-blue-400/40 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400/40 to-blue-500/60 flex items-center justify-center">
                      <span className="text-white text-lg font-medium">Journey</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessIntroSection;