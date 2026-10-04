import React from 'react';

interface GodsGraceEventsSectionProps {
  onNavigateLinkedIn: () => void;
}

export const GodsGraceEventsSection: React.FC<GodsGraceEventsSectionProps> = ({ onNavigateLinkedIn }) => {
  return (
    <section id="events" className="py-20 px-6 sm:px-12 lg:px-20 bg-[#ECEAED]/40">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Centered Title with Diamond Divider */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-3">
            <div className="w-1.5 h-1.5 bg-[#F6B05C] rotate-45"></div>
            <div className="w-8 h-[1px] bg-[#443353]/30"></div>
            <p className="font-josefin text-xs uppercase tracking-[3px] text-[#443353] font-semibold">
              On The Ground
            </p>
            <div className="w-8 h-[1px] bg-[#443353]/30"></div>
            <div className="w-1.5 h-1.5 bg-[#F6B05C] rotate-45"></div>
          </div>

          <h2 className="font-cormorant text-4xl sm:text-5xl font-normal text-[#443353]">
            Recent Field Dispatches
          </h2>
        </div>

        {/* Events List in GodsGrace Style */}
        <div className="space-y-4">
          
          {/* Event Item 1 */}
          <div className="bg-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-[#F6B05C] shadow-2xs">
            <div className="flex items-center gap-6 w-full md:w-auto">
              {/* GodsGrace Date Badge */}
              <div className="w-16 h-16 bg-[#443353] text-white flex flex-col items-center justify-center shrink-0">
                <span className="font-cormorant text-2xl font-bold leading-none">04</span>
                <span className="font-josefin text-[10px] uppercase tracking-wider text-[#F6B05C]">OCT</span>
              </div>

              {/* Thumbnail */}
              <img 
                src="/images/ambulance.jpeg" 
                alt="Ambulance Dispatch" 
                className="w-24 h-16 object-cover object-center hidden sm:block shrink-0 rounded"
              />

              <div>
                <div className="text-[11px] font-josefin uppercase tracking-wider text-[#F6B05C] font-semibold">Emergency Triage</div>
                <h3 className="font-cormorant text-2xl font-bold text-[#443353] leading-snug">
                  Midnight Ambulance Dispatch on OMR Corridor
                </h3>
                <p className="text-xs text-[#6A5C77] mt-1 font-light">Egattur Bypass • Rescued & Transferred to Shelter</p>
              </div>
            </div>

            <button onClick={onNavigateLinkedIn} className="gods-button shrink-0">
              <div className="button-line-break"></div>
              <div>View Details</div>
            </button>
          </div>

          {/* Event Item 2 */}
          <div className="bg-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-[#443353] shadow-2xs">
            <div className="flex items-center gap-6 w-full md:w-auto">
              <div className="w-16 h-16 bg-[#443353] text-white flex flex-col items-center justify-center shrink-0">
                <span className="font-cormorant text-2xl font-bold leading-none">28</span>
                <span className="font-josefin text-[10px] uppercase tracking-wider text-[#F6B05C]">SEP</span>
              </div>

              <img 
                src="/images/adopt-dog.jpg" 
                alt="ABC Surgery" 
                className="w-24 h-16 object-cover object-center hidden sm:block shrink-0 rounded"
              />

              <div>
                <div className="text-[11px] font-josefin uppercase tracking-wider text-[#F6B05C] font-semibold">Population Health</div>
                <h3 className="font-cormorant text-2xl font-bold text-[#443353] leading-snug">
                  50-Dog Animal Birth Control & Rabies Drive
                </h3>
                <p className="text-xs text-[#6A5C77] mt-1 font-light">In coordination with Local Municipal Body</p>
              </div>
            </div>

            <button onClick={onNavigateLinkedIn} className="gods-button shrink-0">
              <div className="button-line-break"></div>
              <div>View Details</div>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
