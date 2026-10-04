import React, { useState } from 'react';
import { PFA_DATA } from '../data/pfaData';
import { Menu, X, PhoneCall } from 'lucide-react';

interface NavbarProps {
  currentPage: 'home' | 'founder' | 'linkedin' | 'gallery';
  setCurrentPage: (page: 'home' | 'founder' | 'linkedin' | 'gallery') => void;
  onOpenDonate: () => void;
  onOpenVolunteer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  onOpenDonate,
  onOpenVolunteer
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: 'home' | 'founder' | 'linkedin' | 'gallery', anchor?: string) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    if (anchor && page === 'home') {
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#443353] text-[#FBF5EE] text-xs font-josefin py-2 px-4 border-b border-[#342640]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="w-1.5 h-1.5 bg-[#F6B05C] rotate-45 inline-block shrink-0"></span>
            <span className="tracking-wide">
              24/7 Animal Ambulance & Emergency Rescue: <a href={`tel:${PFA_DATA.helpline}`} className="font-bold underline text-[#F6B05C] hover:text-white">{PFA_DATA.helpline}</a>
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-[11px] text-[#ECEAED]/80">
            <span>Section 80G Tax Exemption Eligible</span>
            <span>•</span>
            <a 
              href={`https://wa.me/${PFA_DATA.whatsappNumber}?text=Emergency%20Animal%20Rescue:`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#F6B05C] hover:underline font-semibold"
            >
              WhatsApp Rescue Spot
            </a>
          </div>
        </div>
      </div>

      {/* Main Header / Nav with Stable Alignment */}
      <header className="sticky top-0 z-40 bg-[#FBF5EE]/95 backdrop-blur-md border-b border-[#ECEAED] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            
            {/* Logo & Brand Name - FIXED NO-WRAP SHIFT */}
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 group text-left shrink-0"
            >
              <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-[#443353] shadow-xs bg-white shrink-0">
                <img 
                  src="https://pfachengalpattu.org/wp-content/uploads/2026/04/cropped-WhatsApp-Image-2026-04-12-at-16.39.19-1.jpeg" 
                  alt="PFA Chengalpattu Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="whitespace-nowrap">
                <span className="font-cormorant text-2xl font-bold text-[#443353] tracking-tight block leading-none">
                  People For Animals
                </span>
                <span className="font-josefin text-[10px] uppercase font-semibold text-[#6A5C77] tracking-[2px] block mt-1">
                  Chengalpattu Chapter
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-7">
              <button
                onClick={() => handleNavClick('home')}
                className={`font-josefin text-xs uppercase tracking-[2px] transition-colors py-1 ${
                  currentPage === 'home' ? 'text-[#443353] font-bold border-b-2 border-[#443353]' : 'text-[#6A5C77] hover:text-[#443353]'
                }`}
              >
                Home
              </button>

              <button
                onClick={() => handleNavClick('founder')}
                className={`font-josefin text-xs uppercase tracking-[2px] transition-colors py-1 ${
                  currentPage === 'founder' ? 'text-[#443353] font-bold border-b-2 border-[#443353]' : 'text-[#6A5C77] hover:text-[#443353]'
                }`}
              >
                Meet the Founder
              </button>

              <button
                onClick={() => handleNavClick('home', 'ministry')}
                className="font-josefin text-xs uppercase tracking-[2px] text-[#6A5C77] hover:text-[#443353] transition-colors py-1"
              >
                Our Mission
              </button>

              <button
                onClick={() => handleNavClick('gallery')}
                className={`font-josefin text-xs uppercase tracking-[2px] transition-colors flex items-center gap-1.5 py-1 ${
                  currentPage === 'gallery' ? 'text-[#443353] font-bold border-b-2 border-[#443353]' : 'text-[#6A5C77] hover:text-[#443353]'
                }`}
              >
                <span>Gallery</span>
                <span className="px-1.5 py-0.2 text-[9px] font-bold bg-[#443353] text-[#F6B05C]">
                  138
                </span>
              </button>

              <button
                onClick={() => handleNavClick('linkedin')}
                className={`font-josefin text-xs uppercase tracking-[2px] transition-colors py-1 ${
                  currentPage === 'linkedin' ? 'text-[#443353] font-bold border-b-2 border-[#443353]' : 'text-[#6A5C77] hover:text-[#443353]'
                }`}
              >
                LinkedIn Updates
              </button>

              <button
                onClick={() => handleNavClick('home', 'contact')}
                className="font-josefin text-xs uppercase tracking-[2px] text-[#6A5C77] hover:text-[#443353] transition-colors py-1"
              >
                Contact
              </button>
            </nav>

            {/* Right Buttons: GodsGrace Line-Break Button */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <a
                href={`tel:${PFA_DATA.helpline}`}
                className="p-2 text-[#443353] hover:text-[#F6B05C] transition-colors"
                title="Call 24/7 Helpline"
              >
                <PhoneCall className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenDonate}
                className="gods-button"
              >
                <div className="button-line-break"></div>
                <div>Join Now</div>
              </button>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex xl:hidden items-center gap-2">
              <button
                onClick={onOpenDonate}
                className="px-3.5 py-2 text-xs font-josefin uppercase tracking-wider font-bold bg-[#443353] text-white"
              >
                Join
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#443353]"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#FBF5EE] border-b border-[#ECEAED] px-6 py-4 space-y-3 shadow-lg">
            <div className="flex flex-col space-y-2.5">
              <button
                onClick={() => handleNavClick('home')}
                className="text-left py-1 text-sm font-josefin uppercase tracking-wider font-bold text-[#443353]"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('founder')}
                className="text-left py-1 text-sm font-josefin uppercase tracking-wider font-bold text-[#443353]"
              >
                Meet the Founder
              </button>
              <button
                onClick={() => handleNavClick('home', 'ministry')}
                className="text-left py-1 text-sm font-josefin uppercase tracking-wider text-[#6A5C77]"
              >
                Our Mission
              </button>
              <button
                onClick={() => handleNavClick('gallery')}
                className="text-left py-1 text-sm font-josefin uppercase tracking-wider text-[#6A5C77] flex items-center justify-between"
              >
                <span>Gallery</span>
                <span className="px-2 py-0.5 bg-[#443353] text-[#F6B05C] text-[10px] font-bold">138 Photos</span>
              </button>
              <button
                onClick={() => handleNavClick('linkedin')}
                className="text-left py-1 text-sm font-josefin uppercase tracking-wider text-[#6A5C77]"
              >
                LinkedIn Updates
              </button>
              <button
                onClick={() => handleNavClick('home', 'contact')}
                className="text-left py-1 text-sm font-josefin uppercase tracking-wider text-[#6A5C77]"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
