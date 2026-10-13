import React, { useState } from 'react';
import { ArrowUpRight, Check, ChevronDown } from 'lucide-react';
import { Reveal } from './Reveal';

export const ServicesSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const capabilities = [
    {
      num: '01',
      title: 'Custom Software & Distributed Backends',
      tagline: 'High-throughput microservices, event streams & fault-tolerant architectures',
      description:
        'Engineered for extreme concurrency and sub-25ms response SLAs. We eliminate bottlenecks, deadlocks, and costly infrastructure sprawl.',
      clientWin: 'Scale to 50M+ daily events. Cut cloud infrastructure spend by 40%.',
      deliverables: [
        'Asynchronous event queues (Kafka, Redis Streams)',
        'High-performance microservices in Go & Rust',
        'Relational & time-series database architecture',
        'Zero-trust tenant isolation with hardware encryption',
      ],
      techStack: 'Go · Rust · TypeScript · Kubernetes · PostgreSQL',
    },
    {
      num: '02',
      title: 'High-Performance Web Platforms & SaaS',
      tagline: 'Edge-rendered portals, keyboard ergonomics & React 19',
      description:
        'Single-page applications and dashboards that load in under 150ms globally with zero layout shift and fluid optimistic state updates.',
      clientWin: '54% faster task completion speed. 100/100 Lighthouse benchmark.',
      deliverables: [
        'React 19 Server Actions & concurrent rendering',
        'Edge-rendered streaming HTML on global CDNs',
        'Live WebSockets & telemetry data streams',
        'WCAG AA accessible component architectures',
      ],
      techStack: 'React 19 · Next.js · Tailwind CSS · Edge Workers',
    },
    {
      num: '03',
      title: 'Mobile Engineering (iOS & Android)',
      tagline: 'Native and cross-platform apps with biometric security',
      description:
        'From consumer fintech wallets to clinical tools. We build native Swift/Kotlin and React Native apps with offline-first synchronization.',
      clientWin: '4.9★ average store rating with 99.9% crash-free sessions.',
      deliverables: [
        'React Native with custom Swift & Kotlin bridges',
        'Biometric authentication via Apple Secure Enclave',
        'Offline-first SQLite with deterministic conflict resolution',
        'Zero-regression automated App Store delivery',
      ],
      techStack: 'React Native · Swift · Kotlin · SQLite · Secure Enclave',
    },
    {
      num: '04',
      title: 'Digital Product Design & Systems',
      tagline: 'Purpose-built design systems, tactile physics & 3D WebGL',
      description:
        'We reject generic templates. We build custom typographic scales, responsive tokens, and interactive 3D WebGL configurators that captivate buyers.',
      clientWin: 'Up to 310% higher conversion rates over generic UI kits.',
      deliverables: [
        'Figma design tokens synced to production code',
        'Interactive 3D WebGL and Three.js viewports',
        'High-density data visualization for power users',
        'Rapid clickable prototypes and user research',
      ],
      techStack: 'Figma · Three.js · WebGL · Custom Design Tokens',
    },
    {
      num: '05',
      title: 'Cloud Scalability & Security Hardening',
      tagline: 'Automated CI/CD, Kubernetes clusters & SOC2 compliance',
      description:
        'Infrastructure as Code across Google Cloud and AWS. Zero-downtime blue/green rollouts and automated canary rollbacks within 15 seconds.',
      clientWin: 'Zero unplanned downtime across 18 months. Audit-proof security.',
      deliverables: [
        'Infrastructure as Code with Terraform & Docker',
        'Kubernetes autoscaling with self-healing pods',
        'SOC2 Type II, HIPAA, and GDPR compliance readiness',
        'Automated vulnerability penetration audits in CI',
      ],
      techStack: 'Kubernetes · Terraform · AWS · Google Cloud · Docker',
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 md:py-28 bg-[#0A0B0D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6">
            <div className="space-y-2.5 sm:space-y-3 max-w-xl">
              <div className="text-xs font-mono text-[#E26D35] uppercase tracking-wider font-bold">
                CORE CAPABILITIES
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-['Syne'] text-[#ECEAE5] tracking-tight">
                Architectural craft. Production scale.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#9E9C96] max-w-sm leading-relaxed">
              Every system is executed in-house by senior engineers. No junior handoffs, no template shortcuts.
            </p>
          </div>
        </Reveal>

        {/* Numbered capabilities with adaptive spacing */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {capabilities.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <Reveal key={idx} delay={idx * 50}>
                <div
                  className="py-6 sm:py-8 transition-colors group cursor-pointer"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-baseline gap-3 sm:gap-6 lg:gap-10">
                      <span className="text-xs sm:text-sm font-mono font-bold text-[#E26D35]">
                        {item.num}
                      </span>
                      <div>
                        <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold font-['Syne'] text-[#ECEAE5] group-hover:text-white transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#73716B] mt-1 line-clamp-2 sm:line-clamp-none">
                          {item.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="p-1.5 sm:p-2 text-[#73716B] group-hover:text-[#ECEAE5] transition-colors shrink-0">
                      <ChevronDown
                        className={`w-4 h-4 sm:w-5 sm:h-5 transform transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </div>

                  {isOpen && (
                    <div className="mt-5 sm:mt-6 pl-0 sm:pl-9 lg:pl-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 pt-4 border-t border-white/[0.04]">
                      <div className="lg:col-span-6 space-y-4">
                        <p className="text-xs sm:text-sm text-[#9E9C96] leading-relaxed">
                          {item.description}
                        </p>

                        <div className="p-3 sm:p-3.5 rounded-lg bg-[#101114] border border-white/[0.06] text-xs font-mono">
                          <span className="text-[#73716B] block mb-1">CLIENT WIN:</span>
                          <span className="text-[#ECEAE5] font-bold">{item.clientWin}</span>
                        </div>
                      </div>

                      <div className="lg:col-span-6 space-y-4">
                        <div className="text-[11px] sm:text-xs font-mono text-[#73716B] uppercase tracking-wider">
                          Deliverables:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {item.deliverables.map((del, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-2 text-xs text-[#ECEAE5]">
                              <Check className="w-3.5 h-3.5 text-[#E26D35] shrink-0 mt-0.5" />
                              <span>{del}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                          <span className="text-[#73716B] text-[11px] sm:text-xs">STACK: {item.techStack}</span>
                          <a
                            href="#contact"
                            className="text-[#ECEAE5] hover:text-[#E26D35] inline-flex items-center gap-1 font-bold"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span>Inquire</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
