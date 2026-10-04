import React, { useState } from 'react';
import { PFA_DATA } from '../data/pfaData';
import { MapPin, PhoneCall, Mail, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Enquiry');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setSent(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 px-6 sm:px-12 lg:px-20 bg-[#FBF5EE]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-3">
            <div className="w-1.5 h-1.5 bg-[#F6B05C] rotate-45"></div>
            <div className="w-8 h-[1px] bg-[#443353]/30"></div>
            <p className="font-josefin text-xs uppercase tracking-[3px] text-[#443353] font-semibold">
              Get In Touch
            </p>
            <div className="w-8 h-[1px] bg-[#443353]/30"></div>
            <div className="w-1.5 h-1.5 bg-[#F6B05C] rotate-45"></div>
          </div>

          <h2 className="font-cormorant text-4xl sm:text-5xl font-normal text-[#443353]">
            Contact & Headquarters
          </h2>
          <p className="text-xs sm:text-sm text-[#6A5C77] font-light">
            Report an injured animal in distress, book animal ambulance transit, or contact our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Info Cards & Map */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 bg-white border border-[#ECEAED] space-y-6 shadow-xs">
              
              {/* Phone Helpline */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-[#443353] text-[#F6B05C] flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-cormorant font-bold text-xl text-[#443353]">
                    24/7 Rescue & Ambulance
                  </h4>
                  <a
                    href={`tel:${PFA_DATA.helpline}`}
                    className="font-josefin font-bold text-base text-[#443353] hover:text-[#F6B05C] block mt-0.5"
                  >
                    {PFA_DATA.helpline}
                  </a>
                  <p className="text-xs text-[#6A5C77] mt-0.5 font-light">
                    Emergency on-ground triage & pre-booking available.
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 border-t border-[#F5F2EB] pt-5">
                <div className="w-11 h-11 bg-[#F0EEED] text-[#443353] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-cormorant font-bold text-xl text-[#443353]">Official Emails</h4>
                  <a href={`mailto:${PFA_DATA.emailPrimary}`} className="text-xs font-semibold text-[#443353] hover:underline block font-josefin">
                    {PFA_DATA.emailPrimary}
                  </a>
                  <a href={`mailto:${PFA_DATA.emailSecondary}`} className="text-xs text-[#6A5C77] hover:underline block mt-0.5 font-josefin">
                    {PFA_DATA.emailSecondary}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 border-t border-[#F5F2EB] pt-5">
                <div className="w-11 h-11 bg-[#F0EEED] text-[#443353] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-cormorant font-bold text-xl text-[#443353]">Chengalpattu Centre</h4>
                  <p className="text-xs text-[#6A5C77] mt-0.5 leading-relaxed font-light">
                    {PFA_DATA.address}
                  </p>
                </div>
              </div>

            </div>

            {/* Map Embed */}
            <div className="overflow-hidden border border-[#ECEAED] shadow-xs h-52 bg-[#F0EEED] relative">
              <iframe
                title="PFA Chengalpattu Location Map"
                src="https://maps.google.com/maps?q=Hiranandani%20Egattur%20Chengalpattu%20Tamilnadu&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              ></iframe>
            </div>

          </div>

          {/* Right Column: Send Message Form */}
          <div className="lg:col-span-7 bg-white border border-[#ECEAED] p-8 sm:p-10 shadow-xs space-y-5">
            <h3 className="font-cormorant text-3xl font-normal text-[#443353]">
              Send Us a Message
            </h3>
            <p className="text-xs text-[#6A5C77] font-light">
              Inquire about ambulance transport, community vaccination campaigns, or legal guidance.
            </p>

            {sent ? (
              <div className="p-8 bg-[#FBF5EE] border border-[#ECEAED] text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-[#443353] mx-auto" />
                <h4 className="font-cormorant font-bold text-2xl text-[#443353]">Message Sent</h4>
                <p className="text-xs text-[#6A5C77] font-light">
                  Thank you for contacting PFA Chengalpattu. Our team will review your query and respond shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Full Name"
                    className="w-full p-3.5 border border-[#ECEAED] bg-[#FBF5EE] focus:outline-none focus:border-[#443353]"
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className="w-full p-3.5 border border-[#ECEAED] bg-[#FBF5EE] focus:outline-none focus:border-[#443353]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone Number (+91)"
                    className="w-full p-3.5 border border-[#ECEAED] bg-[#FBF5EE] focus:outline-none focus:border-[#443353]"
                  />
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full p-3.5 border border-[#ECEAED] bg-[#FBF5EE] font-josefin text-xs text-[#443353] focus:outline-none focus:border-[#443353]"
                  >
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Ambulance Pre-booking">Ambulance Pre-booking</option>
                    <option value="ABC Sterilization Drive">ABC Sterilization Drive</option>
                    <option value="Animal Adoption / Foster">Animal Adoption / Foster</option>
                    <option value="80G Certificate Support">80G Certificate Support</option>
                  </select>
                </div>

                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can our rescue team help?..."
                  className="w-full p-3.5 border border-[#ECEAED] bg-[#FBF5EE] leading-relaxed focus:outline-none focus:border-[#443353]"
                />

                <button
                  type="submit"
                  className="w-full py-4 bg-[#443353] text-[#F6B05C] font-josefin text-xs uppercase tracking-[2px] font-bold hover:bg-[#342640] transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to PFA Team</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
