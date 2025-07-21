import React, { useEffect, useState, useRef } from 'react';

const BusinessGrowthSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMetric, setActiveMetric] = useState(0);
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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveMetric((prev) => (prev + 1) % 3);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const metrics = [
    { label: "Revenue Growth", value: "3.2x", icon: "📈" },
    { label: "Time Saved", value: "85%", icon: "⏱️" },
    { label: "ROI", value: "450%", icon: "💰" }
  ];

  return (
    <div className="snap-always snap-center min-h-screen" ref={sectionRef}>
      <div className="relative h-screen w-full flex items-center justify-center bg-gray-900">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          
          {/* Main heading */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-6xl lg:text-7xl font-light transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <span className="text-white">We don't just automate. </span>
              <span className="text-blue-400">We transform</span>
              <span className="text-white"> your bottom line.</span>
            </h2>
          </div>

          {/* Interactive metrics dashboard */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {metrics.map((metric, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border transition-all duration-500 cursor-pointer ${
                  activeMetric === index 
                    ? 'border-blue-400 bg-blue-500/10 scale-105' 
                    : 'border-gray-700 bg-gray-800/50 hover:border-blue-400/50'
                }`}
                onMouseEnter={() => setActiveMetric(index)}
              >
                <div className="text-5xl mb-4">{metric.icon}</div>
                <div className="text-5xl font-bold text-blue-400 mb-2">{metric.value}</div>
                <div className="text-gray-400 text-lg">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Value proposition */}
          <div className={`text-center transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our clients see measurable results within 90 days. No fluff, no theory—just proven systems that drive real growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProcessValueSection: React.FC = () => {
  const [currentValue, setCurrentValue] = useState(0);
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
          setCurrentValue(0);
        } else if (progress < 0.7) {
          setCurrentValue(1);
        } else {
          setCurrentValue(2);
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

  const values = [
    {
      title: "Find Hidden Profits",
      metric: "$2.3M",
      metricLabel: "Average annual savings",
      description: "We analyze your operations to uncover profit leaks. Most manufacturers are losing 15-30% of potential revenue to inefficiencies they can't see.",
      visual: (
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 bg-blue-500/20 rounded-2xl rotate-45"></div>
          <div className="absolute inset-4 bg-blue-400/30 rounded-xl rotate-45"></div>
          <div className="absolute inset-8 bg-blue-400 rounded-lg rotate-45 flex items-center justify-center">
            <span className="text-white text-2xl font-bold -rotate-45">$</span>
          </div>
        </div>
      )
    },
    {
      title: "Scale Without Hiring",
      metric: "5x",
      metricLabel: "Output increase",
      description: "Handle 5x more orders with your current team. Our systems eliminate bottlenecks and automate repetitive tasks that drain your workforce.",
      visual: (
        <div className="relative w-32 h-32">
          <div className="flex items-end justify-center h-full gap-2">
            <div className="w-6 h-12 bg-blue-500/30 rounded-t"></div>
            <div className="w-6 h-20 bg-blue-400/50 rounded-t"></div>
            <div className="w-6 h-28 bg-blue-400 rounded-t"></div>
            <div className="w-6 h-24 bg-blue-400/70 rounded-t"></div>
          </div>
        </div>
      )
    },
    {
      title: "Outpace Competition",
      metric: "48hrs",
      metricLabel: "Faster delivery",
      description: "While competitors struggle with delays, you'll deliver in days, not weeks. Speed becomes your competitive advantage.",
      visual: (
        <div className="relative w-32 h-32 flex items-center justify-center">
          <div className="absolute w-28 h-28 border-4 border-blue-500/30 rounded-full"></div>
          <div className="absolute w-20 h-20 border-4 border-blue-400/50 rounded-full animate-pulse"></div>
          <div className="absolute w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">⚡</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="snap-always snap-center">
      <div ref={containerRef} className="relative h-[200vh] w-full">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center bg-gray-900">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            
            {/* Progress indicator */}
            <div className={`flex justify-center gap-2 mb-12 transition-opacity duration-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className={`h-1 transition-all duration-500 ${
                    index === currentValue ? 'w-12 bg-blue-400' : 'w-4 bg-gray-600'
                  }`}
                />
              ))}
            </div>

            {/* Main content */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left side - Visual */}
              <div className="flex justify-center">
                <div className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}>
                  {values[currentValue]?.visual}
                </div>
              </div>

              {/* Right side - Content */}
              <div className={`transition-all duration-700 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="mb-6">
                  <div className="text-6xl font-bold text-blue-400 mb-2">
                    {values[currentValue]?.metric}
                  </div>
                  <div className="text-gray-400 text-lg mb-4">
                    {values[currentValue]?.metricLabel}
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl text-white mb-6">
                  {values[currentValue]?.title}
                </h3>

                <p className="text-xl text-gray-300 mb-8">
                  {values[currentValue]?.description}
                </p>

                <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300 text-lg">
                  Calculate Your Savings →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Calculator component matching the style from the images
const ROICalculator: React.FC = () => {
  const [metrics, setMetrics] = useState({
    leads: 500,
    dealSize: 5000,
    hoursManual: 40,
    laborCost: 75
  });

  const calculateImpact = () => {
    const additionalRevenue = metrics.leads * 0.15 * metrics.dealSize; // 15% more conversions
    const timeSaved = metrics.hoursManual * 0.7; // 70% time reduction
    const laborSavings = timeSaved * metrics.laborCost;
    
    return {
      revenue: additionalRevenue,
      time: timeSaved,
      savings: laborSavings
    };
  };

  const impact = calculateImpact();

  return (
    <div className="snap-always snap-center min-h-screen">
      <div className="h-screen w-full flex items-center justify-center bg-gray-900">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
          <h2 className="text-4xl md:text-5xl text-white text-center mb-12">
            See Your Potential Impact
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Panel */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl text-white mb-6">Your Current Metrics</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="flex items-center gap-3 text-gray-300 mb-2">
                    <span className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">👥</span>
                    Monthly leads processed
                  </label>
                  <input
                    type="range"
                    min="100"
                    max="2000"
                    value={metrics.leads}
                    onChange={(e) => setMetrics({...metrics, leads: parseInt(e.target.value)})}
                    className="w-full"
                  />
                  <div className="text-right text-blue-400 font-bold text-xl mt-1">{metrics.leads}</div>
                </div>

                <div>
                  <label className="flex items-center gap-3 text-gray-300 mb-2">
                    <span className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">💰</span>
                    Average deal size ($)
                  </label>
                  <input
                    type="range"
                    min="1000"
                    max="50000"
                    step="1000"
                    value={metrics.dealSize}
                    onChange={(e) => setMetrics({...metrics, dealSize: parseInt(e.target.value)})}
                    className="w-full"
                  />
                  <div className="text-right text-blue-400 font-bold text-xl mt-1">${metrics.dealSize.toLocaleString()}</div>
                </div>

                <div>
                  <label className="flex items-center gap-3 text-gray-300 mb-2">
                    <span className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">⏱️</span>
                    Hours on manual tasks/month
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="200"
                    value={metrics.hoursManual}
                    onChange={(e) => setMetrics({...metrics, hoursManual: parseInt(e.target.value)})}
                    className="w-full"
                  />
                  <div className="text-right text-blue-400 font-bold text-xl mt-1">{metrics.hoursManual}</div>
                </div>

                <div>
                  <label className="flex items-center gap-3 text-gray-300 mb-2">
                    <span className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">📊</span>
                    Hourly labor cost ($/hr)
                  </label>
                  <input
                    type="range"
                    min="25"
                    max="200"
                    value={metrics.laborCost}
                    onChange={(e) => setMetrics({...metrics, laborCost: parseInt(e.target.value)})}
                    className="w-full"
                  />
                  <div className="text-right text-blue-400 font-bold text-xl mt-1">${metrics.laborCost}</div>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
              <h3 className="text-2xl text-white mb-6">Your Automation Impact</h3>
              
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="text-gray-300 mb-2">Additional Monthly Revenue</div>
                  <div className="text-4xl font-bold text-green-400">
                    +${impact.revenue.toLocaleString()}
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="text-gray-300 mb-2">Time Saved Monthly</div>
                  <div className="text-4xl font-bold text-blue-400">
                    {impact.time}hrs
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="text-gray-300 mb-2">Labor Cost Savings</div>
                  <div className="text-4xl font-bold text-yellow-400">
                    ${impact.savings.toLocaleString()}
                  </div>
                </div>

                <button className="w-full py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-colors duration-300 text-lg font-medium">
                  Get Your Custom Plan →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export all components
const App: React.FC = () => {
  return (
    <>
      <BusinessGrowthSection />
      <ProcessValueSection />
      <ROICalculator />
    </>
  );
};

export default App;