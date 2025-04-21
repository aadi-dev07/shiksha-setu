
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Mail, Phone, GraduationCap, Lock, Languages } from "lucide-react";
import { motion } from "framer-motion";

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    class: '',
    board: '',
    language: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const stateBoards = [
    "CBSE",
    "Maharashtra State Board",
    "Karnataka State Board",
    "Tamil Nadu State Board",
    "Delhi State Board",
    "UP State Board",
    "MP State Board",
    "Kerala State Board",
  ];

  const languages = ["English", "हिंदी", "मराठी", "తెలుగు", "தமிழ்", "ಕನ್ನಡ"];

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-gradient-to-br from-[#E5DEFF] to-white">
      {/* Left Side */}
      <motion.div 
        className="flex flex-col justify-center p-8 md:p-16"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-trust-blue mb-4">
          Join ShikshaSetuvah Today
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Start your journey of learning in your own language and unlock a world of possibilities.
        </p>
        <div className="hidden md:block">
          <img 
            src="/placeholder.svg" 
            alt="Education Illustration" 
            className="max-w-md w-full mx-auto animate-float"
          />
        </div>
      </motion.div>

      {/* Right Side (form area) */}
      <motion.div 
        className="flex items-center justify-center p-8"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="w-full max-w-md p-8 shadow-lg bg-white/80 backdrop-blur">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Full Name"
                className="pl-10"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="email"
                placeholder="Email"
                className="pl-10"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            {/* Phone Input */}
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="tel"
                placeholder="Phone Number"
                className="pl-10"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            {/* Class Input */}
            <div className="relative">
              <GraduationCap className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Class (e.g., 9th, 10th)"
                className="pl-10"
                value={formData.class}
                onChange={(e) => setFormData({ ...formData, class: e.target.value })}
              />
            </div>

            {/* Board Selection */}
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Select Your Board</label>
              <Select 
                value={formData.board}
                onValueChange={(value) => setFormData({ ...formData, board: value })}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select your state board" />
                </SelectTrigger>
                <SelectContent>
                  {stateBoards.map((board) => (
                    <SelectItem key={board} value={board.toLowerCase()}>
                      {board}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Language Preference */}
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Preferred Language</label>
              <div className="relative">
                <Languages className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Select
                  value={formData.language}
                  onValueChange={(value) => setFormData({ ...formData, language: value })}
                >
                  <SelectTrigger className="w-full pl-10">
                    <SelectValue placeholder="Choose your language" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang} value={lang.toLowerCase()}>
                        {lang}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Password Input */}
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="password"
                placeholder="Password"
                className="pl-10"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

            {/* Confirm Password Input */}
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="password"
                placeholder="Confirm Password"
                className="pl-10"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              />
            </div>

            <Button className="w-full bg-trust-blue hover:bg-trust-blue/90 transition-all duration-300 hover:scale-[1.02]">
              Create Account
            </Button>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-trust-blue hover:underline font-medium">
                Sign in here
              </Link>
            </p>
          </form>
        </Card>
      </motion.div>
    </div>
  );
};

export default Register;
