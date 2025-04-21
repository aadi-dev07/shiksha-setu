
import React from 'react';
import Navbar from '@/components/Navbar';
import ProgramsSection from '@/components/ProgramsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Programs = () => {
  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />
      <div className="pt-20 pb-12 bg-gradient-to-b from-trust-blue to-trust-blue/90">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-up opacity-0" style={{ animationDelay: '200ms' }}>
            Our Learning Programs
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: '300ms' }}>
            Discover the perfect learning path designed to empower students from government and remote schools with quality education and essential skills.
          </p>
        </div>
      </div>
      <ProgramsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Programs;
