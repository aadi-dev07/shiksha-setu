
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, Globe, Bot, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

const EduSaathi = () => {
  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo-section');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#E5DEFF] to-[#D3E4FD]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-3xl md:text-5xl font-bold text-trust-blue mb-4 animate-fade-up opacity-0" style={{ animationDelay: '200ms' }}>
                Meet Your Learning Companion — EduSaathi
              </h1>
              <p className="text-lg text-gray-700 mb-8 animate-fade-up opacity-0" style={{ animationDelay: '300ms' }}>
                Ask your doubts. Speak your questions. Learn in your own language.
              </p>
              <Button 
                onClick={scrollToDemo}
                className="bg-positive-green hover:bg-positive-green/90 text-white px-6 py-6 text-lg rounded-xl animate-fade-up opacity-0 shadow-lg" 
                style={{ animationDelay: '400ms' }}
              >
                Try EduSaathi Now
              </Button>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
                <div className="absolute inset-0 bg-white/30 backdrop-blur-md rounded-full"></div>
                <div className="relative h-full flex items-center justify-center">
                  <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-[#9b87f5] to-[#7E69AB] rounded-full flex items-center justify-center shadow-xl">
                    <Bot size={100} className="text-white" />
                  </div>
                  <div className="absolute top-6 right-6 animate-bounce w-12 h-12 bg-bright-yellow rounded-full flex items-center justify-center shadow-md">
                    <Mic size={20} className="text-trust-blue" />
                  </div>
                  <div className="absolute bottom-6 left-6 animate-pulse w-12 h-12 bg-positive-green rounded-full flex items-center justify-center shadow-md">
                    <MessageSquare size={20} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-trust-blue text-center mb-12">
            Smart Features For Smarter Learning
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Card className="border-none hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-[#D3E4FD] to-white overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-trust-blue rounded-2xl flex items-center justify-center mb-6 rotate-3 shadow-lg">
                  <Mic size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-trust-blue mb-3">
                  Voice Assistance
                </h3>
                <p className="text-gray-700">
                  Speak your questions, get answers instantly in your language.
                </p>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="border-none hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-[#E5DEFF] to-white overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#7E69AB] rounded-2xl flex items-center justify-center mb-6 -rotate-3 shadow-lg">
                  <Globe size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-trust-blue mb-3">
                  Multilingual Doubt Solving
                </h3>
                <p className="text-gray-700">
                  Supports regional languages like Hindi, Marathi, Bengali, etc.
                </p>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="border-none hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-[#D6BCFA] to-white overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-positive-green rounded-2xl flex items-center justify-center mb-6 rotate-3 shadow-lg">
                  <Bot size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-trust-blue mb-3">
                  Smart & Friendly AI
                </h3>
                <p className="text-gray-700">
                  Understands student-level queries with ease and explains simply.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gradient-to-b from-white to-[#F8F9FD]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-trust-blue text-center mb-12">
            How EduSaathi Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Connecting line (visible on md screens and up) */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#E5DEFF] via-trust-blue to-[#D6BCFA] transform -translate-y-1/2 z-0"></div>
            
            {/* Step 1 */}
            <div className="relative z-10">
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 mx-auto bg-[#9b87f5] rounded-full flex items-center justify-center mb-6 text-white font-bold text-xl shadow-lg">
                  1
                </div>
                <h3 className="text-xl font-bold text-trust-blue text-center mb-3">
                  Choose your language
                </h3>
                <p className="text-gray-700 text-center">
                  Select from 10+ Indian languages to interact in your mother tongue.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative z-10 mt-8 md:mt-0">
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 mx-auto bg-trust-blue rounded-full flex items-center justify-center mb-6 text-white font-bold text-xl shadow-lg">
                  2
                </div>
                <h3 className="text-xl font-bold text-trust-blue text-center mb-3">
                  Type or speak your question
                </h3>
                <p className="text-gray-700 text-center">
                  Use the keyboard or microphone to ask any academic doubt or question.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative z-10 mt-8 md:mt-0">
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 mx-auto bg-positive-green rounded-full flex items-center justify-center mb-6 text-white font-bold text-xl shadow-lg">
                  3
                </div>
                <h3 className="text-xl font-bold text-trust-blue text-center mb-3">
                  Get a simple, accurate answer
                </h3>
                <p className="text-gray-700 text-center">
                  Receive clear explanations with examples that help you understand concepts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo-section" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-trust-blue text-center mb-12">
            See EduSaathi in Action
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#F8F9FD] rounded-2xl p-6 shadow-lg border border-[#E5DEFF]">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-trust-blue rounded-full flex items-center justify-center">
                    <Bot size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-trust-blue">EduSaathi</h3>
                    <p className="text-xs text-gray-500">Your learning companion</p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <HoverCard>
                    <HoverCardTrigger>
                      <Button variant="outline" size="sm" className="bg-white">
                        <Mic size={16} className="mr-1" /> Voice
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      Click to speak your question in any language
                    </HoverCardContent>
                  </HoverCard>
                  
                  <HoverCard>
                    <HoverCardTrigger>
                      <Button variant="outline" size="sm" className="bg-white">
                        <Globe size={16} className="mr-1" /> Languages
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <p className="text-sm">Available languages:</p>
                      <ul className="text-xs text-gray-600 mt-1">
                        <li>Hindi</li>
                        <li>Marathi</li>
                        <li>Bengali</li>
                        <li>Tamil</li>
                        <li>Telugu</li>
                        <li>And 5+ more</li>
                      </ul>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                  <p className="text-gray-700">मुझे भौतिकी में आइंस्टाइन के सापेक्षता के सिद्धांत को समझाइए</p>
                </div>
                
                <div className="bg-positive-green rounded-lg p-3 max-w-[80%] ml-auto">
                  <p className="text-white">आइंस्टाइन का सापेक्षता का सिद्धांत दो भागों में बांटा गया है:</p>
                  <p className="text-white mt-2">1. विशेष सापेक्षता सिद्धांत (1905): इसका मुख्य सिद्धांत है कि प्रकाश की गति हर प्रेक्षक के लिए समान रहती है, चाहे वह किसी भी गति से चल रहा हो।</p>
                  <p className="text-white mt-2">2. सामान्य सापेक्षता सिद्धांत (1915): यह गुरुत्वाकर्षण को स्पेस-टाइम के वक्र होने के रूप में समझाता है।</p>
                  <p className="text-white mt-2">क्या आप इनमें से किसी एक पर अधिक विस्तार से जानना चाहेंगे?</p>
                </div>
                
                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                  <p className="text-gray-700">Can you explain the same in English please?</p>
                </div>
                
                <div className="bg-positive-green rounded-lg p-3 max-w-[80%] ml-auto">
                  <p className="text-white">Einstein's Theory of Relativity is divided into two parts:</p>
                  <p className="text-white mt-2">1. Special Theory of Relativity (1905): The main principle is that the speed of light remains the same for all observers, regardless of their motion.</p>
                  <p className="text-white mt-2">2. General Theory of Relativity (1915): This explains gravity as the curvature of space-time.</p>
                  <p className="text-white mt-2">Would you like to know more about either of these in detail?</p>
                </div>
              </div>
              
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Type your question in any language..." 
                  className="w-full rounded-full px-4 py-3 pr-24 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-trust-blue focus:border-transparent"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-2">
                  <Button variant="ghost" size="sm" className="rounded-full w-8 h-8 p-0">
                    <Mic size={16} className="text-trust-blue" />
                  </Button>
                  <Button size="sm" className="rounded-full h-8 bg-trust-blue hover:bg-trust-blue/90">
                    Send
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Support */}
      <section className="py-16 bg-gradient-to-br from-[#E5DEFF] to-[#D3E4FD]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-trust-blue text-center mb-4">
            Supporting Multiple Indian Languages
          </h2>
          <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
            EduSaathi understands and responds in these languages to make learning accessible for every student across India.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {["Hindi", "Bengali", "Marathi", "Tamil", "Telugu", 
              "Kannada", "Gujarati", "Malayalam", "Punjabi", "Odia"].map((language, index) => (
              <div 
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <p className="font-semibold text-trust-blue">{language}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EduSaathi;
