import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

interface NavigationProps {
  onContactClick: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onContactClick }) => {
  return (
    <div className="absolute top-0 left-0 w-full z-10 pt-4 bg-transparent pointer-events-none">
      <div className="w-full px-4 md:px-8 lg:px-12 mx-auto flex justify-between items-center">
        <a className="w-fit cursor-pointer pointer-events-auto" href="/">
          <Logo className="w-48 h-12" variant="light" />
        </a>
        <div className="flex items-center">
          <button 
            onClick={onContactClick}
            className="flex items-center cursor-pointer gap-1 px-4 py-2 border border-white rounded-full text-white bg-transparent hover:bg-white hover:text-gray-900 transition-all duration-300 pointer-events-auto"
          >
            Get In Touch
            <ArrowUpRight size={18} className="mt-1 transition-all duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;