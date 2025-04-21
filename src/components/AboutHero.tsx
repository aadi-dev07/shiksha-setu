
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const AboutHero = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-off-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-up opacity-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-trust-blue">
            Our Mission: Bridging the Education Gap
          </h1>
          <Card className="bg-white/80 backdrop-blur-sm border-none shadow-lg">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                At ShikshaSetuvah, we believe that quality education should know no boundaries. 
                We're building a bridge that connects passionate learners from government schools 
                and remote areas with quality educational resources in their own language. 
                Through our platform, we're making learning accessible, enjoyable, and rewarding 
                for every student across India.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
