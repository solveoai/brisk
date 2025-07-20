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
        
        // Ultra smooth scroll calculation
        const scrolled = Math.abs(rect.top);
        const total = rect.height - windowHeight;
        const progress = Math.max(0, Math.min(1, scrolled / total));
        
        // Smooth step transitions with longer ranges
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
      title: "Identify",
      subtitle: "automation opportunities",
      description: "We help you identify high-impact automation opportunities and build a transformation strategy."
    },
    {
      number: "02", 
      title: "Educate",
      subtitle: "your team on automation",
      description: "We train your team with the right tools and knowledge to embed automation across your organization."
    },
    {
      number: "03",
      title: "Develop",
      subtitle: "custom systems",
      description: "We develop custom automation systems that are proven to move the needle inside your business."
    }
  ];

  const getCleanVisual = (stepIndex: number) => {
    const baseClasses = "transition-all duration-700 ease-out";
    
    switch (stepIndex) {
      case 0:
        return (
          <div className={`w-32 h-32 ${baseClasses} ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
            <div className="w-full h-full rounded-full border-2 border-blue-400/60 bg-gradient-to-br from-blue-400/20 to-blue-500/30 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border border-blue-400/40 bg-blue-400/10 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-blue-400"></div>
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className={`w-32 h-32 ${baseClasses} ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
            <div className="w-full h-full rounded-xl border-2 border-blue-400/60 bg-gradient-to-br from-blue-400/20 to-blue-500/30 flex items-center justify-center">
              <div className="w-20 h-16 border border-blue-400/40 rounded-lg bg-blue-400/10 flex flex-col justify-center items-center gap-1">
                <div className="w-12 h-1 bg-blue-400/60 rounded"></div>
                <div className="w-10 h-1 bg-blue-400/60 rounded"></div>
                <div className="w-8 h-1 bg-blue-400/60 rounded"></div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className={`w-32 h-32 ${baseClasses} ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
            <div className="w-full h-full bg-gradient-to-br from-blue-400/20 to-blue-500/30 flex items-center justify-center" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}>
              <div className="w-16 h-16 bg-blue-400/20 flex items-center justify-center" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}>
                <div className="w-4 h-4 bg-blue-400 rounded-sm"></div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="snap-always snap-center">
      <div 
        ref={containerRef}
        className="relative h-[200vh] w-full"
      >
        <div className="sticky top-0 h-screen w-full flex items-center justify-center">
          <div className="w-full h-full">
            <div className="box-border w-full h-screen flex flex-col justify-center items-center text-white px-4 md:px-8 lg:px-12">
              
              {/* Step indicators at top */}
              <div className={`mb-8 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex items-center gap-4 mb-4">
                  {[0, 1, 2].map((index) => (
                    <div 
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-500 ease-out ${
                        index === currentStep ? 'bg-blue-400 scale-125' : 'bg-blue-400/30'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-blue-300 text-lg font-light tracking-wider text-center">
                  STEP {steps[currentStep]?.number}
                </p>
              </div>

              {/* Clean visual element */}
              <div className="mb-16">
                {getCleanVisual(currentStep)}
              </div>

              {/* Main content */}
              <div className={`text-center max-w-6xl mx-auto transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="mb-8">
                  <p className="text-4xl md:text-6xl lg:text-7xl text-center leading-tight">
                    <span className="text-white">We </span>
                    <span className="text-blue-400 italic">{steps[currentStep]?.title} </span>
                    <span className="text-white">{steps[currentStep]?.subtitle}</span>
                  </p>
                </div>

                <div className="max-w-4xl mx-auto">
                  <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                    {steps[currentStep]?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSteps;