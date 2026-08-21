import React, { useState } from 'react';
import { IMAGES } from '../assets/images';
import { Sun, Shield, Eye, Sparkles, Thermometer, ShieldAlert } from 'lucide-react';

export const GlazingVisualizer: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [selectedPreset, setSelectedPreset] = useState<'solar' | 'frost' | 'security' | 'uv'>('solar');

  const presets = {
    solar: {
      name: 'Spectrally Selective Ceramic 70',
      subtitle: 'Heat Rejection with Crystal-Clear Natural View',
      image: IMAGES.solarGlazing,
      treatedTemp: '72°F',
      untreatedTemp: '94°F',
      vlt: '71%',
      tser: '58%',
      uvCut: '99.9%',
      treatedOverlayStyle: 'brightness-100 contrast-105 saturate-100',
      untreatedOverlayStyle: 'brightness-125 contrast-90 saturate-75 opacity-90',
      description: 'Stops 94% of infrared heat without darkening the glass or creating exterior reflection.'
    },
    frost: {
      name: 'Crystal Matte Frost Privacy',
      subtitle: 'Diffuse Light with 100% Obscuration',
      image: IMAGES.decorativeFrost,
      treatedTemp: '72°F',
      untreatedTemp: '84°F',
      vlt: '72%',
      tser: '28%',
      uvCut: '99.0%',
      treatedOverlayStyle: 'backdrop-blur-md bg-white/20',
      untreatedOverlayStyle: '',
      description: 'Transforms clear glass into velvety smooth sandblasted privacy while letting soft daylight through.'
    },
    security: {
      name: 'Optically Clear 14-Mil Security',
      subtitle: 'Forced-Entry & Impact Retention',
      image: IMAGES.securityGlass,
      treatedTemp: '73°F',
      untreatedTemp: '85°F',
      vlt: '86%',
      tser: '21%',
      uvCut: '99.9%',
      treatedOverlayStyle: '',
      untreatedOverlayStyle: '',
      description: 'Optically imperceptible laminate backed by structural silicone anchoring.'
    },
    uv: {
      name: 'Museum Clear UV Preservation 75',
      subtitle: 'Zero Color Shift (CRI > 99) for Fine Art',
      image: IMAGES.uvArt,
      treatedTemp: '71°F',
      untreatedTemp: '89°F',
      vlt: '76%',
      tser: '44%',
      uvCut: '99.9%',
      treatedOverlayStyle: 'contrast-105 saturate-100',
      untreatedOverlayStyle: 'brightness-115 contrast-95 saturate-85',
      description: 'Stops 99.9% of UV spectrum to protect rare oil pigments, textiles, and wide-plank hardwood.'
    }
  };

  const current = presets[selectedPreset];

  return (
    <div id="glazing-visualizer" className="bg-[#0b0f16] border border-[#1b2332] rounded-sm p-6 sm:p-8 lg:p-10">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-[11px] font-semibold text-[#c5a880] uppercase tracking-widest block mb-1">
            Optical & Thermal Comparison
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#f3f4f6] font-normal">
            Untreated Glass vs. Architectural Precision Glazing
          </h3>
          <p className="text-xs sm:text-sm text-[#9ca3af] mt-1 max-w-2xl">
            Drag the interactive slider to compare real-world light transmission, heat rejection, and optical balance.
          </p>
        </div>

        {/* Preset Selector */}
        <div className="flex flex-wrap gap-2">
          <button
            id="preset-solar-btn"
            onClick={() => setSelectedPreset('solar')}
            className={`px-3 py-1.5 rounded-sm text-xs font-medium transition-colors flex items-center gap-1.5 ${
              selectedPreset === 'solar'
                ? 'bg-[#c5a880] text-[#0b0e14] font-semibold'
                : 'bg-[#141a26] text-[#9ca3af] hover:text-[#f3f4f6] border border-[#1f283a]'
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            <span>Solar Ceramic</span>
          </button>
          <button
            id="preset-frost-btn"
            onClick={() => setSelectedPreset('frost')}
            className={`px-3 py-1.5 rounded-sm text-xs font-medium transition-colors flex items-center gap-1.5 ${
              selectedPreset === 'frost'
                ? 'bg-[#c5a880] text-[#0b0e14] font-semibold'
                : 'bg-[#141a26] text-[#9ca3af] hover:text-[#f3f4f6] border border-[#1f283a]'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Privacy Frost</span>
          </button>
          <button
            id="preset-security-btn"
            onClick={() => setSelectedPreset('security')}
            className={`px-3 py-1.5 rounded-sm text-xs font-medium transition-colors flex items-center gap-1.5 ${
              selectedPreset === 'security'
                ? 'bg-[#c5a880] text-[#0b0e14] font-semibold'
                : 'bg-[#141a26] text-[#9ca3af] hover:text-[#f3f4f6] border border-[#1f283a]'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Security Glass</span>
          </button>
          <button
            id="preset-uv-btn"
            onClick={() => setSelectedPreset('uv')}
            className={`px-3 py-1.5 rounded-sm text-xs font-medium transition-colors flex items-center gap-1.5 ${
              selectedPreset === 'uv'
                ? 'bg-[#c5a880] text-[#0b0e14] font-semibold'
                : 'bg-[#141a26] text-[#9ca3af] hover:text-[#f3f4f6] border border-[#1f283a]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>UV Art Shield</span>
          </button>
        </div>
      </div>

      {/* Visualizer Frame */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-sm overflow-hidden border border-[#263145] select-none group">
        
        {/* Background / Base Image (Treated View - Left Side) */}
        <div className="absolute inset-0 w-full h-full bg-[#121722]">
          <img
            src={current.image}
            alt="Treated architectural glazing"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter"
          />
          {selectedPreset === 'frost' && (
            <div className="absolute inset-0 bg-white/35 backdrop-blur-md" />
          )}
          <div className="absolute top-4 left-4 bg-[#0b0e14]/85 backdrop-blur-md border border-[#c5a880]/50 px-3 py-1.5 rounded-sm text-[11px] text-[#f3f4f6] font-medium flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c5a880]" />
            <span>Treated: {current.name}</span>
          </div>

          <div className="absolute bottom-4 left-4 bg-[#0b0e14]/90 backdrop-blur-md border border-[#20293a] px-3.5 py-2 rounded-sm text-xs text-[#cbd5e1] hidden sm:flex items-center gap-4">
            <div>
              <span className="text-[10px] text-[#718096] uppercase block">Glass Surface Temp</span>
              <span className="text-emerald-400 font-semibold font-mono text-sm">{current.treatedTemp}</span>
            </div>
            <div className="border-l border-[#242e40] pl-3">
              <span className="text-[10px] text-[#718096] uppercase block">UV Ray Block</span>
              <span className="text-[#38bdf8] font-semibold font-mono text-sm">{current.uvCut}</span>
            </div>
          </div>
        </div>

        {/* Untreated Overlay (Right Side - clipped via slider percentage) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
        >
          <img
            src={current.image}
            alt="Untreated standard glass"
            referrerPolicy="no-referrer"
            className={`w-full h-full object-cover object-center ${current.untreatedOverlayStyle}`}
          />
          {/* Simulated hot glare / sun washout overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-amber-200/20 mix-blend-screen pointer-events-none" />

          <div className="absolute top-4 right-4 bg-[#0b0e14]/85 backdrop-blur-md border border-rose-500/40 px-3 py-1.5 rounded-sm text-[11px] text-[#f3f4f6] font-medium flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-500" />
            <span>Untreated: Clear Standard Glass</span>
          </div>

          <div className="absolute bottom-4 right-4 bg-[#0b0e14]/90 backdrop-blur-md border border-[#20293a] px-3.5 py-2 rounded-sm text-xs text-[#cbd5e1] hidden sm:flex items-center gap-4">
            <div>
              <span className="text-[10px] text-[#718096] uppercase block">Glass Surface Temp</span>
              <span className="text-rose-400 font-semibold font-mono text-sm">{current.untreatedTemp}</span>
            </div>
            <div className="border-l border-[#242e40] pl-3">
              <span className="text-[10px] text-[#718096] uppercase block">UV Bleach Rate</span>
              <span className="text-rose-400 font-semibold font-mono text-sm">High Fading</span>
            </div>
          </div>
        </div>

        {/* Divider Bar & Handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-[#c5a880] shadow-[0_0_12px_rgba(197,168,128,0.8)] cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0b0e14] border border-[#c5a880] shadow-xl flex items-center justify-center text-[#c5a880]">
            <div className="flex items-center gap-0.5 text-[10px]">
              <span>◀</span>
              <span>▶</span>
            </div>
          </div>
        </div>

        {/* Interactive Range Input Overlay */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
          aria-label="Before and after glazing comparison slider"
        />
      </div>

      {/* Description & Performance Summary */}
      <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-[#111622] rounded-sm border border-[#1c2436] text-xs text-[#9ca3af]">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-sm bg-[#171e2c] border border-[#29354b] text-[#c5a880]">
            <Thermometer className="w-4 h-4" />
          </div>
          <div>
            <span className="font-medium text-[#f3f4f6] text-xs block">{current.subtitle}</span>
            <span>{current.description}</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs shrink-0">
          <div>
            <span className="text-[#64748b] text-[10px] uppercase block">Light (VLT)</span>
            <span className="text-[#f1f5f9] font-medium">{current.vlt}</span>
          </div>
          <div>
            <span className="text-[#64748b] text-[10px] uppercase block">Heat Rejection</span>
            <span className="text-[#c5a880] font-semibold">{current.tser}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
