import React, { useState } from 'react';
import { PFA_DATA } from '../data/pfaData';
import { Check } from 'lucide-react';

interface GodsGraceDonateSectionProps {
  onOpenFullModal: (amt: number) => void;
}

export const GodsGraceDonateSection: React.FC<GodsGraceDonateSectionProps> = ({ onOpenFullModal }) => {
  const [selectedAmount, setSelectedAmount] = useState<number>(1000);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const amounts = [500, 1000, 2500, 5000];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenFullModal(selectedAmount);
  };

  return (
    <section id="donate-section" className="py-20 px-6 sm:px-12 lg:px-20 bg-[#FBF5EE]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Real PFA Ambulance Photo with 80G Badge */}
        <div className="lg:col-span-6">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border-4 border-white shadow-xl aspect-[4/3] bg-white">
              <img 
                src="./images/ambulance.jpeg" 
                alt="PFA Chengalpattu Ambulance and Rescue Team" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* 80G Tax Badge */}
            <div className="absolute -bottom-5 -right-5 bg-[#443353] text-white p-5 shadow-xl hidden sm:block border border-[#342640]">
              <span className="font-cormorant text-3xl font-bold block text-[#F6B05C]">80G Tax</span>
              <span className="font-josefin text-[10px] uppercase tracking-wider block text-white/80">Exempt Certificate</span>
            </div>
          </div>
        </div>

        {/* Right Side: Donation Form in GodsGrace Style - NO GREEN BORDER */}
        <div className="lg:col-span-6 space-y-6">
          
          <div className="flex items-center">
            <p className="font-josefin text-xs uppercase tracking-[3px] font-semibold text-[#443353]">
              You Belong Here
            </p>
            <div className="section-underline"></div>
            <div className="section-straight-line">
              <div className="section-rectangle"></div>
            </div>
          </div>

          <h2 className="font-cormorant text-4xl sm:text-5xl font-normal text-[#443353]">
            Support Our Mission
          </h2>

          <p className="text-xs sm:text-sm text-[#6A5C77] leading-relaxed font-light">
            We are not a building. We are a family of animal lovers united to bring healing to those who cannot ask for it themselves. Select an amount to sustain our ambulance and medical shelter.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            
            {/* Amount Radio Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {amounts.map((amt) => (
                <button
                  type="button"
                  key={amt}
                  onClick={() => setSelectedAmount(amt)}
                  className={`p-3 text-center cursor-pointer font-josefin text-sm font-bold transition-all border ${
                    selectedAmount === amt
                      ? 'border-[#443353] bg-[#443353] text-[#F6B05C] shadow-xs'
                      : 'border-[#ECEAED] bg-white text-[#443353] hover:border-[#443353]'
                  }`}
                >
                  ₹ {amt.toLocaleString('en-IN')}
                </button>
              ))}
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <input 
                type="text" 
                placeholder="First Name" 
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-3.5 bg-white border border-[#ECEAED] text-xs font-light text-[#443353] focus:outline-none focus:border-[#443353]" 
              />
              <input 
                type="text" 
                placeholder="Last Name" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-3.5 bg-white border border-[#ECEAED] text-xs font-light text-[#443353] focus:outline-none focus:border-[#443353]" 
              />
            </div>

            <input 
              type="email" 
              placeholder="Email Address (For 80G Tax Receipt)" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3.5 bg-white border border-[#ECEAED] text-xs font-light text-[#443353] focus:outline-none focus:border-[#443353]" 
            />
            
            <button 
              type="submit"
              className="w-full py-4 bg-[#443353] text-white font-josefin text-xs uppercase tracking-[2px] font-bold hover:bg-[#342640] transition-colors shadow-md"
            >
              Donate ₹ {selectedAmount.toLocaleString('en-IN')} Now
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};
