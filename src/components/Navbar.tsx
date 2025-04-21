
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Book, Home, Info, MessageCircle, Mail } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-4 px-6 shadow-md sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="bg-trust-blue rounded-md p-1">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="font-bold text-trust-blue text-xl">ShikshaSetu</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="flex items-center gap-1 text-trust-blue hover:text-bright-yellow transition duration-300">
              <Home size={18} />
              <span>Home</span>
            </a>
            <a href="#about" className="flex items-center gap-1 text-trust-blue hover:text-bright-yellow transition duration-300">
              <Info size={18} />
              <span>About</span>
            </a>
            <a href="#courses" className="flex items-center gap-1 text-trust-blue hover:text-bright-yellow transition duration-300">
              <Book size={18} />
              <span>Courses</span>
            </a>
            <a href="#edusaathi" className="flex items-center gap-1 text-trust-blue hover:text-bright-yellow transition duration-300">
              <MessageCircle size={18} />
              <span>EduSaathi</span>
            </a>
            <a href="#contact" className="flex items-center gap-1 text-trust-blue hover:text-bright-yellow transition duration-300">
              <Mail size={18} />
              <span>Contact Us</span>
            </a>
            <Button className="bg-bright-yellow hover:bg-amber-400 text-trust-blue font-semibold">
              Start Learning
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="outline-none"
            >
              <svg className="w-6 h-6 text-trust-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 space-y-4 flex flex-col">
            <a href="#" className="flex items-center gap-2 text-trust-blue hover:text-bright-yellow transition duration-300">
              <Home size={18} />
              <span>Home</span>
            </a>
            <a href="#about" className="flex items-center gap-2 text-trust-blue hover:text-bright-yellow transition duration-300">
              <Info size={18} />
              <span>About</span>
            </a>
            <a href="#courses" className="flex items-center gap-2 text-trust-blue hover:text-bright-yellow transition duration-300">
              <Book size={18} />
              <span>Courses</span>
            </a>
            <a href="#edusaathi" className="flex items-center gap-2 text-trust-blue hover:text-bright-yellow transition duration-300">
              <MessageCircle size={18} />
              <span>EduSaathi</span>
            </a>
            <a href="#contact" className="flex items-center gap-2 text-trust-blue hover:text-bright-yellow transition duration-300">
              <Mail size={18} />
              <span>Contact Us</span>
            </a>
            <Button className="bg-bright-yellow hover:bg-amber-400 text-trust-blue font-semibold w-full">
              Start Learning
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
