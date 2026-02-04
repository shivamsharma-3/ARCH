import React from 'react';
import DepthCard from '../components/DepthCard';
import { Database, Send, Workflow } from 'lucide-react';
import Button from '../components/Button';

const Services: React.FC = () => {
  const services = [
    {
      title: "Outbound Revenue Systems",
      icon: Send,
      whatIs: "End-to-end outbound system design and execution.",
      friction: "Manual prospecting, inconsistent outreach, low response rates, and an unreliable sales pipeline.",
      outcome: "A structured outbound system that consistently generates qualified sales conversations.",
      includes: [
        "Ideal customer profile and targeting logic",
        "Lead sourcing and list building",
        "Outreach sequencing and follow-ups",
        "CRM pipeline structure",
        "Performance tracking and optimization"
      ],
      who: "Founder-led B2B service companies looking for predictable outbound results."
    },
    {
      title: "CRM & Pipeline Setup",
      icon: Database,
      whatIs: "Revenue visibility and control.",
      friction: "Messy CRM data, unclear pipeline stages, and no reliable view of what is driving revenue.",
      outcome: "A clean, structured CRM where every lead and deal is tracked from first touch to close.",
      includes: [
        "CRM setup or restructuring",
        "Pipeline stages and automation",
        "Lead and deal tracking",
        "Reporting and revenue visibility"
      ],
      who: "Growing B2B teams with 10+ employees."
    },
    {
      title: "Revenue Ops Support",
      icon: Workflow,
      whatIs: "Ongoing system ownership and stability.",
      friction: "Revenue systems that break when tools change or key people leave.",
      outcome: "A stable, well-maintained revenue infrastructure without hiring an internal operations team.",
      includes: [
        "Ongoing system monitoring",
        "Tool integrations and improvements",
        "Process documentation",
        "Continuous optimization"
      ],
      who: "Agencies and SaaS teams that need long-term operational stability."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-bold tracking-tighter mb-4">Infrastructure-Grade Services.</h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-medium">
          We design, implement, and operate outbound revenue systems that produce consistent, measurable results for B2B companies.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <DepthCard key={i} className="h-full">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-6 transition-transform duration-500">
              <service.icon className="w-6 h-6 text-teal-400" />
            </div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold">{service.title}</h2>
              <p className="text-xs text-teal-500/60 font-mono mt-1 font-bold uppercase tracking-wider">{service.whatIs}</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold block mb-1">The Friction</span>
                <p className="text-sm text-neutral-400 font-medium">{service.friction}</p>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-teal-500/70 font-bold block mb-1">The Outcome</span>
                <p className="text-sm text-white font-medium">{service.outcome}</p>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold block mb-1">Includes</span>
                <ul className="mt-1 space-y-1">
                  {service.includes.map((item, idx) => (
                    <li key={idx} className="text-[11px] text-neutral-300 flex items-center gap-2">
                      <div className="w-1 h-1 bg-teal-500/40 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold block mb-1">Ideal For</span>
                <p className="text-sm text-neutral-400 font-medium">{service.who}</p>
              </div>
            </div>
          </DepthCard>
        ))}
      </div>

      {/* Audit CTA Block with Trust Signals */}
      <div className="mt-10 p-10 rounded-[2.5rem] bg-[#0d0d0f] md:bg-neutral-900/40 border border-white/5 md:backdrop-blur-xl flex flex-col items-center gap-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-3xl font-bold mb-3">Start with a Revenue System Audit</h3>
            <p className="text-neutral-400 font-medium leading-relaxed">
              All engagements begin with a system audit to define scope, priorities, and fit.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Button to="/contact">Request System Audit</Button>
            <p className="text-[9px] text-neutral-600 uppercase tracking-widest font-black">No retainers discussed before the audit.</p>
          </div>
        </div>

        {/* Subtle Trust Signals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/5 w-full">
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
    </div>
  );
};

export default Services;