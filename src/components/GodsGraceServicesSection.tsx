import React from 'react';
import { Truck, Heart, Home, BookOpen } from 'lucide-react';

interface GodsGraceServicesSectionProps {
  onNavigateGallery: () => void;
}

export const GodsGraceServicesSection: React.FC<GodsGraceServicesSectionProps> = ({ onNavigateGallery }) => {
  return (
    <section id="ministry" className="py-20 px-6 sm:px-12 lg:px-20 bg-[#FBF5EE]">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Title Wrap */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center">
              <p className="font-josefin text-xs uppercase tracking-[3px] font-semibold text-[#443353]">
                Compassion in Action
              </p>
              <div className="section-underline"></div>
              <div className="section-straight-line">
                <div className="section-rectangle"></div>
              </div>
            </div>

            <h2 className="font-cormorant text-4xl sm:text-5xl font-normal text-[#443353] leading-tight">
              Restoring Dignity to Animals in Distress
            </h2>

            <p className="text-xs sm:text-sm text-[#6A5C77] leading-relaxed font-light">
              Each service is executed with institutional integrity, veterinary expertise, and unconditional dedication.
            </p>

            <div className="pt-4">
              <button
                onClick={onNavigateGallery}
                className="gods-button"
              >
                <div className="button-line-break"></div>
                <div>View All Works</div>
              </button>
            </div>
          </div>

          {/* Right Service Cards Grid on Pale Neutral #F0EEED */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Card 1 */}
            <div className="service-card bg-[#F0EEED] p-7 border border-[#ECEAED] space-y-4">
              <div className="w-12 h-12 bg-white flex items-center justify-center text-[#F6B05C] shadow-xs">
                <Truck className="w-6 h-6 text-[#F6B05C]" />
              </div>
              <h3 className="font-cormorant text-2xl font-bold text-[#443353]">24/7 Ambulance Fleet</h3>
              <p className="text-xs text-[#6A5C77] leading-relaxed font-light">
                Emergency transit for accident-hit strays, trauma triage, and pre-booked veterinary transport.
              </p>
            </div>

            {/* Card 2 */}
            <div className="service-card bg-[#F0EEED] p-7 border border-[#ECEAED] space-y-4">
              <div className="w-12 h-12 bg-white flex items-center justify-center text-[#F6B05C] shadow-xs">
                <Heart className="w-6 h-6 text-[#F6B05C]" />
              </div>
              <h3 className="font-cormorant text-2xl font-bold text-[#443353]">Humane ABC Drives</h3>
              <p className="text-xs text-[#6A5C77] leading-relaxed font-light">
                Animal Birth Control and Anti-Rabies vaccination campaigns following court and AWBI mandates.
              </p>
            </div>

            {/* Card 3 */}
            <div className="service-card bg-[#F0EEED] p-7 border border-[#ECEAED] space-y-4">
              <div className="w-12 h-12 bg-white flex items-center justify-center text-[#F6B05C] shadow-xs">
                <Home className="w-6 h-6 text-[#F6B05C]" />
              </div>
              <h3 className="font-cormorant text-2xl font-bold text-[#443353]">Treatment Centre Ward</h3>
              <p className="text-xs text-[#6A5C77] leading-relaxed font-light">
                Post-operative recovery kennels, antiseptic dressings, and continuous inpatient veterinary care.
              </p>
            </div>

            {/* Card 4 */}
            <div className="service-card bg-[#F0EEED] p-7 border border-[#ECEAED] space-y-4">
              <div className="w-12 h-12 bg-white flex items-center justify-center text-[#F6B05C] shadow-xs">
                <BookOpen className="w-6 h-6 text-[#F6B05C]" />
              </div>
              <h3 className="font-cormorant text-2xl font-bold text-[#443353]">Legal Advocacy</h3>
              <p className="text-xs text-[#6A5C77] leading-relaxed font-light">
                Educating residential colonies and authorities on animal cruelty laws and feeder protections under Article 51A(g).
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
