import React, { useState } from 'react';
import { EstimateRequest } from '../types';
import { Phone, X, CheckCircle, Shield, Calendar, Clock, MapPin, Building, Home, Sparkles, Send } from 'lucide-react';

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const EstimateModal: React.FC<EstimateModalProps> = ({ isOpen, onClose, initialService }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<EstimateRequest>({
    fullName: '',
    email: '',
    phone: '',
    propertyType: 'Residential Estate',
    location: 'Princeton, NJ',
    primaryObjective: initialService || 'Solar Heat Gain & Glare Control',
    estimatedPanes: '10–25 Windows',
    notes: '',
    preferredConsultationTime: 'Morning (8:30 AM – 11:30 AM)'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate high-end submission protocol
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      id="estimate-modal-backdrop"
      className="fixed inset-0 z-50 bg-[#080b10]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="estimate-modal-container"
        className="bg-[#0e131d] border border-[#263145] rounded-sm max-w-2xl w-full p-6 sm:p-8 lg:p-10 shadow-2xl relative my-8"
      >
        {/* Close Button */}
        <button
          id="close-estimate-modal"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#788599] hover:text-[#f3f4f6] transition-colors"
          aria-label="Close Dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6 pb-4 border-b border-[#1c2436]">
              <span className="text-[10px] font-semibold text-[#c5a880] uppercase tracking-widest block mb-1">
                White-Glove Architectural Service
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#f3f4f6] font-normal">
                Request a Free On-Site Estimate
              </h3>
              <p className="text-xs sm:text-sm text-[#9ca3af] mt-1.5 font-normal">
                We perform comprehensive on-site laser measurements, glass type analysis, and photometric recommendations for luxury residences and commercial glazing in Central NJ.
              </p>

              {/* Direct Phone Callout */}
              <div className="mt-4 flex flex-wrap items-center gap-3 p-3 bg-[#131926] rounded-sm border border-[#1f2a3f] text-xs text-[#cbd5e1]">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>Immediate Assistance:</span>
                </div>
                <a
                  href="tel:6094369103"
                  className="font-medium text-[#c5a880] hover:underline tracking-wide"
                >
                  609-436-9103
                </a>
                <span className="text-[#64748b] text-[11px]">• No obligation • Flat glass specialists</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#cbd5e1] font-medium mb-1.5 uppercase text-[10px] tracking-wider">
                    Full Name *
                  </label>
                  <input
                    id="modal-input-name"
                    type="text"
                    required
                    placeholder="e.g. Eleanor Vance"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#141a27] border border-[#222d40] focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880] rounded-sm px-3.5 py-2.5 text-[#f3f4f6] placeholder-[#576479] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#cbd5e1] font-medium mb-1.5 uppercase text-[10px] tracking-wider">
                    Direct Phone *
                  </label>
                  <input
                    id="modal-input-phone"
                    type="tel"
                    required
                    placeholder="e.g. 609-555-0192"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#141a27] border border-[#222d40] focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880] rounded-sm px-3.5 py-2.5 text-[#f3f4f6] placeholder-[#576479] outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Email & Municipality */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#cbd5e1] font-medium mb-1.5 uppercase text-[10px] tracking-wider">
                    Email Address *
                  </label>
                  <input
                    id="modal-input-email"
                    type="email"
                    required
                    placeholder="e.g. evance@estate.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#141a27] border border-[#222d40] focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880] rounded-sm px-3.5 py-2.5 text-[#f3f4f6] placeholder-[#576479] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#cbd5e1] font-medium mb-1.5 uppercase text-[10px] tracking-wider">
                    Town / Municipality (Central NJ) *
                  </label>
                  <input
                    id="modal-input-location"
                    type="text"
                    required
                    placeholder="e.g. Princeton, Hopewell, Bridgewater"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-[#141a27] border border-[#222d40] focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880] rounded-sm px-3.5 py-2.5 text-[#f3f4f6] placeholder-[#576479] outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Property Type & Estimated Scope */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#cbd5e1] font-medium mb-1.5 uppercase text-[10px] tracking-wider">
                    Property Type
                  </label>
                  <select
                    id="modal-select-property-type"
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value as any })}
                    className="w-full bg-[#141a27] border border-[#222d40] focus:border-[#c5a880] rounded-sm px-3.5 py-2.5 text-[#f3f4f6] outline-none"
                  >
                    <option value="Residential Estate">Luxury Residential Estate</option>
                    <option value="Historic Home">Historic Colonial / Heritage Home</option>
                    <option value="Commercial Office">Commercial Office / Headquarters</option>
                    <option value="Retail / Storefront">Retail / Storefront Glazing</option>
                    <option value="Institutional / Healthcare">Institutional / Healthcare Facility</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#cbd5e1] font-medium mb-1.5 uppercase text-[10px] tracking-wider">
                    Estimated Window Count
                  </label>
                  <select
                    id="modal-select-panes"
                    value={formData.estimatedPanes}
                    onChange={(e) => setFormData({ ...formData, estimatedPanes: e.target.value })}
                    className="w-full bg-[#141a27] border border-[#222d40] focus:border-[#c5a880] rounded-sm px-3.5 py-2.5 text-[#f3f4f6] outline-none"
                  >
                    <option value="1–9 Windows">1–9 Specific Windows / Doors</option>
                    <option value="10–25 Windows">10–25 Windows (Full Sun Exposure Façade)</option>
                    <option value="26–50 Windows">26–50 Windows (Substantial Estate)</option>
                    <option value="50+ Windows / Commercial">50+ Windows / Commercial Curtain Wall</option>
                  </select>
                </div>
              </div>

              {/* Primary Objective */}
              <div>
                <label className="block text-[#cbd5e1] font-medium mb-1.5 uppercase text-[10px] tracking-wider">
                  Primary Objective
                </label>
                <select
                  id="modal-select-objective"
                  value={formData.primaryObjective}
                  onChange={(e) => setFormData({ ...formData, primaryObjective: e.target.value })}
                  className="w-full bg-[#141a27] border border-[#222d40] focus:border-[#c5a880] rounded-sm px-3.5 py-2.5 text-[#f3f4f6] outline-none"
                >
                  <option value="Solar Heat Gain & Glare Control">Solar Heat Gain & Glare Control (Preserve Clear Views)</option>
                  <option value="Security & Forced-Entry Glass Protection">Security & Shatter-Resistant Glass Protection</option>
                  <option value="Decorative Frost & Architectural Privacy">Decorative Frost & Architectural Privacy Glazing</option>
                  <option value="Fine Art, Wood Flooring & UV Preservation">Fine Art, Wood Flooring & UV Preservation (99.9% Filter)</option>
                  <option value="Bird Collision Strike Prevention">Bird Collision Strike Prevention (Exterior Matrix)</option>
                  <option value="Commercial Glazing / Energy Retrofit">Commercial Glazing / Energy Modeling Retrofit</option>
                  <option value="Anti-Graffiti Surface Protection">Sacrificial Anti-Graffiti Surface Protection</option>
                </select>
              </div>

              {/* Specific Details / Notes */}
              <div>
                <label className="block text-[#cbd5e1] font-medium mb-1.5 uppercase text-[10px] tracking-wider">
                  Project Notes / Specific Architectural Considerations
                </label>
                <textarea
                  id="modal-input-notes"
                  rows={3}
                  placeholder="e.g. West-facing great room floor-to-ceiling windows, custom mahogany frames, or seeking conference room frosted band..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#141a27] border border-[#222d40] focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880] rounded-sm px-3.5 py-2.5 text-[#f3f4f6] placeholder-[#576479] outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  id="modal-submit-button"
                  type="submit"
                  className="w-full py-3.5 bg-[#c5a880] hover:bg-[#d6ba94] text-[#0b0e14] text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-sm transition-all shadow-lg active:scale-98 flex items-center justify-center gap-2"
                >
                  <span>Submit Estimate Request</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
                <div className="text-center mt-2.5 text-[10px] text-[#6b7688]">
                  Direct response within 2 business hours • Licensed & Insured NJ Contractor
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
            <div className="w-14 h-14 rounded-full bg-[#17221d] border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#f3f4f6]">
              Estimate Request Received
            </h3>
            <p className="text-xs sm:text-sm text-[#9ca3af] max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-[#f3f4f6]">{formData.fullName}</strong>. An architectural glazing specialist will review your request for your property in <strong className="text-[#f3f4f6]">{formData.location}</strong> and contact you directly at <strong className="text-[#f3f4f6]">{formData.phone}</strong> to confirm your on-site consultation.
            </p>
            <div className="p-4 bg-[#141a27] border border-[#202a3d] rounded-sm max-w-md mx-auto text-left text-xs space-y-2 text-[#cbd5e1]">
              <div className="flex justify-between">
                <span className="text-[#788599]">Property Type:</span>
                <span>{formData.propertyType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#788599]">Primary Objective:</span>
                <span>{formData.primaryObjective}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#788599]">Scope:</span>
                <span>{formData.estimatedPanes}</span>
              </div>
            </div>
            <div className="pt-4 flex justify-center gap-3">
              <button
                id="modal-done-button"
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#c5a880] text-[#0b0e14] text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#d6ba94] transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
