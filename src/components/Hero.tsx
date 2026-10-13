import React, { useState } from 'react';
import { ArrowRight, HardDrive, ArrowUpRight, Globe, Smartphone, Server, Palette, CheckCircle2 } from 'lucide-react';
import { Reveal } from './Reveal';
import { useParallax } from '../hooks/useReveal';

interface HeroProps {
  onOpenDriveModal: () => void;
  attachedCount: number;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDriveModal, attachedCount }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const parallaxBoxRef = useParallax(0.04);

  const productTypes = [
    {
      id: 'web',
      icon: Globe,
      label: 'Web Platforms & SaaS',
      title: 'High-Performance Web Applications & Portals',
      timeline: '4 - 8 Weeks to Launch',
      outcome: 'Sub-150ms speed, 100% responsive, high-converting conversion flows.',
      features: [
        'Interactive dashboards & customer portals',
        'Stripe & multi-currency billing integration',
        'Zero layout shifts (CLS 0.002) & 100/100 Lighthouse',
        'Real-time updates without refreshing',
      ],
      previewHeadline: 'ENTERPRISE SAAS DASHBOARD',
      previewMetric: '+54% User Conversion',
      previewStatus: 'Ready for Scale',
    },
    {
      id: 'mobile',
      icon: Smartphone,
      label: 'Mobile Apps (iOS & Android)',
      title: 'Native & Cross-Platform Mobile Applications',
      timeline: '6 - 10 Weeks to Launch',
      outcome: '5-star store ratings, Face ID authentication, and offline synchronization.',
      features: [
        'Single codebase for iOS & Android via React Native',
        'Apple Face ID & biometric security built-in',
        'Works offline with instant cloud sync on reconnect',
        'App Store & Google Play approval guaranteed',
      ],
      previewHeadline: 'FINTECH & ON-DEMAND APP',
      previewMetric: '4.9★ App Store Rating',
      previewStatus: '1.4M Active Users',
    },
    {
      id: 'software',
      icon: Server,
      label: 'Custom Software & Cloud',
      title: 'Scalable Backends, APIs & Database Architectures',
      timeline: '6 - 12 Weeks to Launch',
      outcome: 'Handles millions of requests without slowdowns, crashes, or bloated bills.',
      features: [
        'Automated workflows & custom business logic',
        'Secure APIs & database design (PostgreSQL, Redis)',
        'Cloud infrastructure on AWS / Google Cloud',
        'Zero unplanned downtime with automated backups',
      ],
      previewHeadline: 'DISTRIBUTED CLOUD ENGINE',
      previewMetric: '99.995% Uptime SLA',
      previewStatus: '50M+ Daily Events',
    },
    {
      id: 'design',
      icon: Palette,
      label: 'UI/UX & Product Design',
      title: 'Purpose-Built Interfaces & Design Systems',
      timeline: '2 - 4 Weeks for Prototype',
      outcome: 'Bespoke design systems that make enterprise software feel effortless.',
      features: [
        'Full Figma designs & clickable interactive prototypes',
        'Tested with real target users before engineering begins',
        'Design tokens synced directly into production code',
        'High contrast, accessible, and distinctive brand aesthetics',
      ],
      previewHeadline: 'BESPOKE DESIGN SYSTEM',
      previewMetric: '+310% Conversion Lift',
      previewStatus: 'Figma to Code Synced',
    },
  ];

  return (
    <section className="relative pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-24 md:pb-28 overflow-hidden bg-[#0A0B0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Kicker */}
        <Reveal delay={0}>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-[#9E9C96] mb-6 sm:mb-8">
            <span className="text-[#E26D35] font-bold">SOFTWARE & PRODUCT STUDIO</span>
            <span aria-hidden="true">·</span>
            <span>SENIOR SQUADS ONLY</span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">FROM CONCEPT TO PRODUCTION SCALE</span>
          </div>
        </Reveal>

        {/* Main Headline & Value Proposition for Buyers */}
        <Reveal delay={100}>
          <div className="max-w-4xl space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#ECEAE5] tracking-tight leading-[1.08] sm:leading-[1.05] font-['Syne'] text-balance break-words">
              We engineer software, apps & websites that grow your business.
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#9E9C96] max-w-2xl font-normal leading-relaxed">
              From high-conversion web platforms to iOS/Android apps and scalable cloud architectures.
              We turn complex ideas into production-ready software with speed, precision, and zero technical debt.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#ECEAE5] hover:bg-white text-[#0A0B0D] font-bold text-xs uppercase tracking-wider font-mono transition-all duration-200 text-center"
              >
                <span>View Proven Client Results</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </a>

              <button
                onClick={onOpenDriveModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-transparent hover:bg-white/[0.04] text-[#ECEAE5] font-medium text-xs font-mono border border-white/15 hover:border-white/30 transition-colors text-center"
              >
                <HardDrive className="w-3.5 h-3.5 text-[#E26D35] shrink-0" />
                <span>Attach Specs via Google Drive</span>
                {attachedCount > 0 && (
                  <span className="font-mono text-[10px] bg-[#E26D35] text-white px-1.5 py-0.2 rounded font-bold">
                    {attachedCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </Reveal>

        {/* Interactive "What We Build For You" Showcase (Buyer-Centric) */}
        <Reveal delay={200} y={32}>
          <div
            ref={parallaxBoxRef}
            className="mt-12 sm:mt-16 border border-white/[0.08] rounded-xl bg-[#101114] overflow-hidden will-change-transform"
          >
            {/* Header */}
            <div className="px-4 sm:px-6 py-3.5 sm:py-4 border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-2 sm:gap-4 bg-[#0C0D0F]">
              <div className="text-xs font-mono text-[#9E9C96] uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E26D35]" />
                <span>What We Build For You · Select Service</span>
              </div>
              <div className="text-[11px] sm:text-xs font-mono text-[#73716B]">
                FIXED TIMELINES · 100% IP OWNERSHIP
              </div>
            </div>

            {/* Interactive Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08]">
              {/* Left Selector List */}
              <div className="lg:col-span-5 p-2 sm:p-4 space-y-1">
                {productTypes.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = activeTab === index;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(index)}
                      className={`w-full text-left p-3 sm:p-4 rounded-lg transition-all flex items-center justify-between gap-3 ${
                        isActive
                          ? 'bg-white/[0.06] border border-white/10 text-white shadow-sm'
                          : 'text-[#9E9C96] hover:bg-white/[0.02] hover:text-[#ECEAE5]'
                      }`}
                    >
                      <div className="flex items-center gap-3 truncate">
                        <div className={`p-2 rounded-md ${isActive ? 'bg-[#E26D35] text-white' : 'bg-white/[0.04] text-[#9E9C96]'}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="truncate">
                          <div className="text-xs sm:text-sm font-bold font-['Syne'] truncate">
                            {item.label}
                          </div>
                          <div className="text-[10px] sm:text-xs font-mono text-[#73716B]">
                            {item.timeline}
                          </div>
                        </div>
                      </div>
                      <span className={`text-[11px] font-mono shrink-0 ${isActive ? 'text-[#E26D35] font-bold' : 'text-[#73716B]'}`}>
                        {isActive ? 'Active' : 'View'}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Right Detail & Delivered Features View */}
              <div className="lg:col-span-7 p-4 sm:p-6 lg:p-8 flex flex-col justify-between space-y-5 sm:space-y-6 bg-[#0D0E11]">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[11px] sm:text-xs font-mono text-[#E26D35] uppercase tracking-wider font-bold">
                      {productTypes[activeTab].timeline}
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400">
                      ✓ Guaranteed Delivery
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-['Syne'] text-[#ECEAE5]">
                    {productTypes[activeTab].title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#ECEAE5] leading-relaxed font-medium">
                    {productTypes[activeTab].outcome}
                  </p>

                  {/* Concrete What You Get Checklist */}
                  <div className="pt-2 space-y-2">
                    <span className="text-[11px] font-mono text-[#73716B] uppercase tracking-wider block">
                      What is included in the delivery:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {productTypes[activeTab].features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-[#ECEAE5]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#E26D35] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Impact & Action Strip */}
                <div className="pt-4 sm:pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div>
                      <span className="text-[#73716B] block text-[10px]">VERIFIED IMPACT</span>
                      <span className="text-[#ECEAE5] font-bold text-xs sm:text-sm">{productTypes[activeTab].previewMetric}</span>
                    </div>
                    <div>
                      <span className="text-[#73716B] block text-[10px]">PRODUCTION STATUS</span>
                      <span className="text-[#ECEAE5] font-bold text-xs sm:text-sm">{productTypes[activeTab].previewStatus}</span>
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className="text-xs font-mono text-[#E26D35] hover:text-[#f38652] inline-flex items-center gap-1 font-semibold"
                  >
                    <span>Get a Quote for This</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Enterprise Credibility Bar */}
        <Reveal delay={300}>
          <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-white/[0.06] flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6">
            <span className="text-[10px] sm:text-xs font-mono text-[#73716B] uppercase tracking-widest">
              PROVEN RESULTS FOR STARTUPS & ENTERPRISES
            </span>
            <div className="flex flex-wrap items-center gap-4 sm:gap-8 lg:gap-12 text-xs sm:text-sm font-bold font-['Syne'] text-[#595752]">
              <span className="hover:text-[#ECEAE5] transition-colors">OMNIFLOW</span>
              <span className="hover:text-[#ECEAE5] transition-colors">PULSEPAY</span>
              <span className="hover:text-[#ECEAE5] transition-colors">AETHER HEALTH</span>
              <span className="hover:text-[#ECEAE5] transition-colors">STRATA SPATIAL</span>
              <span className="hover:text-[#ECEAE5] transition-colors">KINETIC</span>
              <span className="hover:text-[#ECEAE5] transition-colors">AURA FLEET</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
