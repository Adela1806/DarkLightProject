import React from 'react';
import Header from '../components/Header';
import HeroSection from '../HeroSection';
import ServicesSection from '../components/services/ServiceSection';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/team/TeamSection';
import LetterSection from '../components/LetterSection';

function LandingPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TeamSection />
      <LetterSection />
    </>
  );
}

export default LandingPage;
