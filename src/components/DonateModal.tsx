import React, { useState } from 'react';
import { PFA_DATA } from '../data/pfaData';
import { X, Heart, ShieldCheck, Copy, Check, QrCode, Building } from 'lucide-react';

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialAmount?: number;
  initialTitle?: string;
}

export const DonateModal: React.FC<DonateModalProps> = ({
  isOpen,
  onClose,
  initialAmount = 1000,
  initialTitle
}) => {
  if (!isOpen) return null;

  const [amount, setAmount] = useState<number>(initialAmount);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [copiedBank, setCopiedBank] = useState(false);
  const [tab, setTab] = useState<'upi' | 'bank'>('upi');
  const [submitted, setSubmitted] = useState(false);

  // Form states for 80G Tax Exemption
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [panNumber, setPanNumber] = useState('');

  const quickAmounts = [500, 1000, 2500, 5000];

  const handleCopyBank = () => {
    const text = `A/C Name: People For Animals Chengalpattu\nA/C No: 123400500100\nIFSC: HDFC0001234\nBranch: Egattur, Chengalpattu`;
    navigator.clipboard.writeText(text);
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2000);
  };

  const handleSubmitDonation = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#443353]/85 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FBF5EE] max-w-xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl border border-[#ECEAED] p-6 sm:p-8">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#6A5C77] hover:bg-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-5">
            {/* Header */}
            <div className="flex items-center gap-3 text-[#443353]">
              <div className="w-10 h-10 bg-[#443353] text-[#F6B05C] flex items-center justify-center shrink-0">
                <Heart className="w-5 h-5 fill-[#F6B05C]" />
              </div>
              <div>
                <h3 className="font-cormorant text-3xl font-bold text-[#443353]">
                  Support PFA Chengalpattu
                </h3>
                <p className="text-xs text-[#6A5C77] font-light">
                  {initialTitle ? `Initiative: ${initialTitle}` : 'Direct Donation for Animal Rescue & Ambulance'}
                </p>
              </div>
            </div>

            {/* Quick Amount Selector */}
            <div>
              <label className="block text-xs font-josefin uppercase tracking-wider font-semibold text-[#443353] mb-2">
                Select Contribution Amount (₹)
              </label>
              <div className="grid grid-cols-4 gap-2">
                {quickAmounts.map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => {
                      setAmount(amt);
                      setCustomAmount('');
                    }}
                    className={`py-2.5 text-xs font-josefin font-bold transition-all border ${
                      amount === amt && !customAmount
                        ? 'bg-[#443353] text-[#F6B05C] border-[#443353] shadow-xs'
                        : 'bg-white border-[#ECEAED] text-[#443353] hover:border-[#443353]'
                    }`}
                  >
                    ₹{amt.toLocaleString('en-IN')}
                  </button>
                ))}
              </div>
            </div>

            {/* Payment Method Switcher */}
            <div className="flex border-b border-[#ECEAED]">
              <button
                type="button"
                onClick={() => setTab('upi')}
                className={`flex-1 py-2.5 text-xs font-josefin uppercase tracking-wider font-bold border-b-2 flex items-center justify-center gap-2 transition-all ${
                  tab === 'upi'
                    ? 'border-[#443353] text-[#443353]'
                    : 'border-transparent text-[#6A5C77] hover:text-[#443353]'
                }`}
              >
                <QrCode className="w-4 h-4" />
                <span>UPI / QR Scan</span>
              </button>

              <button
                type="button"
                onClick={() => setTab('bank')}
                className={`flex-1 py-2.5 text-xs font-josefin uppercase tracking-wider font-bold border-b-2 flex items-center justify-center gap-2 transition-all ${
                  tab === 'bank'
                    ? 'border-[#443353] text-[#443353]'
                    : 'border-transparent text-[#6A5C77] hover:text-[#443353]'
                }`}
              >
                <Building className="w-4 h-4" />
                <span>Bank Transfer</span>
              </button>
            </div>

            {/* Payment Content */}
            {tab === 'upi' ? (
              <div className="p-4 bg-white border border-[#ECEAED] text-center space-y-3">
                <p className="text-xs font-semibold text-[#443353]">
                  Official PFA Chengalpattu Payment QR
                </p>
                <div className="max-w-[190px] mx-auto border border-[#ECEAED] overflow-hidden p-2 bg-white shadow-xs">
                  <img
                    src="./images/payment-qr.jpeg"
                    alt="Official PFA Chengalpattu Payment QR Code"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <p className="text-[11px] text-[#6A5C77]">
                  Supports Google Pay, PhonePe, Paytm & All UPI Apps
                </p>
              </div>
            ) : (
              <div className="p-4 bg-white border border-[#ECEAED] space-y-2 text-xs">
                <div className="flex justify-between items-center pb-2 border-b border-[#F5F2EB]">
                  <span className="text-[#6A5C77]">Account Name:</span>
                  <span className="font-bold text-[#443353]">People For Animals Chengalpattu</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-[#6A5C77]">Account Type:</span>
                  <span className="font-semibold text-[#443353]">Savings / NGO Account</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-[#6A5C77]">Branch:</span>
                  <span className="font-semibold text-[#443353]">Egattur, Chengalpattu, Tamil Nadu</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-[#6A5C77]">Official Email:</span>
                  <span className="font-semibold text-[#443353]">{PFA_DATA.emailPrimary}</span>
                </div>

                <button
                  type="button"
                  onClick={handleCopyBank}
                  className="w-full mt-3 py-2 bg-[#F0EEED] text-[#443353] text-xs font-josefin uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5"
                >
                  {copiedBank ? <Check className="w-4 h-4 text-[#443353]" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedBank ? 'Bank Info Copied!' : 'Copy Bank Account Details'}</span>
                </button>
              </div>
            )}

            {/* 80G Form */}
            <form onSubmit={handleSubmitDonation} className="space-y-3 text-xs">
              <div className="p-3 bg-white border border-[#ECEAED] flex items-center gap-2 text-[#443353]">
                <ShieldCheck className="w-4 h-4 shrink-0 text-[#F6B05C]" />
                <span className="font-light">Fill details below to receive your official 80G Tax Exemption Certificate.</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Full Name"
                  className="w-full p-3 border border-[#ECEAED] bg-white text-xs focus:outline-none focus:border-[#443353]"
                />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full p-3 border border-[#ECEAED] bg-white text-xs focus:outline-none focus:border-[#443353]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number (+91)"
                  className="w-full p-3 border border-[#ECEAED] bg-white text-xs focus:outline-none focus:border-[#443353]"
                />
                <input
                  type="text"
                  value={panNumber}
                  onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
                  placeholder="PAN Card (For 80G Tax)"
                  className="w-full p-3 border border-[#ECEAED] bg-white text-xs uppercase focus:outline-none focus:border-[#443353]"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 bg-[#443353] text-[#F6B05C] font-josefin text-xs uppercase tracking-[2px] font-bold hover:bg-[#342640] transition-all shadow-md"
              >
                Confirm Contribution of ₹{amount.toLocaleString('en-IN')}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-[#443353] text-[#F6B05C] mx-auto flex items-center justify-center rounded-full">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <h3 className="font-cormorant text-3xl font-bold text-[#443353]">
              Thank You for Your Generosity!
            </h3>
            <p className="text-xs text-[#6A5C77] max-w-md mx-auto leading-relaxed font-light">
              We have recorded your pledge of <strong>₹{amount.toLocaleString('en-IN')}</strong>. Your 80G Tax Exemption Certificate will be sent to <strong>{email}</strong> upon payment verification.
            </p>
            <div className="pt-4">
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
          </div>
        )}

      </div>
    </div>
  );
};
