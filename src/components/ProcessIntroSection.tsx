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
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-[-0.03em]">
              <span className="text-white">We put </span>
              <span className="text-blue-400">automation at </span>
              <span className="text-white">the center of</span>
              <br />
              <span className="text-blue-400">everything </span>
              <span className="text-white">we do.</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mt-8 font-light">
              Your trusted partner in becoming an automation-first manufacturing company.
            </p>
          </div>

          {/* Clean form section with document visual */}
          <div className="max-w-4xl mx-auto">
            {!isSubmitted ? (
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                
                {/* Left side - Form */}
                <div className="flex-1 w-full">
                  <div className="mb-6">
                    <p className="text-blue-400 text-xs font-medium uppercase tracking-widest mb-4">
                      FREE ANALYSIS
                    </p>
                    <h3 className="text-2xl md:text-3xl text-white font-light leading-tight">
                      Get your personalized transformation roadmap
                    </h3>
                  </div>

                  <div className="space-y-3">
                    <input
                      type="url"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      placeholder="Your business website"
                      className="w-full px-5 py-3.5 bg-transparent border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 transition-all duration-300 text-sm"
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      className="w-full px-5 py-3.5 bg-transparent border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 transition-all duration-300 text-sm"
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
                        w-full px-6 py-3.5 rounded-lg font-light text-sm transition-all duration-300 flex items-center justify-center gap-2
                        ${email && website
                          ? 'bg-blue-400/10 text-blue-400 border border-blue-400/30 hover:bg-blue-400/20'
                          : 'bg-transparent text-gray-600 border border-gray-700/30 cursor-not-allowed'
                        }
                      `}
                    >
                      Get Roadmap
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Right side - Document visual */}
                <div className="hidden lg:block">
                  <div className="relative">
                    {/* Document representation */}
                    <div className="w-64 h-80 bg-gradient-to-br from-gray-800/20 to-gray-900/20 rounded-lg border border-gray-700/30 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <FileText className="w-5 h-5 text-blue-400/60" />
                        <div className="h-2 w-20 bg-gray-700/30 rounded-full"></div>
                      </div>
                      <div className="space-y-3">
                        <div className="h-2 w-full bg-gray-700/20 rounded-full"></div>
                        <div className="h-2 w-4/5 bg-gray-700/20 rounded-full"></div>
                        <div className="h-2 w-full bg-gray-700/20 rounded-full"></div>
                        <div className="h-2 w-3/4 bg-gray-700/20 rounded-full"></div>
                        <div className="h-2 w-5/6 bg-gray-700/20 rounded-full"></div>
                      </div>
                      <div className="mt-8 space-y-2">
                        <div className="h-8 w-full bg-blue-400/10 rounded border border-blue-400/20"></div>
                        <div className="h-8 w-full bg-gray-700/10 rounded border border-gray-700/20"></div>
                      </div>
                    </div>
                    {/* Floating accent */}
                    <div className="absolute -top-2 -right-2 w-16 h-16 bg-blue-400/5 rounded-lg"></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center max-w-md mx-auto">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-blue-400/10 mb-6">
                  <FileText className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl text-white font-light mb-3">
                  Check your inbox
                </h3>
                <p className="text-gray-400 font-light">
                  Your AI transformation roadmap is on its way to {email}
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default TransformationJourneySection;