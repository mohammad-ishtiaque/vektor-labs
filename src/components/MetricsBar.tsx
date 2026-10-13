import React from 'react';
import { Reveal } from './Reveal';

export const MetricsBar: React.FC = () => {
  const metrics = [
    {
      value: '$4.2B+',
      label: 'Volume Handled',
      detail: 'Zero financial discrepancies across fintech & checkout architectures',
    },
    {
      value: '99.995%',
      label: 'Production SLA',
      detail: 'High-availability Kubernetes clusters with self-healing nodes',
    },
    {
      value: '48+',
      label: 'Platforms Shipped',
      detail: 'Enterprise SaaS, high-conversion web apps, and native mobile',
    },
    {
      value: '18 ms',
      label: 'Median Latency',
      detail: 'Benchmarked across 50M+ daily real-time event pipeline jobs',
    },
  ];

  return (
    <section className="border-y border-white/[0.08] bg-[#0A0B0D] py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
            {metrics.map((item, idx) => (
              <div
                key={idx}
                className={`${idx !== 0 ? 'sm:pl-6 lg:pl-8 pt-6 sm:pt-0' : ''} space-y-1.5 sm:space-y-2`}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Syne'] text-[#ECEAE5] tracking-tight tabular-nums">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#ECEAE5]">
                  {item.label}
                </div>
                <p className="text-[11px] sm:text-xs text-[#73716B] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
