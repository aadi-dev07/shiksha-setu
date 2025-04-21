
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Wifi, Book, Globe } from "lucide-react";

const challenges = [
  {
    icon: Wifi,
    title: "Poor Internet Access",
    description: "We provide offline-first learning solutions that work even with limited connectivity.",
  },
  {
    icon: Book,
    title: "Limited Learning Resources",
    description: "Our platform offers comprehensive study materials curated by expert educators.",
  },
  {
    icon: Globe,
    title: "Language Barriers",
    description: "Learn in your preferred regional language, making education truly accessible.",
  },
];

const WhyWeExist = () => {
  return (
    <section className="py-16 bg-off-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-trust-blue text-center mb-12">
          Why We Exist
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {challenges.map((challenge, index) => (
            <div
              key={challenge.title}
              className="animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card className="h-full hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="p-4 bg-bright-yellow rounded-full mb-4">
                    <challenge.icon className="h-8 w-8 text-trust-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-trust-blue mb-4">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-600">{challenge.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWeExist;
