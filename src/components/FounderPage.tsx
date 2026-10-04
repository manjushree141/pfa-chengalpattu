import React from 'react';
import { PFA_DATA } from '../data/pfaData';
import { ArrowLeft, Quote } from 'lucide-react';

interface FounderPageProps {
  onBackToHome: () => void;
  onOpenDonate: () => void;
}

export const FounderPage: React.FC<FounderPageProps> = ({ onBackToHome, onOpenDonate }) => {
  const f = PFA_DATA.founder;

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-[#FBF5EE] min-h-screen text-[#443353]">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Back Link */}
        <div>
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 font-josefin text-xs uppercase tracking-[2px] font-semibold text-[#443353] hover:text-[#F6B05C] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Hero Section of Founder - PROPER FACE CROPPING */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center">
              <p className="font-josefin text-xs uppercase tracking-[3px] font-semibold text-[#443353]">
                Leadership & Advocacy
              </p>
              <div className="section-underline"></div>
              <div className="section-straight-line">
                <div className="section-rectangle"></div>
              </div>
            </div>

            <h1 className="font-cormorant text-5xl sm:text-6xl font-normal leading-[1.08] text-[#443353]">
              Meet the Founder
            </h1>

            <p className="font-cormorant text-2xl italic text-[#F6B05C]">
              {f.title}
            </p>

            <p className="text-sm sm:text-base text-[#6A5C77] leading-relaxed font-light">
              {f.intro}
            </p>

            <div className="pt-2">
              <blockquote className="p-5 bg-white border-l-4 border-[#443353] shadow-xs text-xs sm:text-sm italic font-cormorant text-[#443353] leading-relaxed">
                "{f.quote}"
              </blockquote>
            </div>
          </div>

          {/* Founder Main Portrait with object-top so face is completely in frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              <div className="w-72 sm:w-80 h-[440px] rounded-t-[180px] rounded-b-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <img
                  src={f.images[0].url}
                  alt={f.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#443353] text-white px-5 py-3 shadow-lg border border-[#342640]">
                <span className="font-cormorant text-xl font-bold block text-[#F6B05C]">{f.name}</span>
                <span className="font-josefin text-[10px] uppercase tracking-wider block text-white/80">Founder & Legal Advocate</span>
              </div>
            </div>
          </div>

        </div>

        {/* Narrative & Journey: Activist to Advocate */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#ECEAED] shadow-xs space-y-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-3">
              <span className="font-josefin text-xs uppercase tracking-[2px] font-bold text-[#F6B05C] block">
                The Origin
              </span>
              <h2 className="font-cormorant text-3xl font-bold text-[#443353]">
                From Activist to Advocate
              </h2>
              <p className="text-xs sm:text-sm text-[#6A5C77] leading-relaxed font-light">
                {f.journey}
              </p>
            </div>

            <div className="space-y-3">
              <span className="font-josefin text-xs uppercase tracking-[2px] font-bold text-[#F6B05C] block">
                Legal Authority
              </span>
              <h2 className="font-cormorant text-3xl font-bold text-[#443353]">
                Academic Excellence for Animal Rights
              </h2>
              <p className="text-xs sm:text-sm text-[#6A5C77] leading-relaxed font-light">
                {f.academic}
              </p>
            </div>
          </div>

          {/* Three Pillars Cards */}
          <div className="pt-4 border-t border-[#F5F2EB]">
            <h3 className="font-cormorant text-2xl font-bold text-[#443353] mb-6 text-center">
              A Tri-Fold Strategic Approach
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {f.threePillars.map((p, idx) => (
                <div key={idx} className="p-6 bg-[#FBF5EE] border border-[#ECEAED] rounded-2xl space-y-2">
                  <div className="w-8 h-8 rounded-full bg-[#443353] text-[#F6B05C] flex items-center justify-center font-bold text-xs font-josefin mb-3">
                    0{idx + 1}
                  </div>
                  <h4 className="font-cormorant text-xl font-bold text-[#443353]">{p.title}</h4>
                  <p className="text-xs text-[#6A5C77] leading-relaxed font-light">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Message From The Founder Section */}
        <div className="bg-[#443353] text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden space-y-8 shadow-xl">
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-2 text-[#F6B05C]">
              <Quote className="w-6 h-6 rotate-180" />
              <span className="font-josefin text-xs uppercase tracking-[3px] font-bold">Personal Letter</span>
            </div>

            <h2 className="font-cormorant text-4xl sm:text-5xl font-normal text-white">
              Message from the Founder
            </h2>

            <div className="text-xs sm:text-sm text-[#ECEAED]/90 font-light leading-relaxed whitespace-pre-line space-y-4">
              {f.personalMessage}
            </div>

            <div className="p-4 rounded-xl bg-white/10 border border-white/20 text-xs italic font-cormorant text-[#F6B05C] max-w-xl">
              "{f.fatherQuote}"
            </div>
          </div>
        </div>

        {/* Authentic Founder Gallery - PROPER ASPECT RATIOS & CROPPING */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <span className="font-josefin text-xs uppercase tracking-[3px] font-bold text-[#F6B05C]">
              Visual Archive
            </span>
            <h2 className="font-cormorant text-3xl sm:text-4xl font-normal text-[#443353]">
              Fieldwork, Advocacy & Inspiration
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {f.images.map((img, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-[#ECEAED] shadow-xs group flex flex-col justify-between">
                <div className="aspect-[4/5] overflow-hidden bg-[#F0EEED] relative">
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 bg-white">
                  <p className="text-xs text-[#6A5C77] font-light leading-snug">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center py-8">
          <button
            onClick={onOpenDonate}
            className="gods-button gods-button-solid"
          >
            <div className="button-line-break"></div>
            <span>Support Our Legal & Rescue Mission</span>
          </button>
        </div>

      </div>
    </div>
  );
};
