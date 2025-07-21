import React from 'react';

interface PartnershipSectionProps {
  onContactClick: () => void;
}

const PartnershipSection: React.FC<PartnershipSectionProps> = ({ onContactClick }) => {
  return (
    <div className="snap-always snap-center min-h-screen">
      <div className="relative h-screen w-full flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center gap-16">
            {/* Main text with elegant typography */}
            <h2 className="text-center">
              <span className="block text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[0.9]">
                <span className="text-white">The best </span>
                <span className="text-blue-400 font-normal">automation</span>
                <span className="text-white"> systems</span>
              </span>
              <span className="block text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[0.9] mt-2">
                <span className="text-white">are built </span>
                <span className="text-blue-400 font-normal">side by side</span>
                <span className="text-white">.</span>
              </span>
            </h2>
            
            {/* Minimalist CTA */}
            <button
              onClick={onContactClick}
              className="group relative overflow-hidden rounded-full"
            >
              {/* Animated background - also rounded */}
              <div className="absolute inset-0 bg-white rounded-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              
              {/* Button content */}
              <div className="relative flex items-center gap-4 px-8 py-4 border border-white/30 rounded-full">
                <span className="text-lg font-light tracking-wide text-white group-hover:text-gray-900 transition-colors duration-500">
                  Start a conversation
                </span>
                
                {/* Custom arrow with animation */}
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                >
                  <path 
                    d="M7 17L17 7M17 7H7M17 7V17" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="text-white group-hover:text-gray-900 transition-colors duration-500"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipSection;