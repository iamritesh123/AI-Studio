import React from 'react';
import { PageRoute } from '../types';
import { Phone, Mail, MapPin, ShieldCheck, Clock, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onRequestEstimate: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onRequestEstimate }) => {
  return (
    <footer id="main-footer" className="bg-[#080a0f] text-[#9ca3af] border-t border-[#181d27] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Callout Banner */}
        <div className="bg-[#0f131c] border border-[#202736] p-8 sm:p-10 rounded-sm mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-[#c5a880] uppercase tracking-widest block mb-1">
              Precision Architectural Glazing
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#f3f4f6] font-normal leading-snug">
              Protect your architectural glass, furnishings, and interior comfort.
            </h3>
            <p className="text-sm text-[#9ca3af] mt-2 font-normal">
              Direct consultations with architectural film specialists across Mercer, Middlesex, and Somerset Counties.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            <a
              id="footer-call-cta"
              href="tel:6094369103"
              className="px-5 py-3 border border-[#2b3548] hover:border-[#c5a880] text-[#f3f4f6] text-xs uppercase tracking-wider font-semibold rounded-sm text-center transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>609-436-9103</span>
            </a>
            <button
              id="footer-estimate-cta"
              onClick={onRequestEstimate}
              className="px-6 py-3 bg-[#c5a880] hover:bg-[#d6ba94] text-[#0b0e14] text-xs uppercase tracking-wider font-semibold rounded-sm text-center transition-colors flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Request Free Estimate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Multi-column Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#181d27]">
          
          {/* Col 1: Identity & Guarantee */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm border border-[#c5a880]/60 bg-[#141822] flex items-center justify-center relative">
                <span className="font-serif text-[#c5a880] text-base font-semibold">P</span>
              </div>
              <div>
                <span className="font-serif text-lg tracking-wider text-[#f3f4f6] font-medium block uppercase leading-none">
                  Princeton
                </span>
                <span className="text-[9px] tracking-[0.25em] text-[#9ca3af] uppercase font-sans font-medium">
                  Window Tinting
                </span>
              </div>
            </div>

            <p className="text-xs text-[#8f9ba8] leading-relaxed max-w-sm">
              Architectural window film installation exclusively for residential estates, historic properties, and commercial buildings. We specialize in flat glass engineering and never perform automotive tinting.
            </p>

            <div className="pt-2 space-y-2 text-xs text-[#cbd5e1]">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                <span>Serving Princeton & Central New Jersey</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                <a href="tel:6094369103" className="hover:text-[#c5a880] transition-colors font-medium">
                  609-436-9103
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                <span>estimates@princetonwindowtinting.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                <span>Mon – Sat: 7:30 AM – 6:30 PM (Emergency Security Available)</span>
              </div>
            </div>
          </div>

          {/* Col 2: Architectural Films */}
          <div>
            <h4 className="text-xs font-semibold text-[#f3f4f6] uppercase tracking-widest mb-4">
              Architectural Films
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  id="footer-nav-solar"
                  onClick={() => onNavigate('product-solar-heat-control')}
                  className="hover:text-[#c5a880] transition-colors text-left"
                >
                  Solar & Heat Control
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-security"
                  onClick={() => onNavigate('product-security-safety')}
                  className="hover:text-[#c5a880] transition-colors text-left"
                >
                  Security & Shatter Glass
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-decorative"
                  onClick={() => onNavigate('product-decorative-privacy')}
                  className="hover:text-[#c5a880] transition-colors text-left"
                >
                  Decorative & Privacy Frost
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-uv"
                  onClick={() => onNavigate('product-uv-protection')}
                  className="hover:text-[#c5a880] transition-colors text-left"
                >
                  Fine Art & UV Shield
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-bird"
                  onClick={() => onNavigate('product-bird-friendly')}
                  className="hover:text-[#c5a880] transition-colors text-left"
                >
                  Bird-Friendly Glazing
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-graffiti"
                  onClick={() => onNavigate('product-anti-graffiti')}
                  className="hover:text-[#c5a880] transition-colors text-left"
                >
                  Anti-Graffiti Surface Shield
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-commercial-glazing"
                  onClick={() => onNavigate('product-commercial-glazing')}
                  className="hover:text-[#c5a880] transition-colors text-left"
                >
                  Commercial & Institutional
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Central NJ Municipalities */}
          <div>
            <h4 className="text-xs font-semibold text-[#f3f4f6] uppercase tracking-widest mb-4">
              Central NJ Service
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  id="footer-nav-princeton"
                  onClick={() => onNavigate('city-princeton')}
                  className="hover:text-[#c5a880] transition-colors text-left"
                >
                  Princeton, NJ (Mercer)
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-hamilton"
                  onClick={() => onNavigate('city-hamilton')}
                  className="hover:text-[#c5a880] transition-colors text-left"
                >
                  Hamilton, NJ (Mercer)
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-edison"
                  onClick={() => onNavigate('city-edison')}
                  className="hover:text-[#c5a880] transition-colors text-left"
                >
                  Edison, NJ (Middlesex)
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-bridgewater"
                  onClick={() => onNavigate('city-bridgewater')}
                  className="hover:text-[#c5a880] transition-colors text-left"
                >
                  Bridgewater, NJ (Somerset)
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-south-brunswick"
                  onClick={() => onNavigate('city-south-brunswick')}
                  className="hover:text-[#c5a880] transition-colors text-left"
                >
                  South Brunswick, NJ
                </button>
              </li>
              <li className="pt-2 text-[11px] text-[#6b7688]">
                Also serving Hopewell, Lawrenceville, Montgomery, Plainsboro & Hillsborough.
              </li>
            </ul>
          </div>

          {/* Col 4: Standards & Commercial */}
          <div>
            <h4 className="text-xs font-semibold text-[#f3f4f6] uppercase tracking-widest mb-4">
              Architectural Craft
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  id="footer-nav-commercial"
                  onClick={() => onNavigate('commercial')}
                  className="hover:text-[#c5a880] transition-colors text-left"
                >
                  Architects & Property Managers
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-about"
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#c5a880] transition-colors text-left"
                >
                  Installation Craft Standards
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-contact"
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#c5a880] transition-colors text-left"
                >
                  On-Site Consultation
                </button>
              </li>
              <li className="pt-3">
                <div className="p-2.5 bg-[#121620] border border-[#1e2533] rounded-sm text-[11px] text-[#9ca3af] space-y-1">
                  <div className="flex items-center gap-1.5 text-[#c5a880] font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Warranty Guarantee</span>
                  </div>
                  <p className="text-[10px] text-[#788599] leading-tight">
                    Lifetime transferable residential warranty & 15-year commercial performance warranty.
                  </p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Standards Statement */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#6b7688] gap-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>© {new Date().getFullYear()} Princeton Window Tinting LLC. All rights reserved.</span>
            <span>•</span>
            <span>NJ Home Improvement Contractor License #13VH09842100</span>
            <span>•</span>
            <span>Flat Glass Architectural Only (No Automotive)</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#8894a7]">ANSI Z97.1 & CPSC 16 CFR 1201 Compliant</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
