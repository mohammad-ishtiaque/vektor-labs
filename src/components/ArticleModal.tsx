import React, { useState } from 'react';
import { BlogPost } from '../types';
import { X, Share2, Check, ArrowLeft } from 'lucide-react';

interface ArticleModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ post, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!post) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div className="relative w-full max-w-3xl bg-[#101114] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-4 sm:my-8 max-h-[92vh] sm:max-h-[90vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="px-5 sm:px-8 py-3.5 sm:py-5 border-b border-white/[0.08] flex items-center justify-between shrink-0 bg-[#0C0D0F]">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-[#73716B]">
            <span className="text-[#E26D35] font-bold">{post.category}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">{post.publishedDate}</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleShare}
              className="p-1.5 sm:p-2 text-xs font-mono text-[#73716B] hover:text-white flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Share'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 text-[#73716B] hover:text-white transition-colors"
              aria-label="Close Article"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Article Body */}
        <div className="p-5 sm:p-8 lg:p-12 overflow-y-auto space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold font-['Syne'] text-[#ECEAE5] leading-tight text-balance">
              {post.title}
            </h1>

            <div className="text-xs font-mono text-[#73716B] pt-2 border-t border-white/[0.06]">
              By <span className="text-[#ECEAE5] font-bold">{post.author.name}</span> · {post.author.role}
            </div>
          </div>

          {/* Key Takeaways Box */}
          <div className="p-4 sm:p-6 rounded-xl bg-[#090A0C] border border-white/[0.08] space-y-3">
            <div className="text-xs font-mono text-[#E26D35] uppercase tracking-wider font-bold">
              Core Architectural Principles
            </div>
            <ul className="space-y-2">
              {post.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-[#9E9C96]">
                  <span className="text-[#E26D35] font-mono font-bold text-xs shrink-0 mt-0.5">0{idx + 1}.</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Full Paragraphs */}
          <div className="space-y-4 sm:space-y-5 text-xs sm:text-sm md:text-base text-[#9E9C96] leading-relaxed font-normal">
            {post.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="pt-4 sm:pt-6 border-t border-white/[0.08] text-xs font-mono text-[#73716B] flex flex-wrap gap-2">
            TOPICS: <span className="text-[#9E9C96]">{post.tags.join(' · ')}</span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-[#0C0D0F] border-t border-white/[0.08] flex items-center justify-between shrink-0">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs font-mono text-[#73716B] hover:text-white"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </button>

          <a
            href="#contact"
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-bold font-mono text-[#0A0B0D] bg-[#ECEAE5] hover:bg-white transition-colors"
          >
            Discuss Architecture
          </a>
        </div>
      </div>
    </div>
  );
};
