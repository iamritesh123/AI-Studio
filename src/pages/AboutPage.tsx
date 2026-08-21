import React from 'react';
import { PageRoute } from '../types';
import { JsonLd } from '../components/JsonLd';
import { IMAGES } from '../assets/images';
import { 
  ShieldCheck, 
  Layers, 
  Sparkles, 
  Compass, 
  Phone, 
  ArrowRight, 
  Check, 
  Maximize2 
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
  onRequestEstimate: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onRequestEstimate }) => {
  return (
    <div id="about-page" className="min-h-screen bg-[#0b0e14] text-[#e2e5ec] pt-24 pb-20">
      
      <JsonLd
        title="About Princeton Window Tinting | Architectural Flat Glass Craftsmanship"
        description="Princeton Window Tinting is Central New Jersey's dedicated architectural flat glass window film specialist. White-glove cleanroom execution, zero automotive work, and lifetime warranties."
        schemaType="AboutPage"
      />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-[#7f8c9f] mb-6">
          <button onClick={() => onNavigate('home')} className="hover:text-[#c5a880] transition-colors">
            Home
          </button>
          <span>/</span>
          <span className="text-[#cbd5e1]">About Our Practice</span>
        </div>

        <div className="max-w-3xl">
          <span className="text-[11px] font-semibold text-[#c5a880] uppercase tracking-widest block mb-2">
            The Architectural Standard
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#f9fafb] font-normal leading-[1.18] mb-6">
            Dedicated entirely to flat glass. No automotive shortcuts.
          </h1>
          <p className="text-base sm:text-lg text-[#cbd5e1] font-normal leading-relaxed mb-8">
            Most window tinting companies treat architectural installations as an afterthought to their automotive tint shop. We are the opposite: a dedicated architectural glazing firm founded on the standards of luxury millwork, fine interior design, and facade engineering.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onRequestEstimate}
              className="px-7 py-4 bg-[#c5a880] hover:bg-[#d6ba94] text-[#0b0e14] font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-sm transition-all shadow-xl active:scale-98 flex items-center justify-center gap-2"
            >
              <span>Request On-Site Estimate</span>
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
        </div>

      </section>

      {/* Craftsmanship Principles */}
      <section className="py-20 bg-[#090c12] border-y border-[#161c28]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="text-[11px] font-semibold text-[#c5a880] uppercase tracking-widest block mb-2">
                  Precision Standards
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#f3f4f6] font-normal leading-tight">
                  The Four Pillars of Architectural Execution
                </h2>
              </div>

              <div className="space-y-6 text-xs sm:text-sm text-[#cbd5e1]">
                
                <div className="p-4 bg-[#0f1420] border border-[#1e2738] rounded-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#c5a880] font-mono text-xs font-semibold">01 //</span>
                    <h3 className="font-medium text-[#f3f4f6] text-sm">Dust-Free Cleanroom Protocol</h3>
                  </div>
                  <p className="text-[#9ca3af] leading-relaxed text-xs">
                    Trapped hair, lint, and airborne particles between the film and glass are unacceptable in a luxury residence. We establish negative air filtration zones when necessary and perform rigorous mechanical debridement on every single square inch of glass.
                  </p>
                </div>

                <div className="p-4 bg-[#0f1420] border border-[#1e2738] rounded-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#c5a880] font-mono text-xs font-semibold">02 //</span>
                    <h3 className="font-medium text-[#f3f4f6] text-sm">Micro-Tolerant Edge Trimming</h3>
                  </div>
                  <p className="text-[#9ca3af] leading-relaxed text-xs">
                    We maintain less than 1/32" edge light tolerances along wood muntins, silicone gaskets, and architectural metal frame extrusions. From arm's length, the installation looks like integral factory-tinted glass.
                  </p>
                </div>

                <div className="p-4 bg-[#0f1420] border border-[#1e2738] rounded-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#c5a880] font-mono text-xs font-semibold">03 //</span>
                    <h3 className="font-medium text-[#f3f4f6] text-sm">Floor & Interior Furnishing Protection</h3>
                  </div>
                  <p className="text-[#9ca3af] leading-relaxed text-xs">
                    We lay heavy waterproof neoprene runners over wide-plank hardwood and custom wool carpets, mask draperies and casing millwork, and leave the property in immaculate condition.
                  </p>
                </div>

                <div className="p-4 bg-[#0f1420] border border-[#1e2738] rounded-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#c5a880] font-mono text-xs font-semibold">04 //</span>
                    <h3 className="font-medium text-[#f3f4f6] text-sm">Glass Stress & Thermal Shock Analysis</h3>
                  </div>
                  <p className="text-[#9ca3af] leading-relaxed text-xs">
                    Before applying any film to double-pane insulated or Low-E glass, we run thermal stress calculations to verify that solar absorption will not cause glass edge fracturing or seal failure.
                  </p>
                </div>

              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-sm overflow-hidden border border-[#242f42] shadow-2xl bg-[#121824]">
                <img
                  src={IMAGES.installationCraft}
                  alt="Architectural window film installation craft and edge precision"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Service Territory Callout */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0f1420] border border-[#1e273a] rounded-sm p-8 sm:p-12 text-center max-w-4xl mx-auto">
          <span className="text-[11px] font-semibold text-[#c5a880] uppercase tracking-widest block mb-2">
            Central New Jersey Headquarters
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#f3f4f6] font-normal mb-4">
            Serving Mercer, Middlesex, and Somerset Counties
          </h2>
          <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed mb-8 max-w-xl mx-auto">
            From historic colonials on Library Place in Princeton to corporate campuses on Route 1 and hillside estates in Bridgewater, our teams provide prompt, discreet, and immaculate installation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onRequestEstimate}
              className="px-8 py-4 bg-[#c5a880] hover:bg-[#d6ba94] text-[#0b0e14] font-semibold text-xs uppercase tracking-wider rounded-sm transition-all shadow-xl"
            >
              Request Free On-Site Estimate
            </button>
            <a
              href="tel:6094369103"
              className="px-6 py-4 bg-[#121722] hover:bg-[#182130] border border-[#273348] text-[#f3f4f6] text-xs font-medium tracking-wide rounded-sm transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#c5a880]" />
              <span>Call 609-436-9103</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
