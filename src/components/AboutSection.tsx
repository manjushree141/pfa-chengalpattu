import React from 'react';
import { PFA_DATA } from '../data/pfaData';
import { ShieldCheck, BookOpen, Heart, Award, CheckCircle, Scale } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F2EB]/50 border-y border-[#E8E4DA]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#58635A] bg-[#E8E4DA] px-3.5 py-1 rounded-full">
            Our Purpose & Foundation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#14331C] mt-3">
            Grounded in Compassion, Backed by Law
          </h2>
          <p className="text-xs sm:text-sm text-[#58635A] mt-3 leading-relaxed">
            Operating across Tamil Nadu, we combine emergency medical care, scientific stray birth control, and legal advocacy to create permanent safety for animals.
          </p>
        </div>

        {/* 2 Column Layout: Organization Story & Founder Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Organization Overview */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 border border-[#E8E4DA] shadow-xs flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-[#14331C]">
                <Scale className="w-6 h-6 text-[#2D5A27]" />
                <h3 className="font-serif text-2xl font-bold text-[#14331C]">Who We Are</h3>
              </div>

              <p className="text-xs sm:text-sm text-[#445046] leading-relaxed whitespace-pre-line font-light">
                {PFA_DATA.aboutSummary}
              </p>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E4DA]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#14331C] mb-1">
                    <Heart className="w-4 h-4 text-[#2D5A27]" />
                    <span>Emergency Rescue & Rehab</span>
                  </div>
                  <p className="text-xs text-[#667368]">
                    24/7 triage, orthopedic surgeries, and shelter recovery units for injured animals.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E4DA]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#14331C] mb-1">
                    <ShieldCheck className="w-4 h-4 text-[#2D5A27]" />
                    <span>Humane Stray Management</span>
                  </div>
                  <p className="text-xs text-[#667368]">
                    Scientific Animal Birth Control (ABC) and rabies eradication drives.
                  </p>
                </div>
              </div>
            </div>

            {/* Constitution Highlight Box */}
            <div className="mt-6 p-4 rounded-2xl bg-[#FAF8F5] border-l-4 border-[#14331C] flex items-start gap-3">
              <BookOpen className="w-5 h-5 text-[#14331C] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-[#14331C] uppercase tracking-wider">
                  Constitutional Duty — Article 51A(g)
                </h4>
                <p className="text-xs text-[#58635A] mt-0.5 leading-relaxed">
                  The Indian Constitution explicitly obligates every citizen to protect living creatures and display compassion. We embody this duty every single day.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Founder Spotlight */}
          <div className="lg:col-span-5 bg-[#14331C] text-white rounded-3xl p-7 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-md">
            <div className="relative z-10 space-y-4">
              <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-white/10 text-[#E2EDB8] px-3 py-1 rounded-full border border-white/15">
                Leadership & Vision
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
                Meet the Founder
              </h3>

              <div className="flex items-center gap-4 py-3 border-b border-white/15">
                <div className="w-14 h-14 rounded-full bg-[#234A2D] border-2 border-[#E2EDB8]/40 flex items-center justify-center text-xl font-bold font-serif text-[#E2EDB8]">
                  AD
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">{PFA_DATA.founder.name}</h4>
                  <p className="text-xs text-[#C4D8A6]">{PFA_DATA.founder.role}</p>
                  <p className="text-[11px] text-white/60">{PFA_DATA.founder.experience}</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#D4DEC9] font-light leading-relaxed pt-1">
                "{PFA_DATA.founder.intro}"
              </p>

              <blockquote className="p-4 rounded-2xl bg-black/25 border-l-2 border-[#E2EDB8] text-xs italic text-[#E8F0C8] leading-relaxed">
                "{PFA_DATA.founder.quote}"
              </blockquote>
            </div>

            <div className="relative z-10 pt-6 flex items-center justify-between border-t border-white/15 text-xs text-[#C4D8A6]">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#E2EDB8]" />
                <span>On-Ground & Legal Impact</span>
              </span>
              <span className="font-semibold text-white">PFA Chengalpattu</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
