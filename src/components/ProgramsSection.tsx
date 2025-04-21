import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Book, Award, Crown } from "lucide-react";

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-up opacity-0" style={{ animationDelay: '100ms' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-trust-blue mb-4">Choose Your Path to Learning</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ShikshaSetuvah offers flexible programs to empower every student.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Program Alpha Card */}
          <Card className="rounded-lg overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-up opacity-0" 
                style={{ animationDelay: '200ms', background: 'linear-gradient(135deg, #fff 0%, #fff8f8 100%)' }}>
            <div className="h-2 bg-gradient-to-r from-red-400 to-red-500"></div>
            <CardHeader className="pt-8">
              <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mb-4 mx-auto">
                <Book className="text-red-500 h-7 w-7" />
              </div>
              <CardTitle className="text-center text-xl text-gray-800 font-bold">Program Alpha</CardTitle>
              <p className="text-center text-red-500 font-medium mt-1 italic">
                "Master Your Syllabus, One Lecture at a Time"
              </p>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-6">
                Academic learning with class-wise, subject-based content in Maths, Science, SST, and English.
              </p>
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-start">
                  <span className="bg-red-100 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="h-3 w-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  <p className="text-gray-700 text-left">Multilingual video lessons</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-red-100 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="h-3 w-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  <p className="text-gray-700 text-left">Credit-based lecture unlock</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-red-100 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="h-3 w-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  <p className="text-gray-700 text-left">Offline access (3 videos/day)</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-red-100 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="h-3 w-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  <p className="text-gray-700 text-left">Progress tracking</p>
                </div>
              </div>
              <div className="mb-4">
                <p className="font-medium text-gray-800 mb-1">Program Completion:</p>
                <Progress value={65} className="h-2 bg-red-100" />
                <p className="text-xs text-gray-500 mt-1">65% of students complete this program</p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col pt-0">
              <p className="text-trust-blue font-bold mb-4">Affordable</p>
              <Button 
                asChild 
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 transition-all duration-300"
              >
                <Link to="/login">Enroll Now</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Program Beta Card */}
          <Card className="rounded-lg overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-up opacity-0" 
                style={{ animationDelay: '300ms', background: 'linear-gradient(135deg, #fff 0%, #f0f7ff 100%)' }}>
            <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-500"></div>
            <CardHeader className="pt-8">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                <Award className="text-blue-500 h-7 w-7" />
              </div>
              <CardTitle className="text-center text-xl text-gray-800 font-bold">Program Beta</CardTitle>
              <p className="text-center text-blue-500 font-medium mt-1 italic">
                "Skills for Tomorrow, Starting Today"
              </p>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-6">
                Skill development with focus on Spoken English, basic computers, exam awareness, digital safety, and public speaking.
              </p>
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-start">
                  <span className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="h-3 w-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  <p className="text-gray-700 text-left">One-course-at-a-time enrollment</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="h-3 w-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  <p className="text-gray-700 text-left">Micro-certifications</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="h-3 w-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  <p className="text-gray-700 text-left">Performance badges</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="h-3 w-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  <p className="text-gray-700 text-left">Hands-on practice sessions</p>
                </div>
              </div>
              <div className="mb-4">
                <p className="font-medium text-gray-800 mb-1">Program Completion:</p>
                <Progress value={78} className="h-2 bg-blue-100" />
                <p className="text-xs text-gray-500 mt-1">78% of students complete this program</p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col pt-0">
              <p className="text-trust-blue font-bold mb-4">Affordable</p>
              <Button 
                asChild 
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 transition-all duration-300"
              >
                <Link to="/login">Enroll Now</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Combo Pack Card */}
          <Card className="rounded-lg overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-up opacity-0" 
                style={{ animationDelay: '400ms', background: 'linear-gradient(135deg, #f9f8ff 0%, #f3eeff 100%)' }}>
            <div className="h-2 bg-gradient-to-r from-purple-400 to-purple-600"></div>
            <CardHeader className="pt-8">
              <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mb-4 mx-auto">
                <Crown className="text-purple-500 h-7 w-7" />
              </div>
              <CardTitle className="text-center text-xl text-gray-800 font-bold">Combo Pack</CardTitle>
              <p className="text-center text-purple-500 font-medium mt-1 italic">
                "Unlock Everything with One Plan"
              </p>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-6">
                Full access to both Program Alpha and Program Beta with additional premium benefits.
              </p>
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-start">
                  <span className="bg-purple-100 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="h-3 w-3 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  <p className="text-gray-700 text-left">Full access to Alpha & Beta</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-purple-100 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="h-3 w-3 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  <p className="text-gray-700 text-left">Mentor support</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-purple-100 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="h-3 w-3 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  <p className="text-gray-700 text-left">Extra monthly credits</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-purple-100 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="h-3 w-3 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  <p className="text-gray-700 text-left">Leaderboard visibility</p>
                </div>
              </div>
              <div className="mb-4">
                <p className="font-medium text-gray-800 mb-1">Program Completion:</p>
                <Progress value={92} className="h-2 bg-purple-100" />
                <p className="text-xs text-gray-500 mt-1">92% of students complete this program</p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col pt-0">
              <p className="text-trust-blue font-bold mb-4">Best Value</p>
              <Button 
                asChild 
                className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white border-0 transition-all duration-300"
              >
                <Link to="/login">Enroll Now</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
