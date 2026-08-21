import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { Phone, ChevronDown, Menu, X, Shield, ArrowUpRight, Sun, Sparkles, Eye, ShieldAlert, Bird, Building2 } from 'lucide-react';

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onRequestEstimate: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate, onRequestEstimate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [citiesOpen, setCitiesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productLinks: { name: string; route: PageRoute; icon: React.ElementType; sub: string }[] = [
    { name: 'Solar & Heat Control', route: 'product-solar-heat-control', icon: Sun, sub: 'Stop infrared heat gain while keeping pristine views' },
    { name: 'Security & Safety Glass', route: 'product-security-safety', icon: ShieldAlert, sub: 'Shatter-resistant forced-entry barrier' },
    { name: 'Decorative & Privacy', route: 'product-decorative-privacy', icon: Eye, sub: 'Etched, frosted, reeded & gradient glazing' },
    { name: 'UV & Art Preservation', route: 'product-uv-protection', icon: Sparkles, sub: '99.9% UV filter for fine art & flooring' },
    { name: 'Bird-Friendly Glazing', route: 'product-bird-friendly', icon: Bird, sub: 'Exterior ceramic matrix strike prevention' },
    { name: 'Anti-Graffiti Surface', route: 'product-anti-graffiti', icon: Shield, sub: 'Sacrificial shield for commercial retail' },
    { name: 'Commercial Glazing', route: 'product-commercial-glazing', icon: Building2, sub: 'Curtain-wall retrofits & energy modeling' },
  ];

  const cityLinks: { name: string; route: PageRoute; desc: string }[] = [
    { name: 'Princeton', route: 'city-princeton', desc: 'Mercer County historic estates & modern glazing' },
    { name: 'Hamilton', route: 'city-hamilton', desc: 'Grounds for Sculpture & executive residential' },
    { name: 'Edison', route: 'city-edison', desc: 'North Edison estates & corporate campuses' },
    { name: 'Bridgewater', route: 'city-bridgewater', desc: 'Somerset Hills hillside architecture' },
    { name: 'South Brunswick', route: 'city-south-brunswick', desc: 'Kingston, Dayton & Monmouth Junction' },
  ];

  const handleNav = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    setProductsOpen(false);
    setCitiesOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b0e14]/95 backdrop-blur-md border-b border-[#222834] py-3.5 shadow-2xl'
          : 'bg-[#0b0e14]/70 backdrop-blur-sm border-b border-[#1b202c] py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Monogram */}
        <button
          id="logo-button"
          onClick={() => handleNav('home')}
          className="flex items-center gap-3.5 text-left group focus:outline-none"
        >
          {/* Custom Architectural Monogram Mark */}
          <div className="w-10 h-10 rounded-sm border border-[#c5a880]/60 bg-[#141822] flex items-center justify-center relative overflow-hidden group-hover:border-[#c5a880] transition-colors">
            <span className="font-serif text-[#c5a880] text-lg font-semibold tracking-wider">P</span>
            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#c5a880]/20 rotate-45 border-t border-l border-[#c5a880]/50" />
          </div>
          <div>
            <span className="font-serif text-lg sm:text-xl tracking-wider text-[#f3f4f6] font-medium block uppercase group-hover:text-[#c5a880] transition-colors leading-tight">
              Princeton
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#9ca3af] uppercase font-sans font-medium block">
              Window Tinting
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#d1d5db]" aria-label="Main Navigation">
          
          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              id="nav-products-dropdown"
              className={`flex items-center gap-1.5 py-2 hover:text-[#c5a880] transition-colors ${
                currentRoute.startsWith('product-') ? 'text-[#c5a880]' : ''
              }`}
            >
              <span>Architectural Films</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productsOpen ? 'rotate-180 text-[#c5a880]' : ''}`} />
            </button>

            {productsOpen && (
              <div className="absolute top-full left-0 -ml-16 w-[480px] bg-[#10141d] border border-[#262c3b] rounded-sm shadow-2xl p-4 grid grid-cols-1 gap-2 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="text-[11px] font-semibold text-[#8e98a8] uppercase tracking-widest px-3 pt-1 pb-2 border-b border-[#1f2533]">
                  Flat Glass Architectural Categories
                </div>
                {productLinks.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentRoute === item.route;
                  return (
                    <button
                      key={item.route}
                      id={`nav-${item.route}`}
                      onClick={() => handleNav(item.route)}
                      className={`flex items-start gap-3 p-2.5 rounded-sm text-left transition-colors ${
                        isActive ? 'bg-[#1a202c] text-[#c5a880]' : 'hover:bg-[#161c28] text-[#e2e5ec]'
                      }`}
                    >
                      <div className="p-1.5 rounded-sm bg-[#1b2230] border border-[#2b3446] text-[#c5a880] mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-medium text-xs sm:text-sm text-[#f3f4f6]">{item.name}</div>
                        <div className="text-[11px] text-[#9ca3af] font-normal leading-snug">{item.sub}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Service Areas Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCitiesOpen(true)}
            onMouseLeave={() => setCitiesOpen(false)}
          >
            <button
              id="nav-cities-dropdown"
              className={`flex items-center gap-1.5 py-2 hover:text-[#c5a880] transition-colors ${
                currentRoute.startsWith('city-') ? 'text-[#c5a880]' : ''
              }`}
            >
              <span>Central NJ Areas</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${citiesOpen ? 'rotate-180 text-[#c5a880]' : ''}`} />
            </button>

            {citiesOpen && (
              <div className="absolute top-full left-0 -ml-8 w-72 bg-[#10141d] border border-[#262c3b] rounded-sm shadow-2xl p-3 flex flex-col gap-1.5 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="text-[11px] font-semibold text-[#8e98a8] uppercase tracking-widest px-2.5 pt-1 pb-1.5 border-b border-[#1f2533]">
                  Service Municipalities
                </div>
                {cityLinks.map((city) => (
                  <button
                    key={city.route}
                    id={`nav-${city.route}`}
                    onClick={() => handleNav(city.route)}
                    className={`flex flex-col p-2 rounded-sm text-left transition-colors ${
                      currentRoute === city.route ? 'bg-[#1a202c] text-[#c5a880]' : 'hover:bg-[#161c28] text-[#e2e5ec]'
                    }`}
                  >
                    <span className="font-medium text-xs sm:text-sm text-[#f3f4f6]">{city.name}, NJ</span>
                    <span className="text-[11px] text-[#9ca3af] font-normal">{city.desc}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            id="nav-commercial"
            onClick={() => handleNav('commercial')}
            className={`hover:text-[#c5a880] transition-colors ${currentRoute === 'commercial' ? 'text-[#c5a880]' : ''}`}
          >
            Commercial & Architects
          </button>

          <button
            id="nav-about"
            onClick={() => handleNav('about')}
            className={`hover:text-[#c5a880] transition-colors ${currentRoute === 'about' ? 'text-[#c5a880]' : ''}`}
          >
            Craft Standards
          </button>

          <button
            id="nav-contact"
            onClick={() => handleNav('contact')}
            className={`hover:text-[#c5a880] transition-colors ${currentRoute === 'contact' ? 'text-[#c5a880]' : ''}`}
          >
            Contact
          </button>
        </nav>

        {/* Action Controls: Phone & CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            id="header-phone-link"
            href="tel:6094369103"
            className="flex items-center gap-2 text-xs lg:text-sm text-[#d1d5db] hover:text-[#c5a880] transition-colors px-2 py-1.5"
            aria-label="Call Princeton Window Tinting"
          >
            <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
            <span className="font-medium tracking-wide">609-436-9103</span>
          </a>

          <button
            id="header-estimate-button"
            onClick={onRequestEstimate}
            className="relative group overflow-hidden bg-[#c5a880] hover:bg-[#d6ba94] text-[#0b0e14] text-xs lg:text-sm font-semibold tracking-wide uppercase px-4 lg:px-5 py-2.5 rounded-sm transition-all shadow-md active:scale-95 flex items-center gap-2"
          >
            <span>Request Estimate</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#d1d5db] hover:text-[#c5a880] focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#0e121a] border-b border-[#232938] px-4 pt-4 pb-8 space-y-4 max-h-[85vh] overflow-y-auto"
        >
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => handleNav('home')}
              className={`text-left text-sm py-2 px-3 rounded-sm font-medium ${
                currentRoute === 'home' ? 'bg-[#181f2c] text-[#c5a880]' : 'text-[#e5e7eb]'
              }`}
            >
              Home
            </button>

            <div className="pt-2 pb-1 border-t border-[#1b2230]">
              <div className="text-[11px] font-semibold text-[#8b95a5] uppercase tracking-wider px-3 pb-2">
                Architectural Film Products
              </div>
              <div className="space-y-1 pl-2">
                {productLinks.map((item) => (
                  <button
                    key={item.route}
                    onClick={() => handleNav(item.route)}
                    className={`w-full text-left text-xs py-2 px-3 rounded-sm flex items-center justify-between ${
                      currentRoute === item.route ? 'bg-[#1c2332] text-[#c5a880]' : 'text-[#cbd5e1] hover:bg-[#141a24]'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#717d91]" />
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 pb-1 border-t border-[#1b2230]">
              <div className="text-[11px] font-semibold text-[#8b95a5] uppercase tracking-wider px-3 pb-2">
                Service Locations (Central NJ)
              </div>
              <div className="grid grid-cols-2 gap-1 pl-2">
                {cityLinks.map((city) => (
                  <button
                    key={city.route}
                    onClick={() => handleNav(city.route)}
                    className={`text-left text-xs py-2 px-3 rounded-sm ${
                      currentRoute === city.route ? 'bg-[#1c2332] text-[#c5a880]' : 'text-[#cbd5e1] hover:bg-[#141a24]'
                    }`}
                  >
                    {city.name}, NJ
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-[#1b2230] space-y-1">
              <button
                onClick={() => handleNav('commercial')}
                className={`w-full text-left text-sm py-2 px-3 rounded-sm font-medium ${
                  currentRoute === 'commercial' ? 'bg-[#181f2c] text-[#c5a880]' : 'text-[#e5e7eb]'
                }`}
              >
                Commercial Glazing & Architects
              </button>
              <button
                onClick={() => handleNav('about')}
                className={`w-full text-left text-sm py-2 px-3 rounded-sm font-medium ${
                  currentRoute === 'about' ? 'bg-[#181f2c] text-[#c5a880]' : 'text-[#e5e7eb]'
                }`}
              >
                Craft & Installation Standards
              </button>
              <button
                onClick={() => handleNav('contact')}
                className={`w-full text-left text-sm py-2 px-3 rounded-sm font-medium ${
                  currentRoute === 'contact' ? 'bg-[#181f2c] text-[#c5a880]' : 'text-[#e5e7eb]'
                }`}
              >
                Contact & Consultations
              </button>
            </div>

            <div className="pt-4 border-t border-[#1b2230] flex flex-col gap-3">
              <a
                href="tel:6094369103"
                className="flex items-center justify-center gap-2 py-2.5 bg-[#141a25] border border-[#2b3548] text-[#f3f4f6] text-sm font-medium rounded-sm"
              >
                <Phone className="w-4 h-4 text-[#c5a880]" />
                <span>Call 609-436-9103</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestEstimate();
                }}
                className="w-full py-3 bg-[#c5a880] text-[#0b0e14] font-semibold text-sm rounded-sm uppercase tracking-wider text-center"
              >
                Request On-Site Estimate
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
