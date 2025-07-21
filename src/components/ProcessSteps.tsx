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
      metric: "2.3M",
      metricLabel: "AVERAGE SAVINGS",
      description: "Deep analysis of your entire operation to identify profit leaks",
      icon: (
        <svg className="w-20 h-20" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="30" stroke="rgb(96, 165, 250)" strokeWidth="1" opacity="0.3"/>
          <circle cx="40" cy="40" r="20" stroke="rgb(96, 165, 250)" strokeWidth="1" opacity="0.5"/>
          <circle cx="40" cy="40" r="10" stroke="rgb(96, 165, 250)" strokeWidth="1" opacity="0.7"/>
          <circle cx="40" cy="40" r="3" fill="rgb(96, 165, 250)"/>
        </svg>
      )
    },
    {
      number: "02",
      title: "Implement",
      subtitle: "Deploy systems that scale your output 5x",
      metric: "5x",
      metricLabel: "OUTPUT INCREASE",
      description: "Custom automation systems deployed with zero disruption",
      icon: (
        <svg className="w-20 h-20" viewBox="0 0 80 80" fill="none">
          <rect x="25" y="25" width="30" height="30" stroke="rgb(96, 165, 250)" strokeWidth="1" opacity="0.3"/>
          <rect x="30" y="30" width="20" height="20" stroke="rgb(96, 165, 250)" strokeWidth="1" opacity="0.5"/>
          <rect x="35" y="35" width="10" height="10" stroke="rgb(96, 165, 250)" strokeWidth="1" opacity="0.7"/>
          <circle cx="40" cy="40" r="2" fill="rgb(96, 165, 250)"/>
        </svg>
      )
    },
    {
      number: "03",
      title: "Accelerate",
      subtitle: "Achieve 85% faster operations in 90 days",
      metric: "85%",
      metricLabel: "FASTER OPERATIONS",
      description: "Full transformation with measurable ROI in just 3 months",
      icon: (
        <svg className="w-20 h-20" viewBox="0 0 80 80" fill="none">
          <path d="M40 20 L55 40 L40 60 L25 40 Z" stroke="rgb(96, 165, 250)" strokeWidth="1" opacity="0.3"/>
          <path d="M40 28 L48 40 L40 52 L32 40 Z" stroke="rgb(96, 165, 250)" strokeWidth="1" opacity="0.5"/>
          <path d="M40 34 L44 40 L40 46 L36 40 Z" stroke="rgb(96, 165, 250)" strokeWidth="1" opacity="0.7"/>
          <circle cx="40" cy="40" r="2" fill="rgb(96, 165, 250)"/>
        </svg>
      )
    }
  ];

  return (
    <div className="snap-always snap-center">
      <div ref={containerRef} className="relative h-[200vh] w-full">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center" style={{ backgroundColor: 'rgb(30, 41, 59)' }}>
          <div className="w-full h-full flex flex-col justify-center items-center px-4 md:px-8 lg:px-12">
            
            {/* Progress circles - matching exact style */}
            <div className={`mb-24 transition-opacity duration-700 ${
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

            {/* Central content */}
            <div className="text-center max-w-4xl mx-auto">
              {/* Icon */}
              <div className="flex justify-center mb-12">
                <div className={`text-blue-400 transition-all duration-700 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}>
                  {steps[currentStep]?.icon}
                </div>
              </div>

              {/* Metric */}
              <div className={`mb-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <div className="text-6xl md:text-7xl font-bold text-blue-400">
                  {steps[currentStep]?.metric}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider mt-2">
                  {steps[currentStep]?.metricLabel}
                </div>
              </div>

              {/* Title */}
              <h2 className={`text-5xl md:text-6xl font-light text-white mb-6 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                {steps[currentStep]?.title}
              </h2>

              {/* Subtitle */}
              <p className={`text-xl md:text-2xl text-gray-400 font-light transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                {steps[currentStep]?.subtitle}
              </p>
            </div>

            {/* Bottom progress dots */}
            <div className={`mt-24 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="flex items-center gap-3 mb-6">
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

              {/* Description text */}
              <p className="text-gray-500 text-center max-w-md mx-auto">
                {steps[currentStep]?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSteps;