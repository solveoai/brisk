import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

interface FooterSectionProps {
  onContactClick: () => void;
}

const FooterSection: React.FC<FooterSectionProps> = ({ onContactClick }) => {
  return (
    <div className="snap-always snap-center">
      <div className="relative h-screen min-h-screen w-full flex">
        <div className="w-full h-full">
          <div className="box-border w-full h-screen min-h-screen max-h-screen flex flex-col justify-between text-white tracking-[-0.04em] leading-tight px-4 md:px-8 lg:px-12 pt-12 pb-6 overflow-hidden">
            
            {/* Header Section - Top positioned */}
            <div className="w-full h-fit flex flex-row justify-between items-start">
              <div className="w-full h-fit flex flex-col gap-1">
                <p className="w-full lg:text-5xl text-4xl text-left leading-tight">
                  <span className="text-white">Accelerate your </span>
                  <span className="text-blue-400">automation adoption </span>
                  <span className="text-white">journey.</span>
                </p>
              </div>
              
              {/* Brisk Logo - top right positioned */}
              <div className="hidden lg:block">
                <div className="flex items-center text-white">
                  <Logo className="w-44 h-10" variant="light" />
                  <span className="text-base font-medium whitespace-nowrap">brisk automations</span>
                </div>
              </div>
            </div>

            {/* Footer Content - Positioned at bottom */}
            <div className="w-full">
              {/* Desktop Footer */}
              <div className="w-full hidden lg:flex h-fit flex-row items-end justify-between tracking-wider text-sm">
                
                {/* Left Column - Contact */}
                <div className="flex flex-col">
                  <p className="font-medium text-gray-400 uppercase text-xs tracking-wide mb-2">CONTACT</p>
                  <a 
                    target="_blank" 
                    className="cursor-pointer decoration-0 mb-4" 
                    href="mailto:info@briskautomations.com"
                  >
                    <p className="text-white cursor-pointer hover:text-white/80 text-base">
                      info@briskautomations.com
                    </p>
                  </a>
                  
                  <div className="flex flex-row gap-3">
                    <button 
                      onClick={onContactClick}
                      className="flex cursor-pointer items-center gap-1 px-4 py-2 border border-white rounded-full text-white bg-transparent hover:bg-blue-400 hover:border-blue-400 transition-all duration-300 text-sm whitespace-nowrap"
                    >
                      Get In Touch
                      <ArrowUpRight size={16} className="transition-all duration-300" />
                    </button>
                    <a target="_blank" className="cursor-pointer" href="#careers">
                      <button className="flex items-center cursor-pointer gap-1 px-4 py-2 border border-white rounded-full text-white bg-transparent hover:bg-blue-400 hover:border-blue-400 transition-all duration-300 text-sm whitespace-nowrap">
                        Explore Careers
                        <ArrowUpRight size={16} className="transition-all duration-300" />
                      </button>
                    </a>
                  </div>
                </div>

                {/* Center Column - Terms & Privacy */}
                <div className="flex flex-col items-center gap-4">
                  <a target="_blank" className="cursor-pointer" href="#terms">
                    <p className="font-medium text-gray-400 uppercase hover:text-white transition-colors text-xs tracking-wide">
                      TERMS & CONDITIONS
                    </p>
                  </a>
                  <a target="_blank" className="cursor-pointer" href="#privacy">
                    <p className="font-medium text-gray-400 uppercase hover:text-white transition-colors text-xs tracking-wide">
                      PRIVACY POLICY
                    </p>
                  </a>
                </div>

                {/* Right Column - Social */}
                <div className="flex flex-col items-end">
                  <p className="font-medium text-gray-400 uppercase text-xs tracking-wide mb-2">FOLLOW</p>
                  <a 
                    target="_blank" 
                    className="cursor-pointer hover:opacity-80 transition-opacity mb-2" 
                    href="https://www.linkedin.com/company/brisk-automations"
                  >
                    <p className="font-medium text-gray-400 uppercase hover:text-white transition-colors text-xs tracking-wide">
                      LINKEDIN
                    </p>
                  </a>
                  <a 
                    target="_blank" 
                    className="cursor-pointer hover:opacity-80 transition-opacity" 
                    href="https://www.youtube.com/@briskautomations"
                  >
                    <p className="font-medium text-gray-400 uppercase hover:text-white transition-colors text-xs tracking-wide">
                      YOUTUBE
                    </p>
                  </a>
                </div>
              </div>

              {/* Mobile Footer */}
              <div className="w-full flex lg:hidden h-fit flex-col gap-8">
                
                <div className="flex flex-col gap-4">
                  <p className="font-medium text-gray-400 uppercase text-xs tracking-wide">CONTACT</p>
                  <a 
                    target="_blank" 
                    className="cursor-pointer decoration-0" 
                    href="mailto:info@briskautomations.com"
                  >
                    <p className="text-white cursor-pointer hover:text-white/80">
                      info@briskautomations.com
                    </p>
                  </a>
                  
                  <div className="flex flex-col gap-3">
                    <button 
                      onClick={onContactClick}
                      className="flex cursor-pointer items-center justify-center gap-2 px-6 py-3 border border-white rounded-full text-white bg-transparent hover:bg-blue-400 hover:border-blue-400 transition-all duration-300"
                    >
                      Get In Touch
                      <ArrowUpRight size={18} className="transition-all duration-300" />
                    </button>
                    <a target="_blank" className="cursor-pointer" href="#careers">
                      <button className="flex items-center justify-center cursor-pointer gap-2 px-6 py-3 border border-white rounded-full text-white bg-transparent hover:bg-blue-400 hover:border-blue-400 transition-all duration-300 w-full">
                        Explore Careers
                        <ArrowUpRight size={18} className="transition-all duration-300" />
                      </button>
                    </a>
                  </div>
                </div>

                <div className="flex flex-row justify-between">
                  <div className="flex flex-col gap-2">
                    <p className="font-medium text-gray-400 uppercase text-xs tracking-wide">FOLLOW</p>
                    <a 
                      target="_blank" 
                      className="cursor-pointer hover:opacity-80" 
                      href="https://www.linkedin.com/company/brisk-automations"
                    >
                      <p className="font-medium text-gray-400 uppercase hover:text-white text-xs tracking-wide">LINKEDIN</p>
                    </a>
                    <a 
                      target="_blank" 
                      className="cursor-pointer hover:opacity-80" 
                      href="https://www.youtube.com/@briskautomations"
                    >
                      <p className="font-medium text-gray-400 uppercase hover:text-white text-xs tracking-wide">YOUTUBE</p>
                    </a>
                  </div>
                  
                  <div className="flex flex-col gap-2 items-end">
                    <a target="_blank" className="cursor-pointer" href="#terms">
                      <p className="font-medium text-gray-400 uppercase hover:text-white text-xs tracking-wide">TERMS</p>
                    </a>
                    <a target="_blank" className="cursor-pointer" href="#privacy">
                      <p className="font-medium text-gray-400 uppercase hover:text-white text-xs tracking-wide">PRIVACY</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;