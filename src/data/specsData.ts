import { ProductDetail } from '../types';
import { IMAGES } from '../assets/images';

export const PRODUCTS_DATA: Record<string, ProductDetail> = {
  'solar-heat-control': {
    slug: 'solar-heat-control',
    route: 'product-solar-heat-control',
    name: 'Solar & Heat Control Window Tinting',
    seoTitle: 'Solar & Heat Control Window Tinting Princeton NJ | Architectural Glazing',
    metaDescription: 'Eliminate radiant solar heat and harsh glare while keeping panoramic views crystal clear. Residential solar window tinting for Princeton estates.',
    consumerSearchKeyword: 'Residential Window Tinting',
    categoryHeadline: 'Preserve panoramic views. Eliminate radiant solar heat gain.',
    editorialSubhead: 'Engineered spectrally selective ceramic nanotechnology that targets solar infrared heat while preserving natural visible daylight and architectural integrity.',
    heroImage: IMAGES.solarGlazing,
    heroImageAlt: 'Sunlit luxury residence living room with floor-to-ceiling glass treated with spectrally selective solar heat control window tinting, crystal clear exterior view',
    primaryProblem: 'Large architectural windows flood rooms with intense solar heat, driving up cooling loads, generating unlivable thermal hotspots near perimeter glass, and creating eye-fatiguing glare across polished stone, hardwood, and screens.',
    idealClientProfile: [
      'Homeowners with floor-to-ceiling southern- or western-facing glass',
      'Contemporary residences with expansive modern fenestration',
      'Historic Princeton properties requiring zero exterior appearance modification',
      'Estate owners wanting lower HVAC runtime without motorized shades obscuring gardens'
    ],
    specs: [
      {
        name: 'Spectrally Selective Ceramic 70',
        code: 'SSC-70',
        vlt: 71,
        tser: 58,
        uvRejection: 99.9,
        glareReduction: 22,
        irRejection: 94,
        shadingCoefficient: 0.48,
        shgc: 0.42,
        warranty: 'Lifetime Residential / 15-Year Commercial',
        bestFor: 'Maximum optical clarity with imperceptible tint on luxury residential glass',
        visualAppearance: 'Virtually invisible. Retains the natural look of clear architectural glass.'
      },
      {
        name: 'Ceramic Precision Neutral 50',
        code: 'CPN-50',
        vlt: 51,
        tser: 64,
        uvRejection: 99.9,
        glareReduction: 43,
        irRejection: 95,
        shadingCoefficient: 0.41,
        shgc: 0.36,
        warranty: 'Lifetime Residential / 15-Year Commercial',
        bestFor: 'Balanced light transmission with enhanced glare reduction for home offices and great rooms',
        visualAppearance: 'Subtle, soft neutral tone without metallic reflectivity or mirror finish.'
      },
      {
        name: 'Dual-Reflective Architectural 35',
        code: 'DRA-35',
        vlt: 36,
        tser: 72,
        uvRejection: 99.9,
        glareReduction: 61,
        irRejection: 89,
        shadingCoefficient: 0.32,
        shgc: 0.28,
        warranty: 'Lifetime Residential / 15-Year Commercial',
        bestFor: 'Severe western exposure and high heat load mitigation with low interior nighttime reflectivity',
        visualAppearance: 'Subtle exterior micro-luster with low interior nighttime reflection for unobstructed evening views.'
      },
      {
        name: 'All-Season Thermal Low-E 50',
        code: 'AST-50',
        vlt: 52,
        tser: 63,
        uvRejection: 99.9,
        glareReduction: 44,
        irRejection: 92,
        shadingCoefficient: 0.42,
        shgc: 0.37,
        uValue: 0.31,
        warranty: 'Lifetime Residential / 12-Year Commercial',
        bestFor: 'Year-round insulation: rejects summer heat while reflecting winter interior heat back into living spaces',
        visualAppearance: 'Neutral soft sheen with 38% winter insulation improvement.'
      }
    ],
    architecturalConsiderations: [
      'Safe for dual-pane, Low-E, tempered, and argon gas-filled insulated glass units (IGU)',
      'Tested against thermal shock and seal failure criteria with factory glass manufacturer warranty matching',
      'No metal alloys: 100% non-corrosive ceramic composition that will not interfere with cellular, Wi-Fi, or RF signals',
      'Neutral color rendering index (CRI > 98) ensures true natural exterior colors'
    ],
    processSteps: [
      {
        number: '01',
        title: 'Thermal & Glazing Analysis',
        detail: 'We assess window orientations, glass thickness, coating types (annealed, tempered, Low-E), and frame assemblies using laser spectroradiometers to match the precise thermodynamic profile.'
      },
      {
        number: '02',
        title: 'Cleanroom-Grade Glass Preparation',
        detail: 'All glass surfaces are micro-scraped, degreased with deionized solutions, and detailed along perimeter gaskets using lint-free surgical wipes to guarantee zero trapped particulate.'
      },
      {
        number: '03',
        title: 'Micro-Edge Precision Installation',
        detail: 'Films are precision-trimmed to microscopic frame tolerances (< 1/32”) for a clean factory-integrated look without light gaps or rough seams.'
      },
      {
        number: '04',
        title: 'Curing & Quality Verification',
        detail: 'Full optical clarity verification and moisture evacuation inspection, accompanied by our lifetime transferable residential warranty documentation.'
      }
    ],
    faqs: [
      {
        question: 'Will solar window tinting make my home interior look dark or mirrored?',
        answer: 'No. Our spectrally selective ceramic series is engineered specifically for high-end residential architecture. It permits over 70% of natural visible light to pass through while selectively rejecting invisible infrared heat and ultraviolet rays. From both inside and outside, your windows look like pristine, clear architectural glass.'
      },
      {
        question: 'Can solar film crack dual-pane or Low-E insulated glass units (IGUs)?',
        answer: 'When improperly specified, heavy reflective films can induce thermal stress in double-pane glass. We conduct a certified Glass-to-Film Thermal Stress Calculation for every window in your home prior to specification, utilizing only non-absorptive ceramic formulations engineered specifically for modern double-pane and Low-E assemblies.'
      },
      {
        question: 'How much cooler will my room feel immediately after installation?',
        answer: 'By stopping up to 94% of infrared heat and 72% of total solar energy before it enters the glass, surface temperatures on floors, rugs, and furniture drop by 15°F to 25°F. Hotspots next to large windows are completely neutralized.'
      },
      {
        question: 'How does window tinting compare to interior blinds or motorized shades?',
        answer: 'Blinds and shades only block light after solar heat has already penetrated the glass and become trapped inside your home. Furthermore, shades eliminate your natural light and landscape views. Spectrally selective architectural film stops the heat at the exterior glass plane while maintaining full, unrestricted garden views.'
      }
    ]
  },

  'security-safety': {
    slug: 'security-safety',
    route: 'product-security-safety',
    name: 'Security & Shatter-Resistant Glass Film',
    seoTitle: 'Security Window Film Princeton NJ | Forced-Entry & Shatter-Resistant Glass',
    metaDescription: 'High-tensile architectural security film and structural attachment systems. Prevents smash-and-grab entry, storm damage, and glass shattering.',
    consumerSearchKeyword: 'Security Window Film & Forced-Entry Protection',
    categoryHeadline: 'Reinforce vulnerable glass. Deter forced entry and smash-and-grab attacks.',
    editorialSubhead: 'Optically clear, high-tensile micro-layered polyester laminates engineered to hold shattered glass together under severe mechanical impact.',
    heroImage: IMAGES.securityGlass,
    heroImageAlt: 'Architectural commercial entrance and ground floor clear glazing reinforced with impact-resistant security film and perimeter structural silicone wet-glaze system',
    primaryProblem: 'Glass is the weakest structural point in any home or building. Standard annealed or tempered panes shatter instantaneously when struck with a blunt tool, baseball bat, or crowbar, allowing unauthorized entry in under three seconds.',
    idealClientProfile: [
      'Private estates seeking invisible perimeter hardening without steel bars or roll-down shutters',
      'Ground-floor commercial storefronts, luxury boutiques, and corporate headquarters',
      'Private schools, universities, and healthcare facilities requiring delayed-entry security',
      'Properties located in storm-vulnerable or high-wind zones requiring glass retention'
    ],
    specs: [
      {
        name: 'Optically Clear Architectural 8-Mil',
        code: 'SEC-800',
        vlt: 88,
        tser: 18,
        uvRejection: 99.9,
        glareReduction: 3,
        shadingCoefficient: 0.94,
        shgc: 0.81,
        thickness: '8 mil (200 microns)',
        tensileStrength: '28,500 PSI',
        breakStrength: '210 lbs/inch',
        impactStandard: 'ANSI Z97.1 Class A / CPSC 16 CFR 1201 Cat II',
        warranty: '15-Year Commercial / Lifetime Residential',
        bestFor: 'Residential ground-floor doors, sidelights, and patio slider forced-entry deterrence',
        visualAppearance: '100% optically clear. Completely undetectable on glass.'
      },
      {
        name: 'Heavy Forced-Entry Commercial 14-Mil',
        code: 'SEC-1400',
        vlt: 86,
        tser: 21,
        uvRejection: 99.9,
        glareReduction: 4,
        shadingCoefficient: 0.92,
        shgc: 0.79,
        thickness: '14 mil (350 microns)',
        tensileStrength: '32,000 PSI',
        breakStrength: '355 lbs/inch',
        impactStandard: 'UL 972 Burglary Resisting / ASTM E1886 Level D Impact',
        warranty: '15-Year Commercial / Lifetime Residential',
        bestFor: 'High-risk luxury estates, jewelry storefronts, corporate campuses, and blast mitigation',
        visualAppearance: 'Optically transparent with micro-layered cross-laminated tensile construction.'
      },
      {
        name: 'Solar-Security Dual Protection 8-Mil',
        code: 'SEC-SOLAR-8',
        vlt: 50,
        tser: 62,
        uvRejection: 99.9,
        glareReduction: 45,
        irRejection: 91,
        shadingCoefficient: 0.43,
        shgc: 0.38,
        thickness: '8 mil (200 microns)',
        tensileStrength: '29,000 PSI',
        breakStrength: '215 lbs/inch',
        impactStandard: 'ANSI Z97.1 / CPSC 16 CFR 1201',
        warranty: '15-Year Commercial / Lifetime Residential',
        bestFor: 'Simultaneous forced-entry deterrence combined with advanced ceramic solar heat rejection',
        visualAppearance: 'Subtle neutral solar tone with high-strength security backing.'
      }
    ],
    architecturalConsiderations: [
      'Structural Wet-Glaze Perimeter Attachment (Dow Corning 995 structural silicone) bonds the film to the window frame',
      'Engineered to withstand sustained repeated strikes from hammers, crowbars, and bricks',
      'Transforms standard annealed or tempered glass into high-strength safety glazing',
      'Blocks 99.9% of UV rays to prevent interior fading while hardening entry points'
    ],
    processSteps: [
      {
        number: '01',
        title: 'Perimeter & Fenestration Survey',
        detail: 'We evaluate entry points, glass thickness, frame bite depth, and anchoring substrate (aluminum, wood, or steel) to determine the appropriate mil thickness and retention system.'
      },
      {
        number: '02',
        title: 'High-Tensile Film Application',
        detail: 'Heavy-duty multi-ply security film is applied using specialized slip solutions and heavy-pressure weighted extraction squeegees for maximum adhesive bonding.'
      },
      {
        number: '03',
        title: 'Structural Wet-Glaze Anchoring',
        detail: 'A high-modulus structural silicone bead (Dow Corning 995) is tooled along the perimeter interface, locking the film to the window frame to prevent the entire pane from being pushed inward.'
      },
      {
        number: '04',
        title: 'Cure Certification & Testing Log',
        detail: 'We provide engineered certification of compliance with ASTM and ANSI impact standards for insurance verification.'
      }
    ],
    faqs: [
      {
        question: 'Does security window film make glass bulletproof?',
        answer: 'No window film makes standard architectural glass truly bulletproof (which requires multi-inch ballistic polycarbonate composites). However, 14-mil security film with structural wet-glaze anchoring holds broken glass firmly in place after impact, preventing intrusion, absorbing massive kinetic energy, and delaying forced entry by several critical minutes until law enforcement arrives.'
      },
      {
        question: 'Is security film noticeable on the glass?',
        answer: 'No. Our clear architectural security films have an optical clarity index exceeding 88% VLT with zero distortion. Visitors and potential intruders cannot detect that the glass is reinforced until an impact occurs.'
      },
      {
        question: 'What is a structural attachment system and why is it necessary?',
        answer: 'Without an attachment system, a high-impact strike might keep the glass from shattering into shards, but the entire unbroken pane could pop out of the frame. A structural wet-glaze attachment uses high-performance structural silicone to mechanically anchor the film to the window frame, ensuring the glass remains securely anchored even under violent assault.'
      },
      {
        question: 'Does security film qualify for safety glass code compliance?',
        answer: 'Yes. Our 8-mil and 14-mil films meet ANSI Z97.1 and CPSC 16 CFR 1201 Category II safety glazing standards, bringing non-tempered glass up to building code compliance in bathrooms, stairways, and low-level doors without replacing existing glass.'
      }
    ]
  },

  'decorative-privacy': {
    slug: 'decorative-privacy',
    route: 'product-decorative-privacy',
    name: 'Decorative & Privacy Architectural Film',
    seoTitle: 'Decorative & Privacy Window Film Princeton NJ | Frosted & Etched Glass',
    metaDescription: 'Custom frosted, etched, reeded, and gradient architectural glass films for private conference rooms, master ensuites, and glass entryways.',
    consumerSearchKeyword: 'Decorative Window Tinting & Privacy Glass Film',
    categoryHeadline: 'Diffuse light. Define space. Create refined architectural privacy.',
    editorialSubhead: 'Precision frosted, matte, etched, reeded, and gradient glass films engineered for executive conference suites, master ensuites, entry sidelights, and partition walls.',
    heroImage: IMAGES.decorativeFrost,
    heroImageAlt: 'Modern executive glass conference room and office partitions featuring custom frosted etched horizontal banded privacy window film',
    primaryProblem: 'Open floor plans and extensive interior glass create visual distractions, lack of confidential privacy for executive meetings, and fishbowl effects in master bathrooms and front door sidelights.',
    idealClientProfile: [
      'Interior designers specifying custom glass partition treatments for modern residences',
      'Corporate law firms, wealth management offices, and medical practices in Central NJ',
      'Luxury homeowners seeking privacy in primary bathroom showers, bathtubs, and sidelights',
      'Architects wanting the aesthetic of sandblasted or acid-etched glass at a fraction of lead times'
    ],
    specs: [
      {
        name: 'Crystal Matte Frost Series',
        code: 'DEC-FROST-100',
        vlt: 72,
        tser: 28,
        uvRejection: 99.0,
        glareReduction: 26,
        shadingCoefficient: 0.82,
        shgc: 0.71,
        warranty: '10-Year Commercial / Lifetime Residential',
        bestFor: 'Total visual obscuration while transmitting soft, luminous ambient daylight',
        visualAppearance: 'Velvety smooth acid-etched glass appearance with uniform light diffusion.'
      },
      {
        name: 'Dual-Directional Gradient Veil',
        code: 'DEC-GRAD-DUAL',
        vlt: 48,
        tser: 32,
        uvRejection: 99.0,
        glareReduction: 38,
        shadingCoefficient: 0.78,
        shgc: 0.68,
        warranty: '10-Year Commercial / Lifetime Residential',
        bestFor: 'Conference room eye-level privacy transitioning to crystal clear glass at top and bottom',
        visualAppearance: 'Feathered micro-dot gradient transitioning smoothly from opaque center to pure clear glass.'
      },
      {
        name: 'Architectural Reeded & Fluted Glass Film',
        code: 'DEC-REED-50',
        vlt: 78,
        tser: 22,
        uvRejection: 99.0,
        glareReduction: 18,
        shadingCoefficient: 0.88,
        shgc: 0.77,
        warranty: '10-Year Commercial / Lifetime Residential',
        bestFor: 'Mid-century modern and contemporary luxury glass doors, sidelights, and room dividers',
        visualAppearance: 'Deep linear optical refraction mimicking 1/2-inch fluted architectural glass.'
      },
      {
        name: 'Fine Linen Textured Privacy Membrane',
        code: 'DEC-LINEN-80',
        vlt: 64,
        tser: 30,
        uvRejection: 99.0,
        glareReduction: 30,
        shadingCoefficient: 0.80,
        shgc: 0.70,
        warranty: '10-Year Commercial / Lifetime Residential',
        bestFor: 'High-end residential powder rooms, master closets, and bespoke millwork glazing',
        visualAppearance: 'Tactile woven fabric texture with subtle organic sheen.'
      }
    ],
    architecturalConsiderations: [
      'CAD / CNC plotter cutting capabilities for custom geometric patterns, reveal reveals, and corporate branding',
      'Removable without etching or degrading the underlying virgin float glass',
      'Fingerprint and smudge-resistant topcoat for effortless maintenance in high-traffic zones',
      'Consistent optical diffusion under both daylight and artificial LED track lighting'
    ],
    processSteps: [
      {
        number: '01',
        title: 'Design Consultation & Sample Review',
        detail: 'We provide physical architectural binders with actual glass samples (matte, luster, reeded, dichroic, gradient) to test opacity in your exact lighting conditions.'
      },
      {
        number: '02',
        title: 'Laser Measurement & CAD Layout',
        detail: 'Precise field dimensions are translated into vector CAD files to ensure perfect horizontal alignment across multi-pane partition runs.'
      },
      {
        number: '03',
        title: 'Clean Wet-Method Application',
        detail: 'Installed using filtered aqueous solutions and zero-static techniques to eliminate trapped dust particles under the decorative layer.'
      },
      {
        number: '04',
        title: 'Perimeter Trim & Edge Sealing',
        detail: 'Trimmed with surgical precision to ensure consistent 1mm reveals along silicone mullion lines.'
      }
    ],
    faqs: [
      {
        question: 'Can decorative frost film be cleaned normally like standard glass?',
        answer: 'Yes. Our decorative films feature durable scratch-resistant acrylic hardcoats. They can be cleaned using standard non-abrasive glass cleaners (ammonia-free) and microfiber cloths without peeling or clouding.'
      },
      {
        question: 'Is privacy film permanent or can it be updated later?',
        answer: 'Unlike acid-etched or sandblasted glass which permanently alters the glass surface, architectural privacy films are fully removable by professionals. If an office tenant changes or you decide to alter the design later, the film can be removed without leaving adhesive residue or damaging the glass.'
      },
      {
        question: 'Can you install custom banded patterns or privacy bands at seated eye-level?',
        answer: 'Yes. We frequently install 36-inch to 48-inch center privacy bands with precision top and bottom laser reveals, providing seated meeting privacy while maintaining open sightlines through the top and bottom of the glass.'
      }
    ]
  },

  'anti-graffiti': {
    slug: 'anti-graffiti',
    route: 'product-anti-graffiti',
    name: 'Sacrificial Anti-Graffiti Surface Film',
    seoTitle: 'Anti-Graffiti Window Film Princeton & Central NJ | Glass Protection',
    metaDescription: 'Heavy-duty sacrificial surface film protecting commercial storefronts and transit glass against etching, scratching, and paint vandalism.',
    consumerSearchKeyword: 'Anti-Graffiti Surface Film for Commercial Glass',
    categoryHeadline: 'Protect commercial glazing from scratching, tagging, and acid etching.',
    editorialSubhead: 'Optically clear sacrificial barriers that absorb the damage of vandalism, graffiti, and key scratches — peeling away clean to restore pristine glass in minutes.',
    heroImage: IMAGES.commercialCurtainWall,
    heroImageAlt: 'Pristine commercial storefront and glass curtain wall protected by clear sacrificial anti-graffiti film in Central New Jersey',
    primaryProblem: 'Replacing custom architectural storefront glass damaged by scratches, acid etching, or permanent marker vandalism costs thousands of dollars per pane and weeks of operational disruption.',
    idealClientProfile: [
      'Commercial property managers with high-foot-traffic street-level retail facades',
      'Institutional campuses, public transit shelters, and municipal facilities',
      'Hospitality venues, restaurants, and downtown Princeton retail storefronts',
      'Elevator cab interiors, mirrors, and stainless steel / architectural glass surfaces'
    ],
    specs: [
      {
        name: 'Sacrificial Surface Shield 6-Mil',
        code: 'AG-600',
        vlt: 89,
        tser: 17,
        uvRejection: 99.0,
        glareReduction: 2,
        shadingCoefficient: 0.95,
        shgc: 0.82,
        thickness: '6 mil (150 microns)',
        tensileStrength: '25,000 PSI',
        warranty: '5-Year Commercial',
        bestFor: 'Standard retail storefronts, glass doors, and elevator cabs',
        visualAppearance: '100% optically clear. Invisible to pedestrians.'
      },
      {
        name: 'Heavy-Duty Commercial Barrier 8-Mil',
        code: 'AG-800',
        vlt: 88,
        tser: 19,
        uvRejection: 99.0,
        glareReduction: 3,
        shadingCoefficient: 0.94,
        shgc: 0.81,
        thickness: '8 mil (200 microns)',
        tensileStrength: '28,000 PSI',
        warranty: '5-Year Commercial',
        bestFor: 'High-risk urban corridors, transit plazas, and heavy abrasive exposure',
        visualAppearance: 'Optically clear with ultra-thick sacrificial polymer core.'
      }
    ],
    architecturalConsiderations: [
      'Specialized clean-release adhesive formulation leaves zero residue upon removal',
      'Blocks 99% of UV rays to protect interior retail displays from sun fading',
      'Can be applied to exterior glass, interior glass, mirrors, and polished stainless steel',
      'Significantly less expensive than replacing damaged commercial insulated glass units'
    ],
    processSteps: [
      {
        number: '01',
        title: 'Surface Inspection & Remediation',
        detail: 'Existing glass is inspected for scratches and thoroughly degreased to ensure pristine surface bonding.'
      },
      {
        number: '02',
        title: 'Precision Edge-to-Edge Installation',
        detail: 'High-clarity sacrificial film is applied directly to the exterior surface of the glazing.'
      },
      {
        number: '03',
        title: 'Rapid Replacement Protocol',
        detail: 'When vandalism occurs, our service team quickly peels off the damaged sacrificial layer and applies a fresh sheet, restoring virgin glass within hours.'
      }
    ],
    faqs: [
      {
        question: 'How does anti-graffiti film stop acid etching or gouging?',
        answer: 'The thick 6-mil or 8-mil multi-layer polyester film acts as a sacrificial barrier. When vandals etch, scratch, or spray paint the glass, only the film is damaged while the underlying architectural glass remains untouched.'
      },
      {
        question: 'How difficult is it to remove the film after it has been vandalized?',
        answer: 'The film uses a proprietary clean-release adhesive. It resists intentional tampering by pedestrians but can be cleanly stripped by our technicians in a single continuous pull without scraping tools or chemical solvents, leaving the glass ready for immediate re-application.'
      }
    ]
  },

  'bird-friendly': {
    slug: 'bird-friendly',
    route: 'product-bird-friendly',
    name: 'Bird-Friendly Collision Prevention Film',
    seoTitle: 'Bird-Friendly Window Film Princeton NJ | Glass Strike Prevention',
    metaDescription: 'Exterior architectural bird collision deterrent films with subtle geometric dot matrices. Meets American Bird Conservancy LEED Pilot Credit 55.',
    consumerSearchKeyword: 'Bird Strike Prevention Window Film',
    categoryHeadline: 'Prevent fatal avian collisions. Maintain architectural elegance.',
    editorialSubhead: 'Engineered exterior ceramic patterns that break the optical illusion of glass reflection and transparency, eliminating bird strikes while preserving interior sightlines.',
    heroImage: IMAGES.birdFriendly,
    heroImageAlt: 'Modern architectural building facade with subtle exterior ceramic dot matrix pattern preventing bird strikes while maintaining clean glazing clarity',
    primaryProblem: 'Large clear glass windows and reflective curtain walls mirror foliage and sky, creating an invisible fatal hazard for migratory and songbirds in Central New Jersey’s wooded landscapes.',
    idealClientProfile: [
      'Woodland and lakefront estates in Princeton, Hopewell, and Somerset Hills',
      'Corporate campuses and educational facilities seeking LEED Pilot Credit 55 (Bird Collision Deterrence)',
      'Modern architectural residences with expansive glass atriums and two-story window walls',
      'Institutions committed to environmentally sustainable and humane building practices'
    ],
    specs: [
      {
        name: '2x2 Precision Dot Matrix Exterior',
        code: 'BF-DOT-2X2',
        vlt: 84,
        tser: 18,
        uvRejection: 99.0,
        glareReduction: 8,
        shadingCoefficient: 0.92,
        shgc: 0.80,
        warranty: '10-Year Exterior Architectural Warranty',
        bestFor: 'Maximum collision deterrence rating (Threat Factor < 15) for high-risk woodland glazing',
        visualAppearance: 'Subtle 1/4-inch matte gray ceramic dots spaced on a 2” x 2” grid across the exterior glass surface.'
      },
      {
        name: '2x4 Architectural Horizontal Bar Matrix',
        code: 'BF-BAR-2X4',
        vlt: 86,
        tser: 16,
        uvRejection: 99.0,
        glareReduction: 6,
        shadingCoefficient: 0.94,
        shgc: 0.82,
        warranty: '10-Year Exterior Architectural Warranty',
        bestFor: 'Modern linear architectural facades and commercial curtain walls',
        visualAppearance: 'Crisp 1/8-inch horizontal hairline ceramic bands spaced 2” vertically.'
      }
    ],
    architecturalConsiderations: [
      'Applied to Surface 1 (exterior face) to effectively disrupt exterior reflections that birds perceive as open flight paths',
      'Tested and certified by the American Bird Conservancy (ABC) with Threat Factor < 15',
      'Weatherproof, UV-stabilized ceramic topcoat withstands New Jersey freeze-thaw cycles and window washing',
      'Preserves over 84% natural light transmission with minimal visual obstruction from inside'
    ],
    processSteps: [
      {
        number: '01',
        title: 'Avian Risk Assessment',
        detail: 'We evaluate reflective surroundings (mature tree canopy, open skies, reflection angles) and glass geometry to determine the optimal pattern spacing (2x2 or 2x4).'
      },
      {
        number: '02',
        title: 'Exterior Glazing Preparation',
        detail: 'Exterior panes undergo heavy industrial decontamination to remove environmental silicones, tree sap, and atmospheric pollutants.'
      },
      {
        number: '03',
        title: 'Laser-Aligned Pattern Application',
        detail: 'Exterior ceramic matrix films are applied with computerized laser alignment to ensure continuous geometric precision across mullions and adjacent panels.'
      },
      {
        number: '04',
        title: 'Edge Sealing & Warranty Registration',
        detail: 'Perimeter edges are sealed with UV-cured edge sealers for long-term weather durability.'
      }
    ],
    faqs: [
      {
        question: 'Why does bird-friendly film have to be installed on the outside of the glass?',
        answer: 'Birds collide with glass because the exterior surface acts like a mirror reflecting trees, sky, and clouds. Placing the patterned film on the exterior (Surface 1) breaks up this reflection before the bird’s eye, whereas interior films cannot eliminate the exterior glass reflection.'
      },
      {
        question: 'Will the dot pattern ruin my view of the backyard or landscaping?',
        answer: 'No. The human eye easily focuses past the subtle 2” x 2” dot matrix to the landscape beyond, much like looking through a clean window screen. Birds, having different visual acuity, perceive the grid as a physical barrier and navigate away safely.'
      },
      {
        question: 'Does this film meet municipal bird-safe building standards and LEED credits?',
        answer: 'Yes. Our bird-friendly film series is certified by the American Bird Conservancy with Threat Factors below 15, fully satisfying LEED v4 / v4.1 Pilot Credit 55 (Bird Collision Deterrence).'
      }
    ]
  },

  'uv-protection': {
    slug: 'uv-protection',
    route: 'product-uv-protection',
    name: 'Fine Art & Interior UV Preservation Film',
    seoTitle: 'Museum-Grade UV Protection Window Film Princeton NJ | Art Preservation',
    metaDescription: '99.9% UV-blocking museum-grade architectural window film. Prevents fading of fine art, antique furnishings, custom drapery, and wide-plank hardwood floors.',
    consumerSearchKeyword: 'UV Protection Window Tinting for Homes',
    categoryHeadline: 'Protect irreplaceable art, hardwood, and textiles from solar degradation.',
    editorialSubhead: 'Museum-grade optical films that filter 99.9% of destructive UV-A and UV-B wavelengths up to 400nm, extending the life of fine art, oriental rugs, and architectural millwork.',
    heroImage: IMAGES.uvArt,
    heroImageAlt: 'Fine art gallery and luxury residence living room with museum-worthy oil paintings and custom furniture bathed in safe daylight filtered by UV protection window tinting',
    primaryProblem: 'Direct and indirect sunlight contains ultraviolet radiation and high-energy visible light that permanently bleaches oil paintings, discolors wide-plank walnut and oak floors, and degrades delicate silk draperies.',
    idealClientProfile: [
      'Fine art collectors and galleries requiring museum-grade environmental stabilization',
      'Historic Princeton estates with antique furnishings, custom rugs, and heirloom textiles',
      'Residences with exotic hardwood flooring (walnut, teak, French oak) exposed to daily sun',
      'Interior designers wanting to protect custom upholstery without requiring drawn drapes'
    ],
    specs: [
      {
        name: 'Museum Clear UV Shield 75',
        code: 'MUV-75',
        vlt: 76,
        tser: 44,
        uvRejection: 99.9,
        glareReduction: 16,
        irRejection: 82,
        shadingCoefficient: 0.62,
        shgc: 0.54,
        warranty: 'Lifetime Residential / 15-Year Commercial',
        bestFor: 'Fine art preservation where zero perceptible color shift is mandatory (CRI > 99)',
        visualAppearance: 'Water-clear optical transparency. Completely neutral across the visible color spectrum.'
      },
      {
        name: 'Ultra-Museum UV & Solar Precision 50',
        code: 'MUV-50',
        vlt: 53,
        tser: 62,
        uvRejection: 99.9,
        glareReduction: 41,
        irRejection: 94,
        shadingCoefficient: 0.43,
        shgc: 0.38,
        warranty: 'Lifetime Residential / 15-Year Commercial',
        bestFor: 'Combined high solar heat rejection with museum-level UV blocking for sunrooms and great rooms',
        visualAppearance: 'Soft neutral daylight tone with maximum infrared thermal reduction.'
      }
    ],
    architecturalConsiderations: [
      'Filters ultraviolet spectrum comprehensively up to 400nm (UV-A and UV-B)',
      'Color Rendering Index (CRI) of 99+ guarantees that artwork colors, pigments, and natural wood grain look exactly as intended by the artist',
      'Reduces the total solar fade equation by up to 88% (addressing UV, solar heat, and visible light)',
      'Recommended by premier art conservators and museum curators'
    ],
    processSteps: [
      {
        number: '01',
        title: 'UV Radiometer Site Audit',
        detail: 'We measure real-time UV exposure (microwatts per lumen) and lux levels at your art hanging locations and flooring planes.'
      },
      {
        number: '02',
        title: 'Spectrally Neutral Film Selection',
        detail: 'We select the precise optical formulation that eliminates UV while maintaining exact pigment fidelity.'
      },
      {
        number: '03',
        title: 'Surgical Cleanroom Installation',
        detail: 'Installed with zero airborne particulate to ensure flawless optical transmission across every square inch of glass.'
      }
    ],
    faqs: [
      {
        question: 'What causes interior fading, and will UV film stop 100% of it?',
        answer: 'Fading is caused by four factors: Ultraviolet Light (40%), Solar Heat / Infrared (25%), Visible Light (25%), and Environmental factors like humidity and dye quality (10%). While no film can stop 100% of fading forever because visible light itself contributes, our museum-grade films block 99.9% of UV and up to 94% of infrared heat, slowing the fading process down by up to 88%.'
      },
      {
        question: 'Will museum-grade UV film alter the colors of my paintings or photographs?',
        answer: 'No. Our Museum Clear series has a Color Rendering Index (CRI) exceeding 99, meaning daylight passing through the treated glass maintains 100% color neutrality. Reds, blues, earth tones, and whites remain precisely true without any greenish or amber cast.'
      }
    ]
  },

  'commercial-glazing': {
    slug: 'commercial-glazing',
    route: 'product-commercial-glazing',
    name: 'Commercial Architectural Glazing Solutions',
    seoTitle: 'Commercial Window Tinting Central NJ | Office Towers & Institutional Glazing',
    metaDescription: 'Commercial window film installation for office towers, healthcare, schools, and corporate campuses in Central New Jersey. Energy modeling & LEED support.',
    consumerSearchKeyword: 'Commercial Window Tinting Central NJ',
    categoryHeadline: 'Optimize building energy performance. Enhance tenant comfort.',
    editorialSubhead: 'Turnkey architectural window film retrofits for corporate headquarters, institutional facilities, medical centers, and multi-tenant commercial properties.',
    heroImage: IMAGES.commercialCurtainWall,
    heroImageAlt: 'Modern prestige commercial office building curtain wall retrofitted with high-performance solar heat control architectural window film',
    primaryProblem: 'Perimeter HVAC imbalances, soaring peak summer electrical demand charges, and persistent glare complaints from tenants along exposed glass facades.',
    idealClientProfile: [
      'Commercial property managers and facility directors managing Class A office space',
      'Architects and facade engineers specifying energy retrofits and daylight harvesting',
      'Healthcare and educational institutions seeking energy efficiency and security compliance',
      'General contractors and building owners targeting LEED certification points'
    ],
    specs: [
      {
        name: 'Commercial High-Performance Neutral 35',
        code: 'COM-NEUT-35',
        vlt: 37,
        tser: 71,
        uvRejection: 99.9,
        glareReduction: 59,
        shadingCoefficient: 0.33,
        shgc: 0.29,
        warranty: '15-Year Commercial Warranty',
        bestFor: 'Large curtain-wall commercial office towers and perimeter thermal balancing',
        visualAppearance: 'Refined architectural neutral tone with uniform exterior facade aesthetic.'
      },
      {
        name: 'Commercial Spectrally Selective 50',
        code: 'COM-SS-50',
        vlt: 52,
        tser: 65,
        uvRejection: 99.9,
        glareReduction: 42,
        irRejection: 95,
        shadingCoefficient: 0.40,
        shgc: 0.35,
        warranty: '15-Year Commercial Warranty',
        bestFor: 'High daylight harvesting requirements with significant cooling cost reduction',
        visualAppearance: 'High clarity with subtle neutral tone, preserving natural daylighting.'
      },
      {
        name: 'Commercial Dual-Action Low-E Glaze',
        code: 'COM-LOWE-40',
        vlt: 42,
        tser: 68,
        uvRejection: 99.9,
        glareReduction: 53,
        shadingCoefficient: 0.37,
        shgc: 0.32,
        uValue: 0.33,
        warranty: '12-Year Commercial Warranty',
        bestFor: 'Year-round energy modeling: drops cooling load in July and retains heating energy in January',
        visualAppearance: 'Clean architectural appearance with significant U-value thermal improvement.'
      }
    ],
    architecturalConsiderations: [
      'DOE-2 and EnergyPlus energy modeling analysis provided for commercial ROI payback calculations',
      'Eligible for utility energy efficiency rebates from New Jersey Clean Energy Program (NJCEP)',
      'Contributes up to 9 LEED v4.1 credits in Energy & Atmosphere (EA) and Indoor Environmental Quality (IEQ)',
      'Off-hours and phased night/weekend installation to ensure zero disruption to tenant operations'
    ],
    processSteps: [
      {
        number: '01',
        title: 'Building Energy Audit & Facade Survey',
        detail: 'We inspect glazing types across all building elevations, analyze HVAC perimeter zones, and model energy savings per square foot.'
      },
      {
        number: '02',
        title: 'AIA Specification & Mockup',
        detail: 'Full 3-part CSI format architectural specifications (Section 08 87 00) and on-site full-pane mockups for architect and ownership approval.'
      },
      {
        number: '03',
        title: 'Phased Commercial Execution',
        detail: 'Experienced OSHA-certified crews equipped with boom lifts and scaffolding execute installations during off-hours or scheduled tenant phases.'
      },
      {
        number: '04',
        title: 'Commissioning & Utility Rebate Filing',
        detail: 'We provide final closeout packages, manufacturer warranties, and documentation required for NJ Clean Energy rebate disbursements.'
      }
    ],
    faqs: [
      {
        question: 'What is the typical return on investment (ROI) for commercial window film retrofits?',
        answer: 'Most commercial properties in Central New Jersey experience full capital payback within 2 to 4 years through reduced peak cooling loads and lower kilowatt-hour consumption, especially when combined with New Jersey Clean Energy Program utility rebates.'
      },
      {
        question: 'Can installation be conducted without disrupting existing office tenants?',
        answer: 'Yes. Over 80% of our commercial glazing work is scheduled during evening hours or over weekends. Our crews operate with clean drop protection, HEPA filtration, and leave tenant work areas pristine for the start of business the next morning.'
      },
      {
        question: 'Do you provide formal AIA specifications for architects and engineers?',
        answer: 'Yes. We provide complete CSI MasterFormat Section 08 87 13 (Solar Control Window Film) and Section 08 87 23 (Safety and Security Window Film) specifications along with independent laboratory test reports and thermal stress calculations.'
      }
    ]
  }
};
