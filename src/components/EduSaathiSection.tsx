
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, Globe } from "lucide-react";
import { Link } from 'react-router-dom';

const EduSaathiSection = () => {
  return (
    <section id="edusaathi" className="py-16 bg-gradient-to-b from-off-white to-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-positive-green">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-positive-green rounded-full flex items-center justify-center mr-4">
                  <MessageCircle className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-trust-blue">EduSaathi</h3>
                  <p className="text-gray-600">Your AI learning companion</p>
                </div>
              </div>

              <div className="mb-6 space-y-4">
                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                  <p className="text-gray-700">मुझे गणित में त्रिकोणमिति समझने में मदद चाहिए</p>
                </div>
                <div className="bg-positive-green rounded-lg p-3 max-w-[80%] ml-auto">
                  <p className="text-white">त्रिकोणमिति त्रिकोण के कोणों और भुजाओं के बीच संबंधों का अध्ययन है। मैं आपको इसके मूल सिद्धांत समझाता हूं...</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                  <p className="text-gray-700">Can you explain in English?</p>
                </div>
                <div className="bg-positive-green rounded-lg p-3 max-w-[80%] ml-auto">
                  <p className="text-white">Of course! Trigonometry is the study of relationships between angles and sides of triangles. Let me explain the basic principles...</p>
                </div>
              </div>

              <div className="text-center">
                <Button className="bg-trust-blue hover:bg-blue-900 text-white" asChild>
                  <Link to="/edusaathi">Try EduSaathi Now</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-trust-blue mb-6">
              Meet EduSaathi - Your Multilingual Learning Assistant
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Our AI-powered chatbot understands and responds in 10+ regional Indian languages, making learning accessible to everyone.
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-bright-yellow flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-trust-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Ask questions in your regional language</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-bright-yellow flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-trust-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Use voice commands when typing is difficult</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-bright-yellow flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-trust-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Get instant explanations for complex concepts</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-bright-yellow flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-trust-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Works even with slow internet connections</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EduSaathiSection;
