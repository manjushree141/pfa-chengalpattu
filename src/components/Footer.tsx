import React from 'react';
import { PFA_DATA } from '../data/pfaData';
import { Linkedin, Globe, PhoneCall, ShieldCheck, ArrowUp } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: 'home' | 'founder' | 'linkedin' | 'gallery') => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#443353] text-white pt-16 pb-12 border-t border-[#342640]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Branding & Constitutional Pledge */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-[#F6B05C] bg-white shrink-0">
                <img
                  src="https://pfachengalpattu.org/wp-content/uploads/2026/04/cropped-WhatsApp-Image-2026-04-12-at-16.39.19-1.jpeg"
                  alt="PFA Chengalpattu Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-cormorant text-2xl font-bold text-white block leading-none">
                  People For Animals
                </span>
                <span className="font-josefin text-[10px] text-[#F6B05C] font-semibold tracking-widest uppercase block mt-1">
                  Chengalpattu Chapter
                </span>
              </div>
            </div>

            <p className="text-xs text-[#ECEAED]/80 font-light leading-relaxed max-w-sm">
              Dedicated to emergency animal rescue, 24/7 ambulance triage, stray sterilization, and legal advocacy across Chengalpattu and Tamil Nadu.
            </p>

            <div className="p-3.5 bg-white/5 border border-white/10 text-[11px] text-[#F6B05C] leading-relaxed italic font-cormorant">
              "{PFA_DATA.constitutionArticle.article}: {PFA_DATA.constitutionArticle.text}"
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-josefin font-bold text-xs text-[#F6B05C] uppercase tracking-[2px]">
              Explore
            </h4>
            <ul className="space-y-2 text-xs font-light text-[#ECEAED]/80">
              <li>
                <button onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => { setCurrentPage('founder'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors">
                  Meet the Founder (Arna Dey)
                </button>
              </li>
              <li>
                <button onClick={() => { setCurrentPage('gallery'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors">
                  Field Photo Gallery (138 Photos)
                </button>
              </li>
              <li>
                <button onClick={() => { setCurrentPage('linkedin'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors">
                  Official LinkedIn Field Updates
                </button>
              </li>
              <li>
                <a href="#ministry" onClick={() => setCurrentPage('home')} className="hover:text-white transition-colors">
                  Our Mission & Initiatives
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Emergency Helpline & Social */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-josefin font-bold text-xs text-[#F6B05C] uppercase tracking-[2px]">
              Emergency Rescue Hotline
            </h4>

            <div className="p-4 bg-black/25 border border-white/10 space-y-1.5">
              <span className="text-[10px] font-bold text-[#F6B05C] block uppercase tracking-wider font-josefin">
                24/7 Animal Ambulance Transit
              </span>
              <a
                href={`tel:${PFA_DATA.helpline}`}
                className="font-cormorant text-2xl font-bold text-white hover:text-[#F6B05C] transition-colors flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#F6B05C]" />
                <span>{PFA_DATA.helpline}</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#ECEAED]/80 font-light">
              <ShieldCheck className="w-4 h-4 text-[#F6B05C] shrink-0" />
              <span>Registered Animal Welfare NGO • Section 80G Tax Exempt</span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/company/people-for-animals-chengalpattu/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/10 hover:bg-[#0A66C2] text-white transition-colors"
                title="LinkedIn Page"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://pfachengalpattu.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/10 hover:bg-[#F6B05C] hover:text-[#443353] text-white transition-colors"
                title="Original WordPress Website"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#ECEAED]/60 font-light">
          <div>
            © {new Date().getFullYear()} People For Animals Chengalpattu. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-4 py-2 border border-white/20 hover:bg-white/10 text-white transition-all text-xs font-josefin uppercase tracking-wider"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
