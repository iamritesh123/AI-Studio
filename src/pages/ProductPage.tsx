import React, { useState } from 'react';
import { ProductDetail, PageRoute } from '../types';
import { JsonLd } from '../components/JsonLd';
import { 
  Phone, 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  Layers, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  Info,
  Calendar,
  Eye,
  Sun
} from 'lucide-react';

interface ProductPageProps {
  product: ProductDetail;
  onNavigate: (route: PageRoute) => void;
  onRequestEstimate: () => void;
}

export const ProductPage: React.FC<ProductPageProps> = ({ product, onNavigate, onRequestEstimate }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeSpecIndex, setActiveSpecIndex] = useState<number>(0);

  const activeSpec = product.specs[activeSpecIndex] || product.specs[0];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div id={`product-page-${product.slug}`} className="min-h-screen bg-[#0b0e14] text-[#e2e5ec] pt-24 pb-20">
      
      <JsonLd
        title={product.seoTitle}
        description={product.metaDescription}
        schemaType="FAQPage"
        faqs={product.faqs}
        serviceName={product.name}
        serviceDescription={product.editorialSubhead}
      />

      {/* Hero & Editorial Lead */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-[#7f8c9f] mb-6">
          <button onClick={() => onNavigate('home')} className="hover:text-[#c5a880] transition-colors">
            Home
          </button>
          <span>/</span>
          <span className="text-[#cbd5e1]">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7">
            <span className="text-[11px] font-semibold text-[#c5a880] uppercase tracking-widest block mb-2">
              {product.consumerSearchKeyword}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#f9fafb] font-normal leading-[1.18] mb-6">
              {product.categoryHeadline}
            </h1>
            <p className="text-base sm:text-lg text-[#cbd5e1] font-normal leading-relaxed mb-8">
              {product.editorialSubhead}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="product-hero-estimate-btn"
                onClick={onRequestEstimate}
                className="px-7 py-4 bg-[#c5a880] hover:bg-[#d6ba94] text-[#0b0e14] font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-sm transition-all shadow-xl active:scale-98 flex items-center justify-center gap-2"
              >
                <span>Request On-Site Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:6094369103"
                className="px-6 py-4 bg-[#121722] hover:bg-[#18202e] border border-[#263143] hover:border-[#c5a880] text-[#f3f4f6] font-medium text-xs sm:text-sm tracking-wide rounded-sm transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#c5a880]" />
                <span>609-436-9103</span>
              </a>
            </div>

            {/* Quick Guarantees */}
            <div className="mt-8 pt-6 border-t border-[#1c2434] flex flex-wrap items-center gap-6 text-xs text-[#8f9ba8]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#c5a880]" />
                <span>{activeSpec.warranty}</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#c5a880]" />
                <span>Non-Corrosive Ceramic</span>
              </div>
            </div>
          </div>

          {/* Hero Photography with Clean Framing */}
          <div className="lg:col-span-5">
            <div className="relative rounded-sm overflow-hidden border border-[#263145] shadow-2xl bg-[#141924]">
              <img
                src={product.heroImage}
                alt={product.heroImageAlt}
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="p-4 bg-[#0e131d] border-t border-[#20293a] text-xs text-[#9ca3af]">
                <span className="text-[#cbd5e1] font-medium block">{product.heroImageAlt}</span>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* The Problem & Client Profile Section */}
      <section className="py-16 bg-[#090c12] border-y border-[#161c28]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Primary Problem Statement */}
            <div className="lg:col-span-6">
              <span className="text-[11px] font-semibold text-[#c5a880] uppercase tracking-widest block mb-2">
                Glazing Physics & Problem Statement
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#f3f4f6] font-normal leading-snug mb-4">
                The core issue this film solves.
              </h2>
              <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed mb-6">
                {product.primaryProblem}
              </p>

              <div className="space-y-2.5">
                <span className="text-[11px] font-semibold text-[#8b98ac] uppercase tracking-wider block">
                  Architectural Engineering Notes:
                </span>
                {product.architecturalConsiderations.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#9ca3af]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880] mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ideal Client Profile */}
            <div className="lg:col-span-6 bg-[#0f1420] border border-[#1e2738] p-6 sm:p-8 rounded-sm">
              <span className="text-[11px] font-semibold text-[#c5a880] uppercase tracking-widest block mb-2">
                Ideal Application Profile
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#f3f4f6] font-normal mb-4">
                Who this installation is engineered for.
              </h3>
              
              <ul className="space-y-3 text-xs sm:text-sm text-[#cbd5e1]">
                {product.idealClientProfile.map((profile, i) => (
                  <li key={i} className="flex items-start gap-3 p-2.5 bg-[#141a28] rounded-sm border border-[#1f283a]">
                    <Check className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                    <span>{profile}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Real Spec Sheet Data Matrix */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <span className="text-[11px] font-semibold text-[#c5a880] uppercase tracking-widest block mb-2">
            Certified Laboratory Test Data
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#f3f4f6] font-normal leading-tight">
            Performance Specifications & Optical Metrics
          </h2>
          <p className="text-xs sm:text-sm text-[#9ca3af] mt-2">
            Every figure below represents independently certified NFRC (National Fenestration Rating Council) test data on 1/4" dual-pane clear glass.
          </p>
        </div>

        {/* Series Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {product.specs.map((spec, index) => (
            <button
              key={spec.code}
              id={`prod-spec-tab-${spec.code}`}
              onClick={() => setActiveSpecIndex(index)}
              className={`p-4 rounded-sm border text-left transition-all ${
                activeSpecIndex === index
                  ? 'bg-[#151c2a] border-[#c5a880] ring-1 ring-[#c5a880]/40'
                  : 'bg-[#0f1420] border-[#1e273a] hover:border-[#2b374e]'
              }`}
            >
              <div className="text-[10px] font-mono text-[#c5a880] uppercase tracking-wider mb-1">
                {spec.code}
              </div>
              <div className="text-sm font-medium text-[#f3f4f6] mb-2 leading-tight">
                {spec.name}
              </div>
              <div className="text-[11px] text-[#8e9ba8]">
                VLT: <strong className="text-[#f3f4f6]">{spec.vlt}%</strong> • Heat Cut: <strong className="text-[#c5a880]">{spec.tser}%</strong>
              </div>
            </button>
          ))}
        </div>

        {/* Active Spec Deep Dive Card */}
        <div className="bg-[#0f1420] border border-[#1e273a] rounded-sm p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#1c2436]">
            <div>
              <span className="text-[10px] font-mono text-[#c5a880] uppercase tracking-widest block mb-1">
                Series: {activeSpec.code}
              </span>
              <h3 className="font-serif text-2xl text-[#f3f4f6]">
                {activeSpec.name}
              </h3>
              <p className="text-xs text-[#9ca3af] mt-1">
                {activeSpec.bestFor}
              </p>
            </div>
            
            <button
              onClick={onRequestEstimate}
              className="px-5 py-2.5 bg-[#c5a880] hover:bg-[#d6ba94] text-[#0b0e14] text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-1.5 self-start lg:self-auto"
            >
              <span>Request Sample for this Spec</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Metric Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 py-6 border-b border-[#1c2436]">
            <div className="p-3 bg-[#131926] border border-[#1f283c] rounded-sm">
              <span className="text-[10px] text-[#718096] uppercase block">Visible Light (VLT)</span>
              <span className="text-2xl font-serif font-semibold text-[#f3f4f6]">{activeSpec.vlt}%</span>
            </div>
            <div className="p-3 bg-[#131926] border border-[#1f283c] rounded-sm">
              <span className="text-[10px] text-[#718096] uppercase block">Total Heat Cut (TSER)</span>
              <span className="text-2xl font-serif font-semibold text-[#c5a880]">{activeSpec.tser}%</span>
            </div>
            <div className="p-3 bg-[#131926] border border-[#1f283c] rounded-sm">
              <span className="text-[10px] text-[#718096] uppercase block">UV Rejection</span>
              <span className="text-2xl font-serif font-semibold text-[#38bdf8]">{activeSpec.uvRejection}%</span>
            </div>
            <div className="p-3 bg-[#131926] border border-[#1f283c] rounded-sm">
              <span className="text-[10px] text-[#718096] uppercase block">Glare Reduction</span>
              <span className="text-2xl font-serif font-semibold text-[#f3f4f6]">{activeSpec.glareReduction}%</span>
            </div>
            <div className="p-3 bg-[#131926] border border-[#1f283c] rounded-sm">
              <span className="text-[10px] text-[#718096] uppercase block">Shading Coeff (SC)</span>
              <span className="text-2xl font-serif font-semibold text-[#f3f4f6]">{activeSpec.shadingCoefficient}</span>
            </div>
            <div className="p-3 bg-[#131926] border border-[#1f283c] rounded-sm">
              <span className="text-[10px] text-[#718096] uppercase block">Solar Heat Gain (SHGC)</span>
              <span className="text-2xl font-serif font-semibold text-[#f3f4f6]">{activeSpec.shgc}</span>
            </div>
          </div>

          {/* Details Row */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="p-4 bg-[#131926] rounded-sm border border-[#1f283c]">
              <span className="text-[10px] uppercase font-semibold text-[#c5a880] tracking-wider block mb-1">
                Visual Installed Appearance
              </span>
              <p className="text-[#cbd5e1] leading-relaxed">
                {activeSpec.visualAppearance}
              </p>
            </div>
            <div className="p-4 bg-[#131926] rounded-sm border border-[#1f283c]">
              <span className="text-[10px] uppercase font-semibold text-[#c5a880] tracking-wider block mb-1">
                Warranty & Structural Coverage
              </span>
              <div className="text-[#cbd5e1] space-y-1">
                <div>Coverage: <strong className="text-[#f3f4f6]">{activeSpec.warranty}</strong></div>
                {activeSpec.thickness && <div>Film Thickness: <strong className="text-[#f3f4f6]">{activeSpec.thickness}</strong></div>}
                {activeSpec.tensileStrength && <div>Tensile Strength: <strong className="text-[#f3f4f6]">{activeSpec.tensileStrength}</strong></div>}
                {activeSpec.impactStandard && <div>Impact Standard: <strong className="text-[#38bdf8]">{activeSpec.impactStandard}</strong></div>}
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* 4-Step White-Glove Installation Process */}
      <section className="py-20 bg-[#090c12] border-y border-[#161c28]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-semibold text-[#c5a880] uppercase tracking-widest block mb-2">
              White-Glove Protocol
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#f3f4f6] font-normal leading-tight">
              What to expect from our installation process.
            </h2>
            <p className="text-xs sm:text-sm text-[#9ca3af] mt-2">
              Executed by certified architectural film technicians with meticulous dust-free containment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.processSteps.map((step) => (
              <div key={step.number} className="p-6 bg-[#0e131e] border border-[#1c2436] rounded-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-[#c5a880] text-sm font-semibold mb-3">
                    // STEP {step.number}
                  </div>
                  <h4 className="font-serif text-lg text-[#f3f4f6] font-normal mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#9ca3af] leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Product Specific FAQ Section */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="text-[11px] font-semibold text-[#c5a880] uppercase tracking-widest block mb-2">
            Technical Clarity
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#f3f4f6] font-normal leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {product.faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div
                key={index}
                className="bg-[#0f1420] border border-[#1e2738] rounded-sm overflow-hidden transition-colors"
              >
                <button
                  id={`faq-toggle-${index}`}
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-serif text-base sm:text-lg text-[#f3f4f6] font-normal">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#c5a880] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#7d8c9f] shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#9ca3af] leading-relaxed border-t border-[#1a2232]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </section>

      {/* Bottom Conversion Prompt */}
      <section className="py-16 bg-[#090c12] border-t border-[#161c28]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-serif text-2xl sm:text-3xl text-[#f3f4f6] font-normal mb-3">
            Schedule an on-site evaluation for {product.name.toLowerCase()}.
          </h3>
          <p className="text-xs sm:text-sm text-[#9ca3af] mb-8 max-w-xl mx-auto">
            We will bring physical architectural samples, calculate solar load metrics for your specific glass exposures, and provide a precise quote.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onRequestEstimate}
              className="px-8 py-4 bg-[#c5a880] hover:bg-[#d6ba94] text-[#0b0e14] font-semibold text-xs uppercase tracking-wider rounded-sm transition-all shadow-xl active:scale-98"
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
