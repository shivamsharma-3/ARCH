import React from 'react';

interface DepthCardProps {
  children: React.ReactNode;
  className?: string;
}

const DepthCard: React.FC<DepthCardProps> = ({ children, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="relative p-8 rounded-2xl bg-neutral-900 md:bg-neutral-900/30 border border-white/5 md:backdrop-blur-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        {/* Inner subtle glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-10" />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DepthCard;