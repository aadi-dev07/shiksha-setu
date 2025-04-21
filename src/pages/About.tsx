
import React from 'react';
import Navbar from '@/components/Navbar';
import AboutHero from '@/components/AboutHero';
import OurJourney from '@/components/OurJourney';
import WhyWeExist from '@/components/WhyWeExist';
import MissionVision from '@/components/MissionVision';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />
      <AboutHero />
      <OurJourney />
      <WhyWeExist />
      <MissionVision />
      <CTASection />
      <Footer />
    </div>
  );
};

export default About;
