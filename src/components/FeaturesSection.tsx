
import React from 'react';
import { Book, Award, Gift, School, Star, Play, CreditCard } from "lucide-react";

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  color 
}: { 
  icon: React.ElementType, 
  title: string, 
  description: string, 
  color: string 
}) => {
  const bgClass = `bg-${color}`;
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${color === 'trust-blue' ? 'bg-trust-blue' : color === 'bright-yellow' ? 'bg-bright-yellow' : 'bg-positive-green'}`}>
        <Icon className={`${color === 'trust-blue' ? 'text-white' : color === 'bright-yellow' ? 'text-trust-blue' : 'text-white'}`} size={24} />
      </div>
      <h3 className="text-xl font-bold mb-2 text-trust-blue">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: Book,
      title: "Multilingual Learning",
      description: "Access high-quality educational content in 10+ regional Indian languages, tailored to your state board curriculum.",
      color: "trust-blue"
    },
    {
      icon: Award,
      title: "Credit-Based System",
      description: "Earn credits by watching videos, completing topics, and engaging with content to unlock more learning materials.",
      color: "bright-yellow"
    },
    {
      icon: Gift,
      title: "Referral Rewards",
      description: "Invite friends to join ShikshaSetu and earn bonus credits to accelerate your learning journey.",
      color: "positive-green"
    },
    {
      icon: School,
      title: "NGO Partnerships",
      description: "We collaborate with social organizations to reach students in the most remote areas of India.",
      color: "trust-blue"
    },
    {
      icon: Star,
      title: "Performance Scholarships",
      description: "Earn scholarships based on your learning performance to motivate consistent progress.",
      color: "bright-yellow"
    },
    {
      icon: Play,
      title: "Offline Access",
      description: "Download videos for offline viewing, perfect for areas with limited internet connectivity.",
      color: "positive-green"
    },
    {
      icon: CreditCard,
      title: "Affordable Pricing",
      description: "Highly affordable for all students with dynamic pricing structure based on grade levels.",
      color: "trust-blue"
    },
    {
      icon: MessageCircle,
      title: "EduSaathi Chatbot",
      description: "AI-powered assistant that solves your doubts in your native language with voice support.",
      color: "bright-yellow"
    }
  ];

  return (
    <section id="about" className="py-16 bg-off-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-trust-blue mb-4">Empowering Features</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            ShikshaSetu brings education to every corner of India with these powerful features designed for accessibility and engagement.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
