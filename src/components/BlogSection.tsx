import React, { useState } from 'react';
import { BlogPost } from '../types';
import { blogPosts } from '../data/blogData';
import { ArrowUpRight, Search } from 'lucide-react';
import { Reveal } from './Reveal';

interface BlogSectionProps {
  onSelectArticle: (post: BlogPost) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectArticle }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Architecture',
    'Engineering',
    'UI/UX Design',
    'Performance',
    'DevOps',
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="blog" className="py-16 sm:py-24 md:py-28 bg-[#0A0B0D] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-6">
            <div className="space-y-2.5 sm:space-y-3 max-w-xl">
              <div className="text-xs font-mono text-[#E26D35] uppercase tracking-wider font-bold">
                ENGINEERING FIELD PAPERS
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-['Syne'] text-[#ECEAE5] tracking-tight">
                Technical Insights
              </h2>
            </div>

            {/* Search input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#73716B]" />
              <input
                type="text"
                placeholder="Search field notes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-lg bg-[#121316] border border-white/10 text-xs text-[#ECEAE5] placeholder-[#73716B] focus:outline-none focus:border-white/30"
              />
            </div>
          </div>
        </Reveal>

        {/* Filter categories (Scrollable on phones) */}
        <Reveal delay={100}>
          <div className="flex items-center gap-1.5 sm:gap-2 mb-8 sm:mb-12 overflow-x-auto max-w-full pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-white text-[#0A0B0D] font-bold'
                    : 'text-[#9E9C96] hover:text-white bg-white/[0.02]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Articles List */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {filteredPosts.map((post, idx) => (
            <Reveal key={post.id} delay={idx * 50} y={20}>
              <article
                onClick={() => onSelectArticle(post)}
                className="py-7 sm:py-9 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-start cursor-pointer group hover:bg-white/[0.01] transition-colors"
              >
                <div className="lg:col-span-3 flex flex-wrap lg:flex-col items-center lg:items-start gap-2 lg:gap-1 font-mono text-xs text-[#73716B]">
                  <span className="text-[#E26D35] font-bold">{post.category}</span>
                  <span aria-hidden="true" className="lg:hidden">·</span>
                  <span>{post.publishedDate}</span>
                  <span aria-hidden="true" className="lg:hidden">·</span>
                  <span>{post.readTime}</span>
                </div>

                <div className="lg:col-span-7 space-y-2 sm:space-y-2.5">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold font-['Syne'] text-[#ECEAE5] group-hover:text-white transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9E9C96] leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="text-[11px] sm:text-xs font-mono text-[#73716B] pt-0.5">
                    Author: <span className="text-[#ECEAE5]">{post.author.name}</span>
                  </div>
                </div>

                <div className="lg:col-span-2 lg:text-right pt-1 lg:pt-0">
                  <span className="text-xs font-bold font-mono text-[#ECEAE5] group-hover:text-[#E26D35] inline-flex items-center gap-1.5 transition-colors">
                    <span>Read Paper</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
