import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface PartnershipSectionProps {
  onContactClick: () => void;
}

const PartnershipSection: React.FC<PartnershipSectionProps> = ({ onContactClick }) => {
  return (
    <div className="snap-always snap-center min-h-screen">
      <div className="relative h-screen min-h-screen w-full flex">
        <div className="w-full h-full">
          <div className="box-border w-full h-screen min-h-screen flex flex-col snap-always snap-center justify-center items-center text-white tracking-[-0.04em] leading-[90%] gap-8 lg:gap-14 px-4 md:px-8 lg:px-12 relative">
            <div className="absolute top-0 left-0 w-full z-10 pt-8 flex flex-col items-center justify-center">
              <div></div>
            </div>

            <div className="relative w-full mt-8">
              <p className="text-4xl md:text-6xl lg:text-7xl text-center whitespace-pre-wrap w-full">
                <span className="text-white">The </span>
                <span className="text-white">best </span>
                <span className="text-blue-400">automation </span>
                <span className="text-white">systems </span>
                <br />
                <span className="text-white">are </span>
                <span className="text-white">built </span>
                <span className="text-blue-400">side </span>
                <span className="text-blue-400">by </span>
                <span className="text-blue-400">side.</span>
              </p>
            </div>

            <div className="w-full flex flex-row items-center justify-center">
              <div 
                onClick={onContactClick}
                className="flex cursor-pointer mt-3 items-center gap-1 px-9 py-3 lg:px-10 lg:py-4 border-2 border-white rounded-full text-white bg-transparent hover:bg-blue-50 hover:text-gray-900 transition-all duration-300"
              >
                <p className="text-3xl lg:text-4xl">Let's Partner Up</p>
                <ArrowUpRight size={34} className="mt-1 transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipSection;