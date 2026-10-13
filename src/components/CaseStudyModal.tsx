import React from 'react';
import { Project } from '../types';
import { X, Check, ArrowRight } from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectForInquiry?: (project: Project) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onSelectForInquiry,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-[#101114] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-4 sm:my-8 max-h-[92vh] sm:max-h-[90vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="px-5 sm:px-8 py-4 sm:py-6 border-b border-white/[0.08] flex items-start justify-between gap-4 shrink-0 bg-[#0C0D0F]">
          <div className="space-y-1">
            <div className="text-xs font-mono text-[#73716B] flex flex-wrap items-center gap-2">
              <span className="text-[#E26D35] font-bold">{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>{project.client}</span>
              <span aria-hidden="true">·</span>
              <span>{project.year}</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-['Syne'] text-[#ECEAE5]">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[#73716B] hover:text-white hover:bg-white/[0.04] transition-colors shrink-0 min-w-[36px] min-h-[36px] flex items-center justify-center"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-8 lg:p-10 overflow-y-auto space-y-6 sm:space-y-10 divide-y divide-white/[0.08]">
          {/* 1. Quantified Results Strip */}
          <div className="space-y-3 sm:space-y-4">
            <div className="text-xs font-mono text-[#E26D35] uppercase tracking-wider font-bold">
              Quantified Impact Metrics
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-1 sm:pt-2">
              {project.impactMetrics.map((metric, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-['Syne'] text-[#ECEAE5]">
                    {metric.value}
                  </div>
                  <div className="text-xs font-bold text-[#ECEAE5]">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-[#73716B]">
                    {metric.subtext}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Challenge & Solution */}
          <div className="pt-6 sm:pt-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
            <div className="space-y-2.5 sm:space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#73716B]">
                The Architectural Challenge
              </h3>
              <p className="text-xs sm:text-sm text-[#9E9C96] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#73716B]">
                The Engineered Solution
              </h3>
              <p className="text-xs sm:text-sm text-[#9E9C96] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* 3. Deliverables & Highlights */}
          <div className="pt-6 sm:pt-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
            <div className="space-y-2.5 sm:space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#73716B]">
                Engineering Highlights
              </h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-2.5 text-xs text-[#ECEAE5]">
                    <Check className="w-3.5 h-3.5 text-[#E26D35] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#73716B]">
                Key Deliverables
              </h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {project.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-2.5 text-xs text-[#ECEAE5]">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 4. Tech Stack */}
          <div className="pt-6 sm:pt-10 space-y-2.5 sm:space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#73716B]">
              Core Production Stack
            </h4>
            <div className="text-xs font-mono text-[#9E9C96] flex flex-wrap gap-2">
              {project.techStack.join(' · ')}
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-6 bg-[#0C0D0F] border-t border-white/[0.08] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 shrink-0">
          <div className="text-xs font-mono text-[#73716B]">
            DELIVERY DURATION: <span className="text-[#ECEAE5]">{project.duration}</span>
          </div>

          <div className="flex items-center gap-3 justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-lg text-xs font-mono text-[#73716B] hover:text-white"
            >
              Close
            </button>
            <a
              href="#contact"
              onClick={() => {
                onClose();
                if (onSelectForInquiry) onSelectForInquiry(project);
              }}
              className="px-5 py-2.5 rounded-lg text-xs font-bold font-mono text-[#0A0B0D] bg-[#ECEAE5] hover:bg-white flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Build Project Like This</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
