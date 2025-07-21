import React from 'react';
import { useEffect, useState } from 'react';
import Logo from './Logo';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [animationPhase, setAnimationPhase] = useState('logoFadeIn');
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    // Logo fade in
    const timer1 = setTimeout(() => {
      setLogoVisible(true);
    }, 300);

    // Logo animation sequence
    const timer2 = setTimeout(() => {
      setAnimationPhase('moveToHeader');
    }, 1500);

    const timer3 = setTimeout(() => {
      setAnimationPhase('fadeOut');
    }, 1000);

    const timer4 = setTimeout(() => {
      onComplete();
    }, 5500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Blue background - matching hero */}
      <div className="absolute inset-0 bg-gray-900" />

      {/* Brisk Automations Logo - Using actual Logo component */}
      <div 
        className={`absolute transition-all duration-700 ease-in-out ${
          logoVisible ? 'opacity-100' : 'opacity-0'
        } ${
          animationPhase === 'logoFadeIn' ? 
            'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 translate-x-8 scale-150' :
          animationPhase === 'moveToHeader' ?
            'top-4 left-4 md:left-8 lg:left-12 transform translate-x-0 translate-y-0 scale-100' :
            'top-4 left-4 md:left-8 lg:left-12 transform translate-x-0 translate-y-0 scale-100 opacity-0'
        }`}
      >
        <Logo 
          className="w-48 h-12" 
          variant="light"
          animated={logoVisible && animationPhase === 'logoFadeIn'}
        />
      </div>

    </div>
  );
};

export default LoadingScreen;