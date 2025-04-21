
import React from 'react';
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 bg-trust-blue">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Begin Your Learning Journey Today
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Join thousands of students across rural India who are transforming their future through education in their native language.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-bright-yellow hover:bg-amber-400 text-trust-blue font-semibold px-8 py-6 text-lg">
              Start Learning Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-trust-blue font-semibold px-8 py-6 text-lg">
              Join Beta Program
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
