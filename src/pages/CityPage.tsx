import React, { useState } from 'react';
import { CityDetail, PageRoute } from '../types';
import { JsonLd } from '../components/JsonLd';
import { IMAGES } from '../assets/images';
import { 
  Phone, 
  ArrowRight, 
  MapPin, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  Compass, 
  Check, 
  Sparkles 
} from 'lucide-react';

interface CityPageProps {
  city: CityDetail;
  onNavigate: (route: PageRoute) => void;
  onRequestEstimate: () => void;
}

export const CityPage: React.FC<CityPageProps> = ({ city, onNavigate, onRequestEstimate }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div id={`city-page-${city.slug}`} className="min-h-screen bg-[#0b0e14] text-[#e2e5ec] pt-24 pb-20">
      
      <JsonLd
        title={city.seoTitle}
        description={city.metaDescription}
        schemaType="FAQPage"
        faqs={city.faqs}
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-[#7f8c9f] mb-6">
          <button onClick={() => onNavigate('home')} className="hover:text-[#c5a880] transition-colors">
            Home
          </button>
          <span>/</span>
          <span className="text-[#8895a6]">Central NJ Service Area</span>
          <span>/</span>
          <span className="text-[#cbd5e1]">{city.cityName}, NJ</span>
        </div>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#131824] border border-[#222b3d] text-[11px] font-semibold text-[#c5a880] uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>{city.county} Service Territory</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#f9fafb] font-normal leading-[1.18] mb-6">
            {city.headline}
          </h1>

          <p className="text-base sm:text-lg text-[#cbd5e1] font-normal leading-relaxed mb-8">
            {city.subhead}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onRequestEstimate}
              className="px-7 py-4 bg-[#c5a880] hover:bg-[#d6ba94] text-[#0b0e14] font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-sm transition-all shadow-xl active:scale-98 flex items-center justify-center gap-2"
            >
              <span>Request Free Estimate in {city.cityName}</span>
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

      {/* Neighborhoods & Local Architectural Context */}
      <section className="py-16 bg-[#090c12] border-y border-[#161c28]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[11px] font-semibold text-[#c5a880] uppercase tracking-widest block mb-2">
                  Local Building Context
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#f3f4f6] font-normal leading-tight">
                  Architectural Glazing in {city.cityName}
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
                {city.architecturalContext}
              </p>

              <div className="pt-2">
                <span className="text-[11px] font-semibold text-[#c5a880] uppercase tracking-widest block mb-2">
                  Microclimate & Solar Exposure Dynamics
                </span>
                <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
                  {city.climateAndGlazingChallenges}
                </p>
              </div>
            </div>

            {/* Neighborhoods Directory */}
            <div className="lg:col-span-5 bg-[#0f1420] border border-[#1e2738] p-6 sm:p-8 rounded-sm">
              <span className="text-[10px] font-semibold text-[#c5a880] uppercase tracking-widest block mb-2">
                Active Residential & Commercial Service
              </span>
              <h3 className="font-serif text-lg sm:text-xl text-[#f3f4f6] font-normal mb-4">
                {city.cityName} Neighborhoods & Corridors
              </h3>
              
              <ul className="space-y-2.5 text-xs text-[#cbd5e1]">
                {city.neighborhoods.map((nh, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 p-2 bg-[#131926] rounded-sm border border-[#1d2537]">
                    <MapPin className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                    <span>{nh}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-[#1e2637] text-[11px] text-[#8e9aa8]">
                Prompt dispatch for all residential estates and commercial properties in {city.cityName}.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Local Case Study Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#0f1420] border border-[#1e273a] rounded-sm p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="text-[10px] font-mono text-[#c5a880] uppercase tracking-widest mb-2">
                Local Project Highlight // {city.cityName}, NJ
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#f3f4f6] font-normal mb-4">
                {city.caseStudyTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed mb-6">
                {city.caseStudyDescription}
              </p>

              <div className="space-y-2">
                <span className="text-[11px] font-semibold text-[#8b98ac] uppercase tracking-wider block">
                  Recommended Film Formulations for {city.cityName}:
                </span>
                {city.recommendedFilmSeries.map((series, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#9ca3af]">
                    <Check className="w-3.5 h-3.5 text-[#c5a880] shrink-0 mt-0.5" />
                    <span>{series}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-sm overflow-hidden border border-[#242f42] shadow-xl">
                <img
                  src={IMAGES.solarGlazing}
                  alt={`Window tinting project in ${city.cityName}, NJ`}
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* City Specific FAQs */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <span className="text-[11px] font-semibold text-[#c5a880] uppercase tracking-widest block mb-2">
            Local Inquiries
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#f3f4f6] font-normal">
            Frequently Asked Questions in {city.cityName}
          </h2>
        </div>

        <div className="space-y-3">
          {city.faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div
                key={index}
                className="bg-[#0f1420] border border-[#1e2738] rounded-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-serif text-base text-[#f3f4f6]">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#c5a880] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#7d8c9f] shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-[#9ca3af] leading-relaxed border-t border-[#1a2232]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </section>

      {/* Bottom Consultation Banner */}
      <section className="py-16 bg-[#090c12] border-t border-[#161c28]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-serif text-2xl sm:text-3xl text-[#f3f4f6] font-normal mb-3">
            Schedule an on-site consultation in {city.cityName}.
          </h3>
          <p className="text-xs sm:text-sm text-[#9ca3af] mb-8 max-w-xl mx-auto">
            Our certified glazing specialists bring physical sample books, measure your fenestration, and deliver a detailed fixed-price estimate.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onRequestEstimate}
              className="px-8 py-4 bg-[#c5a880] hover:bg-[#d6ba94] text-[#0b0e14] font-semibold text-xs uppercase tracking-wider rounded-sm transition-all shadow-xl active:scale-98"
            >
              Request On-Site Estimate
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
