import React from 'react';
import { PFA_DATA } from '../data/pfaData';
import { Star, Play, ArrowRight, MapPin } from 'lucide-react';

interface AsSeenInRealLifeSectionProps {
  onNavigateGallery: () => void;
}

export const AsSeenInRealLifeSection: React.FC<AsSeenInRealLifeSectionProps> = ({
  onNavigateGallery
}) => {
  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text Column matching screenshot */}
          <div className="lg:col-span-4 space-y-5">
            {/* 5 star rating */}
            <div className="flex items-center gap-1.5 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
              <span className="text-xs font-semibold text-[#14331C] ml-1.5">
                500+ Lives Saved
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#14331C] tracking-tight leading-tight">
              As seen in real life
            </h2>

            <p className="text-xs sm:text-sm text-[#58635A] leading-relaxed">
              Real animals from the streets of Chengalpattu whose lives were saved by our emergency ambulance, veterinary surgeons, and compassionate community feeders.
            </p>

            <button
              onClick={onNavigateGallery}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#14331C] hover:bg-[#234A2D] transition-all shadow-xs"
            >
              <span>View All 138 Photos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right Column: 3 Vertical Portrait Cards matching screenshot */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {PFA_DATA.asSeenInRealLife.map((item) => (
                <div
                  key={item.id}
                  onClick={onNavigateGallery}
                  className="group cursor-pointer space-y-2.5"
                >
                  {/* Portrait Card */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-[#EFECE3] border border-[#E8E4DA] shadow-xs group-hover:shadow-md transition-all">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Subtle Play circle in center matching screenshot */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/70 backdrop-blur-xs flex items-center justify-center text-[#14331C] shadow-sm group-hover:scale-110 group-hover:bg-white transition-all">
                        <Play className="w-4 h-4 fill-[#14331C] ml-0.5" />
                      </div>
                    </div>

                    {/* Bottom tag */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-[#14331C]/80 backdrop-blur-xs text-[#E2EDB8]">
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  {/* Caption underneath card matching screenshot */}
                  <div className="px-1">
                    <h3 className="font-serif text-sm font-bold text-[#14331C] leading-snug group-hover:text-[#2E5C38] transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1 text-[11px] text-[#667368] mt-0.5">
                      <MapPin className="w-3 h-3 text-[#A8BE9A]" />
                      <span>{item.location}</span>
                    </div>
                    <span className="text-[10px] text-[#8C9B8E] block mt-0.5">
                      {item.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
