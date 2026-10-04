import React from 'react';
import { PFA_DATA } from '../data/pfaData';
import { Ambulance, PhoneCall, MessageCircle, AlertCircle } from 'lucide-react';

export const EmergencyBanner: React.FC = () => {
  return (
    <div className="bg-[#2D5A27] text-white py-2.5 px-4 text-xs font-medium">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span className="font-semibold tracking-wide flex items-center gap-1.5">
            <Ambulance className="w-4 h-4 text-emerald-300 inline" />
            <span>24/7 Animal Ambulance & Emergency Rescue Active in Chengalpattu</span>
          </span>
        </div>

        <div className="flex items-center gap-4 flex-wrap">
          <a
            href={`tel:${PFA_DATA.helpline}`}
            className="flex items-center gap-1.5 hover:underline font-semibold text-emerald-100"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Call: {PFA_DATA.helpline}</span>
          </a>

          <span className="hidden sm:inline text-white/40">|</span>

          <a
            href={`https://wa.me/${PFA_DATA.whatsappNumber}?text=Emergency%20Animal%20Rescue%20Report:`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-emerald-700/80 hover:bg-emerald-700 px-2.5 py-1 rounded transition-colors text-white"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-300" />
            <span>WhatsApp Rescue Spot</span>
          </a>
        </div>
      </div>
    </div>
  );
};
