import React, { useEffect, useState, useRef } from 'react';

const ProcessSteps: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
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
        const scrollProgress = Math.max(0, Math.min(1, scrolled / total));
        setProgress(scrollProgress);
        
        if (scrollProgress < 0.3) {
          setCurrentStep(0);
        } else if (scrollProgress < 0.7) {
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
      metric: "2.3M",
      metricLabel: "Average savings",
      icon: (
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 rounded-full border border-blue-400/20"></div>
          <div className="absolute inset-2 rounded-full border border-blue-400/40"></div>
          <div className="absolute inset-4 rounded-full border border-blue-400/60"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
          </div>
        </div>
      )
    },
    {
      number: "02",
      title: "Implement",
      subtitle: "Deploy systems that scale your output 5x",
      metric: "5x",
      metricLabel: "Output increase",
      icon: (
        <div className="relative w-24 h-24 flex items-center justify-center">
          <div className="absolute w-20 h-20 border border-blue-400/20 rounded-lg"></div>
          <div className="absolute w-14 h-14 border border-blue-400/40 rounded-lg"></div>
          <div className="absolute w-8 h-8 border border-blue-400/60 rounded-lg"></div>
          <div className="w-3 h-3 bg-blue-400"></div>
        </div>
      )
    },
    {
      number: "03",
      title: "Accelerate",
      subtitle: "Achieve 85% faster operations in 90 days",
      metric: "85%",
      metricLabel: "Faster operations",
      icon: (
        <div className="relative w-24 h-24 flex items-center justify-center">
          <div className="absolute w-16 h-16 border border-blue-400/20 rotate-45"></div>
          <div className="absolute w-11 h-11 border border-blue-400/40 rotate-45"></div>
          <div className="absolute w-6 h-6 border border-blue-400/60 rotate-45"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
        </div>
      )
    }
  ];

  return (
    <div className="snap-always snap-center">
      <div ref={containerRef} className="relative h-[200vh] w-full">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center" style={{ backgroundColor: '#1a202c' }}>
          <div className="w-full h-full flex flex-col justify-center items-center px-4 md:px-8 lg:px-12">
            
            {/* Progress circles */}
            <div className={`mb-20 transition-opacity duration-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="flex items-center gap-4">
                {[0, 1, 2].map((index) => (
                  <React.Fragment key={index}>
                    <div className="relative">
                      <span className={`absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-mono transition-all duration-500 ${
                        index === currentStep ? 'text-blue-400' : 'text-gray-600'
                      }`}>
                        {steps[index].number}
                      </span>
                      <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                        index === currentStep 
                          ? 'border-blue-400' 
                          : index < currentStep
                          ? 'border-blue-400/50'
                          : 'border-gray-600'
                      }`}>
                        <div className={`w-2 h-2 rounded-full transition-all duration-500 ${
                          index <= currentStep ? 'bg-blue-400' : ''
                        }`}/>
                      </div>
                    </div>
                    {index < 2 && (
                      <div className={`w-24 h-px transition-all duration-500 ${
                        index < currentStep ? 'bg-blue-400' : 'bg-gray-600'
                      }`}/>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Main content with animation */}
            <div className="relative w-full max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                
                {/* Left - Animated icon */}
                <div className="flex justify-center md:justify-end">
                  <div className={`relative transition-all duration-700 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`}>
                    {/* Animated background effect */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div 
                        className="w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-pulse"
                        style={{ 
                          transform: `scale(${1 + progress * 0.3})`,
                          opacity: 1 - progress * 0.5 
                        }}
                      />
                    </div>
                    
                    {/* Icon with rotation based on scroll */}
                    <div 
                      className="relative z-10 text-blue-400"
                      style={{ transform: `rotate(${progress * 90}deg)` }}
                    >
                      {steps[currentStep]?.icon}
                    </div>
                  </div>
                </div>

                {/* Right - Text content */}
                <div>
                  {/* Animated metric */}
                  <div className={`mb-8 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    <div className="text-5xl md:text-6xl font-bold text-blue-400 mb-2">
                      {steps[currentStep]?.metric}
                    </div>
                    <div className="text-gray-500 text-sm uppercase tracking-wider">
                      {steps[currentStep]?.metricLabel}
                    </div>
                  </div>

                  {/* Title and subtitle */}
                  <h2 className={`text-5xl md:text-6xl font-light text-white mb-4 transition-all duration-700 delay-100 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    {steps[currentStep]?.title}
                  </h2>

                  <p className={`text-xl md:text-2xl text-gray-400 font-light transition-all duration-700 delay-200 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    {steps[currentStep]?.subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom animated elements */}
            <div className={`mt-20 w-full max-w-2xl transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              {/* Animated dots showing step progress */}
              <div className="flex justify-center gap-3 mb-8">
                {[0, 1, 2].map((index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      index === currentStep 
                        ? 'w-8 h-2 bg-blue-400 rounded-full' 
                        : 'w-2 h-2 bg-gray-600 rounded-full'
                    }`}
                  />
                ))}
              </div>

              {/* Dynamic text that changes with each step */}
              <div className="text-center">
                <p className={`text-gray-500 text-sm transition-all duration-500 ${
                  currentStep === 0 ? 'opacity-100' : 'opacity-0 absolute'
                }`}>
                  Deep analysis of your entire operation to identify profit leaks
                </p>
                <p className={`text-gray-500 text-sm transition-all duration-500 ${
                  currentStep === 1 ? 'opacity-100' : 'opacity-0 absolute'
                }`}>
                  Custom automation systems deployed with zero disruption
                </p>
                <p className={`text-gray-500 text-sm transition-all duration-500 ${
                  currentStep === 2 ? 'opacity-100' : 'opacity-0 absolute'
                }`}>
                  Full transformation with measurable ROI in just 3 months
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSteps;