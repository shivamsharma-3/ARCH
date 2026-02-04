
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <header className="mb-10 text-center">
        <h1 className="text-6xl mb-6 brand-font">ARCH</h1>
        <div className="w-12 h-1 bg-teal-500 mx-auto rounded-full" />
      </header>

      <div className="space-y-16">
        {/* Section 1: Philosophy */}
        <section>
          <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-500 mb-6">The Philosophy</h2>
          <p className="text-3xl font-medium leading-tight text-neutral-200 mb-8 max-w-2xl">
            Revenue isn't an event. It's the output of a well-designed system.
          </p>
          <div className="mt-6 space-y-6 text-lg text-neutral-400 font-medium leading-relaxed max-w-2xl">
            <p>
              Most B2B organizations treat growth as a series of disconnected experiments—sporadic email blasts, one-off ad campaigns, or manual LinkedIn outreach. These tactics are fragile, lack compounding value, and fail to provide the visibility required for accurate forecasting.
            </p>
            <p>
              ARCH was founded to treat revenue infrastructure with the same rigor as systems engineering or corporate finance. We build the operational plumbing required to sustain growth beyond the reach of a founder’s personal network.
            </p>
          </div>
        </section>

        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Section 2: Why ARCH Exists */}
        <section>
          <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-500 mb-6">The Rationale</h2>
          <div className="space-y-6 text-lg text-neutral-400 font-medium leading-relaxed max-w-2xl">
            <p>
              The gap between sales strategy and technical execution is where growth stalls. Strategy lives in slides, while execution remains trapped in manual, unrecorded processes. 
            </p>
            <p>
              We exist to bridge this gap by building revenue assets—not just running campaigns. By centralizing data, outreach logic, and tracking into a unified system, we transform outbound from a variable cost into a predictable, scalable infrastructure.
            </p>
          </div>
        </section>

        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Section 3: How ARCH Works */}
        <section>
          <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-500 mb-6">The Methodology</h2>
          <div className="space-y-6 text-lg text-neutral-400 font-medium leading-relaxed max-w-2xl">
            <p>
              Our methodology is rooted in systems thinking. We audit your data environment, architect outreach workflows that handle complex branching scenarios, and configure CRM structures to serve as a single source of truth. 
            </p>
            <p>
              This is an iterative process of execution and refinement. We deploy closed feedback loops where every interaction informs the next, ensuring your outbound system evolves in lockstep with buyer behavior and market shifts.
            </p>
          </div>
        </section>

        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Section 4: What we are / aren't */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-500 mb-6">What we are</h3>
            <ul className="space-y-4 text-neutral-300 font-medium">
              <li className="flex gap-4">
                <span className="text-teal-500">/</span>
                <span>Architecturally focused</span>
              </li>
              <li className="flex gap-4">
                <span className="text-teal-500">/</span>
                <span>Logic-driven operators</span>
              </li>
              <li className="flex gap-4">
                <span className="text-teal-500">/</span>
                <span>Data-rigorous</span>
              </li>
              <li className="flex gap-4">
                <span className="text-teal-500">/</span>
                <span>Infrastructure-grade</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-500 mb-6">What we aren't</h3>
            <ul className="space-y-4 text-neutral-500 font-medium">
              <li className="flex gap-4">
                <span>-</span>
                <span>An agency selling ads</span>
              </li>
              <li className="flex gap-4">
                <span>-</span>
                <span>A source of AI hype</span>
              </li>
              <li className="flex gap-4">
                <span>-</span>
                <span>A short-term lead shop</span>
              </li>
              <li className="flex gap-4">
                <span>-</span>
                <span>A cosmetic fix</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 5: Long-term Positioning */}
        <section className="p-10 rounded-[3rem] bg-neutral-900/50 border border-white/5 text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <h2 className="text-2xl font-bold mb-4">Built for the long term.</h2>
          <p className="text-neutral-400 font-medium max-w-xl mx-auto leading-relaxed">
            We don't prioritize short-term sprints. We partner with organizations that view revenue systems as a critical long-term asset and require an execution partner to build and maintain them.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
