
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-off-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-trust-blue overflow-hidden">
              <span className="block text-reveal">
                हर गांव तक शिक्षा,
              </span>
              <span className="block text-reveal text-reveal-delay-100">
                हर जुबान में सीखने का हक
              </span>
            </h1>
            <p className="text-lg mb-8 text-gray-700 animate-fade-up opacity-0 animation-delay-200">
              Empowering rural India through accessible, multilingual education in regional languages. Learn at your own pace, earn rewards, and build your future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 animation-delay-300">
              <Button className="bg-bright-yellow hover:bg-amber-400 text-trust-blue font-semibold px-6 py-6 text-lg">
                Start Learning Now
              </Button>
              <Button variant="outline" className="border-trust-blue text-trust-blue hover:bg-trust-blue hover:text-white font-semibold px-6 py-6 text-lg">
                Join Beta Program
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
            <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden shadow-2xl animate-float">
              <div className="absolute inset-0 bg-trust-blue opacity-20 rounded-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1322&q=80" 
                    alt="Rural students learning" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-bright-yellow rounded-lg p-4 shadow-lg">
              <p className="text-trust-blue font-bold text-lg">
                Unlock your potential in your own language
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
