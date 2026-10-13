import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0B0D] border-t border-white/[0.08] pt-14 sm:pt-20 pb-10 sm:pb-12 text-[#9E9C96]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-12 pb-12 sm:pb-16 border-b border-white/[0.08]">
          {/* Brand Col */}
          <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2 space-y-3 sm:space-y-4">
            <a
              href="#"
              className="text-xl sm:text-2xl font-extrabold tracking-tighter text-[#ECEAE5] font-['Syne'] inline-block"
            >
              VEKTOR<span className="text-[#E26D35]">.</span>LABS
            </a>

            <p className="text-xs sm:text-sm text-[#73716B] max-w-sm leading-relaxed">
              Software engineering and digital product studio. We architect distributed backends,
              responsive web platforms, native mobile applications, and purpose-built design systems.
            </p>

            <div className="text-[11px] sm:text-xs font-mono text-[#595752] pt-1 sm:pt-2">
              SAN FRANCISCO · TOKYO · BERLIN
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-2.5 sm:space-y-3 font-mono text-xs">
            <div className="text-[#ECEAE5] font-bold uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 text-[#73716B]">
              <li><a href="#portfolio" className="hover:text-white transition-colors">Selected Work</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Capabilities</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Client Reviews</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Insights</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Project Brief</a></li>
            </ul>
          </div>

          {/* Capabilities */}
          <div className="space-y-2.5 sm:space-y-3 font-mono text-xs">
            <div className="text-[#ECEAE5] font-bold uppercase tracking-wider">
              Engineering
            </div>
            <ul className="space-y-2 text-[#73716B]">
              <li><span>Distributed Go & Rust</span></li>
              <li><span>React 19 & Next.js</span></li>
              <li><span>iOS & Android Native</span></li>
              <li><span>Design Systems</span></li>
              <li><span>Kubernetes Cloud</span></li>
            </ul>
          </div>

          {/* Ecosystem */}
          <div className="col-span-2 sm:col-span-1 space-y-2.5 sm:space-y-3 font-mono text-xs">
            <div className="text-[#ECEAE5] font-bold uppercase tracking-wider">
              Ecosystem
            </div>
            <ul className="space-y-2 text-[#73716B]">
              <li><span className="text-[#E26D35]">Google Drive Sync</span></li>
              <li><span>Google Cloud Platform</span></li>
              <li><span>SOC2 Type II Ready</span></li>
              <li><span>PCI-DSS Level 1</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs font-mono text-[#595752] text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} Vektor Labs Inc. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors p-1"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
