
import React from 'react';
import { Card } from "@/components/ui/card";
import { Mail, Phone, MessageSquare } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    content: "support@shikshasetu.org",
    description: "We'll respond within 24 hours"
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+91 98765 43210",
    description: "Mon-Fri from 9am to 6pm"
  },
  {
    icon: MessageSquare,
    title: "Chat Support",
    content: "Available on WhatsApp",
    description: "Quick responses for urgent queries"
  }
];

const ContactInfo = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-off-white to-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-trust-blue text-center mb-12">
          Get in Touch
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contactMethods.map((method, index) => (
            <div
              key={method.title}
              className="animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="mx-auto w-12 h-12 bg-bright-yellow rounded-full flex items-center justify-center mb-4">
                  <method.icon className="h-6 w-6 text-trust-blue" />
                </div>
                <h3 className="text-xl font-semibold text-trust-blue mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 font-medium mb-1">
                  {method.content}
                </p>
                <p className="text-sm text-gray-500">
                  {method.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
