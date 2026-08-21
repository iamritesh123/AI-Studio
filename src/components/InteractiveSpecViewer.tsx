import React, { useState } from 'react';
import { PRODUCTS_DATA } from '../data/specsData';
import { PerformanceSpec } from '../types';
import { ShieldCheck, Info, Sparkles, Check, ArrowRight } from 'lucide-react';

interface InteractiveSpecViewerProps {
  onSelectCategory?: (slug: string) => void;
  onRequestEstimate?: () => void;
}

export const InteractiveSpecViewer: React.FC<InteractiveSpecViewerProps> = ({ onSelectCategory, onRequestEstimate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('solar-heat-control');
  const [activeSpecCode, setActiveSpecCode] = useState<string>('SSC-70');

  const currentProduct = PRODUCTS_DATA[selectedCategory] || PRODUCTS_DATA['solar-heat-control'];
  const activeSpec = currentProduct.specs.find(s => s.code === activeSpecCode) || currentProduct.specs[0];

  const handleCategoryChange = (catKey: string) => {
    setSelectedCategory(catKey);
    const prod = PRODUCTS_DATA[catKey];
    if (prod && prod.specs.length > 0) {
      setActiveSpecCode(prod.specs[0].code);
    }
  };

  return (
    <div id="interactive-spec-viewer" className="bg-[#0d111a] border border-[#1f2636] rounded-sm p-6 sm:p-8 lg:p-10 shadow-2xl">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 border-b border-[#1b2230]">
        <div>
          <span className="text-[11px] font-semibold text-[#c5a880] uppercase tracking-widest block mb-1">
            Engineered Photometric Data
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#f3f4f6] font-normal">
            Architectural Film Performance Matrix
          </h3>
          <p className="text-xs sm:text-sm text-[#9ca3af] mt-1 max-w-2xl font-normal">
            Extracted directly from certified laboratory testing spec sheets. Clean, unbranded technical data calibrated for residential flat glass and commercial fenestration.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-[#131823] border border-[#222b3d] rounded-sm">
          {Object.entries(PRODUCTS_DATA).map(([key, prod]) => (
            <button
              key={key}
              id={`spec-cat-btn-${key}`}
              onClick={() => handleCategoryChange(key)}
              className={`px-3 py-1.5 text-xs font-medium rounded-sm transition-all ${
                selectedCategory === key
                  ? 'bg-[#c5a880] text-[#0b0e14] font-semibold shadow-sm'
                  : 'text-[#9ca3af] hover:text-[#f3f4f6] hover:bg-[#1a2232]'
              }`}
            >
              {prod.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Series Selection Strip */}
      <div className="pt-6 pb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {currentProduct.specs.map((spec) => {
          const isSelected = spec.code === activeSpec.code;
          return (
            <button
              key={spec.code}
              id={`spec-item-btn-${spec.code}`}
              onClick={() => setActiveSpecCode(spec.code)}
              className={`p-4 rounded-sm border text-left transition-all relative ${
                isSelected
                  ? 'bg-[#161c28] border-[#c5a880] ring-1 ring-[#c5a880]/30'
                  : 'bg-[#10141d] border-[#1d2433] hover:border-[#2d384e]'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#c5a880] bg-[#1a2230] px-1.5 py-0.5 rounded-sm">
                  {spec.code}
                </span>
                {isSelected && <Check className="w-3.5 h-3.5 text-[#c5a880]" />}
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#f3f4f6] leading-tight mb-2">
                {spec.name}
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-[#9ca3af] pt-2 border-t border-[#1a212f]">
                <div>
                  <span className="text-[#64748b] block text-[9px] uppercase">Light (VLT)</span>
                  <span className="text-[#f1f5f9] font-medium">{spec.vlt}%</span>
                </div>
                <div>
                  <span className="text-[#64748b] block text-[9px] uppercase">Heat (TSER)</span>
                  <span className="text-[#c5a880] font-semibold">{spec.tser}%</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Deep Specification Breakdown Grid */}
      <div className="bg-[#10141d] border border-[#1e2535] rounded-sm p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#1b2230]">
          <div>
            <div className="text-[10px] font-mono text-[#c5a880] uppercase tracking-widest mb-1">
              Active Specification // {activeSpec.code}
            </div>
            <h4 className="font-serif text-xl sm:text-2xl text-[#f3f4f6]">
              {activeSpec.name}
            </h4>
            <p className="text-xs text-[#9ca3af] mt-1">
              {activeSpec.bestFor}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <span className="text-[10px] text-[#6b7688] uppercase block">Warranty Rating</span>
              <span className="text-xs text-[#c5a880] font-medium">{activeSpec.warranty}</span>
            </div>
            {onRequestEstimate && (
              <button
                id="spec-request-estimate-btn"
                onClick={onRequestEstimate}
                className="px-4 py-2 bg-[#c5a880] hover:bg-[#d6ba94] text-[#0b0e14] text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center gap-1.5"
              >
                <span>Request Sample & Estimate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Primary Metric Gauges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 py-6 border-b border-[#1b2230]">
          <div className="p-3.5 bg-[#141924] border border-[#1e2738] rounded-sm">
            <div className="text-[10px] font-medium text-[#7c8ba1] uppercase tracking-wider mb-1 flex items-center justify-between">
              <span>VLT</span>
              <span title="Visible Light Transmission">%</span>
            </div>
            <div className="text-2xl font-serif text-[#f3f4f6] font-semibold">{activeSpec.vlt}%</div>
            <div className="text-[10px] text-[#8e9aa8] mt-1 leading-tight">Visible Light Passed</div>
          </div>

          <div className="p-3.5 bg-[#141924] border border-[#1e2738] rounded-sm">
            <div className="text-[10px] font-medium text-[#7c8ba1] uppercase tracking-wider mb-1 flex items-center justify-between">
              <span>TSER</span>
              <span title="Total Solar Energy Rejected">%</span>
            </div>
            <div className="text-2xl font-serif text-[#c5a880] font-semibold">{activeSpec.tser}%</div>
            <div className="text-[10px] text-[#8e9aa8] mt-1 leading-tight">Total Heat Rejected</div>
          </div>

          <div className="p-3.5 bg-[#141924] border border-[#1e2738] rounded-sm">
            <div className="text-[10px] font-medium text-[#7c8ba1] uppercase tracking-wider mb-1 flex items-center justify-between">
              <span>UV Block</span>
              <span>%</span>
            </div>
            <div className="text-2xl font-serif text-[#38bdf8] font-semibold">{activeSpec.uvRejection}%</div>
            <div className="text-[10px] text-[#8e9aa8] mt-1 leading-tight">300nm – 400nm Ray Rejection</div>
          </div>

          <div className="p-3.5 bg-[#141924] border border-[#1e2738] rounded-sm">
            <div className="text-[10px] font-medium text-[#7c8ba1] uppercase tracking-wider mb-1 flex items-center justify-between">
              <span>Glare Cut</span>
              <span>%</span>
            </div>
            <div className="text-2xl font-serif text-[#f3f4f6] font-semibold">{activeSpec.glareReduction}%</div>
            <div className="text-[10px] text-[#8e9aa8] mt-1 leading-tight">Screen & Surface Glare Cut</div>
          </div>

          <div className="p-3.5 bg-[#141924] border border-[#1e2738] rounded-sm">
            <div className="text-[10px] font-medium text-[#7c8ba1] uppercase tracking-wider mb-1 flex items-center justify-between">
              <span>SHGC</span>
              <span title="Solar Heat Gain Coefficient">Coeff</span>
            </div>
            <div className="text-2xl font-serif text-[#f3f4f6] font-semibold">{activeSpec.shgc}</div>
            <div className="text-[10px] text-[#8e9aa8] mt-1 leading-tight">Solar Heat Gain Coeff</div>
          </div>

          <div className="p-3.5 bg-[#141924] border border-[#1e2738] rounded-sm">
            <div className="text-[10px] font-medium text-[#7c8ba1] uppercase tracking-wider mb-1 flex items-center justify-between">
              <span>Shading</span>
              <span title="Shading Coefficient">SC</span>
            </div>
            <div className="text-2xl font-serif text-[#f3f4f6] font-semibold">{activeSpec.shadingCoefficient}</div>
            <div className="text-[10px] text-[#8e9aa8] mt-1 leading-tight">Shading Coefficient</div>
          </div>
        </div>

        {/* Secondary Technical & Structural Attributes */}
        <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          <div>
            <span className="text-[10px] uppercase font-semibold text-[#8b98ac] tracking-wider block mb-2">
              Optical & Visual Characteristics
            </span>
            <p className="text-[#cbd5e1] leading-relaxed bg-[#141924] p-3.5 rounded-sm border border-[#1c2434]">
              {activeSpec.visualAppearance}
            </p>
            {activeSpec.irRejection && (
              <div className="mt-2.5 flex items-center justify-between p-2.5 bg-[#141924] rounded-sm border border-[#1c2434] text-[#9ca3af]">
                <span>Selective Infrared Rejection (900nm–1000nm):</span>
                <span className="text-[#c5a880] font-semibold font-mono">{activeSpec.irRejection}%</span>
              </div>
            )}
          </div>

          <div>
            <span className="text-[10px] uppercase font-semibold text-[#8b98ac] tracking-wider block mb-2">
              Architectural & Structural Compliance
            </span>
            <div className="space-y-2">
              {activeSpec.tensileStrength && (
                <div className="flex items-center justify-between p-2.5 bg-[#141924] rounded-sm border border-[#1c2434] text-[#9ca3af]">
                  <span>Tensile Yield Strength:</span>
                  <span className="text-[#f3f4f6] font-medium font-mono">{activeSpec.tensileStrength}</span>
                </div>
              )}
              {activeSpec.breakStrength && (
                <div className="flex items-center justify-between p-2.5 bg-[#141924] rounded-sm border border-[#1c2434] text-[#9ca3af]">
                  <span>Break Strength per Inch:</span>
                  <span className="text-[#f3f4f6] font-medium font-mono">{activeSpec.breakStrength}</span>
                </div>
              )}
              {activeSpec.impactStandard && (
                <div className="flex items-center justify-between p-2.5 bg-[#141924] rounded-sm border border-[#1c2434] text-[#9ca3af]">
                  <span>Impact Standard:</span>
                  <span className="text-[#38bdf8] font-medium font-mono">{activeSpec.impactStandard}</span>
                </div>
              )}
              <div className="flex items-center justify-between p-2.5 bg-[#141924] rounded-sm border border-[#1c2434] text-[#9ca3af]">
                <span>Warranty Coverage:</span>
                <span className="text-[#c5a880] font-medium">{activeSpec.warranty}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
