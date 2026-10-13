import React, { useState } from 'react';
import { User } from 'firebase/auth';
import { DriveFile } from '../types';
import { getFileCategory } from '../services/driveService';
import {
  Send,
  HardDrive,
  Trash2,
  ExternalLink,
  Check,
  Copy,
  ArrowRight,
  ShieldCheck,
  Users,
  Clock,
  Sparkles,
} from 'lucide-react';
import { Reveal } from './Reveal';

interface ContactSectionProps {
  user: User | null;
  attachedDriveFiles: DriveFile[];
  onOpenDriveModal: () => void;
  onRemoveDriveFile: (fileId: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  user,
  attachedDriveFiles,
  onOpenDriveModal,
  onRemoveDriveFile,
}) => {
  const [formData, setFormData] = useState<{
    fullName: string;
    email: string;
    company: string;
    description: string;
    services: string[];
    budget: string;
    timeline: string;
  }>({
    fullName: '',
    email: '',
    company: '',
    description: '',
    services: ['Custom Software'],
    budget: '$50k - $100k',
    timeline: '1 - 3 Months',
  });

  const [submitted, setSubmitted] = useState(false);
  const [inquiryRef, setInquiryRef] = useState('');
  const [copied, setCopied] = useState(false);

  const serviceOptions = [
    'Custom Software',
    'Web Platform',
    'Mobile App',
    'Product Design',
    'Cloud & DevOps',
  ];

  const budgetOptions = [
    '<$25k',
    '$25k - $50k',
    '$50k - $100k',
    '$100k - $250k',
    '$250k+',
  ];

  const timelineOptions = [
    'Immediate (< 1 mo)',
    '1 - 3 Months',
    '3 - 6 Months',
    'Flexible',
  ];

  const toggleService = (service: string) => {
    if (formData.services.includes(service)) {
      if (formData.services.length > 1) {
        setFormData({
          ...formData,
          services: formData.services.filter((s) => s !== service),
        });
      }
    } else {
      setFormData({
        ...formData,
        services: [...formData.services, service],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.description) return;

    const randomRef = `VL-${Math.floor(1000 + Math.random() * 9000)}-${new Date().getFullYear()}`;
    setInquiryRef(randomRef);
    setSubmitted(true);
  };

  const handleCopySummary = () => {
    const summary = `
[Project Brief Ref: ${inquiryRef}]
Client: ${formData.fullName} (${formData.email}) - ${formData.company || 'N/A'}
Services: ${formData.services.join(', ')}
Budget: ${formData.budget}
Timeline: ${formData.timeline}
Drive Attachments (${attachedDriveFiles.length}): ${attachedDriveFiles.map((f) => f.name).join(', ') || 'None'}
Scope: ${formData.description}
    `.trim();

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      company: '',
      description: '',
      services: ['Custom Software'],
      budget: '$50k - $100k',
      timeline: '1 - 3 Months',
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-28 bg-[#0A0B0D] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <Reveal>
              <div className="space-y-3 sm:space-y-4">
                <div className="text-xs font-mono text-[#E26D35] uppercase tracking-wider font-bold">
                  PROJECT INTAKE
                </div>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-['Syne'] text-[#ECEAE5] tracking-tight">
                  Let&rsquo;s engineer your product.
                </h2>
                <p className="text-xs sm:text-sm text-[#9E9C96] leading-relaxed">
                  Tell us what you want to achieve. A senior technical architect will evaluate your specifications and reply within 4 hours.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="pt-4 sm:pt-6 border-t border-white/[0.08] space-y-3 sm:space-y-4 font-mono text-xs text-[#9E9C96]">
                <div className="flex items-center justify-between py-1.5 sm:py-2 border-b border-white/[0.04]">
                  <span>RESPONSE GUARANTEE</span>
                  <span className="text-[#ECEAE5] font-bold">Within 4 Hours</span>
                </div>
                <div className="flex items-center justify-between py-1.5 sm:py-2 border-b border-white/[0.04]">
                  <span>CONFIDENTIALITY</span>
                  <span className="text-[#ECEAE5] font-bold">Mutual NDA on File</span>
                </div>
                <div className="flex items-center justify-between py-1.5 sm:py-2 border-b border-white/[0.04]">
                  <span>GOOGLE DRIVE REPO</span>
                  <span className="text-[#E26D35] font-bold">Direct File Sync</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="text-xs font-mono text-[#73716B] space-y-1">
                <div>STUDIO: SAN FRANCISCO & GLOBAL LABS</div>
                <div>DIRECT LINE: +1 (415) 890-4820</div>
                <div>EMAIL: PARTNERS@VEKTORLABS.IO</div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <Reveal delay={150} y={28}>
              <div className="bg-[#101114] border border-white/[0.08] rounded-2xl p-5 sm:p-8 lg:p-12">
                {submitted ? (
                  <div className="space-y-6 sm:space-y-8 py-4 sm:py-6 text-center">
                    <div className="space-y-2.5 sm:space-y-3">
                      <div className="text-xs font-mono text-[#E26D35]">
                        REFERENCE: {inquiryRef}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold font-['Syne'] text-[#ECEAE5]">
                        Technical Brief Logged
                      </h3>
                      <p className="text-xs sm:text-sm text-[#9E9C96] max-w-md mx-auto leading-relaxed">
                        Thank you, <strong className="text-white">{formData.fullName}</strong>.
                        Our principal engineering architect is reviewing your specifications and attached Google Drive files.
                      </p>
                    </div>

                    <div className="p-4 sm:p-6 rounded-xl bg-[#090A0C] border border-white/[0.06] text-left text-xs font-mono space-y-2 text-[#9E9C96]">
                      <div><strong className="text-[#ECEAE5]">Client:</strong> {formData.fullName} ({formData.email}) · {formData.company || 'Confidential'}</div>
                      <div><strong className="text-[#ECEAE5]">Capabilities:</strong> {formData.services.join(', ')}</div>
                      <div><strong className="text-[#ECEAE5]">Budget:</strong> {formData.budget} · <strong className="text-[#ECEAE5]">Timeline:</strong> {formData.timeline}</div>
                      <div>
                        <strong className="text-[#ECEAE5]">Drive Specs ({attachedDriveFiles.length}):</strong>{' '}
                        {attachedDriveFiles.length > 0
                          ? attachedDriveFiles.map((f) => f.name).join(', ')
                          : 'None attached'}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
                      <button
                        onClick={handleCopySummary}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-white/10 hover:border-white/30 text-xs font-mono text-[#ECEAE5] transition-colors"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copied ? 'Summary Copied' : 'Copy Brief Summary'}</span>
                      </button>

                      <button
                        onClick={handleReset}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#ECEAE5] hover:bg-white text-[#0A0B0D] text-xs font-bold font-mono transition-colors"
                      >
                        <span>Submit New Brief</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                    {/* Services */}
                    <div className="space-y-2.5 sm:space-y-3">
                      <label className="text-xs font-mono text-[#73716B] uppercase tracking-wider block">
                        01. Select Capabilities Needed
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {serviceOptions.map((service) => {
                          const isSelected = formData.services.includes(service);
                          return (
                            <button
                              type="button"
                              key={service}
                              onClick={() => toggleService(service)}
                              className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg text-xs font-medium transition-all ${
                                isSelected
                                  ? 'bg-[#ECEAE5] text-[#0A0B0D] font-bold'
                                  : 'bg-white/[0.03] text-[#9E9C96] border border-white/[0.08] hover:text-white'
                              }`}
                            >
                              {service}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Budget & Timeline */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-1.5 sm:space-y-2">
                        <label className="text-xs font-mono text-[#73716B] uppercase tracking-wider block">
                          02. Budget Range
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-[#0A0B0D] border border-white/10 text-xs text-[#ECEAE5] focus:outline-none focus:border-white/30"
                        >
                          {budgetOptions.map((b) => (
                            <option key={b} value={b}>{b}</option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-1.5 sm:space-y-2">
                        <label className="text-xs font-mono text-[#73716B] uppercase tracking-wider block">
                          03. Timeline
                        </label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-[#0A0B0D] border border-white/10 text-xs text-[#ECEAE5] focus:outline-none focus:border-white/30"
                        >
                          {timelineOptions.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Live Consultative Estimation Breakdown */}
                    <div className="p-3.5 sm:p-4 rounded-xl bg-[#090A0C] border border-white/[0.08] space-y-2.5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-[#E26D35] font-bold flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Estimated Sprint Architecture</span>
                        </span>
                        <span className="text-emerald-400 font-bold">
                          ✓ Guaranteed Capacity
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 text-xs pt-1 font-mono">
                        <div className="space-y-0.5">
                          <span className="text-[10px] text-[#73716B] block">RECOMMENDED SQUAD</span>
                          <span className="text-[#ECEAE5] font-semibold">
                            1 Lead Architect + {formData.services.length > 2 ? '3' : '2'} Senior Devs
                          </span>
                        </div>
                        <div className="space-y-0.5">
                          <span className="text-[10px] text-[#73716B] block">ESTIMATED CYCLE</span>
                          <span className="text-[#ECEAE5] font-semibold">
                            {formData.timeline === 'Immediate (< 1 mo)'
                              ? '1 - 2 Sprints (Fast-Track)'
                              : formData.timeline === '1 - 3 Months'
                              ? '2 - 4 Sprints (Standard MVP)'
                              : formData.timeline === '3 - 6 Months'
                              ? '4 - 8 Sprints (Enterprise Scale)'
                              : 'Custom Iterative Roadmap'}
                          </span>
                        </div>
                        <div className="space-y-0.5">
                          <span className="text-[10px] text-[#73716B] block">INCLUDED SAFEGUARDS</span>
                          <span className="text-[#ECEAE5] font-semibold">
                            100% IP + Mutual NDA
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                      <div className="space-y-1 sm:space-y-1.5">
                        <label className="text-xs font-mono text-[#73716B] uppercase tracking-wider block">
                          Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Alex Mercer"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-3 sm:px-3.5 py-2.5 rounded-lg bg-[#0A0B0D] border border-white/10 text-xs text-[#ECEAE5] placeholder-[#595752] focus:outline-none focus:border-white/30"
                        />
                      </div>

                      <div className="space-y-1 sm:space-y-1.5">
                        <label className="text-xs font-mono text-[#73716B] uppercase tracking-wider block">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="alex@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3 sm:px-3.5 py-2.5 rounded-lg bg-[#0A0B0D] border border-white/10 text-xs text-[#ECEAE5] placeholder-[#595752] focus:outline-none focus:border-white/30"
                        />
                      </div>

                      <div className="space-y-1 sm:space-y-1.5">
                        <label className="text-xs font-mono text-[#73716B] uppercase tracking-wider block">
                          Company
                        </label>
                        <input
                          type="text"
                          placeholder="Acme Inc."
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-3 sm:px-3.5 py-2.5 rounded-lg bg-[#0A0B0D] border border-white/10 text-xs text-[#ECEAE5] placeholder-[#595752] focus:outline-none focus:border-white/30"
                        />
                      </div>
                    </div>

                    {/* Scope */}
                    <div className="space-y-1 sm:space-y-1.5">
                      <label className="text-xs font-mono text-[#73716B] uppercase tracking-wider block">
                        04. Objectives & Requirements *
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Key requirements, expected traffic concurrency, current blockers, or target launch date..."
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-[#0A0B0D] border border-white/10 text-xs text-[#ECEAE5] placeholder-[#595752] focus:outline-none focus:border-white/30 leading-relaxed"
                      />
                    </div>

                    {/* Google Drive Attachments */}
                    <div className="p-4 sm:p-5 rounded-xl bg-[#090A0C] border border-white/[0.08] space-y-3 sm:space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                        <div className="flex items-center gap-2 text-xs font-mono text-[#ECEAE5]">
                          <HardDrive className="w-4 h-4 text-[#E26D35] shrink-0" />
                          <span className="font-bold">Google Drive Specifications</span>
                        </div>

                        <button
                          type="button"
                          onClick={onOpenDriveModal}
                          className="text-xs font-mono px-3 py-1.5 rounded-md bg-white/[0.06] hover:bg-white/10 border border-white/15 text-[#ECEAE5] transition-colors self-start sm:self-auto"
                        >
                          {user ? 'Browse Google Drive' : 'Connect Google Drive'}
                        </button>
                      </div>

                      {attachedDriveFiles.length > 0 ? (
                        <div className="space-y-2 pt-1">
                          <div className="text-[11px] font-mono text-[#73716B]">
                            {attachedDriveFiles.length} file(s) attached from Google Drive:
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {attachedDriveFiles.map((file) => {
                              const cat = getFileCategory(file.mimeType);
                              return (
                                <div
                                  key={file.id}
                                  className="p-2.5 sm:p-3 rounded-lg bg-[#101114] border border-white/[0.06] flex items-center justify-between text-xs"
                                >
                                  <div className="truncate pr-2 font-mono">
                                    <div className="text-[#ECEAE5] truncate">{file.name}</div>
                                    <div className="text-[10px] text-[#73716B] mt-0.5">
                                      {cat.label} · {file.size}
                                    </div>
                                  </div>

                                  <div className="flex items-center gap-1.5 shrink-0">
                                    {file.webViewLink && (
                                      <a
                                        href={file.webViewLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="p-1 text-[#73716B] hover:text-white"
                                        title="Open in Google Drive"
                                      >
                                        <ExternalLink className="w-3.5 h-3.5" />
                                      </a>
                                    )}
                                    <button
                                      type="button"
                                      onClick={() => onRemoveDriveFile(file.id)}
                                      className="p-1 text-[#73716B] hover:text-rose-400"
                                      title="Remove attachment"
                                    >
                                      <Trash2 className="w-3.5 h-3.5" />
                                    </button>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ) : (
                        <p className="text-xs text-[#73716B] leading-relaxed">
                          Attach RFP documents, architecture diagrams, spreadsheet budgets, or Figma specs directly with your inquiry.
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 sm:py-4 rounded-lg bg-[#ECEAE5] hover:bg-white text-[#0A0B0D] font-bold text-xs uppercase tracking-wider font-mono transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Transmit Technical Brief & Specs</span>
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
