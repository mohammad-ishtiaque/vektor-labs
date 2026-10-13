import React, { useState } from 'react';
import { clientTestimonials } from '../data/testimonialsData';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

export const TestimonialsSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () => {
    setActiveIdx((i) => (i === 0 ? clientTestimonials.length - 1 : i - 1));
  };

  const next = () => {
    setActiveIdx((i) => (i === clientTestimonials.length - 1 ? 0 : i + 1));
  };

  const current = clientTestimonials[activeIdx];

  return (
    <section id="testimonials" className="py-16 sm:py-24 md:py-28 bg-[#0A0B0D] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-6">
            <div className="space-y-2.5 sm:space-y-3 max-w-xl">
              <div className="text-xs font-mono text-[#E26D35] uppercase tracking-wider font-bold">
                CLIENT CREDIBILITY
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-['Syne'] text-[#ECEAE5] tracking-tight">
                Executive Endorsements
              </h2>
            </div>
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <button
                onClick={prev}
                className="p-2.5 sm:p-3 rounded-lg border border-white/10 hover:border-white/30 text-[#9E9C96] hover:text-white transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
                aria-label="Previous endorsement"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-[#73716B] px-2 sm:px-3">
                0{activeIdx + 1} / 0{clientTestimonials.length}
              </span>
              <button
                onClick={next}
                className="p-2.5 sm:p-3 rounded-lg border border-white/10 hover:border-white/30 text-[#9E9C96] hover:text-white transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
                aria-label="Next endorsement"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Reveal>

        {/* Featured Typographic Quote Card with Reveal */}
        <Reveal delay={100} y={28}>
          <div className="p-6 sm:p-10 lg:p-14 rounded-2xl border border-white/[0.08] bg-[#101114] space-y-6 sm:space-y-10">
            <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4 text-xs font-mono text-[#73716B]">
              <span className="truncate">PARTNER: {current.projectRef.toUpperCase()}</span>
              <span className="text-[#E26D35] font-bold shrink-0">{current.metricBadge}</span>
            </div>

            <blockquote className="text-lg sm:text-2xl lg:text-3xl font-normal text-[#ECEAE5] font-['Syne'] leading-relaxed">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            <div className="pt-6 sm:pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-base sm:text-lg font-bold text-white font-['Syne']">
                  {current.author}
                </div>
                <div className="text-xs font-mono text-[#9E9C96] mt-0.5">
                  {current.role} · <span className="text-[#ECEAE5] font-semibold">{current.company}</span>
                </div>
              </div>

              <div className="text-[11px] sm:text-xs font-mono text-[#73716B]">
                VERIFIED EXECUTIVE REVIEW
              </div>
            </div>
          </div>
        </Reveal>

        {/* Compliance Ribbon */}
        <Reveal delay={200}>
          <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3 sm:gap-6 text-[10px] sm:text-xs font-mono text-[#73716B]">
            <span>SOC2 TYPE II AUDITED</span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span>PCI-DSS LEVEL 1 READY</span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span>HIPAA BAA COMPLIANT</span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span>100% IP REVERSION</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
