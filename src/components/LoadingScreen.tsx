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
      setAnimationPhase('logoScale');
    }, 1000);

    const timer3 = setTimeout(() => {
      setAnimationPhase('moveToHeader');
    }, 2000);

    const timer4 = setTimeout(() => {
      setAnimationPhase('fadeOut');
    }, 2800);

    const timer5 = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Blue background - matching hero */}
      <div className="absolute inset-0 bg-gray-900" />

      {/* Brisk Automations Logo - Using actual Logo component */}
      <div 
        className={`absolute transition-all duration-1000 ease-in-out transform flex items-center justify-center ${
          logoVisible ? 'opacity-100' : 'opacity-0'
        } ${
          animationPhase === 'logoFadeIn' || animationPhase === 'logoScale' ? 
            'inset-0' :
          animationPhase === 'moveToHeader' ?
            'top-4 left-4 md:left-8 lg:left-12 translate-x-0 translate-y-0' :
            'top-4 left-4 md:left-8 lg:left-12 translate-x-0 translate-y-0 opacity-0'
        } ${
          animationPhase === 'logoScale' ? 'scale-150' : 
          animationPhase === 'moveToHeader' || animationPhase === 'fadeOut' ? 'scale-100' : 'scale-140'
        }`}
      >
        <Logo 
          className="w-64 h-16" 
          variant="light"
          animated={logoVisible && (animationPhase === 'logoFadeIn' || animationPhase === 'logoScale')}
        />
      </div>

    </div>
  );
};

export default LoadingScreen;