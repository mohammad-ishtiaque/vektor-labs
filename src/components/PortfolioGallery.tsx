import React, { useState } from 'react';
import { Project } from '../types';
import { portfolioProjects } from '../data/portfolioData';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

interface PortfolioGalleryProps {
  onSelectProject: (project: Project) => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Enterprise SaaS',
    'Web Platform',
    'Mobile App',
    'UI/UX & Design',
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === selectedCategory);

  const marqueeProject = filteredProjects[0];
  const gridProjects = filteredProjects.slice(1);

  return (
    <section id="portfolio" className="py-16 sm:py-24 md:py-28 bg-[#0A0B0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-6">
            <div className="space-y-2.5 sm:space-y-3 max-w-xl">
              <div className="text-xs font-mono text-[#E26D35] uppercase tracking-wider font-bold">
                PROVEN CLIENT IMPACT
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-['Syne'] text-[#ECEAE5] tracking-tight">
                Selected Work
              </h2>
              <p className="text-xs sm:text-sm text-[#9E9C96] leading-relaxed">
                Real software solutions driving real commercial results. Click any case study to inspect technical details and metrics.
              </p>
            </div>

            {/* Segmented Filter (Responsive Scrollable on Mobile) */}
            <div className="flex items-center gap-1 p-1 bg-[#121316] border border-white/[0.08] rounded-lg overflow-x-auto max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                    selectedCategory === cat
                      ? 'bg-white text-[#0A0B0D] font-bold shadow-sm'
                      : 'text-[#9E9C96] hover:text-[#ECEAE5]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Marquee Featured Project Card */}
        {marqueeProject && (
          <Reveal delay={100} y={28}>
            <div
              onClick={() => onSelectProject(marqueeProject)}
              className="mb-8 sm:mb-12 rounded-2xl border border-white/[0.08] bg-[#101114] hover:border-white/20 transition-all duration-300 p-5 sm:p-8 lg:p-12 cursor-pointer group hover:-translate-y-1"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
                {/* Left Column */}
                <div className="lg:col-span-5 space-y-4 sm:space-y-5">
                  <div className="text-xs font-mono text-[#73716B] flex flex-wrap items-center gap-2">
                    <span className="text-[#E26D35] font-bold">{marqueeProject.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{marqueeProject.client}</span>
                    <span aria-hidden="true">·</span>
                    <span>{marqueeProject.year}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-['Syne'] text-[#ECEAE5] group-hover:text-white transition-colors">
                    {marqueeProject.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#9E9C96] leading-relaxed">
                    {marqueeProject.tagline}
                  </p>

                  {/* Quantitative Impact Numbers */}
                  <div className="pt-3 sm:pt-4 border-t border-white/[0.08] grid grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <div className="text-2xl sm:text-3xl font-extrabold font-['Syne'] text-[#ECEAE5]">
                        {marqueeProject.impactMetrics[0].value}
                      </div>
                      <div className="text-[10px] sm:text-xs text-[#73716B] font-mono mt-0.5">
                        {marqueeProject.impactMetrics[0].label}
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-extrabold font-['Syne'] text-[#E26D35]">
                        {marqueeProject.impactMetrics[1].value}
                      </div>
                      <div className="text-[10px] sm:text-xs text-[#73716B] font-mono mt-0.5">
                        {marqueeProject.impactMetrics[1].label}
                      </div>
                    </div>
                  </div>

                  <div className="text-[11px] sm:text-xs font-mono text-[#73716B] pt-1 truncate">
                    STACK: <span className="text-[#9E9C96]">{marqueeProject.techStack.slice(0, 4).join(' · ')}</span>
                  </div>

                  <div className="inline-flex items-center gap-2 text-xs font-bold text-[#ECEAE5] group-hover:text-white pt-2">
                    <span>Inspect Case Study</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Right Column: Visual Pipeline Preview */}
                <div className="lg:col-span-7 bg-[#090A0C] border border-white/[0.06] rounded-xl p-4 sm:p-6 lg:p-8 space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-[#73716B] border-b border-white/[0.06] pb-2.5 sm:pb-3">
                    <span>SYSTEM TOPOLOGY</span>
                    <span>P99: 18ms</span>
                  </div>

                  <div className="space-y-2 sm:space-y-2.5 py-1 sm:py-2 font-mono text-[11px] sm:text-xs">
                    <div className="p-2.5 sm:p-3 rounded bg-white/[0.02] border border-white/[0.04] flex items-center justify-between">
                      <span className="text-[#ECEAE5]">INGRESS & EDGE ROUTING</span>
                      <span className="text-[#E26D35]">50M+ JOBS/DAY</span>
                    </div>
                    <div className="p-2.5 sm:p-3 rounded bg-white/[0.02] border border-white/[0.04] flex items-center justify-between">
                      <span className="text-[#ECEAE5]">REDIS STREAM WORKER POOL</span>
                      <span className="text-[#ECEAE5]">18ms MEDIAN EXEC</span>
                    </div>
                    <div className="p-2.5 sm:p-3 rounded bg-white/[0.02] border border-white/[0.04] flex items-center justify-between">
                      <span className="text-[#ECEAE5]">REACTIVE CANVAS STATE</span>
                      <span className="text-emerald-400">60 FPS LOCKED</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-[#73716B] pt-2 border-t border-white/[0.06]">
                    <span>SHIPPED IN {marqueeProject.duration.toUpperCase()}</span>
                    <span className="text-[#E26D35] flex items-center gap-1 font-semibold">
                      <span>View Specs</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* Secondary Projects Grid with Staggered Reveals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {gridProjects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 60} y={24}>
              <div
                onClick={() => onSelectProject(project)}
                className="h-full rounded-xl border border-white/[0.08] bg-[#101114] hover:border-white/20 transition-all duration-300 p-5 sm:p-8 flex flex-col justify-between space-y-5 sm:space-y-6 cursor-pointer group hover:-translate-y-1"
              >
                <div className="space-y-2.5 sm:space-y-3">
                  <div className="text-xs font-mono text-[#73716B] flex flex-wrap items-center gap-2">
                    <span className="text-[#E26D35] font-bold">{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.client}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-['Syne'] text-[#ECEAE5] group-hover:text-white transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#9E9C96] leading-relaxed line-clamp-2">
                    {project.tagline}
                  </p>
                </div>

                {/* Quantified impact numbers */}
                <div className="pt-3 sm:pt-4 border-t border-white/[0.08] space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between font-mono">
                    <div>
                      <span className="text-xl sm:text-2xl font-bold font-['Syne'] text-[#ECEAE5] block">
                        {project.impactMetrics[0].value}
                      </span>
                      <span className="text-[10px] text-[#73716B] uppercase">
                        {project.impactMetrics[0].label}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xl sm:text-2xl font-bold font-['Syne'] text-[#E26D35] block">
                        {project.impactMetrics[1].value}
                      </span>
                      <span className="text-[10px] text-[#73716B] uppercase">
                        {project.impactMetrics[1].label}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1">
                    <span className="font-mono text-[10px] sm:text-[11px] text-[#73716B] truncate pr-2">
                      {project.techStack.slice(0, 3).join(' · ')}
                    </span>
                    <span className="font-bold text-[#ECEAE5] group-hover:text-[#E26D35] flex items-center gap-1 transition-colors shrink-0">
                      <span>Inspect</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
