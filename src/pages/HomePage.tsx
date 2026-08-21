import React from 'react';
import { PageRoute } from '../types';
import { PRODUCTS_DATA } from '../data/specsData';
import { IMAGES } from '../assets/images';
import { InteractiveSpecViewer } from '../components/InteractiveSpecViewer';
import { GlazingVisualizer } from '../components/GlazingVisualizer';
import { JsonLd } from '../components/JsonLd';
import { 
  Sun, 
  ShieldAlert, 
  Eye, 
  Sparkles, 
  Bird, 
  Shield, 
  Building2, 
  ArrowRight, 
  Phone, 
  Check, 
  ShieldCheck, 
  Maximize2,
  Compass,
  Layers,
  Sparkle
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  onRequestEstimate: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onRequestEstimate }) => {
  return (
    <div id="home-page" className="min-h-screen bg-[#0b0e14] text-[#e2e5ec]">
      
      <JsonLd
        title="Princeton Window Tinting | Architectural Window Film Specialists | Central NJ"
        description="Bespoke architectural flat glass window film installation for luxury residences, historic estates, and commercial buildings across Princeton, Hamilton, Edison, Bridgewater, and Central New Jersey."
        schemaType="LocalBusiness"
      />

      {/* Hero Section */}
      <section id="hero-section" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        
        {/* Full Bleed Background Image with Luxury Tint & Dark Vignette */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.heroEstate}
            alt="Modern architectural residence in Princeton New Jersey with floor-to-ceiling glass windows"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14] via-[#0b0e14]/40 to-black/60" />
          <div className="absolute inset-0 bg-subtle-noise pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            
            {/* Location & Specialty Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-sm bg-[#141a26]/90 border border-[#273347] backdrop-blur-md mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880] animate-pulse" />
              <span className="text-[11px] font-semibold text-[#cbd5e1] tracking-widest uppercase">
                Central New Jersey • Architectural Flat Glass Only
              </span>
            </div>

            {/* Main H1 Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#f9fafb] font-normal leading-[1.12] tracking-tight mb-6">
              Bespoke window tinting for Princeton’s finest residences and architectural glass.
            </h1>

            {/* Restrained Subtitle */}
            <p className="text-base sm:text-lg text-[#cbd5e1] font-normal leading-relaxed mb-8 max-w-2xl">
              Eliminate radiant solar heat gain, preserve irreplaceable art and hardwood floors from UV degradation, and reinforce vulnerable perimeter glass — without sacrificing natural light or your landscape view.
            </p>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                id="hero-request-estimate-btn"
                onClick={onRequestEstimate}
                className="px-7 py-4 bg-[#c5a880] hover:bg-[#d6ba94] text-[#0b0e14] font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-sm transition-all shadow-xl active:scale-98 flex items-center justify-center gap-2.5"
              >
                <span>Request On-Site Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                id="hero-phone-call-btn"
                href="tel:6094369103"
                className="px-6 py-4 bg-[#111722]/80 hover:bg-[#182130] border border-[#2b374d] hover:border-[#c5a880] text-[#f3f4f6] font-medium text-xs sm:text-sm tracking-wide rounded-sm transition-colors flex items-center justify-center gap-2.5 backdrop-blur-sm"
              >
                <Phone className="w-4 h-4 text-[#c5a880]" />
                <span>Call 609-436-9103</span>
              </a>
            </div>

            {/* Assurance Badges */}
            <div className="mt-10 pt-6 border-t border-[#232d3f]/60 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-[#9ca3af]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#c5a880] shrink-0" />
                <span>Lifetime Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#c5a880] shrink-0" />
                <span>Zero View Distortion</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkle className="w-4 h-4 text-[#c5a880] shrink-0" />
                <span>99.9% UV Filtering</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#c5a880] shrink-0" />
                <span>No Automotive Work</span>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* Core Architectural Categories Showcase */}
      <section id="categories-section" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mb-16">
          <span className="text-[11px] font-semibold text-[#c5a880] uppercase tracking-widest block mb-2">
            Engineered Capabilities
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#f3f4f6] font-normal leading-tight">
            Architectural solutions tailored to specific glazing challenges.
          </h2>
          <p className="text-sm text-[#9ca3af] mt-3 font-normal">
            Every product category serves a distinct thermodynamic, optical, or structural function. We never install generic films; each specification matches your glass type and orientation.
          </p>
        </div>

        {/* Categories Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* 1. Solar & Heat Control */}
          <div
            id="cat-card-solar"
            onClick={() => onNavigate('product-solar-heat-control')}
            className="group cursor-pointer bg-[#0f141f] border border-[#1e2738] hover:border-[#c5a880]/70 rounded-sm overflow-hidden transition-all duration-300 flex flex-col"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[#161c28]">
              <img
                src={IMAGES.solarGlazing}
                alt="Solar heat control window tinting installed on sunlit luxury residence"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 bg-[#0b0e14]/85 px-2.5 py-1 rounded-sm border border-[#2b3548] text-[10px] text-[#c5a880] font-mono font-medium">
                Up to 72% TSER
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#c5a880] uppercase tracking-wider mb-1.5">
                  <Sun className="w-3.5 h-3.5" />
                  <span>Solar & Heat Control</span>
                </div>
                <h3 className="font-serif text-xl text-[#f3f4f6] font-normal mb-2">
                  Preserve Views. Stop Radiant Heat.
                </h3>
                <p className="text-xs text-[#9ca3af] leading-relaxed mb-4">
                  Spectrally selective ceramic nanotechnology that stops 94% of infrared heat without darkening glass or creating a mirrored exterior.
                </p>
              </div>
              <div className="pt-3 border-t border-[#1a2130] flex items-center justify-between text-xs text-[#cbd5e1] group-hover:text-[#c5a880] font-medium">
                <span>View Performance Specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* 2. Security & Safety */}
          <div
            id="cat-card-security"
            onClick={() => onNavigate('product-security-safety')}
            className="group cursor-pointer bg-[#0f141f] border border-[#1e2738] hover:border-[#c5a880]/70 rounded-sm overflow-hidden transition-all duration-300 flex flex-col"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[#161c28]">
              <img
                src={IMAGES.securityGlass}
                alt="Impact resistant security glass film with structural wet glaze retention"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 bg-[#0b0e14]/85 px-2.5 py-1 rounded-sm border border-[#2b3548] text-[10px] text-[#38bdf8] font-mono font-medium">
                8 to 14-Mil Tensile
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#c5a880] uppercase tracking-wider mb-1.5">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>Security & Shatter Glass</span>
                </div>
                <h3 className="font-serif text-xl text-[#f3f4f6] font-normal mb-2">
                  Forced-Entry & Impact Retention
                </h3>
                <p className="text-xs text-[#9ca3af] leading-relaxed mb-4">
                  Micro-layered high-tensile polyester paired with structural silicone wet-glaze anchoring to resist smash-and-grab entry.
                </p>
              </div>
              <div className="pt-3 border-t border-[#1a2130] flex items-center justify-between text-xs text-[#cbd5e1] group-hover:text-[#c5a880] font-medium">
                <span>View Security Specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* 3. Decorative & Privacy */}
          <div
            id="cat-card-decorative"
            onClick={() => onNavigate('product-decorative-privacy')}
            className="group cursor-pointer bg-[#0f141f] border border-[#1e2738] hover:border-[#c5a880]/70 rounded-sm overflow-hidden transition-all duration-300 flex flex-col"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[#161c28]">
              <img
                src={IMAGES.decorativeFrost}
                alt="Frosted etched glass privacy window film on modern glass office partitions"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 bg-[#0b0e14]/85 px-2.5 py-1 rounded-sm border border-[#2b3548] text-[10px] text-[#c5a880] font-mono font-medium">
                Matte • Reeded • Gradient
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#c5a880] uppercase tracking-wider mb-1.5">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Decorative & Privacy</span>
                </div>
                <h3 className="font-serif text-xl text-[#f3f4f6] font-normal mb-2">
                  Architectural Light Diffusion
                </h3>
                <p className="text-xs text-[#9ca3af] leading-relaxed mb-4">
                  Acid-etched, crystal frost, fluted reeded, and gradient veil membranes for boardrooms, ensuites, and glass entryways.
                </p>
              </div>
              <div className="pt-3 border-t border-[#1a2130] flex items-center justify-between text-xs text-[#cbd5e1] group-hover:text-[#c5a880] font-medium">
                <span>View Design Styles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* 4. Fine Art & UV Preservation */}
          <div
            id="cat-card-uv"
            onClick={() => onNavigate('product-uv-protection')}
            className="group cursor-pointer bg-[#0f141f] border border-[#1e2738] hover:border-[#c5a880]/70 rounded-sm overflow-hidden transition-all duration-300 flex flex-col"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[#161c28]">
              <img
                src={IMAGES.uvArt}
                alt="Fine art living room protected from solar bleaching by museum grade UV film"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 bg-[#0b0e14]/85 px-2.5 py-1 rounded-sm border border-[#2b3548] text-[10px] text-[#38bdf8] font-mono font-medium">
                99.9% Block to 400nm
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#c5a880] uppercase tracking-wider mb-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Fine Art & UV Protection</span>
                </div>
                <h3 className="font-serif text-xl text-[#f3f4f6] font-normal mb-2">
                  Museum-Grade Fade Defense
                </h3>
                <p className="text-xs text-[#9ca3af] leading-relaxed mb-4">
                  Water-clear optical filters with CRI &gt; 99 that shield oil pigments, oriental carpets, and walnut hardwood from solar degradation.
                </p>
              </div>
              <div className="pt-3 border-t border-[#1a2130] flex items-center justify-between text-xs text-[#cbd5e1] group-hover:text-[#c5a880] font-medium">
                <span>View Museum Specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* 5. Bird-Friendly Glazing */}
          <div
            id="cat-card-bird"
            onClick={() => onNavigate('product-bird-friendly')}
            className="group cursor-pointer bg-[#0f141f] border border-[#1e2738] hover:border-[#c5a880]/70 rounded-sm overflow-hidden transition-all duration-300 flex flex-col"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[#161c28]">
              <img
                src={IMAGES.birdFriendly}
                alt="Exterior ceramic dot matrix pattern preventing bird window strikes on modern building"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 bg-[#0b0e14]/85 px-2.5 py-1 rounded-sm border border-[#2b3548] text-[10px] text-emerald-400 font-mono font-medium">
                LEED Pilot Credit 55
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#c5a880] uppercase tracking-wider mb-1.5">
                  <Bird className="w-3.5 h-3.5" />
                  <span>Bird-Friendly Glazing</span>
                </div>
                <h3 className="font-serif text-xl text-[#f3f4f6] font-normal mb-2">
                  Avian Collision Prevention
                </h3>
                <p className="text-xs text-[#9ca3af] leading-relaxed mb-4">
                  Exterior ceramic dot matrix patterns that eliminate exterior reflection illusions without obstructing the interior landscape view.
                </p>
              </div>
              <div className="pt-3 border-t border-[#1a2130] flex items-center justify-between text-xs text-[#cbd5e1] group-hover:text-[#c5a880] font-medium">
                <span>View Avian Specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* 6. Commercial Glazing & Anti-Graffiti */}
          <div
            id="cat-card-commercial"
            onClick={() => onNavigate('commercial')}
            className="group cursor-pointer bg-[#0f141f] border border-[#1e2738] hover:border-[#c5a880]/70 rounded-sm overflow-hidden transition-all duration-300 flex flex-col"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[#161c28]">
              <img
                src={IMAGES.commercialCurtainWall}
                alt="Commercial office curtain wall glazing and sacrificial surface protection"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 bg-[#0b0e14]/85 px-2.5 py-1 rounded-sm border border-[#2b3548] text-[10px] text-[#c5a880] font-mono font-medium">
                ASHRAE 90.1 Compliant
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#c5a880] uppercase tracking-wider mb-1.5">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Commercial & Institutional</span>
                </div>
                <h3 className="font-serif text-xl text-[#f3f4f6] font-normal mb-2">
                  Building Energy Retrofits
                </h3>
                <p className="text-xs text-[#9ca3af] leading-relaxed mb-4">
                  Turnkey curtain-wall retrofits, tenant thermal balancing, utility rebate management, and sacrificial anti-graffiti surface protection.
                </p>
              </div>
              <div className="pt-3 border-t border-[#1a2130] flex items-center justify-between text-xs text-[#cbd5e1] group-hover:text-[#c5a880] font-medium">
                <span>Commercial Solutions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* Interactive Glazing Comparison Visualizer */}
      <section id="visualizer-section" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlazingVisualizer />
      </section>

      {/* Interactive Photometric Spec Matrix */}
      <section id="spec-matrix-section" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InteractiveSpecViewer 
          onSelectCategory={(slug) => onNavigate(`product-${slug}` as PageRoute)}
          onRequestEstimate={onRequestEstimate}
        />
      </section>

      {/* What The Work Involves (Craftsmanship & Standards) */}
      <section id="craft-section" className="py-24 bg-[#090c12] border-y border-[#161c28]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div>
              <span className="text-[11px] font-semibold text-[#c5a880] uppercase tracking-widest block mb-2">
                Installation Methodology
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#f3f4f6] font-normal leading-tight mb-6">
                What the work actually involves: White-glove cleanroom execution.
              </h2>
              
              <div className="space-y-6 text-xs sm:text-sm text-[#cbd5e1] font-normal leading-relaxed">
                <p>
                  High-end architectural window film is unforgiving. Trapped airborne dust, improper gasket trimming, or uneven squeegee pressure ruins optical clarity and destroys the look of fine millwork.
                </p>
                
                <div className="space-y-4 pt-2">
                  
                  <div className="p-4 bg-[#0f1420] border border-[#1d2638] rounded-sm flex items-start gap-4">
                    <div className="w-7 h-7 rounded-sm bg-[#172030] text-[#c5a880] font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                      01
                    </div>
                    <div>
                      <h4 className="font-medium text-[#f3f4f6] text-sm mb-1">Micro-Surgical Glass Preparation</h4>
                      <p className="text-xs text-[#9ca3af]">
                        Surfaces are mechanically scraped using stainless-steel single-bevel blades and washed with deionized water solutions to remove microscopic silicones, paint overspray, and environmental sap.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-[#0f1420] border border-[#1d2638] rounded-sm flex items-start gap-4">
                    <div className="w-7 h-7 rounded-sm bg-[#172030] text-[#c5a880] font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                      02
                    </div>
                    <div>
                      <h4 className="font-medium text-[#f3f4f6] text-sm mb-1">Zero-Light-Gap Perimeter Trimming</h4>
                      <p className="text-xs text-[#9ca3af]">
                        Films are hand-trimmed along gaskets to tolerances under 1/32 of an inch. From more than six inches away, the film edge is entirely indistinguishable from factory-tinted glass.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-[#0f1420] border border-[#1d2638] rounded-sm flex items-start gap-4">
                    <div className="w-7 h-7 rounded-sm bg-[#172030] text-[#c5a880] font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                      03
                    </div>
                    <div>
                      <h4 className="font-medium text-[#f3f4f6] text-sm mb-1">Floor & Furnishing Containment</h4>
                      <p className="text-xs text-[#9ca3af]">
                        We lay absorbent neoprene drop runners across hardwood floors, mask custom drapery and baseboards, and leave zero water residue behind.
                      </p>
                    </div>
                  </div>

                </div>

                <div className="pt-4 flex items-center gap-4">
                  <button
                    id="craft-learn-more-btn"
                    onClick={() => onNavigate('about')}
                    className="text-xs text-[#c5a880] hover:text-[#d6ba94] font-medium tracking-wider uppercase flex items-center gap-1.5 transition-colors"
                  >
                    <span>Read Our Full Installation Protocols</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Image Showcase */}
            <div className="relative">
              <div className="relative rounded-sm overflow-hidden border border-[#263145] shadow-2xl bg-[#121824]">
                <img
                  src={IMAGES.installationCraft}
                  alt="Precision squeegee and edge trimming on architectural window film installation"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#0e131d] border border-[#263145] p-5 rounded-sm shadow-2xl max-w-xs hidden sm:block">
                <span className="text-[10px] uppercase font-semibold text-[#c5a880] tracking-widest block mb-1">
                  Quality Standard
                </span>
                <p className="text-xs text-[#cbd5e1] leading-tight">
                  "Every pane is inspected under direct raking light for zero trapped particulate before sign-off."
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Featured Architectural Case Study (Single Restrained Testimonial / Story) */}
      <section id="case-study-section" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0f1420] border border-[#1e273a] rounded-sm p-8 sm:p-12 lg:p-14">
          <div className="max-w-3xl">
            <span className="text-[11px] font-semibold text-[#c5a880] uppercase tracking-widest block mb-3">
              Case Study // Institute Woods, Princeton
            </span>
            <blockquote className="font-serif text-2xl sm:text-3xl text-[#f3f4f6] font-normal leading-relaxed mb-6">
              "We have floor-to-ceiling windows overlooking private woods. The afternoon sun made our main living room unlivable from June through September. Princeton Window Tinting applied ceramic film to 38 panes. The view looks identical to before, but the heat simply disappeared."
            </blockquote>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#1e2638] text-xs text-[#9ca3af]">
              <div>
                <span className="font-semibold text-[#f3f4f6] block">Estate Residence, Mercer Road</span>
                <span>Spectrally Selective Ceramic 70 Installation • 38 Divided-Lite Panes</span>
              </div>
              <div className="flex items-center gap-6">
                <div>
                  <span className="text-[#64748b] text-[10px] uppercase block">Surface Temp Drop</span>
                  <span className="text-[#c5a880] font-semibold font-mono text-sm">-21°F</span>
                </div>
                <div>
                  <span className="text-[#64748b] text-[10px] uppercase block">UV Block</span>
                  <span className="text-[#38bdf8] font-semibold font-mono text-sm">99.9%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Municipalities Service Strip */}
      <section id="municipalities-section" className="py-16 border-t border-[#161c28]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-[11px] font-semibold text-[#c5a880] uppercase tracking-widest block mb-1">
                Central New Jersey Service Area
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#f3f4f6] font-normal">
                Serving Premier Municipalities Across Central NJ
              </h3>
            </div>
            <span className="text-xs text-[#8e9aa8]">
              Daily crews dispatched across Mercer, Middlesex & Somerset Counties
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              { name: 'Princeton', route: 'city-princeton', note: 'Palmer Square & Historic Estates' },
              { name: 'Hamilton', route: 'city-hamilton', note: 'Grounds for Sculpture Area' },
              { name: 'Edison', route: 'city-edison', note: 'North Edison & Corporate Hubs' },
              { name: 'Bridgewater', route: 'city-bridgewater', note: 'Somerset Hills Hillside Estates' },
              { name: 'South Brunswick', route: 'city-south-brunswick', note: 'Kingston, Dayton & Research Corridor' },
            ].map((city) => (
              <button
                key={city.route}
                id={`home-city-btn-${city.name.toLowerCase()}`}
                onClick={() => onNavigate(city.route as PageRoute)}
                className="p-4 bg-[#0e131d] border border-[#1d2535] hover:border-[#c5a880] rounded-sm text-left transition-colors group"
              >
                <div className="text-sm font-medium text-[#f3f4f6] group-hover:text-[#c5a880] transition-colors mb-1">
                  {city.name}, NJ
                </div>
                <div className="text-[11px] text-[#7d8b9e]">
                  {city.note}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Call to Action */}
      <section id="closing-cta-section" className="py-24 bg-[#090c12] border-t border-[#161c28]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] font-semibold text-[#c5a880] uppercase tracking-widest block mb-2">
            Schedule A Consultation
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#f3f4f6] font-normal leading-tight mb-6">
            Let’s review the glass in your home or building.
          </h2>
          <p className="text-sm sm:text-base text-[#9ca3af] max-w-xl mx-auto leading-relaxed mb-10">
            We provide on-site thermal analysis, laser measurements, and physical film sample books to test opacity in your home's exact natural lighting.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="closing-estimate-btn"
              onClick={onRequestEstimate}
              className="w-full sm:w-auto px-8 py-4 bg-[#c5a880] hover:bg-[#d6ba94] text-[#0b0e14] font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-sm transition-all shadow-xl active:scale-98"
            >
              Request Free On-Site Estimate
            </button>
            <a
              id="closing-phone-btn"
              href="tel:6094369103"
              className="w-full sm:w-auto px-7 py-4 bg-[#131924] hover:bg-[#1a2230] border border-[#273244] text-[#f3f4f6] font-medium text-xs sm:text-sm tracking-wide rounded-sm transition-colors flex items-center justify-center gap-2"
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
