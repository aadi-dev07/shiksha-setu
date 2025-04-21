
import React from 'react';
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-off-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-trust-blue">
              <span className="block text-reveal bg-gradient-to-r from-trust-blue to-bright-yellow bg-clip-text text-transparent">
                हर गांव तक शिक्षा,
              </span>
              <span className="block text-reveal text-reveal-delay-100 bg-gradient-to-r from-trust-blue to-bright-yellow bg-clip-text text-transparent">
                हर जुबान में सीखने का हक
              </span>
            </h1>
            <p className="text-lg mb-8 text-gray-700 animate-fade-up opacity-0 animation-delay-200">
              Empowering rural India through accessible, multilingual education in regional languages. Learn at your own pace, earn rewards, and build your future with ShikshaSetuvah.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 animation-delay-300">
              <Button 
                asChild 
                className="bg-bright-yellow hover:bg-amber-400 text-trust-blue font-semibold px-6 py-6 text-lg hover:scale-105 transition-all duration-300"
              >
                <Link to="/login">Start Learning Now</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="border-trust-blue text-trust-blue hover:bg-trust-blue hover:text-white font-semibold px-6 py-6 text-lg hover:scale-105 transition-all duration-300"
              >
                <Link to="/book-call">
                  <PhoneCall className="mr-2 h-5 w-5" />
                  Book a Call
                </Link>
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 animate-fade-up opacity-0 animation-delay-400">
              <div className="text-center">
                <p className="text-3xl font-bold text-positive-green">10+</p>
                <p className="text-sm text-gray-600">Regional Languages</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-positive-green">1000+</p>
                <p className="text-sm text-gray-600">Video Lessons</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-positive-green">24/7</p>
                <p className="text-sm text-gray-600">EduSaathi Support</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden shadow-2xl animate-float hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-trust-blue opacity-20 rounded-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <img 
                    src="/lovable-uploads/0359d660-1975-4f06-87d1-596aa80dc4a9.png" 
                    alt="Happy students from government schools" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-bright-yellow rounded-lg p-4 shadow-lg animate-fade-up opacity-0 animation-delay-500">
              <p className="text-trust-blue font-bold text-lg">
                Unlock your potential in your own language with ShikshaSetuvah
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
