import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

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
        <div className="w-full max-w-7xl px-4 md:px-8 lg:px-12 py-20">
          {/* Main heading section */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl lg:text-7xl text-center leading-tight tracking-[-0.04em]">
              <span className="text-white">We spend our days guiding companies</span>
              <br />
              <span className="text-white">through our 3-step </span>
              <span className="text-blue-400">AI Transformation </span>
              <span className="text-white">Journey.</span>
            </h2>
          </div>

          {/* Lead capture section */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-b from-gray-900/50 to-gray-900/30 rounded-3xl p-8 md:p-12 border border-gray-800">
              {!isSubmitted ? (
                <>
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 mb-4">
                      <Sparkles className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">
                        Free Analysis
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl text-white font-light mb-3">
                      Get your personalized transformation roadmap
                    </h3>
                    <p className="text-gray-400">
                      We'll analyze your business and send you a custom AI integration strategy
                    </p>
                  </div>

                  <div className="space-y-4 max-w-md mx-auto">
                    <input
                      type="url"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      placeholder="Your business website"
                      className="w-full px-6 py-4 bg-black/50 border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors"
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      className="w-full px-6 py-4 bg-black/50 border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors"
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
                        w-full px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2
                        ${email && website
                          ? 'bg-blue-500 text-white hover:bg-blue-400 transform hover:scale-[1.02]'
                          : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                        }
                      `}
                    >
                      Get My Roadmap
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-center text-gray-600 text-sm mt-6">
                    No spam. Unsubscribe anytime.
                  </p>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4">
                    <Sparkles className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl text-white font-light mb-3">
                    Analysis in progress!
                  </h3>
                  <p className="text-gray-400">
                    We'll send your personalized roadmap to {email} within 24 hours.
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