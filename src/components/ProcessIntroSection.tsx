import React, { useState } from 'react';
import { ArrowUpRight, FileText } from 'lucide-react';

interface TransformationJourneySectionProps {
  onSubmit?: (data: { email: string; website: string }) => void;
}

const TransformationJourneySection: React.FC<TransformationJourneySectionProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email && website) {
      setIsSubmitted(true);
      onSubmit?.({ email, website });
    }
  };

  return (
    <div className="snap-always snap-center min-h-screen">
      <div className="relative min-h-screen w-full flex items-center justify-center bg-black">
        <div className="w-full h-full flex flex-col justify-center items-center px-4 md:px-8 lg:px-12">
          
          {/* Main content grid */}
          <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left side - Text */}
            <div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl leading-[90%] tracking-[-0.04em]">
                <span className="text-white">We spend our days guiding companies</span>
                <br />
                <span className="text-white">through our 3-step </span>
                <span className="text-blue-400">AI Transformation</span>
                <br />
                <span className="text-white">Journey.</span>
              </h2>
            </div>

            {/* Right side - Lead capture */}
            <div className="relative">
              {!isSubmitted ? (
                <div className="relative">
                  {/* Floating document visual */}
                  <div className="absolute -top-8 -right-8 opacity-10">
                    <FileText className="w-32 h-32 text-blue-400 transform rotate-12" />
                  </div>
                  
                  {/* Form content */}
                  <div className="relative z-10">
                    <div className="mb-8">
                      <p className="text-blue-400 text-sm font-medium uppercase tracking-wider mb-3">
                        FREE ANALYSIS
                      </p>
                      <h3 className="text-2xl md:text-3xl text-white font-light mb-3">
                        Get your personalized transformation roadmap
                      </h3>
                      <p className="text-gray-500 text-base">
                        We'll analyze your business and send you a custom AI integration strategy
                      </p>
                    </div>

                    <div className="space-y-4">
                      <input
                        type="url"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        placeholder="Your business website"
                        className="w-full px-6 py-4 bg-transparent border border-gray-800 rounded-full text-white placeholder-gray-600 focus:outline-none focus:border-blue-400 transition-colors"
                      />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email"
                        className="w-full px-6 py-4 bg-transparent border border-gray-800 rounded-full text-white placeholder-gray-600 focus:outline-none focus:border-blue-400 transition-colors"
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            handleSubmit();
                          }
                        }}
                      />
                      <button
                        onClick={handleSubmit}
                        disabled={!email || !website}
                        className={`
                          w-full px-8 py-4 rounded-full font-light transition-all duration-300 flex items-center justify-center gap-2
                          ${email && website
                            ? 'bg-blue-500/10 text-blue-400 border border-blue-400 hover:bg-blue-400 hover:text-black'
                            : 'bg-transparent text-gray-600 border border-gray-800 cursor-not-allowed'
                          }
                        `}
                      >
                        Get My Roadmap
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-center text-gray-700 text-sm mt-6">
                      No spam. Unsubscribe anytime.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6">
                    <FileText className="w-10 h-10 text-blue-400" />
                  </div>
                  <h3 className="text-2xl text-white font-light mb-3">
                    Roadmap incoming!
                  </h3>
                  <p className="text-gray-500">
                    Check {email} for your custom AI strategy.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransformationJourneySection;