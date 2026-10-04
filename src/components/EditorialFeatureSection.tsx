import React from 'react';
import { PFA_DATA } from '../data/pfaData';
import { BookOpen, ShieldCheck, Heart, Sparkles, PhoneCall } from 'lucide-react';

interface EditorialFeatureSectionProps {
  onOpenDonate: () => void;
  onOpenVolunteer: () => void;
}

export const EditorialFeatureSection: React.FC<EditorialFeatureSectionProps> = ({
  onOpenDonate,
  onOpenVolunteer
}) => {
  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Dark Green Block matching screenshot */}
        <div className="bg-[#14331C] rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden border border-[#244A2D] shadow-xl">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#E2EDB8]/5 blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#E8F0C8] text-xs font-semibold">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Indian Constitution • Article 51A(g)</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-[#FAF8F5]">
                A constitutional mandate to care for the voiceless.
              </h2>

              <p className="text-sm sm:text-base text-[#D4DEC9] font-light leading-relaxed">
                "{PFA_DATA.constitutionArticle.text}"
              </p>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/15 text-xs text-[#E2EDB8] leading-relaxed">
                Animal welfare is not merely an optional kindness—it is a supreme constitutional duty. PFA Chengalpattu translates this mandate into active on-ground emergency response, sterilization clinics, and shelter rehabilitation.
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenDonate}
                  className="px-6 py-3 rounded-full text-xs font-bold text-[#14331C] bg-[#E2EDB8] hover:bg-[#D5E3A3] transition-all shadow-md"
                >
                  Join as Lifetime Guardian
                </button>

                <button
                  onClick={onOpenVolunteer}
                  className="px-6 py-3 rounded-full text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 transition-all"
                >
                  Volunteer On Field
                </button>
              </div>

            </div>

            {/* Right Metrics & Fast Counter matching the timer blocks in screenshot */}
            <div className="lg:col-span-5 bg-black/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/15 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C4D8A6] block">
                Operational Readiness
              </span>

              {/* 3 Metrics in Row */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#E2EDB8]">24/7</div>
                  <div className="text-[10px] text-[#A8BE9A] uppercase tracking-wider mt-1">Response</div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#E2EDB8]">500+</div>
                  <div className="text-[10px] text-[#A8BE9A] uppercase tracking-wider mt-1">Rescues</div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#E2EDB8]">100%</div>
                  <div className="text-[10px] text-[#A8BE9A] uppercase tracking-wider mt-1">80G Exempt</div>
                </div>
              </div>

              {/* Emergency Hotline Banner inside dark card */}
              <div className="p-4 rounded-xl bg-[#E2EDB8] text-[#14331C] flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider block text-[#334A23]">
                    Emergency Dispatch Call
                  </span>
                  <a href={`tel:${PFA_DATA.helpline}`} className="font-serif font-bold text-base hover:underline">
                    {PFA_DATA.helpline}
                  </a>
                </div>
                <div className="p-2.5 rounded-full bg-[#14331C] text-[#E2EDB8]">
                  <PhoneCall className="w-4 h-4" />
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
