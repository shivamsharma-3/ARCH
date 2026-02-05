import React from 'react';
import { Check } from 'lucide-react';
import Button from '../components/Button';

const Success: React.FC = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Cinematic Background Glow specific to Success state */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />
      
      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center text-center animate-reveal-up">
        {/* Glowing Checkmark Icon Container */}
        <div className="mb-12 relative group">
          <div className="absolute inset-0 bg-teal-500/20 blur-2xl rounded-full scale-150" />
          <div className="w-20 h-20 rounded-full border-2 border-teal-500/30 flex items-center justify-center relative bg-[#050506] shadow-[0_0_30px_rgba(45,212,191,0.2)]">
            <Check className="w-10 h-10 text-teal-400" strokeWidth={2.5} />
            <div className="absolute inset-0 rounded-full border border-teal-400/50 animate-ping opacity-20" />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-6 leading-tight">
          Request Received.
        </h1>
        
        {/* Subtext */}
        <p className="text-neutral-400 text-lg md:text-xl font-medium leading-relaxed max-w-lg mb-12">
          A partner will review your current revenue infrastructure and contact you within 24 hours to schedule your audit.
        </p>

        {/* Action Button */}
        <div className="flex flex-col items-center gap-8">
          <Button to="/" className="px-12 py-5 text-base font-bold transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(255,255,255,0.1)]">
            Return Home
          </Button>
          
          {/* Subtle System Marker */}
          <div className="flex items-center gap-3 opacity-40">
            <div className="w-1 h-1 rounded-full bg-teal-500" />
            <span className="text-[9px] font-black text-neutral-500 uppercase tracking-[0.4em]">Submission Verified</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;