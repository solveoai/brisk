import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  animated?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "w-36 h-8", variant = 'light', animated = false }) => {
  const brandColor = variant === 'light' ? '#ffffff' : '#1f2937';
  
  return (
    <div className={`logo ${className}`}>
      <div className="mark">
        <div className={`blade blade-1 ${animated ? 'animate' : ''}`} />
        <div className={`blade blade-2 ${animated ? 'animate' : ''}`} />
      </div>
      <div className="wordmark">
        <div className="name">brisk</div>
        <div className="tagline">automations</div>
      </div>
      
      <style jsx>{`
        .logo {
          display: flex;
          align-items: center;
          gap: 0.5em;
          --brand: ${brandColor};
          --blade-w: 1.65em;
          --blade-h: 0.9em;
          --mark-width: 1.2em; /* Reduced from default to make mark narrower */
          --cut: 53.2%;
          --gap: 0.1em;
          --slide-dur: 0.5s;
        }
        
        .mark {
          display: flex;
          flex-direction: column;
          gap: var(--gap);
          width: var(--mark-width);
        }
        
        .blade {
          width: 100%;
          height: var(--blade-h);
          background-color: var(--brand);
          clip-path: polygon(0 0, 100% 0, 100% 100%, var(--cut) 100%);
          border-radius: 0 1em 1em 0;
        }
        
        .blade.animate {
          transform: translateX(100%);
          animation: slide-in var(--slide-dur) ease-out forwards;
        }
        
        .blade-2.animate {
          animation-delay: 0.2s;
        }
        
        .wordmark {
          display: flex;
          flex-direction: column;
          text-transform: lowercase;
          font-size: 1em;
          line-height: 1em;
          opacity: ${animated ? '0' : '1'};
          animation: ${animated ? 'fade-in-text 0.6s ease-out 0.8s forwards' : 'none'};
        }
        
        .wordmark .name {
          font-weight: 700;
          color: var(--brand);
        }
        
        .wordmark .tagline {
          font-weight: 400;
          color: var(--brand);
        }
        
        @keyframes slide-in {
          to {
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-text {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Logo;