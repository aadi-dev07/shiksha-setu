
import React from 'react';
import { ArrowDown, ArrowUp, CalendarDays, MessageCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Register & Set Preferences",
      description: "Create your profile by selecting your class, board, and preferred language for learning.",
      icon: <CalendarDays className="text-bright-yellow" size={32} />
    },
    {
      number: 2,
      title: "Start Learning in Native Language",
      description: "Access curriculum-aligned videos in your chosen regional language and study at your own pace.",
      icon: <ArrowDown className="text-bright-yellow" size={32} />
    },
    {
      number: 3,
      title: "Earn Credits & Unlock Topics",
      description: "Complete lessons to earn credits and unlock advanced topics and special content.",
      icon: <ArrowUp className="text-bright-yellow" size={32} />
    },
    {
      number: 4,
      title: "Ask Doubts via EduSaathi",
      description: "Use our AI chatbot to solve doubts in your language with text or voice interactions.",
      icon: <MessageCircle className="text-bright-yellow" size={32} />
    }
  ];

  return (
    <section id="courses" className="py-16 bg-trust-blue text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How ShikshaSetu Works</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Our simple 4-step learning journey makes education accessible to everyone, regardless of location or language.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-bright-yellow -translate-y-1/2 z-0"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10">
              <div className="bg-white rounded-xl p-6 text-trust-blue h-full flex flex-col items-center text-center transform transition-transform hover:-translate-y-2 duration-300">
                <div className="w-16 h-16 rounded-full bg-trust-blue flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">Step {step.number}</h3>
                <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
