import React from 'react';
import Button from '../components/Button';
import DepthCard from '../components/DepthCard';
import SystemFlow from '../components/SystemFlow';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-12 pb-12">
      {/* Hero Section */}
      <section className="relative px-6 pt-12 pb-8 flex flex-col items-center text-center max-w-6xl mx-auto perspective-2000">
        
        {/* Eyebrow / Context Line */}
        <div className="group relative inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-teal-500/20 bg-[#0a1211] md:bg-teal-500/5 md:backdrop-blur-xl mb-8 overflow-hidden transition-all duration-700 hover:border-teal-500/40 hover:bg-teal-500/10 animate-reveal-up shadow-[0_0_40px_rgba(45,212,191,0.05)]">
          <div className="relative w-2 h-2">
            <div className="absolute inset-0 bg-teal-500 rounded-full animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite] opacity-30"></div>
            <div className="relative w-2 h-2 bg-teal-500 rounded-full shadow-[0_0_10px_rgba(45,212,191,1)]"></div>
          </div>
          <span className="text-teal-400 text-[11px] font-black tracking-[0.3em] uppercase leading-none antialiased">
            FOR B2B SERVICE COMPANIES
          </span>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-500/40 to-transparent"></div>
        </div>

        {/* Primary Headline */}
        <h3 className="relative text-6xl md:text-8xl lg:text-[80px] font-extrabold tracking-tighter leading-[0.9] mb-8 text-white animate-reveal-up" style={{ animationDelay: '0.2s' }}>
          <span className="inline-block drop-shadow-[0_10px_20_rgba(0,0,0,0.5)]">We Build Predictable</span><br />
          <span className="text-neutral-500 drop-shadow-[0_10px_20_rgba(0,0,0,0.5)]">Outbound Revenue Systems</span>
        </h3>

        {/* Subheadline */}
        <p className="text-lg md:text-2xl text-neutral-500 max-w-4xl mb-4 font-light tracking-tight leading-relaxed animate-reveal-up" style={{ animationDelay: '0.4s' }}>
          We design and operate outbound revenue infrastructure that helps B2B service companies consistently book qualified sales conversations - without relying on referrals, ads, or guesswork.
        </p>

        {/* Supporting Clarification Line */}
        <p className="text-sm md:text-base text-neutral-600 max-w-2xl mb-12 font-medium tracking-wide uppercase animate-reveal-up" style={{ animationDelay: '0.5s' }}>
          Lead sourcing, outreach, CRM, and pipeline <br/> engineered as one system.
        </p>

        {/* What to expect block */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full mb-12 animate-reveal-up" style={{ animationDelay: '0.7s' }}>
          {[
            { label: "Duration", val: "30–45 minute system review" },
            { label: "Diagnosis", val: "Clear diagnosis of outbound setup" },
            { label: "Deliverable", val: "Written summary with next steps" },
            { label: "Commitment", val: "No obligation to proceed" }
          ].map((item, i) => (
            <div key={i} className="px-6 py-4 rounded-2xl bg-white/[0.02] border border-white/5 text-left shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="text-[9px] font-black text-teal-500/50 uppercase tracking-widest mb-1">{item.label}</div>
              <div className="text-sm text-neutral-300 font-medium">{item.val}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Practice Section */}
      <section className="px-6 max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
              What this looks like in practice.
            </h2>
            <p className="text-neutral-400 text-lg font-medium leading-relaxed">
              We don't sell hype or one-off campaigns. We build the operational plumbing required to sustain growth.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Define", desc: "Identify your ideal customers with architectural precision." },
            { title: "Build", desc: "Construct outbound systems to reach them at scale." },
            { title: "Automate", desc: "Deploy follow-up logic and pipeline tracking nodes." },
            { title: "Book", desc: "Generate qualified sales conversations consistently." }
          ].map((card, i) => (
            <DepthCard key={i}>
              <div className="text-[10px] font-black text-teal-500/40 mb-4 uppercase tracking-[0.3em]">Module 0{i+1}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{card.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-medium">
                {card.desc}
              </p>
            </DepthCard>
          ))}
        </div>
      </section>

      {/* Operating Principles Section */}
      <section className="px-6 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6 text-white">
              How ARCH operates.
            </h2>
            <p className="text-neutral-400 text-lg font-medium mb-8 leading-relaxed max-w-md">
              We approach revenue as an engineering discipline. Our principles dictate every technical decision we make for our partners.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { t: "Systems before tactics", d: "Isolated campaigns fail; unified systems compound." },
              { t: "Clarity before scale", d: "Fix the conversion logic before turning up the volume." },
              { t: "Infrastructure over experiments", d: "Build permanent assets, not temporary hacks." },
              { t: "Long-term over quick wins", d: "Sustainable pipeline beats sporadic bursts." }
            ].map((p, i) => (
              <div key={i} className="p-6 rounded-2xl border border-white/5 bg-neutral-900/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <h4 className="text-white font-bold text-sm mb-2">{p.t}</h4>
                <p className="text-neutral-500 text-xs leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pipeline Architecture Section */}
      <section className="px-6 max-w-7xl mx-auto w-full py-12 bg-neutral-900/10 rounded-[4rem] border border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-teal-500/[0.01] pointer-events-none" />
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold tracking-tight text-white mb-2">Revenue Pipeline Architecture</h2>
          <p className="text-neutral-500 max-w-lg mx-auto text-sm font-medium italic">
            Modular nodes connected by logic-driven operational triggers.
          </p>
        </div>
        <SystemFlow />
      </section>

      {/* Good Fit / Not a Fit Section */}
      <section className="px-6 max-w-6xl mx-auto w-full">
        <div className="p-12 rounded-[3rem] border border-white/5 bg-neutral-900 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <h2 className="text-3xl font-bold text-center mb-10 text-white">Operational Fit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-teal-400 font-black text-[11px] uppercase tracking-[0.3em]">Good Fit</h3>
              <ul className="space-y-4">
                {["B2B service companies with high contract values", "Founder-led or small specialized sales teams", "Teams seeking a predictable, managed outbound channel"].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start text-neutral-300 font-medium">
                    <span className="text-teal-500 text-xl font-bold">/</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-neutral-600 font-black text-[11px] uppercase tracking-[0.3em]">Not a Fit</h3>
              <ul className="space-y-4">
                {["Growth models primarily focused on paid ads", "Early-stage ventures with no validated offer", "Firms looking for short-term lead lists or tactics"].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start text-neutral-500 font-medium">
                    <span className="text-neutral-700 text-xl font-bold">-</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-6 py-10 flex flex-col items-center text-center">
        <div className="w-full max-w-4xl p-12 md:p-16 rounded-[3rem] bg-gradient-to-b from-neutral-900/40 to-neutral-900/10 border border-white/5 relative overflow-hidden group shadow-[0_50px_100px_rgba(0,0,0,0.4)]">
          <div className="absolute inset-0 bg-teal-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <h3 className="text-4xl md:text-6xl font-extrabold mb-6 text-white relative z-10 tracking-tighter max-w-2xl mx-auto leading-[1.1]">
            Let’s build a revenue system that works.
          </h3>
          <div className="flex flex-col items-center gap-4 relative z-10 mb-12">
            <p className="text-xs text-neutral-500 uppercase tracking-widest font-bold">
              No contracts. No retainers discussed before the audit.
            </p>
          </div>

          {/* Subtle Trust Signals */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/5 relative z-10 text-left">
            <div>
              <p className="text-xs text-neutral-400 font-medium leading-relaxed">
                Built for B2B service companies with an established outbound motion. Not a fit for early-stage experiments or one-off campaigns.
              </p>
            </div>
            <div>
              <p className="text-xs text-neutral-400 font-medium leading-relaxed">
                Every engagement begins with a system audit. No contracts. No retainers discussed before the audit.
              </p>
            </div>
            <div>
              <p className="text-xs text-neutral-400 font-medium leading-relaxed">
                Our work focuses on building systems that produce consistent, repeatable sales conversations.
              </p>
            </div>
            <div>
              <p className="text-xs text-neutral-400 font-medium leading-relaxed">
                All submissions are reviewed manually. Your information is never shared.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;