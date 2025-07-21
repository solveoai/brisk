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

          {/* Clean form section with document visual */}
          <div className="max-w-4xl mx-auto">
            {!isSubmitted ? (
              <div className="max-w-2xl mx-auto text-center">
                <p className="text-blue-400 text-xs font-medium uppercase tracking-widest mb-8">
                  FREE ANALYSIS
                </p>
                
                <div className="space-y-4 max-w-md mx-auto">
                  <input
                    type="url"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="Your business website"
                    className="w-full px-5 py-4 bg-transparent border border-gray-700/30 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-blue-400/50 transition-all duration-300"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="w-full px-5 py-4 bg-transparent border border-gray-700/30 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-blue-400/50 transition-all duration-300"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleSubmit();
                      }
                    }}
                  />
                  <button
                    onClick={handleSubmit}
                    className="w-full px-6 py-4 rounded-lg font-normal bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Get Roadmap
                    <ArrowUpRight size={18} />
                  </button>
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