import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  animated?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "w-36 h-8", variant = 'light', animated = false }) => {
  const brandColor = variant === 'light' ? '#ffffff' : '#1f2937';
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex flex-col gap-1">
        <div 
          className={`w-8 h-3 rounded-r-full ${animated ? 'animate-slide-in-blade-1' : ''}`}
          style={{
            backgroundColor: brandColor,
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 53.2% 100%)',
            transform: animated ? 'translateX(100%)' : 'translateX(0)',
            animation: animated ? 'slide-in-blade 0.5s ease-out forwards' : 'none'
          }}
        />
        <div 
          className={`w-8 h-3 rounded-r-full ${animated ? 'animate-slide-in-blade-2' : ''}`}
          style={{
            backgroundColor: brandColor,
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 53.2% 100%)',
            transform: animated ? 'translateX(100%)' : 'translateX(0)',
            animation: animated ? 'slide-in-blade 0.5s ease-out 0.2s forwards' : 'none'
          }}
        />
      </div>
      <div className="flex flex-col text-sm leading-tight lowercase">
        <div className="font-bold" style={{ color: brandColor }}>brisk</div>
        <div className="font-normal" style={{ color: brandColor }}>automations</div>
      </div>
      
      {animated && (
        <style jsx>{`
          @keyframes slide-in-blade {
            to {
              transform: translateX(0);
            }
          }
        `}</style>
      )}
    </div>
  );
};

export default Logo;