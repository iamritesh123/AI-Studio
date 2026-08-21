import React, { useState } from 'react';
import { PageRoute } from '../types';
import { JsonLd } from '../components/JsonLd';
import { IMAGES } from '../assets/images';
import { 
  Building2, 
  ShieldCheck, 
  FileText, 
  TrendingDown, 
  Phone, 
  ArrowRight, 
  Check, 
  Clock, 
  Layers,
  Sparkles
} from 'lucide-react';

interface CommercialPageProps {
  onNavigate: (route: PageRoute) => void;
  onRequestEstimate: () => void;
}

export const CommercialPage: React.FC<CommercialPageProps> = ({ onNavigate, onRequestEstimate }) => {
  return (
    <div id="commercial-page" className="min-h-screen bg-[#0b0e14] text-[#e2e5ec] pt-24 pb-20">
      
      <JsonLd
        title="Commercial Window Tinting Central NJ | Architectural Glazing for Architects & Facilities"
        description="Commercial architectural window film installation in Central New Jersey. Energy modeling, LEED credits, CSI Section 08 87 00 specifications, and off-hours execution."
        schemaType="Service"
        serviceName="Commercial Architectural Window Film Retrofit"
        serviceDescription="Turnkey solar, security, and decorative architectural glazing for office towers, healthcare, universities, and commercial properties."
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-[#7f8c9f] mb-6">
          <button onClick={() => onNavigate('home')} className="hover:text-[#c5a880] transition-colors">
            Home
          </button>
          <span>/</span>
          <span className="text-[#cbd5e1]">Commercial Glazing & Architects</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7">
            <span className="text-[11px] font-semibold text-[#c5a880] uppercase tracking-widest block mb-2">
              For Property Managers, Architects & Facilities Teams
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#f9fafb] font-normal leading-[1.18] mb-6">
              Commercial architectural glazing and building energy retrofits.
            </h1>
            <p className="text-base sm:text-lg text-[#cbd5e1] font-normal leading-relaxed mb-8">
              Engineered curtain-wall retrofits that balance perimeter HVAC loads, reduce peak electrical demand charges, and enhance tenant comfort with zero disruption to daily business operations.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="comm-hero-quote-btn"
                onClick={onRequestEstimate}
                className="px-7 py-4 bg-[#c5a880] hover:bg-[#d6ba94] text-[#0b0e14] font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-sm transition-all shadow-xl active:scale-98 flex items-center justify-center gap-2"
              >
                <span>Request Commercial RFP / Bid</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:6094369103"
                className="px-6 py-4 bg-[#121722] hover:bg-[#18202e] border border-[#263143] text-[#f3f4f6] font-medium text-xs sm:text-sm tracking-wide rounded-sm transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#c5a880]" />
                <span>609-436-9103</span>
              </a>
            </div>

            {/* Compliance Badges */}
            <div className="mt-8 pt-6 border-t border-[#1c2434] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#8f9ba8]">
              <div>
                <span className="text-[#f3f4f6] font-medium block">CSI MasterFormat</span>
                <span>Section 08 87 00 Specs</span>
              </div>
              <div>
                <span className="text-[#f3f4f6] font-medium block">LEED v4.1 Credits</span>
                <span>EA & IEQ Optimization</span>
              </div>
              <div>
                <span className="text-[#f3f4f6] font-medium block">NJ Clean Energy</span>
                <span>Utility Rebate Support</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-sm overflow-hidden border border-[#242f42] shadow-2xl bg-[#121824]">
              <img
                src={IMAGES.commercialCurtainWall}
                alt="Commercial office building curtain wall glazing retrofit in Central NJ"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="p-4 bg-[#0e131d] border-t border-[#1f283a] text-xs text-[#9ca3af]">
                Prestige corporate curtain-wall glazing retrofit • 71% TSER heat rejection
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* Core Commercial Disciplines */}
      <section className="py-20 bg-[#090c12] border-y border-[#161c28]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-14">
            <span className="text-[11px] font-semibold text-[#c5a880] uppercase tracking-widest block mb-2">
              Commercial Capabilities
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#f3f4f6] font-normal leading-tight">
              Turnkey architectural solutions for commercial real estate.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* 1. Energy & Solar */}
            <div className="p-8 bg-[#0f1420] border border-[#1e2738] rounded-sm space-y-4">
              <div className="w-10 h-10 rounded-sm bg-[#161e2c] border border-[#2b374c] text-[#c5a880] flex items-center justify-center">
                <TrendingDown className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#f3f4f6] font-normal">
                Curtain-Wall Solar & Thermal Retrofits
              </h3>
              <p className="text-xs text-[#9ca3af] leading-relaxed">
                Eliminate hot spots on perimeter zones, reduce chiller tonnage requirements, and curb peak summer electricity tariffs by cutting solar heat gain up to 72%.
              </p>
              <ul className="space-y-2 text-xs text-[#cbd5e1] pt-2 border-t border-[#1a2232]">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>2 to 4 year average ROI payback</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>DOE-2 energy modeling calculations</span>
                </li>
              </ul>
            </div>

            {/* 2. Security & Forced Entry */}
            <div className="p-8 bg-[#0f1420] border border-[#1e2738] rounded-sm space-y-4">
              <div className="w-10 h-10 rounded-sm bg-[#161e2c] border border-[#2b374c] text-[#38bdf8] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#f3f4f6] font-normal">
                Storefront & Campus Security Glazing
              </h3>
              <p className="text-xs text-[#9ca3af] leading-relaxed">
                Heavy-duty 14-mil optical laminates anchored by structural silicone wet-glaze systems, meeting UL 972 and ASTM E1886 impact standards for institutional and retail security.
              </p>
              <ul className="space-y-2 text-xs text-[#cbd5e1] pt-2 border-t border-[#1a2232]">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>Smash-and-grab entry deterrence</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>Sacrificial anti-graffiti surface shields</span>
                </li>
              </ul>
            </div>

            {/* 3. Interior Privacy & Decorative */}
            <div className="p-8 bg-[#0f1420] border border-[#1e2738] rounded-sm space-y-4">
              <div className="w-10 h-10 rounded-sm bg-[#161e2c] border border-[#2b374c] text-[#c5a880] flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#f3f4f6] font-normal">
                Executive Privacy & Conference Glazing
              </h3>
              <p className="text-xs text-[#9ca3af] leading-relaxed">
                Custom laser-cut frosted banding, gradient transitions, and architectural reeded finishes for executive boardrooms, legal suites, and glass partition demising walls.
              </p>
              <ul className="space-y-2 text-xs text-[#cbd5e1] pt-2 border-t border-[#1a2232]">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>Custom CAD vector pattern cutting</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>Seamless multi-pane laser alignment</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Architect Specification & RFP Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0f1420] border border-[#1e273a] rounded-sm p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <span className="text-[11px] font-semibold text-[#c5a880] uppercase tracking-widest block mb-2">
                Architectural Support & Submittals
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#f3f4f6] font-normal mb-4">
                Full 3-Part CSI MasterFormat Specifications & Field Mockups
              </h3>
              <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed mb-6">
                We work directly with architects, facade engineers, and interior design firms. We provide custom submittal packages including glass stress calculations, manufacturer test data, LEED documentation, and full-scale on-site mockups for client sign-off.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#9ca3af]">
                <div className="p-3 bg-[#131926] rounded-sm border border-[#1e2738]">
                  <strong className="text-[#f3f4f6] block mb-0.5">Section 08 87 13</strong>
                  <span>Solar Control Architectural Window Film</span>
                </div>
                <div className="p-3 bg-[#131926] rounded-sm border border-[#1e2738]">
                  <strong className="text-[#f3f4f6] block mb-0.5">Section 08 87 23</strong>
                  <span>Safety and Security Window Film</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={onRequestEstimate}
                className="w-full py-4 bg-[#c5a880] hover:bg-[#d6ba94] text-[#0b0e14] font-semibold text-xs uppercase tracking-wider rounded-sm transition-all shadow-lg text-center"
              >
                Submit Project RFP / Bid Request
              </button>
              <a
                href="tel:6094369103"
                className="w-full py-3 bg-[#131926] hover:bg-[#192232] border border-[#273347] text-[#f3f4f6] text-xs font-medium tracking-wide rounded-sm transition-colors text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>Call Commercial Estimating: 609-436-9103</span>
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
