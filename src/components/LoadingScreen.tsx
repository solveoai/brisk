import React, { useEffect, useState } from 'react';
import Logo from './Logo';

interface LoadingScreenProps {
  onComplete: () => void;
}

type Phase = 'fadeIn' | 'moveToHeader' | 'fadeOut';

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<Phase>('fadeIn');
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    // 1) Fade in
    const t1 = setTimeout(() => setLogoVisible(true), 500);

    // 2) Move & shrink
    const t2 = setTimeout(() => setPhase('moveToHeader'), 1750);

    // 3) Fade out
    const t3 = setTimeout(() => setPhase('fadeOut'), 2750);

    // 4) Complete
    const t4 = setTimeout(onComplete, 3250);

    return () => [t1,t2,t3,t4].forEach(clearTimeout);
  }, [onComplete]);

  // Build up the class string based on phase + visibility
  const containerClasses = [
    'absolute transition-all duration-700 ease-in-out',
    logoVisible ? 'opacity-100' : 'opacity-0',
    phase === 'fadeIn' && 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-[3]',
    phase === 'moveToHeader' &&
      'top-4 left-4 md:left-8 lg:left-12 transform translate-x-0 translate-y-0 scale-100',
    phase === 'fadeOut' &&
      'top-4 left-4 md:left-8 lg:left-12 transform translate-x-0 translate-y-0 scale-100 opacity-0',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-gray-900" />
      <div className={containerClasses}>
        <Logo
          className="w-[8rem] h-auto"    /* adjust final size here */
          variant="light"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
