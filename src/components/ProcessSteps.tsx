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
        <svg className="w-20 h-20" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="30" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
          <circle cx="40" cy="40" r="20" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
          <circle cx="40" cy="40" r="10" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
          <circle cx="40" cy="40" r="3" fill="currentColor"/>
        </svg>
      )
    },
    {
      number: "02",
      title: "Implement",
      subtitle: "Deploy systems that scale your output 5x",
      icon: (
        <svg className="w-20 h-20" viewBox="0 0 80 80" fill="none">
          <rect x="25" y="25" width="30" height="30" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
          <rect x="30" y="30" width="20" height="20" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
          <rect x="35" y="35" width="10" height="10" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
          <rect x="38" y="38" width="4" height="4" fill="currentColor"/>
        </svg>
      )
    },
    {
      number: "03",
      title: "Accelerate",
      subtitle: "Achieve 85% faster operations in 90 days",
      icon: (
        <svg className="w-20 h-20" viewBox="0 0 80 80" fill="none">
          <path d="M40 20 L55 40 L40 60 L25 40 Z" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
          <path d="M40 28 L48 40 L40 52 L32 40 Z" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
          <path d="M40 34 L44 40 L40 46 L36 40 Z" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
          <circle cx="40" cy="40" r="2" fill="currentColor"/>
        </svg>
      )
    }
  ];

  return (
    <div className="snap-always snap-center">
      <div ref={containerRef} className="relative h-[200vh] w-full">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center" style={{ backgroundColor: '#1a202c' }}>
          <div className="w-full h-full flex flex-col justify-center items-center px-4 md:px-8 lg:px-12">
            
            {/* Progress circles - matching the style from your images */}
            <div className={`mb-24 transition-opacity duration-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="flex items-center gap-4">
                {[0, 1, 2].map((index) => (
                  <React.Fragment key={index}>
                    <div className="relative">
                      <span className={`absolute -top-8 left-1/2 -translate-x-1/2 text-sm transition-all duration-500 ${
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

            {/* Icon and content */}
            <div className="text-center max-w-4xl mx-auto">
              {/* Icon */}
              <div className="flex justify-center mb-12">
                <div className={`text-blue-400 transition-all duration-700 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}>
                  {steps[currentStep]?.icon}
                </div>
              </div>

              {/* Title */}
              <h2 className={`text-6xl md:text-7xl font-light text-white mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                {steps[currentStep]?.title}
              </h2>

              {/* Subtitle */}
              <p className={`text-xl md:text-2xl text-gray-400 font-light transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                {steps[currentStep]?.subtitle}
              </p>
            </div>

            {/* Simple progress indicator at bottom */}
            <div className={`mt-24 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="w-64 md:w-96">
                <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-400 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${((currentStep + 1) / 3) * 100}%` }}
                  />
                </div>
                <p className="text-center text-gray-500 text-sm mt-6">
                  {currentStep === 0 && "Deep analysis of your entire operation to identify profit leaks"}
                  {currentStep === 1 && "Custom automation systems deployed with zero disruption"}
                  {currentStep === 2 && "Full transformation with measurable ROI in just 3 months"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProcessIntroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="snap-always snap-center min-h-screen" ref={sectionRef}>
      <div className="h-screen w-full flex items-center justify-center" style={{ backgroundColor: '#1a202c' }}>
        <div className="w-full max-w-6xl mx-auto px-4 md:px-8 lg:px-12 text-center">
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-light leading-tight transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="text-white">We put </span>
            <span className="text-blue-400">automation at </span>
            <span className="text-white">the center of </span>
            <span className="text-blue-400">everything </span>
            <span className="text-white">we do.</span>
          </h1>
          
          <p className={`text-xl text-gray-400 mt-8 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            Your trusted partner in becoming an automation-first manufacturing company.
          </p>
        </div>
      </div>
    </div>
  );
};

// Export wrapper
const App: React.FC = () => {
  return (
    <>
      <ProcessIntroSection />
      <ProcessSteps />
    </>
  );
};

export default App;