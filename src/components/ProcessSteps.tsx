import React, { useEffect, useState, useRef } from 'react';

const ProcessSteps: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        setIsVisible(true);
        
        const scrolled = Math.abs(rect.top);
        const total = rect.height - windowHeight;
        const progress = Math.max(0, Math.min(1, scrolled / total));
        
        if (progress < 0.3) {
          setCurrentStep(0);
        } else if (progress < 0.7) {
          setCurrentStep(1);
        } else {
          setCurrentStep(2);
        }
      } else {
        setIsVisible(false);
      }
    };

    const pageWrapper = document.getElementById('page-wrapper');
    if (pageWrapper) {
      pageWrapper.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => {
      if (pageWrapper) {
        pageWrapper.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const steps = [
    {
      number: "01",
      title: "Audit",
      subtitle: "Uncover $2M+ in hidden inefficiencies",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
          <circle cx="32" cy="32" r="12" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
          <circle cx="32" cy="32" r="4" fill="currentColor"/>
        </svg>
      )
    },
    {
      number: "02",
      title: "Implement",
      subtitle: "Deploy systems that scale your output 5x",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <rect x="20" y="20" width="24" height="24" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
          <rect x="26" y="26" width="12" height="12" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
          <rect x="30" y="30" width="4" height="4" fill="currentColor"/>
        </svg>
      )
    },
    {
      number: "03",
      title: "Accelerate",
      subtitle: "Achieve 85% faster operations in 90 days",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <path d="M32 12 L44 32 L32 52 L20 32 Z" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
          <path d="M32 20 L38 32 L32 44 L26 32 Z" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
          <path d="M32 28 L34 32 L32 36 L30 32 Z" fill="currentColor"/>
        </svg>
      )
    }
  ];

  return (
    <div className="snap-always snap-center">
      <div ref={containerRef} className="relative h-[200vh] w-full">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center bg-gray-900">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            
            {/* Progress line */}
            <div className={`flex justify-center mb-16 transition-opacity duration-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="flex items-center gap-8">
                {[0, 1, 2].map((index) => (
                  <React.Fragment key={index}>
                    <div className={`flex flex-col items-center transition-all duration-500 ${
                      index === currentStep ? 'opacity-100' : 'opacity-30'
                    }`}>
                      <span className="text-blue-400 text-sm font-mono mb-2">{steps[index].number}</span>
                      <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                        index === currentStep 
                          ? 'border-blue-400 bg-blue-400/10' 
                          : 'border-gray-600'
                      }`}>
                        <div className={`w-2 h-2 rounded-full transition-all duration-500 ${
                          index === currentStep ? 'bg-blue-400' : 'bg-gray-600'
                        }`}/>
                      </div>
                    </div>
                    {index < 2 && (
                      <div className={`w-24 h-0.5 transition-all duration-500 ${
                        index < currentStep ? 'bg-blue-400' : 'bg-gray-700'
                      }`}/>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Main content */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              
              {/* Left - Visual */}
              <div className="flex justify-center md:justify-end">
                <div className={`text-blue-400 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}>
                  {steps[currentStep]?.icon}
                </div>
              </div>

              {/* Right - Text */}
              <div className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}>
                <h2 className="text-5xl md:text-6xl font-light text-white mb-4">
                  {steps[currentStep]?.title}
                </h2>
                <p className="text-2xl text-gray-400 font-light">
                  {steps[currentStep]?.subtitle}
                </p>
              </div>
            </div>

            {/* Bottom metrics */}
            <div className={`mt-16 grid grid-cols-3 gap-8 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className={`text-center transition-all duration-500 ${
                currentStep === 0 ? 'opacity-100' : 'opacity-30'
              }`}>
                <div className="text-3xl font-bold text-blue-400">$2.3M</div>
                <div className="text-sm text-gray-500 mt-1">avg. savings found</div>
              </div>
              <div className={`text-center transition-all duration-500 ${
                currentStep === 1 ? 'opacity-100' : 'opacity-30'
              }`}>
                <div className="text-3xl font-bold text-blue-400">5x</div>
                <div className="text-sm text-gray-500 mt-1">productivity gain</div>
              </div>
              <div className={`text-center transition-all duration-500 ${
                currentStep === 2 ? 'opacity-100' : 'opacity-30'
              }`}>
                <div className="text-3xl font-bold text-blue-400">90</div>
                <div className="text-sm text-gray-500 mt-1">days to transform</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSteps;