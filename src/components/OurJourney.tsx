
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Flag, Users, Earth, GraduationCap } from "lucide-react";

const milestones = [
  {
    year: "2023",
    title: "The Beginning",
    description: "Started with a vision to reach every village in India",
    icon: Flag,
  },
  {
    year: "2024",
    title: "Growing Community",
    description: "Reached 10,000+ students across 5 states",
    icon: Users,
  },
  {
    year: "2024",
    title: "Language Support",
    description: "Added support for 10+ regional languages",
    icon: Earth,
  },
  {
    year: "2025",
    title: "Impact Recognition",
    description: "Recognized as leading rural education innovator",
    icon: GraduationCap,
  },
];

const OurJourney = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-trust-blue text-center mb-12">
          Our Journey
        </h2>
        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.title}
              className="flex flex-col md:flex-row gap-6 mb-8 items-start learning-journey-item animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card className="w-full md:w-96 hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-bright-yellow rounded-full">
                      <milestone.icon className="h-6 w-6 text-trust-blue" />
                    </div>
                    <div>
                      <p className="text-xl font-semibold text-trust-blue">
                        {milestone.year}
                      </p>
                      <h3 className="text-lg font-medium text-gray-800">
                        {milestone.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">{milestone.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
