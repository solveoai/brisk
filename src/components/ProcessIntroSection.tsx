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
      <div className="relative min-h-screen w-full flex items-center justify-center" style={{ backgroundColor: '#0f172a' }}>
        <div className="w-full max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
          
          {/* Main heading - centered like in image */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-[-0.03em]">
              <span className="text-white">We put </span>
              <span className="text-blue-400">automation at </span>
              <span className="text-white">the center of</span>
              <br />
              <span className="text-blue-400">everything </span>
              <span className="text-white">we do.</span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg mt-8 font-light">
              Free Analysis • Personalized Transformation Roadmap
            </p>
          </div>

          {/* Clean form section */}
          <div className="max-w-xl mx-auto">
            {!isSubmitted ? (
              <div className="text-center">
                <p className="text-blue-400 text-xs font-medium uppercase tracking-widest mb-8">
                  FREE ANALYSIS
                </p>
                
                <div className="space-y-4">
                  <input
                    type="url"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="Your business website"
                    className="w-full px-6 py-4 bg-transparent border border-gray-700/30 rounded-full text-white placeholder-gray-600 focus:outline-none focus:border-blue-400/50 transition-all duration-300"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="w-full px-6 py-4 bg-transparent border border-gray-700/30 rounded-full text-white placeholder-gray-600 focus:outline-none focus:border-blue-400/50 transition-all duration-300"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleSubmit();
                      }
                    }}
                  />
                  <button
                    onClick={handleSubmit}
                    className="w-full px-6 py-4 rounded-full font-light border border-white text-white bg-transparent hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Get Roadmap
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center text-center space-y-6">
                {/* Document visual */}
                <div className="relative">
                  <div className="w-48 h-64 bg-gradient-to-br from-gray-800/20 to-gray-900/20 rounded-lg border border-gray-700/30 p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <FileText className="w-4 h-4 text-blue-400/60" />
                      <div className="h-1.5 w-16 bg-gray-700/30 rounded-full"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-1.5 w-full bg-gray-700/20 rounded-full"></div>
                      <div className="h-1.5 w-4/5 bg-gray-700/20 rounded-full"></div>
                      <div className="h-1.5 w-full bg-gray-700/20 rounded-full"></div>
                      <div className="h-1.5 w-3/4 bg-gray-700/20 rounded-full"></div>
                    </div>
                    <div className="mt-6 space-y-1.5">
                      <div className="h-6 w-full bg-blue-400/10 rounded border border-blue-400/20"></div>
                      <div className="h-6 w-full bg-gray-700/10 rounded border border-gray-700/20"></div>
                    </div>
                    {/* Animated checkmark overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center animate-pulse">
                        <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-3xl text-white font-light mb-2">
                    All set!
                  </h3>
                  <p className="text-gray-400 font-light">
                    Your personalized AI roadmap is heading to
                  </p>
                  <p className="text-blue-400 mt-1">{email}</p>
                </div>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setEmail('');
                    setWebsite('');
                  }}
                  className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                >
                  Submit another →
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default TransformationJourneySection;