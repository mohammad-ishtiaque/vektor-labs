import React from 'react';
import { Reveal } from './Reveal';
import { useParallax } from '../hooks/useReveal';
import {
  ShieldCheck,
  Zap,
  Lock,
  GitBranch,
  Clock,
  CheckCircle2,
  Users2,
  FileCode2,
} from 'lucide-react';

export const EngagementSection: React.FC = () => {
  const parallaxRef = useParallax(0.03);

  const steps = [
    {
      step: 'STEP 01',
      title: 'Technical Scope & Architecture Audit',
      timeframe: 'Day 1 - 3 · Zero Obligation',
      summary:
        'We review your requirements, specs, or Figma files under mutual NDA. We map out database schemas, third-party APIs, and produce a fixed-scope sprint roadmap.',
      deliverables: [
        'Signed Mutual NDA',
        'System architecture blueprint',
        'Fixed sprint scope & transparent budget',
      ],
    },
    {
      step: 'STEP 02',
      title: 'Bi-Weekly Sprints & Staging Access',
      timeframe: 'Weeks 1 - 8 · 14-Day Deployments',
      summary:
        'Every two weeks, you receive a production-quality build on live staging. You test real features on your own devices with direct Slack access to the senior engineers.',
      deliverables: [
        'Live staging preview URLs every 14 days',
        'Direct Slack/Discord access to senior engineers',
        'Automated CI/CD test coverage',
      ],
    },
    {
      step: 'STEP 03',
      title: 'Production Launch & 100% IP Handover',
      timeframe: 'Final Milestone · Zero Lock-In',
      summary:
        'We deploy to your AWS/Google Cloud accounts. All git repositories, clean documentation, environment variables, and intellectual property belong 100% to your company.',
      deliverables: [
        '100% IP & Git repository transfer',
        'Terraform / Docker deployment scripts',
        '30-Day post-launch bug warranty included',
      ],
    },
  ];

  const guarantees = [
    {
      icon: Lock,
      title: '100% IP & Code Ownership',
      desc: 'All source code, design systems, and database schemas belong to you. Zero proprietary lock-in.',
    },
    {
      icon: Users2,
      title: 'Senior Squads Only',
      desc: 'No junior delegates. Your project is engineered by architects with 8+ years of production experience.',
    },
    {
      icon: Clock,
      title: 'Fixed Timelines & Weekly Syncs',
      desc: 'We commit to milestone dates in writing. Weekly video demos and live staging links ensure total visibility.',
    },
    {
      icon: ShieldCheck,
      title: '30-Day Post-Launch Warranty',
      desc: 'We support your production rollout with immediate bug fixes and telemetry monitoring at zero extra cost.',
    },
  ];

  return (
    <section id="process" className="py-16 sm:py-24 md:py-28 bg-[#090A0C] border-t border-white/[0.08] relative overflow-hidden">
      {/* Background Parallax Element */}
      <div
        ref={parallaxRef}
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#E26D35]/5 to-transparent rounded-full blur-3xl pointer-events-none will-change-transform"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div className="space-y-2.5 sm:space-y-3 max-w-xl">
              <div className="text-xs font-mono text-[#E26D35] uppercase tracking-wider font-bold">
                DELIVERY PROTOCOL
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-['Syne'] text-[#ECEAE5] tracking-tight">
                How We Deliver: Predictable, Transparent, Fast.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#9E9C96] max-w-sm leading-relaxed">
              Software buyers lose sleep over missed deadlines and bloated budgets. Here is how our 3-step delivery model protects your capital and timeline.
            </p>
          </div>
        </Reveal>

        {/* 3-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {steps.map((item, idx) => (
            <Reveal key={item.step} delay={idx * 100} y={24}>
              <div className="h-full rounded-2xl border border-white/[0.08] bg-[#101114] p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-white/20 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="px-2.5 py-1 rounded bg-[#E26D35]/10 text-[#E26D35] font-bold">
                      {item.step}
                    </span>
                    <span className="text-[#73716B] text-[11px] sm:text-xs">
                      {item.timeframe}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-['Syne'] text-[#ECEAE5]">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#9E9C96] leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-5 border-t border-white/[0.06] space-y-2">
                  <span className="text-[11px] font-mono text-[#73716B] uppercase tracking-wider block">
                    Key Deliverables:
                  </span>
                  <div className="space-y-1.5">
                    {item.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-[#ECEAE5]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E26D35] shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* 4 Buyer Guarantees Grid */}
        <Reveal delay={200}>
          <div className="rounded-2xl border border-white/[0.08] bg-[#0D0E11] p-6 sm:p-10">
            <div className="text-xs font-mono text-[#73716B] uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E26D35]" />
              <span>Commercial Safeguards · Guaranteed in Every Contract</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {guarantees.map((g, gIdx) => {
                const Icon = g.icon;
                return (
                  <div key={gIdx} className="space-y-2.5">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#E26D35]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold font-['Syne'] text-[#ECEAE5]">
                      {g.title}
                    </h4>
                    <p className="text-xs text-[#9E9C96] leading-relaxed">
                      {g.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
