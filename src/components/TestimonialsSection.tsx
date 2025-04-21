
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Rajasthan",
      image: "/lovable-uploads/0359d660-1975-4f06-87d1-596aa80dc4a9.png",
      text: "ShikshaSetuvah में हिंदी में पढ़ाई करना मेरे लिए बहुत आसान हो गया है। अब मैं अपनी पढ़ाई में आत्मविश्वास महसूस करती हूं।",
      translation: "Studying in Hindi on ShikshaSetuvah has become very easy for me. Now I feel confident in my studies."
    },
    {
      name: "Rahul Patel",
      location: "Gujarat",
      image: "/lovable-uploads/0359d660-1975-4f06-87d1-596aa80dc4a9.png",
      text: "ગુજરાતી ભાષામાં વિડિઓ જોવાથી મને વિજ્ઞાન સમજવામાં ખૂબ મદદ મળી. ShikshaSetuvah સાથે મારા પ્રશ્નોના જવાબ મેળવવા સરળ છે.",
      translation: "Watching videos in Gujarati has helped me understand science better. It's easy to get my questions answered with ShikshaSetuvah."
    },
    {
      name: "Karthik Raja",
      location: "Tamil Nadu",
      image: "/lovable-uploads/0359d660-1975-4f06-87d1-596aa80dc4a9.png",
      text: "என் கிராமத்தில் இணைய இணைப்பு மோசமாக இருந்தாலும், ShikshaSetuvah ஆஃப்லைன் வசதியுடன் எனக்கு உதவுகிறது.",
      translation: "Even with poor internet in my village, ShikshaSetuvah helps me with offline features."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-trust-blue mb-4">Student Voices</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Hear from students across India who are transforming their education journey with ShikshaSetuvah.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-bold text-trust-blue">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <p className="text-gray-500 text-sm">{testimonial.translation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
