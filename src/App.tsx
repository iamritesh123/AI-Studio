/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { PRODUCTS_DATA } from './data/specsData';
import { CITIES_DATA } from './data/cityData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { EstimateModal } from './components/EstimateModal';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { CityPage } from './pages/CityPage';
import { CommercialPage } from './pages/CommercialPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState<boolean>(false);
  const [estimateInitialService, setEstimateInitialService] = useState<string | undefined>(undefined);

  // Handle browser back/forward or hash change if needed
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentRoute]);

  const handleNavigate = (route: PageRoute) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEstimate = (initialService?: string) => {
    setEstimateInitialService(initialService);
    setIsEstimateModalOpen(true);
  };

  const handleCloseEstimate = () => {
    setIsEstimateModalOpen(false);
    setEstimateInitialService(undefined);
  };

  // Render active page
  const renderActivePage = () => {
    if (currentRoute === 'home') {
      return (
        <HomePage
          onNavigate={handleNavigate}
          onRequestEstimate={() => handleOpenEstimate('Solar Heat Gain & Glare Control')}
        />
      );
    }

    if (currentRoute.startsWith('product-')) {
      const productSlug = currentRoute.replace('product-', '');
      const product = PRODUCTS_DATA[productSlug] || PRODUCTS_DATA['solar-heat-control'];
      return (
        <ProductPage
          product={product}
          onNavigate={handleNavigate}
          onRequestEstimate={() => handleOpenEstimate(product.name)}
        />
      );
    }

    if (currentRoute.startsWith('city-')) {
      const citySlug = currentRoute.replace('city-', '');
      const city = CITIES_DATA[citySlug] || CITIES_DATA['princeton'];
      return (
        <CityPage
          city={city}
          onNavigate={handleNavigate}
          onRequestEstimate={() => handleOpenEstimate(`On-Site Estimate for ${city.cityName}`)}
        />
      );
    }

    if (currentRoute === 'commercial') {
      return (
        <CommercialPage
          onNavigate={handleNavigate}
          onRequestEstimate={() => handleOpenEstimate('Commercial Glazing & Building Retrofit')}
        />
      );
    }

    if (currentRoute === 'about') {
      return (
        <AboutPage
          onNavigate={handleNavigate}
          onRequestEstimate={() => handleOpenEstimate('Residential Estate Consultation')}
        />
      );
    }

    if (currentRoute === 'contact') {
      return (
        <ContactPage
          onNavigate={handleNavigate}
          onRequestEstimate={() => handleOpenEstimate()}
        />
      );
    }

    return (
      <HomePage
        onNavigate={handleNavigate}
        onRequestEstimate={() => handleOpenEstimate()}
      />
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0e14] text-[#e2e5ec] font-sans antialiased selection:bg-[#c5a880] selection:text-[#0b0e14]">
      {/* Persistent Luxury Architectural Header */}
      <Header
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onRequestEstimate={() => handleOpenEstimate()}
      />

      {/* Main Page Area */}
      <main className="flex-1">
        {renderActivePage()}
      </main>

      {/* Persistent Architectural Footer */}
      <Footer
        onNavigate={handleNavigate}
        onRequestEstimate={() => handleOpenEstimate()}
      />

      {/* Estimate & Consultation Modal */}
      <EstimateModal
        isOpen={isEstimateModalOpen}
        onClose={handleCloseEstimate}
        initialService={estimateInitialService}
      />
    </div>
  );
}
