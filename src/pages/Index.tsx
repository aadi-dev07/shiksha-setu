
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorks from '@/components/HowItWorks';
import EduSaathiSection from '@/components/EduSaathiSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ProgramsSection from '@/components/ProgramsSection';
import BookCallForm from '@/components/BookCallForm';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <ProgramsSection />
      <EduSaathiSection />
      <TestimonialsSection />
      <BookCallForm />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
