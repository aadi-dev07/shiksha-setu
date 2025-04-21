
import React from 'react';
import { MessageSquare } from 'lucide-react';

const ContactHero = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-off-white">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-bright-yellow rounded-full p-4 animate-bounce">
            <MessageSquare className="h-8 w-8 text-trust-blue" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-trust-blue mb-6 animate-fade-up">
          Let's Connect & Make Learning Better
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: '200ms' }}>
          Whether you have questions, feedback, or want to explore partnerships, 
          we're here to support your educational journey. Your thoughts help us 
          create better learning experiences for students across India.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
