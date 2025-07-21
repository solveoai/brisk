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
      mainPhrase: "your manufacturing processes.",
      subtitle: "We analyze every workflow to uncover hidden inefficiencies and profit leaks.",
      icon: (
        <svg className="w-24 h-24" viewBox="0 0 96 96" fill="none">
          <circle cx="48" cy="48" r="36" stroke="currentColor" strokeWidth="1.5" opacity="0.2"/>
          <circle cx="48" cy="48" r="24" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
          <circle cx="48" cy="48" r="12" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
          <circle cx="48" cy="48" r="4" fill="currentColor"/>
        </svg>
      )
    },
    {
      number: "02",
      title: "Implement",
      mainPhrase: "automation solutions.",
      subtitle: "We deploy custom systems that scale your production without disruption.",
      icon: (
        <svg className="w-24 h-24" viewBox="0 0 96 96" fill="none">
          <rect x="24" y="24" width="48" height="48" stroke="currentColor" strokeWidth="1.5" opacity="0.2"/>
          <rect x="32" y="32" width="32" height="32" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
          <rect x="40" y="40" width="16" height="16" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
          <rect x="44" y="44" width="8" height="8" fill="currentColor"/>
        </svg>
      )
    },
    {
      number: "03",
      title: "Accelerate",
      mainPhrase: "business for growth.",
      subtitle: "We transform your company to achieve measurable ROI in 90 days.",
      icon: (
        <svg className="w-24 h-24" viewBox="0 0 96 96" fill="none">
          <path d="M48 24 L66 48 L48 72 L30 48 Z" stroke="currentColor" strokeWidth="1.5" opacity="0.2"/>
          <path d="M48 32 L60 48 L48 64 L36 48 Z" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
          <path d="M48 40 L54 48 L48 56 L42 48 Z" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
          <circle cx="48" cy="48" r="3" fill="currentColor"/>
        </svg>
      )
    }
  ];

  return (
    <div className="snap-always snap-center">
      <div ref={containerRef} className="relative h-[200vh] w-full">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center">
          <div className="w-full h-full flex flex-col justify-center items-center text-white px-4 md:px-8 lg:px-12">
            
            {/* Progress circles at top */}
            <div className={`mb-20 transition-opacity duration-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="flex items-center gap-0">
                {[0, 1, 2].map((index) => (
                  <React.Fragment key={index}>
                    <div className="relative">
                      <span className={`absolute -top-8 left-1/2 -translate-x-1/2 text-sm transition-all duration-500 ${
                        index === currentStep ? 'text-blue-400' : 'text-gray-500'
                      }`}>
                        {steps[index].number}
                      </span>
                      <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                        index === currentStep 
                          ? 'border-blue-400' 
                          : index < currentStep
                          ? 'border-blue-400'
                          : 'border-gray-600'
                      }`}>
                        <div className={`w-2 h-2 rounded-full transition-all duration-500 ${
                          index <= currentStep ? 'bg-blue-400' : ''
                        }`}/>
                      </div>
                    </div>
                    {index < 2 && (
                      <div className={`w-32 h-0.5 transition-all duration-500 ${
                        index < currentStep ? 'bg-blue-400' : 'bg-gray-600'
                      }`}/>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Main content */}
            <div className="w-full max-w-5xl mx-auto text-center">
              
              {/* Icon */}
              <div className="flex justify-center mb-16">
                <div className={`text-blue-400 transition-all duration-700 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}>
                  {steps[currentStep]?.icon}
                </div>
              </div>

              {/* Title - matching the style */}
              <h2 className={`text-5xl md:text-6xl lg:text-7xl font-light mb-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <span className="text-white">We </span>
                <span className="text-blue-400">{steps[currentStep]?.title} </span>
                <span className="text-white">{steps[currentStep]?.mainPhrase}</span>
              </h2>

              {/* Subtitle */}
              <p className={`text-xl text-gray-400 max-w-3xl mx-auto transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                {steps[currentStep]?.subtitle}
              </p>
            </div>

            {/* Bottom progress dots */}
            <div className={`mt-20 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="flex items-center gap-3">
                {[0, 1, 2].map((index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      index === currentStep 
                        ? 'w-10 h-2 bg-blue-400 rounded-full' 
                        : 'w-2 h-2 bg-gray-600 rounded-full'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSteps;