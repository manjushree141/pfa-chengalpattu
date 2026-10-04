import React from 'react';
import { PFA_DATA } from '../data/pfaData';
import { PhoneCall } from 'lucide-react';

interface HeroProps {
  onOpenDonate: () => void;
  onNavigateFounder: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDonate, onNavigateFounder }) => {
  return (
    <section id="home" className="relative overflow-hidden py-16 sm:py-20 lg:py-24 px-6 sm:px-12 lg:px-20 bg-[#FBF5EE]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Hero Typography matching GodsGrace Mockup */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Signature GodsGrace Subtitle with Line & Diamond Notch */}
          <div className="flex items-center">
            <p className="font-josefin text-xs uppercase tracking-[3px] font-semibold text-[#443353] m-0">
              Voice for Every Living Creature
            </p>
            <div className="section-underline"></div>
            <div className="section-straight-line">
              <div className="section-rectangle"></div>
            </div>
          </div>

          {/* Headline in Regal Cormorant Serif */}
          <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl font-normal text-[#443353] leading-[1.08] tracking-tight">
            Hands For A <br />
            <span className="italic font-light text-[#F6B05C]">Voiceless Soul.</span>
          </h1>

          {/* Subtext */}
          <p className="text-sm sm:text-base text-[#6A5C77] leading-relaxed max-w-xl font-light">
            We’re a dedicated collective of citizens, rescuers, and veterinarians who believe in unconditional compassion for animals. Under Article 51A(g) of the Constitution, we rescue, rehabilitate, and release with quiet devotion.
          </p>

          {/* CTA Buttons with GodsGrace Line Break */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={onNavigateFounder}
              className="gods-button gods-button-solid"
            >
              <div className="button-line-break"></div>
              <div>About Us</div>
            </button>

            <button
              onClick={onOpenDonate}
              className="gods-button"
            >
              <div className="button-line-break"></div>
              <div>Sponsor Rescue</div>
            </button>
          </div>

          {/* Constitutional Article 51A(g) Badge */}
          <div className="pt-3 flex items-center gap-2.5 text-xs text-[#6A5C77] font-josefin tracking-wider">
            <span className="w-2 h-2 bg-[#F6B05C] rotate-45 shrink-0"></span>
            <span>INDIAN CONSTITUTION ARTICLE 51A(g) MANDATE • CHENGALPATTU</span>
          </div>

        </div>

        {/* Right Side: GodsGrace Arch Cutout & Layered Abstract Shapes */}
        <div className="lg:col-span-5 relative flex justify-center py-6">
          
          {/* Abstract Yellow Arch Shape */}
          <div className="banner-yellow-bg"></div>
          {/* Abstract Plum Shape */}
          <div className="banner-plum-bg"></div>

          {/* Foreground Emotive Cutout Image - Centered and Properly Cropped */}
          <div className="banner-image-cutout w-72 sm:w-80 h-[440px] sm:h-[480px] bg-white border-4 border-white shadow-xl">
            <img 
              src="./images/hero-cutout.jpeg" 
              alt="Rescued Puppies at PFA" 
              className="w-full h-full object-cover object-center"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
