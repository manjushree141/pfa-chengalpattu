import React from 'react';
import { PFA_DATA, InitiativeItem } from '../data/pfaData';
import { Star, ArrowRight, HeartHandshake } from 'lucide-react';

interface InitiativesSectionProps {
  onSelectInitiative: (init: InitiativeItem) => void;
  onOpenDonate: () => void;
}

export const InitiativesSection: React.FC<InitiativesSectionProps> = ({
  onSelectInitiative,
  onOpenDonate
}) => {
  return (
    <section id="initiatives" className="py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header matching "Best sellers" in screenshot */}
        <div className="flex items-end justify-between mb-8 pb-3 border-b border-[#E8E4DA]">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#58635A] block mb-1">
              Direct Community Impact
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#14331C] tracking-tight">
              Core Initiatives
            </h2>
          </div>

          <button
            onClick={onOpenDonate}
            className="px-4 py-2 rounded-full text-xs font-semibold text-[#14331C] bg-[#E8E4DA]/70 hover:bg-[#E8E4DA] transition-all flex items-center gap-1.5"
          >
            <span>View All Needs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Cards Row matching screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PFA_DATA.initiatives.map((item) => (
            <div
              key={item.id}
              className="bg-[#F8F6F0] rounded-2xl border border-[#E8E4DA] p-4 flex flex-col justify-between hover:shadow-md transition-all group"
            >
              <div>
                {/* Photo with Badge */}
                <div className="relative rounded-xl overflow-hidden aspect-square bg-[#EFECE3] mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#14331C] text-[#E2EDB8] shadow-xs">
                    {item.badge}
                  </span>
                </div>

                {/* Meta & Category */}
                <div className="space-y-1.5 mb-3">
                  <span className="text-[11px] font-semibold text-[#667368] uppercase tracking-wider block">
                    {item.category}
                  </span>
                  
                  <h3 className="font-serif text-lg font-bold text-[#14331C] leading-snug line-clamp-1">
                    {item.title}
                  </h3>

                  {/* Rating Stars matching screenshot */}
                  <div className="flex items-center gap-1.5 pt-0.5">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] text-[#667368]">
                      ({item.reviewsCount} supported)
                    </span>
                  </div>

                  {/* Pricing / Need */}
                  <div className="pt-2">
                    <span className="font-serif text-xl font-bold text-[#14331C]">
                      ₹{item.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-[#667368] ml-1.5">
                      {item.priceUnit}
                    </span>
                  </div>

                  <p className="text-xs text-[#58635A] pt-1 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Action Button: Soft pale lime/pistachio pill button matching screenshot */}
              <button
                onClick={() => onSelectInitiative(item)}
                className="w-full mt-4 py-2.5 px-4 rounded-full text-xs font-bold text-[#14331C] bg-[#E2EDB8] hover:bg-[#D5E3A3] transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>{item.actionText}</span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
