
import React from 'react';
import Navbar from '@/components/Navbar';
import ContactHero from '@/components/ContactHero';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default Contact;
