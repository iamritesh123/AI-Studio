import React, { useState } from 'react';
import { PageRoute, EstimateRequest } from '../types';
import { JsonLd } from '../components/JsonLd';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle, 
  Send, 
  Building, 
  Home, 
  Sparkles 
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (route: PageRoute) => void;
  onRequestEstimate: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onRequestEstimate }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<EstimateRequest>({
    fullName: '',
    email: '',
    phone: '',
    propertyType: 'Residential Estate',
    location: 'Princeton, NJ',
    primaryObjective: 'Solar Heat Gain & Glare Control',
    estimatedPanes: '10–25 Windows',
    notes: '',
    preferredConsultationTime: 'Morning (8:30 AM – 11:30 AM)'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div id="contact-page" className="min-h-screen bg-[#0b0e14] text-[#e2e5ec] pt-24 pb-20">
      
      <JsonLd
        title="Contact Princeton Window Tinting | Request On-Site Estimate | 609-436-9103"
        description="Contact Princeton Window Tinting to schedule an architectural on-site window film consultation. Serving Princeton, Hamilton, Edison, Bridgewater, and Central NJ."
        schemaType="ContactPage"
      />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-[#7f8c9f] mb-6">
          <button onClick={() => onNavigate('home')} className="hover:text-[#c5a880] transition-colors">
            Home
          </button>
          <span>/</span>
          <span className="text-[#cbd5e1]">Contact & Estimates</span>
        </div>

        <div className="max-w-3xl">
          <span className="text-[11px] font-semibold text-[#c5a880] uppercase tracking-widest block mb-2">
            Direct Architectural Consultation
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#f9fafb] font-normal leading-[1.18] mb-4">
            Schedule an on-site evaluation for your glass.
          </h1>
          <p className="text-base text-[#cbd5e1] font-normal leading-relaxed">
            We provide comprehensive on-site inspections, laser measurements, glass stress checks, and physical film sample testing for luxury residences and commercial properties in Central New Jersey.
          </p>
        </div>

      </section>

      {/* Main Grid: Info + Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Phone & Office Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Phone Box */}
            <div className="p-6 sm:p-8 bg-[#0f1420] border border-[#20293d] rounded-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#c5a880]/5 rounded-bl-full pointer-events-none" />
              
              <span className="text-[10px] uppercase font-semibold text-[#c5a880] tracking-widest block mb-1">
                Direct Line for Inquiries & Scheduling
              </span>
              <h3 className="font-serif text-2xl text-[#f3f4f6] font-normal mb-3">
                Call Us Directly
              </h3>
              
              <a
                id="contact-direct-phone-link"
                href="tel:6094369103"
                className="text-2xl sm:text-3xl font-serif text-[#c5a880] hover:text-[#d6ba94] font-medium tracking-wide block transition-colors mb-4"
              >
                609-436-9103
              </a>

              <p className="text-xs text-[#9ca3af] leading-relaxed">
                Direct assistance with an architectural glazing specialist. We answer calls promptly from 7:30 AM to 6:30 PM, Monday through Saturday.
              </p>
            </div>

            {/* Service Region & Hours */}
            <div className="p-6 sm:p-8 bg-[#0f1420] border border-[#20293d] rounded-sm space-y-6 text-xs text-[#cbd5e1]">
              
              <div className="flex items-start gap-3.5">
                <MapPin className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#f3f4f6] block text-sm mb-0.5">Central NJ Service Headquarters</span>
                  <p className="text-[#9ca3af] leading-relaxed">
                    Based in Princeton, NJ 08540. Serving Mercer, Middlesex, and Somerset Counties including Princeton, Hamilton, Edison, Bridgewater, and South Brunswick.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4 border-t border-[#1c2538]">
                <Clock className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#f3f4f6] block text-sm mb-0.5">Consultation & Field Hours</span>
                  <p className="text-[#9ca3af] leading-relaxed">
                    Monday – Friday: 7:30 AM – 6:30 PM<br />
                    Saturday: 8:00 AM – 4:00 PM<br />
                    Sunday: Closed (Off-hours commercial available by appointment)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4 border-t border-[#1c2538]">
                <ShieldCheck className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#f3f4f6] block text-sm mb-0.5">Licensing & Standards</span>
                  <p className="text-[#9ca3af] leading-relaxed">
                    Fully Licensed & Insured NJ Architectural Contractor. Factory-certified master flat glass installers.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Full Interactive Consultation Form */}
          <div className="lg:col-span-7 bg-[#0f1420] border border-[#20293d] p-6 sm:p-8 lg:p-10 rounded-sm">
            
            {!submitted ? (
              <div>
                <span className="text-[10px] font-semibold text-[#c5a880] uppercase tracking-widest block mb-1">
                  Online Scheduling Protocol
                </span>
                <h3 className="font-serif text-2xl text-[#f3f4f6] font-normal mb-6">
                  Request an On-Site Estimate
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#cbd5e1] font-medium mb-1.5 uppercase text-[10px] tracking-wider">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="e.g. Katherine Sterling"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-[#141a27] border border-[#222d40] focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880] rounded-sm px-3.5 py-2.5 text-[#f3f4f6] placeholder-[#576479] outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[#cbd5e1] font-medium mb-1.5 uppercase text-[10px] tracking-wider">
                        Phone Number *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        placeholder="e.g. 609-555-0144"
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
                        id="contact-email"
                        type="email"
                        required
                        placeholder="e.g. sterling@estate.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#141a27] border border-[#222d40] focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880] rounded-sm px-3.5 py-2.5 text-[#f3f4f6] placeholder-[#576479] outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[#cbd5e1] font-medium mb-1.5 uppercase text-[10px] tracking-wider">
                        Municipality / Town (Central NJ) *
                      </label>
                      <input
                        id="contact-town"
                        type="text"
                        required
                        placeholder="e.g. Princeton, Hopewell, Edison"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full bg-[#141a27] border border-[#222d40] focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880] rounded-sm px-3.5 py-2.5 text-[#f3f4f6] placeholder-[#576479] outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Property Type & Panes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#cbd5e1] font-medium mb-1.5 uppercase text-[10px] tracking-wider">
                        Property Type
                      </label>
                      <select
                        id="contact-property-type"
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value as any })}
                        className="w-full bg-[#141a27] border border-[#222d40] focus:border-[#c5a880] rounded-sm px-3.5 py-2.5 text-[#f3f4f6] outline-none"
                      >
                        <option value="Residential Estate">Luxury Residential Estate</option>
                        <option value="Historic Home">Historic Colonial / Heritage Residence</option>
                        <option value="Commercial Office">Commercial Office / Headquarters</option>
                        <option value="Retail / Storefront">Retail / Storefront Glazing</option>
                        <option value="Institutional / Healthcare">Institutional / Educational Campus</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[#cbd5e1] font-medium mb-1.5 uppercase text-[10px] tracking-wider">
                        Estimated Panes / Openings
                      </label>
                      <select
                        id="contact-panes"
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
                      id="contact-objective"
                      value={formData.primaryObjective}
                      onChange={(e) => setFormData({ ...formData, primaryObjective: e.target.value })}
                      className="w-full bg-[#141a27] border border-[#222d40] focus:border-[#c5a880] rounded-sm px-3.5 py-2.5 text-[#f3f4f6] outline-none"
                    >
                      <option value="Solar Heat Gain & Glare Control">Solar Heat Gain & Glare Control (Clear Ceramic 70)</option>
                      <option value="Security & Forced-Entry Glass Protection">Security & Shatter-Resistant Glass Protection</option>
                      <option value="Decorative Frost & Architectural Privacy">Decorative Frost & Architectural Privacy Glazing</option>
                      <option value="Fine Art, Wood Flooring & UV Preservation">Fine Art, Wood Flooring & UV Preservation (99.9% Filter)</option>
                      <option value="Bird Collision Strike Prevention">Bird Collision Strike Prevention (Exterior Matrix)</option>
                      <option value="Commercial Glazing / Energy Retrofit">Commercial Glazing / Energy Modeling Retrofit</option>
                      <option value="Anti-Graffiti Surface Protection">Sacrificial Anti-Graffiti Surface Protection</option>
                    </select>
                  </div>

                  {/* Notes & Description */}
                  <div>
                    <label className="block text-[#cbd5e1] font-medium mb-1.5 uppercase text-[10px] tracking-wider">
                      Project Notes / Architectural Details
                    </label>
                    <textarea
                      id="contact-notes"
                      rows={4}
                      placeholder="Please describe your specific architectural concerns, window orientations, or timeline..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-[#141a27] border border-[#222d40] focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880] rounded-sm px-3.5 py-2.5 text-[#f3f4f6] placeholder-[#576479] outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      className="w-full py-4 bg-[#c5a880] hover:bg-[#d6ba94] text-[#0b0e14] text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-sm transition-all shadow-xl active:scale-98 flex items-center justify-center gap-2"
                    >
                      <span>Submit Request for Estimate</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                    <div className="text-center mt-2.5 text-[10px] text-[#6b7688]">
                      Guaranteed response within 2 business hours • No high-pressure sales
                    </div>
                  </div>

                </form>
              </div>
            ) : (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#17221d] border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-[#f3f4f6]">
                  Estimate Request Received
                </h3>
                <p className="text-xs sm:text-sm text-[#9ca3af] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#f3f4f6]">{formData.fullName}</strong>. An architectural glazing specialist will review your project details for <strong className="text-[#f3f4f6]">{formData.location}</strong> and call you at <strong className="text-[#f3f4f6]">{formData.phone}</strong> to confirm your appointment.
                </p>
                <div className="p-4 bg-[#141a27] border border-[#202a3d] rounded-sm max-w-md mx-auto text-left text-xs space-y-2 text-[#cbd5e1]">
                  <div className="flex justify-between">
                    <span className="text-[#788599]">Property Type:</span>
                    <span>{formData.propertyType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#788599]">Scope:</span>
                    <span>{formData.estimatedPanes}</span>
                  </div>
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-[#c5a880] text-[#0b0e14] text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#d6ba94] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </section>

    </div>
  );
};
