
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const MissionVision = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="animate-fade-up opacity-0">
            <Card className="h-full hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-trust-blue mb-6">
                  Our Mission
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  To empower every student in rural India with quality education 
                  by breaking down barriers of language, technology, and accessibility. 
                  We believe in creating a future where learning knows no boundaries.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="animate-fade-up opacity-0 animation-delay-200">
            <Card className="h-full hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-trust-blue mb-6">
                  Our Vision
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  To create an inclusive educational ecosystem where every student, 
                  regardless of their background, has access to quality learning 
                  resources in their preferred language, enabling them to dream big 
                  and achieve bigger.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
