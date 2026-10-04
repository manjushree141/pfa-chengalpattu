import React from 'react';
import { PFA_DATA, InitiativeItem } from '../data/pfaData';
import { Check, ShieldCheck, HeartHandshake } from 'lucide-react';

interface MembershipSectionProps {
  onSelectAmount: (amount: number, name: string) => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({ onSelectAmount }) => {
  const tiers = [
    {
      name: "Student Member",
      price: 500,
      period: "per year",
      badge: "Youth Circle",
      benefits: [
        "Official PFA Digital Membership Certificate",
        "Invitation to Student Volunteer Drives",
        "Quarterly Impact Newsletter",
        "80G Tax Exemption Eligible"
      ]
    },
    {
      name: "Silver Supporter",
      price: 1000,
      period: "per year",
      benefits: [
        "Includes Animal Laws & Rights Handbook",
        "Official PFA Membership Card & Certificate",
        "Priority Emergency Alert Updates",
        "80G Tax Exemption Certificate"
      ]
    },
    {
      name: "Golden Guardian",
      price: 2500,
      period: "per year",
      popular: true,
      badge: "Most Popular",
      benefits: [
        "Official PFA Organic Cotton T-Shirt",
        "Book: 'Keep Your Dog Vegetarian & Healthy'",
        "Animal Law & Rights Handbook",
        "Direct Invitation to Annual General Meeting",
        "80G Tax Exemption Certificate"
      ]
    },
    {
      name: "Platinum Defender",
      price: 5000,
      period: "per year",
      benefits: [
        "Official PFA T-Shirt & Silicone Wrist Band",
        "Books: 'Keep Your Dog Vegetarian' & 'Heads & Tails'",
        "Special Recognition on Website Honor Wall",
        "Invitation to Rescue Field Operations",
        "80G Tax Exemption Certificate"
      ]
    },
    {
      name: "Lifetime Benefactor",
      price: 10000,
      period: "one-time",
      badge: "Permanent",
      benefits: [
        "Lifetime Member Badge & Custom Plaque",
        "Full PFA Book Bundle & Merchandise Kit",
        "Direct Consultation with Founder on Rescue Cases",
        "Permanent Name Listing in Treatment Centre Wall",
        "80G Tax Exemption Certificate"
      ]
    }
  ];

  return (
    <section id="membership" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8F6F0] border-t border-[#E8E4DA]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#58635A] bg-[#E8E4DA] px-3.5 py-1 rounded-full">
            Membership & Guardian Circle
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#14331C] mt-3">
            Stand With Us Every Month
          </h2>
          <p className="text-xs sm:text-sm text-[#58635A] mt-2 leading-relaxed">
            Your contributions directly fund ambulance fuel, surgical sterilizations, trauma dressings, and daily meals for rescues. All donations receive 80G Tax Exemption Certificates.
          </p>
        </div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-3xl border p-6 flex flex-col justify-between transition-all relative ${
                tier.popular
                  ? 'bg-white border-[#14331C] shadow-lg ring-2 ring-[#14331C]/15 transform lg:-translate-y-2'
                  : 'bg-white border-[#E8E4DA] hover:border-[#CBD5C0] hover:shadow-xs'
              }`}
            >
              {tier.badge && (
                <span className={`absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] uppercase font-bold tracking-wider px-3 py-0.5 rounded-full shadow-xs ${
                  tier.popular ? 'bg-[#14331C] text-[#E2EDB8]' : 'bg-[#E8E4DA] text-[#14331C]'
                }`}>
                  {tier.badge}
                </span>
              )}

              <div>
                <h3 className="font-serif text-lg font-bold text-[#14331C]">{tier.name}</h3>

                <div className="mt-3 mb-4">
                  <span className="font-serif text-3xl font-bold text-[#14331C]">
                    ₹{tier.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-[#667368] ml-1">/ {tier.period}</span>
                </div>

                <ul className="space-y-2.5 border-t border-[#F5F2EB] pt-4 mb-6">
                  {tier.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#58635A] leading-snug">
                      <Check className="w-3.5 h-3.5 text-[#14331C] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onSelectAmount(tier.price, tier.name)}
                className={`w-full py-2.5 px-4 rounded-full text-xs font-bold transition-all ${
                  tier.popular
                    ? 'bg-[#E2EDB8] text-[#14331C] hover:bg-[#D5E3A3] shadow-xs'
                    : 'bg-[#F2EFE9] text-[#14331C] hover:bg-[#E8E4DA]'
                }`}
              >
                Join as {tier.name.split(' ')[0]}
              </button>
            </div>
          ))}
        </div>

        {/* 80G Tax Exemption Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-[#14331C] text-white flex flex-col md:flex-row items-center justify-between gap-6 text-xs border border-[#244A2D]">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-white/10 text-[#E2EDB8] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-base text-[#FAF8F5]">
                100% Tax Deductible under Section 80G
              </h4>
              <p className="text-[#C4D8A6] mt-0.5 font-light">
                Every donation to People For Animals Chengalpattu qualifies for tax exemption certificate under Section 80G of the Income Tax Act.
              </p>
            </div>
          </div>

          <span className="font-bold text-xs text-[#E2EDB8] bg-white/10 px-4 py-2 rounded-full shrink-0">
            Digital Certificate Issued Instantly
          </span>
        </div>

      </div>
    </section>
  );
};
