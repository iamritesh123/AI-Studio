import React, { useEffect } from 'react';

interface JsonLdProps {
  title?: string;
  description?: string;
  schemaType?: 'LocalBusiness' | 'FAQPage' | 'Service' | 'AboutPage' | 'ContactPage';
  faqs?: { question: string; answer: string }[];
  serviceName?: string;
  serviceDescription?: string;
}

export const JsonLd: React.FC<JsonLdProps> = ({
  title,
  description,
  schemaType = 'LocalBusiness',
  faqs,
  serviceName,
  serviceDescription,
}) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
    if (description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
    }
  }, [title, description]);

  const baseBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: 'Princeton Window Tinting',
    image: 'https://princetonwindowtinting.com/assets/images/hero_princeton_estate.jpg',
    '@id': 'https://princetonwindowtinting.com/#business',
    url: 'https://princetonwindowtinting.com',
    telephone: '+1-609-436-9103',
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Nassau Street District',
      addressLocality: 'Princeton',
      addressRegion: 'NJ',
      postalCode: '08540',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.3573,
      longitude: -74.6672,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:30',
        closes: '18:30',
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Princeton' },
      { '@type': 'City', name: 'Hamilton' },
      { '@type': 'City', name: 'Edison' },
      { '@type': 'City', name: 'Bridgewater' },
      { '@type': 'City', name: 'South Brunswick' },
      { '@type': 'AdministrativeArea', name: 'Mercer County' },
      { '@type': 'AdministrativeArea', name: 'Somerset County' },
      { '@type': 'AdministrativeArea', name: 'Middlesex County' },
    ],
    knowsAbout: [
      'Architectural Window Tinting',
      'Solar Heat Gain Reduction',
      'Spectrally Selective Ceramic Glazing',
      'Shatter-Resistant Security Film',
      'Decorative Frosted Glass Film',
      'Fine Art UV Mitigation',
      'Bird Strike Prevention Glazing',
      'Commercial Window Film Retrofit',
    ],
  };

  const faqSchema =
    faqs && faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }
      : null;

  const serviceSchema = serviceName
    ? {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: serviceName,
        description: serviceDescription || description,
        provider: {
          '@type': 'HomeAndConstructionBusiness',
          name: 'Princeton Window Tinting',
          telephone: '+1-609-436-9103',
        },
        areaServed: {
          '@type': 'State',
          name: 'New Jersey',
        },
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(baseBusinessSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      )}
    </>
  );
};
