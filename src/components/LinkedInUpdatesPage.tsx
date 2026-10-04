import React, { useState } from 'react';
import { PFA_DATA, LinkedInPost } from '../data/pfaData';
import { Linkedin, ExternalLink, ThumbsUp, MessageSquare, Filter, Share2, CheckCircle2, ArrowRight } from 'lucide-react';

export const LinkedInUpdatesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalPost, setActiveModalPost] = useState<LinkedInPost | null>(null);

  const categories = ['All', 'Rescue Story', 'ABC Drive', 'Shelter Update', 'Community Drive'];

  const filteredPosts = selectedCategory === 'All'
    ? PFA_DATA.linkedInUpdates
    : PFA_DATA.linkedInUpdates.filter(p => p.category === selectedCategory);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] min-h-screen">
      <div className="max-w-5xl mx-auto">
        
        {/* Header matching Terra Health editorial style */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14331C] text-[#E2EDB8] text-xs font-bold mb-3">
            <Linkedin className="w-3.5 h-3.5 fill-current" />
            <span>Official NGO Dispatches</span>
          </div>
          
          <h1 className="font-serif text-4xl sm:text-5xl font-normal text-[#14331C] tracking-tight">
            LinkedIn Field Updates
          </h1>
          
          <p className="text-xs sm:text-sm text-[#58635A] mt-3 leading-relaxed">
            Real-time rescue stories, ABC vaccination milestones, and community reports published by the PFA Chengalpattu team.
          </p>

          {/* Clean follow button */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <a
              href="https://www.linkedin.com/company/people-for-animals-chengalpattu/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A66C2] text-white text-xs font-bold hover:bg-[#084E96] transition-all shadow-xs"
            >
              <Linkedin className="w-3.5 h-3.5 fill-current" />
              <span>Follow Us on LinkedIn</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all shrink-0 ${
                selectedCategory === cat
                  ? 'bg-[#14331C] text-[#E2EDB8] shadow-xs'
                  : 'bg-[#F2EFE9] text-[#58635A] hover:bg-[#E8E4DA]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Posts Feed */}
        <div className="space-y-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl border border-[#E8E4DA] overflow-hidden shadow-xs hover:shadow-md transition-all"
            >
              {/* Post Header */}
              <div className="p-6 sm:p-7 border-b border-[#F5F2EB] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-[#CBD5C0] bg-[#F8F6F0] shrink-0">
                    <img
                      src={post.authorAvatar}
                      alt={post.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-serif text-base font-bold text-[#14331C]">{post.author}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0A66C2] fill-[#0A66C2]/15" />
                    </div>
                    <span className="text-[11px] text-[#667368] block line-clamp-1">{post.authorTitle}</span>
                    <span className="text-[10px] text-[#8C9B8E] font-medium block">{post.date}</span>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#E2EDB8] text-[#14331C]">
                  {post.category}
                </span>
              </div>

              {/* Post Text Content */}
              <div className="p-6 sm:p-7 space-y-4">
                <p className="text-xs sm:text-sm text-[#2C3531] leading-relaxed whitespace-pre-line font-normal">
                  {post.content}
                </p>

                {/* Post Images Gallery */}
                {post.images && post.images.length > 0 && (
                  <div className={`grid gap-3 pt-2 ${
                    post.images.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'
                  }`}>
                    {post.images.map((imgUrl, i) => (
                      <div
                        key={i}
                        onClick={() => setActiveModalPost(post)}
                        className="rounded-2xl overflow-hidden aspect-[16/10] bg-[#F5F2EB] border border-[#E8E4DA] cursor-pointer group"
                      >
                        <img
                          src={imgUrl}
                          alt={`Field photo ${i + 1}`}
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Post Engagement & Original Link */}
              <div className="px-6 sm:px-7 py-4 bg-[#FAF8F5] border-t border-[#F5F2EB] flex items-center justify-between text-xs text-[#58635A]">
                <div className="flex items-center gap-5">
                  <span className="flex items-center gap-1.5 font-semibold text-[#0A66C2]">
                    <ThumbsUp className="w-3.5 h-3.5 fill-current" />
                    <span>{post.likes} reactions</span>
                  </span>

                  <span className="flex items-center gap-1.5 font-medium text-[#667368]">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{post.comments} comments</span>
                  </span>
                </div>

                <a
                  href={post.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-[#0A66C2] hover:text-[#084E96] transition-colors"
                >
                  <span>View Original Post on LinkedIn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
};
