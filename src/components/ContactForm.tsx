
import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

type FormData = {
  name: string;
  mobile: string;
  message: string;
};

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast.success("Thank you for your message! We'll get back to you soon.");
    reset();
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <Card className="p-8 animate-fade-up opacity-0" style={{ animationDelay: '400ms' }}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <Input
                id="name"
                {...register("name", { required: true })}
                className="w-full transition-all duration-300 focus:ring-2 focus:ring-bright-yellow"
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                Mobile Number
              </label>
              <Input
                id="mobile"
                type="tel"
                {...register("mobile", { 
                  required: true,
                  pattern: {
                    value: /^[6-9]\d{9}$/,
                    message: "Please enter a valid 10-digit mobile number"
                  } 
                })}
                className="w-full transition-all duration-300 focus:ring-2 focus:ring-bright-yellow"
                placeholder="Enter your mobile number"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Your Message
              </label>
              <Textarea
                id="message"
                {...register("message", { required: true })}
                className="w-full min-h-[150px] transition-all duration-300 focus:ring-2 focus:ring-bright-yellow"
                placeholder="How can we help you?"
              />
            </div>
            
            <Button 
              type="submit"
              className="w-full md:w-auto bg-trust-blue hover:bg-bright-yellow hover:text-trust-blue transition-all duration-300 group"
            >
              <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;
