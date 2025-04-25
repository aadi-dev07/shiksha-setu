import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { SignInButton, SignUpButton, useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";

const Login = () => {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate('/dashboard');
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-gradient-to-br from-[#E5DEFF] to-white">
      {/* Left Side (or top on mobile) */}
      <motion.div 
        className="flex flex-col justify-center p-8 md:p-16"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-trust-blue mb-4 font-inter">
          Welcome Back to ShikshaSetuvah
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Let's continue your journey of learning in your own language.
        </p>
        <div className="hidden md:block">
          <img 
            src="/placeholder.svg" 
            alt="Student Learning Illustration" 
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
          <div className="space-y-6">
            <SignInButton mode="modal">
              <Button className="w-full bg-trust-blue hover:bg-trust-blue/90 transition-all duration-300 hover:scale-[1.02]">
                Sign In
              </Button>
            </SignInButton>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">OR</span>
              </div>
            </div>

            <SignUpButton mode="modal">
              <Button 
                variant="outline" 
                className="w-full hover:scale-[1.02] transition-all duration-300"
              >
                Create Account
              </Button>
            </SignUpButton>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default Login;
