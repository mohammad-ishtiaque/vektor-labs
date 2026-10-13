import React from 'react';
import { Reveal } from './Reveal';
import { useParallax } from '../hooks/useReveal';
import { ArrowUpRight } from 'lucide-react';

export const ClientWinsSection: React.FC = () => {
  const parallaxRef = useParallax(0.04);

  const wins = [
    {
      num: '01',
      title: '3x Faster Time-to-Market',
      subtitle: 'Velocity without compromise',
      proof: 'Ship in 6 weeks instead of 6 months',
      desc: 'Senior-only engineering squads. No juniors, no bureaucracy. We deploy production-ready software every 14 days.',
      impactMetric: '3x Faster Release',
    },
    {
      num: '02',
      title: '-40% Cloud Spend',
      subtitle: 'Architectural efficiency',
      proof: 'Average $1.4M saved per client annually',
      desc: 'We optimize database queries, edge caching, and memory at the kernel level. Scale traffic 10x without 10x cloud bills.',
      impactMetric: '$1.4M Avg. Saved',
    },
    {
      num: '03',
      title: '99.995% Production SLA',
      subtitle: 'Zero downtime revenue protection',
      proof: 'Continuous uptime across 50M+ daily events',
      desc: 'Fault-tolerant distributed systems designed to self-heal. Black Friday spikes and traffic surges clear seamlessly.',
      impactMetric: '99.995% Uptime',
    },
    {
      num: '04',
      title: 'Zero Rewrite Debt',
      subtitle: 'Built to last 5+ years',
      proof: '100% intellectual property ownership',
      desc: 'Strict TypeScript, modular architectures, and clean API contracts. Your internal team takes over with zero friction.',
      impactMetric: '100% IP Handover',
    },
  ];

  return (
    <section className="py-16 sm:py-24 md:py-28 bg-[#090A0C] border-t border-white/[0.08] relative overflow-hidden">
      {/* Subtle background parallax geometric layer */}
      <div
        ref={parallaxRef}
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] border border-white/[0.03] rounded-full pointer-events-none will-change-transform"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-6">
            <div className="space-y-2.5 sm:space-y-3 max-w-xl">
              <div className="text-xs font-mono text-[#E26D35] uppercase tracking-wider font-bold">
                COMMERCIAL VALUE CREATION
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-['Syne'] text-[#ECEAE5] tracking-tight text-balance">
                Where you win when you partner with us.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#9E9C96] max-w-sm leading-relaxed">
              We don&rsquo;t bill for hours; we deliver balance-sheet leverage. Here is what your company gains on day one.
            </p>
          </div>
        </Reveal>

        {/* 4-Column High-Impact Wins Grid with Staggered Reveals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {wins.map((win, idx) => (
            <Reveal key={win.num} delay={idx * 80} y={28}>
              <div className="h-full rounded-xl border border-white/[0.08] bg-[#101114] hover:border-white/25 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between space-y-6 sm:space-y-8 group hover:-translate-y-1">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-[#E26D35] font-bold">{win.num}</span>
                    <span className="text-[#73716B] text-[11px] sm:text-xs">{win.subtitle}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-['Syne'] text-[#ECEAE5] group-hover:text-white transition-colors">
                    {win.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#9E9C96] leading-relaxed">
                    {win.desc}
                  </p>
                </div>

                <div className="pt-4 sm:pt-6 border-t border-white/[0.06] space-y-1.5 font-mono">
                  <div className="text-xs sm:text-sm font-bold text-[#ECEAE5] font-['Syne']">
                    {win.proof}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[#E26D35]">
                    {win.impactMetric}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Action Row */}
        <Reveal delay={350}>
          <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-xs font-mono text-[#73716B]">
              READY TO ACCELERATE YOUR PRODUCT ROADMAP?
            </span>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#ECEAE5] hover:text-[#E26D35] transition-colors"
            >
              <span>Schedule Architecture Review</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
