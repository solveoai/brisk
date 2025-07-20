import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = "w-36 h-8", variant = 'light' }) => {
  const fillColor = variant === 'light' ? '#ffffff' : '#1f2937';
  
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 400 80" 
      className={className}
    >
      <defs>
        <style>{`
          .logo-text {
            font-family: 'Inter', sans-serif;
            font-size: 28px;
            font-weight: 600;
            fill: ${fillColor};
          }
          .logo-icon {
            fill: #3b82f6;
          }
        `}</style>
      </defs>
      
      {/* Icon - Stylized gear/automation symbol */}
      <g className="logo-icon">
        <circle cx="40" cy="40" r="25" fill="none" stroke="#3b82f6" strokeWidth="3"/>
        <circle cx="40" cy="40" r="15" fill="#3b82f6"/>
        <rect x="32" y="10" width="16" height="8" rx="2"/>
        <rect x="32" y="62" width="16" height="8" rx="2"/>
        <rect x="10" y="32" width="8" height="16" rx="2"/>
        <rect x="62" y="32" width="8" height="16" rx="2"/>
        <rect x="55" y="17" width="12" height="6" rx="2" transform="rotate(45 61 20)"/>
        <rect x="13" y="17" width="12" height="6" rx="2" transform="rotate(-45 19 20)"/>
        <rect x="55" y="57" width="12" height="6" rx="2" transform="rotate(-45 61 60)"/>
        <rect x="13" y="57" width="12" height="6" rx="2" transform="rotate(45 19 60)"/>
      </g>
      
      {/* Text */}
      <text x="90" y="50" className="logo-text">brisk automations</text>
    </svg>
  );
};

export default Logo;