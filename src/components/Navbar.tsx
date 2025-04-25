import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Home, Info, Book, MessageSquare, Mail, PhoneCall } from "lucide-react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white py-4 px-6 shadow-md sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
            <div className="bg-trust-blue rounded-md p-1">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="font-bold text-trust-blue text-xl">ShikshaSetuvah</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="flex items-center gap-1 text-trust-blue hover:text-bright-yellow transition-all duration-300">
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link to="/about" className="flex items-center gap-1 text-trust-blue hover:text-bright-yellow transition-all duration-300 hover:scale-105">
              <Info size={18} />
              <span>About</span>
            </Link>
            <Link to="/programs" className="flex items-center gap-1 text-trust-blue hover:text-bright-yellow transition-all duration-300 hover:scale-105">
              <Book size={18} />
              <span>Programs</span>
            </Link>
            <Link to="/edusaathi" className="flex items-center gap-1 text-trust-blue hover:text-bright-yellow transition-all duration-300 hover:scale-105">
              <MessageSquare size={18} />
              <span>EduSaathi</span>
            </Link>
            <Link to="/contact" className="flex items-center gap-1 text-trust-blue hover:text-bright-yellow transition-all duration-300 hover:scale-105">
              <Mail size={18} />
              <span>Contact</span>
            </Link>

            <div className="flex gap-4 items-center">
              <SignedOut>
                <SignInButton mode="modal" redirectUrl="/dashboard">
                  <Button className="bg-bright-yellow hover:bg-amber-400 text-trust-blue font-semibold transition-all duration-300 hover:scale-105">
                    Start Learning
                  </Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <Link to="/dashboard">
                  <Button className="bg-bright-yellow hover:bg-amber-400 text-trust-blue font-semibold transition-all duration-300 hover:scale-105">
                    Dashboard
                  </Button>
                </Link>
              </SignedIn>
              <Button 
                variant="outline" 
                asChild
                className="border-trust-blue text-trust-blue hover:bg-trust-blue hover:text-white transition-all duration-300 hover:scale-105"
              >
                <Link to="/book-call">
                  <PhoneCall className="mr-2 h-4 w-4" />
                  Book a Call
                </Link>
              </Button>
              <SignedIn>
                <div className="flex justify-center">
                  <UserButton 
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        avatarBox: "w-10 h-10 rounded-full border-2 border-trust-blue hover:scale-105 transition-all duration-300"
                      }
                    }}
                  />
                </div>
              </SignedIn>
            </div>
          </div>

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

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 space-y-4 flex flex-col">
            <Link to="/" className="flex items-center gap-2 text-trust-blue hover:text-bright-yellow transition-all duration-300">
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link to="/about" className="flex items-center gap-2 text-trust-blue hover:text-bright-yellow transition-all duration-300">
              <Info size={18} />
              <span>About</span>
            </Link>
            <Link to="/programs" className="flex items-center gap-1 text-trust-blue hover:text-bright-yellow transition-all duration-300 hover:scale-105">
              <Book size={18} />
              <span>Programs</span>
            </Link>
            <Link to="/edusaathi" className="flex items-center gap-2 text-trust-blue hover:text-bright-yellow transition-all duration-300">
              <MessageSquare size={18} />
              <span>EduSaathi</span>
            </Link>
            <Link to="/contact" className="flex items-center gap-2 text-trust-blue hover:text-bright-yellow transition-all duration-300">
              <Mail size={18} />
              <span>Contact</span>
            </Link>
            <SignedOut>
              <SignInButton mode="modal" redirectUrl="/dashboard">
                <Button className="bg-bright-yellow hover:bg-amber-400 text-trust-blue font-semibold w-full">
                  Start Learning
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Link to="/dashboard">
                <Button className="bg-bright-yellow hover:bg-amber-400 text-trust-blue font-semibold w-full">
                  Dashboard
                </Button>
              </Link>
            </SignedIn>
            <Button 
              variant="outline" 
              asChild
              className="border-trust-blue text-trust-blue hover:bg-trust-blue hover:text-white w-full"
            >
              <Link to="/book-call">
                <PhoneCall className="mr-2 h-4 w-4" />
                Book a Call
              </Link>
            </Button>
            <SignedIn>
              <div className="flex justify-center">
                <UserButton 
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "w-10 h-10 rounded-full border-2 border-trust-blue hover:scale-105 transition-all duration-300"
                    }
                  }}
                />
              </div>
            </SignedIn>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
