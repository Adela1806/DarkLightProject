import React from 'react';
import Header from '../components/Header';
import HeroSection from '../HeroSection';
import ServicesSection from '../components/services/ServiceSection';
import AboutSection from '../components/AboutSection';

function LandingPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
    </>
  );
}

export default LandingPage;
