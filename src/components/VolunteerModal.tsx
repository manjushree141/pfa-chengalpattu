import React, { useState } from 'react';
import { PFA_DATA } from '../data/pfaData';
import { X, HeartHandshake, CheckCircle2 } from 'lucide-react';

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VolunteerModal: React.FC<VolunteerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [role, setRole] = useState<'On-Ground Rescue' | 'Animal Foster Parent' | 'ABC Drive Volunteer' | 'Community Advocate'>('On-Ground Rescue');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [area, setArea] = useState('Egattur / Chengalpattu');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#443353]/85 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FBF5EE] max-w-lg w-full max-h-[90vh] overflow-y-auto relative shadow-2xl border border-[#ECEAED] p-6 sm:p-8">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#6A5C77] hover:bg-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-3 text-[#443353] mb-2">
              <div className="w-10 h-10 bg-[#443353] text-[#F6B05C] flex items-center justify-center shrink-0">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-cormorant text-3xl font-bold text-[#443353]">
                  Join PFA Chengalpattu
                </h3>
                <p className="text-xs text-[#6A5C77] font-light">
                  Volunteer your time, foster rescued animals, or report emergencies.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 mt-5 text-xs">
              <div>
                <label className="block font-josefin uppercase tracking-wider font-semibold text-[#443353] mb-1">
                  How Would You Like to Support?
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value as any)}
                  className="w-full p-3 border border-[#ECEAED] bg-white font-josefin text-xs text-[#443353] focus:outline-none focus:border-[#443353]"
                >
                  <option value="On-Ground Rescue">On-Ground Emergency Rescue Team</option>
                  <option value="Animal Foster Parent">Temporary Foster Parent (Puppies/Dogs)</option>
                  <option value="ABC Drive Volunteer">ABC Sterilization Drive Assistant</option>
                  <option value="Community Advocate">Legal Advocacy & Social Media Coordinator</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  className="w-full p-3 border border-[#ECEAED] bg-white text-xs focus:outline-none focus:border-[#443353]"
                />
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number (+91)"
                  className="w-full p-3 border border-[#ECEAED] bg-white text-xs focus:outline-none focus:border-[#443353]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full p-3 border border-[#ECEAED] bg-white text-xs focus:outline-none focus:border-[#443353]"
                />
                <input
                  type="text"
                  required
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  placeholder="Locality / Area"
                  className="w-full p-3 border border-[#ECEAED] bg-white text-xs focus:outline-none focus:border-[#443353]"
                />
              </div>

              <div>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Availability, past animal care experience, or transport capabilities..."
                  className="w-full p-3 border border-[#ECEAED] bg-white text-xs focus:outline-none focus:border-[#443353]"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 bg-[#443353] text-[#F6B05C] font-josefin text-xs uppercase tracking-[2px] font-bold hover:bg-[#342640] transition-all shadow-md"
              >
                Submit Volunteer Application
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-[#443353] text-[#F6B05C] mx-auto flex items-center justify-center rounded-full">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-cormorant text-3xl font-bold text-[#443353]">
              Welcome to the PFA Team!
            </h3>
            <p className="text-xs text-[#6A5C77] max-w-sm mx-auto leading-relaxed font-light">
              Thank you, <strong>{name}</strong>! Our volunteer coordinator will reach out to you at <strong>{phone}</strong> regarding upcoming field drives.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-8 py-3 bg-[#443353] text-white font-josefin text-xs uppercase tracking-wider font-bold"
            >
              Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
