
import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PhoneCall } from "lucide-react";

type FormData = {
  fullName: string;
  contactNumber: string;
  preferredLanguage: string;
  bestTimeToCall: string;
  message: string;
};

const LANGUAGES = [
  "English",
  "Hindi",
  "Marathi",
  "Bengali",
  "Tamil",
  "Telugu",
  "Kannada",
  "Malayalam",
  "Gujarati",
];

const TIME_SLOTS = [
  "Morning (9 AM - 12 PM)",
  "Afternoon (12 PM - 4 PM)",
  "Evening (4 PM - 7 PM)",
];

const BookCallForm = () => {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log(data);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success("Thank you! Our team will reach out to you soon.");
    reset();
  };

  return (
    <section className="py-16 bg-gradient-to-br from-[#E5DEFF] to-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-trust-blue mb-4">
            Need Help? Let's Talk.
          </h2>
          <p className="text-gray-600 text-lg">
            We're here to guide you through every step of your learning journey.
          </p>
        </div>

        <Card className="p-8 animate-fade-up opacity-0" style={{ animationDelay: '200ms' }}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <Input
                id="fullName"
                {...register("fullName", { required: true })}
                className="w-full transition-all duration-300 focus:ring-2 focus:ring-bright-yellow"
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Contact Number
              </label>
              <Input
                id="contactNumber"
                type="tel"
                {...register("contactNumber", { 
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

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="preferredLanguage" className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Language
                </label>
                <Select {...register("preferredLanguage")}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    {LANGUAGES.map((language) => (
                      <SelectItem key={language} value={language.toLowerCase()}>
                        {language}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="bestTimeToCall" className="block text-sm font-medium text-gray-700 mb-1">
                  Best Time to Call
                </label>
                <Select {...register("bestTimeToCall")}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {TIME_SLOTS.map((slot) => (
                      <SelectItem key={slot} value={slot.toLowerCase()}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message (Optional)
              </label>
              <Textarea
                id="message"
                {...register("message")}
                className="w-full min-h-[100px] transition-all duration-300 focus:ring-2 focus:ring-bright-yellow"
                placeholder="Tell us how we can help you"
              />
            </div>
            
            <Button 
              type="submit"
              className="w-full md:w-auto bg-trust-blue hover:bg-bright-yellow hover:text-trust-blue transition-all duration-300 group"
              disabled={isSubmitting}
            >
              <PhoneCall className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              {isSubmitting ? "Submitting..." : "Book My Call"}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default BookCallForm;
