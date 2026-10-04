import React from 'react';
import { PFA_DATA } from '../data/pfaData';
import { PhoneCall } from 'lucide-react';

export const AmbulanceBannerSection: React.FC = () => {
  return (
    <section className="bg-[#443353] text-white py-16 px-6 sm:px-12 lg:px-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        
        {/* Centered Subtitle with Double Diamond Lines */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-1.5 h-1.5 bg-[#F6B05C] rotate-45"></div>
          <div className="w-8 h-[1px] bg-white/40"></div>
          <p className="font-josefin text-xs uppercase tracking-[3px] text-white/90">
            24/7 EMERGENCY ANIMAL AMBULANCE
          </p>
          <div className="w-8 h-[1px] bg-white/40"></div>
          <div className="w-1.5 h-1.5 bg-[#F6B05C] rotate-45"></div>
        </div>

        <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-white max-w-3xl mx-auto">
          When an animal cries out in pain, our ambulance answers within minutes across Chengalpattu.
        </h2>

        <p className="text-xs sm:text-sm text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
          Our newly acquired emergency vehicle is staffed with trained trauma handlers, stretcher transit, and primary first-aid equipment to save dogs, cattle, and birds from roadside tragedy.
        </p>

        <div className="pt-3">
          <a
            href={`tel:${PFA_DATA.helpline}`}
            className="inline-flex items-center font-josefin text-xs uppercase tracking-[2px] px-8 py-4 bg-[#F6B05C] text-[#443353] font-bold hover:bg-[#ffbe70] transition-colors shadow-md"
          >
            <div className="w-3.5 h-[2px] bg-[#443353] mr-2.5"></div>
            <div>Call Hotline: {PFA_DATA.helpline}</div>
          </a>
        </div>

      </div>
    </section>
  );
};
