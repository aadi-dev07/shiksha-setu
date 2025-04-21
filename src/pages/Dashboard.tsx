
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, BookOpen, Star, Award, MessageCircle, ListTodo, Globe, BarChart2, PhoneCall, Calendar, Check, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

// Mock data for the dashboard
const mockStudentData = {
  name: "Arjun Singh",
  progress: {
    completedLectures: 28,
    totalLectures: 45,
    percentage: 62
  },
  courses: [
    { id: 1, title: "Mathematics Fundamentals", progress: 75, image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843", language: "Hindi" },
    { id: 2, title: "Science & Technology", progress: 40, image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07", language: "English" },
    { id: 3, title: "English Communication", progress: 90, image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a", language: "English" },
  ],
  recommendedCourses: [
    { id: 4, title: "Computer Fundamentals", description: "Learn basics of computers", image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d" },
    { id: 5, title: "Environmental Science", description: "Explore nature and ecology", image: "https://images.unsplash.com/photo-1501854140801-50d01698950b" },
  ],
  credits: 320,
  totalCredits: 500,
  todos: [
    { id: 1, text: "Complete Math Assignment", completed: true },
    { id: 2, text: "Watch Science Video", completed: false },
    { id: 3, text: "Practice English Speaking", completed: false },
  ],
  performance: [
    { subject: "Mathematics", score: 85 },
    { subject: "Science", score: 72 },
    { subject: "English", score: 90 },
  ]
};

const Dashboard = () => {
  const [language, setLanguage] = useState<"english" | "hindi">("english");
  const [todos, setTodos] = useState(mockStudentData.todos);
  const { toast } = useToast();

  // Toggle language
  const handleLanguageChange = (value: string) => {
    setLanguage(value as "english" | "hindi");
    toast({
      title: value === "english" ? "Language changed to English" : "भाषा हिंदी में बदली गई",
      description: value === "english" ? "Dashboard is now in English" : "डैशबोर्ड अब हिंदी में है",
    });
  };

  // Toggle todo completion
  const toggleTodo = (id: number) => {
    const updatedTodos = todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // Get greeting based on time of day
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return language === "english" ? "Good Morning" : "सुप्रभात";
    if (hour < 18) return language === "english" ? "Good Afternoon" : "शुभ दोपहर";
    return language === "english" ? "Good Evening" : "शुभ संध्या";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-off-white">
      {/* Header with welcome message and language selector */}
      <div className="bg-gradient-to-r from-trust-blue to-trust-blue/80 text-white p-6 md:p-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              {getGreeting()}, {mockStudentData.name}!
            </h1>
            <p className="text-white/80">
              {language === "english" 
                ? "Welcome to your learning dashboard" 
                : "आपके अध्ययन डैशबोर्ड में आपका स्वागत है"}
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Select defaultValue={language} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-[180px] bg-white/10 border-white/20 text-white">
                <Globe className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="hindi">हिंदी (Hindi)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Main dashboard content */}
      <motion.div 
        className="container mx-auto px-4 py-6 md:py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Progress Tracker */}
        <motion.div variants={itemVariants} className="mb-8">
          <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow bg-white">
            <CardHeader className="bg-trust-blue/5 pb-2">
              <CardTitle className="text-trust-blue text-xl">
                {language === "english" ? "Your Learning Progress" : "आपकी सीखने की प्रगति"}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="mb-2 flex justify-between items-center">
                <span className="text-sm text-gray-600">
                  {language === "english" 
                    ? `${mockStudentData.progress.completedLectures} of ${mockStudentData.progress.totalLectures} lectures completed` 
                    : `${mockStudentData.progress.completedLectures} में से ${mockStudentData.progress.totalLectures} व्याख्यान पूरे किए`}
                </span>
                <span className="font-medium">{mockStudentData.progress.percentage}%</span>
              </div>
              <Progress value={mockStudentData.progress.percentage} className="h-2" />
              <div className="mt-4 flex justify-between items-center text-sm">
                <div className="flex items-center text-green-600">
                  <Check size={16} className="mr-1" />
                  <span>
                    {language === "english" 
                      ? `${mockStudentData.progress.completedLectures} Completed` 
                      : `${mockStudentData.progress.completedLectures} पूर्ण`}
                  </span>
                </div>
                <div className="flex items-center text-amber-500">
                  <Clock size={16} className="mr-1" />
                  <span>
                    {language === "english" 
                      ? `${mockStudentData.progress.totalLectures - mockStudentData.progress.completedLectures} Pending` 
                      : `${mockStudentData.progress.totalLectures - mockStudentData.progress.completedLectures} बाकी`}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Two column layout for middle content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Left column (2/3 width) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Your Courses */}
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold text-trust-blue mb-4 flex items-center">
                <BookOpen className="mr-2" />
                {language === "english" ? "Your Courses" : "आपके पाठ्यक्रम"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockStudentData.courses.map(course => (
                  <Card key={course.id} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="h-32 overflow-hidden">
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg font-bold">{course.title}</CardTitle>
                        <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">
                          {course.language}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">{language === "english" ? "Progress" : "प्रगति"}</span>
                        <span className="text-sm font-medium">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-1.5" />
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">
                        {language === "english" ? "Continue Learning" : "पढ़ाई जारी रखें"}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Recommended Courses */}
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold text-trust-blue mb-4 flex items-center">
                <Star className="mr-2" />
                {language === "english" ? "Recommended for You" : "आपके लिए अनुशंसित"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockStudentData.recommendedCourses.map(course => (
                  <Card key={course.id} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="h-32 overflow-hidden">
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-bold">{course.title}</CardTitle>
                      <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button variant="default" size="sm" className="w-full bg-trust-blue hover:bg-trust-blue/90">
                        {language === "english" ? "Enroll Now" : "अभी दाखिला लें"}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Performance Section */}
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold text-trust-blue mb-4 flex items-center">
                <BarChart2 className="mr-2" />
                {language === "english" ? "Your Performance" : "आपका प्रदर्शन"}
              </h2>
              <Card className="border-0 shadow-md">
                <CardContent className="pt-6">
                  {mockStudentData.performance.map((subject, index) => (
                    <div key={index} className="mb-4">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{subject.subject}</span>
                        <span className="text-sm font-medium">{subject.score}%</span>
                      </div>
                      <Progress value={subject.score} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right column (1/3 width) - Sidebar widgets */}
          <div className="space-y-6">
            {/* Credit Score */}
            <motion.div variants={itemVariants}>
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Award className="mr-2 text-bright-yellow" />
                    {language === "english" ? "Credit Score" : "क्रेडिट स्कोर"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">
                      {mockStudentData.credits} / {mockStudentData.totalCredits}
                    </span>
                    <span className="font-medium">
                      {Math.round((mockStudentData.credits / mockStudentData.totalCredits) * 100)}%
                    </span>
                  </div>
                  <Slider 
                    value={[Math.round((mockStudentData.credits / mockStudentData.totalCredits) * 100)]} 
                    disabled
                  />
                  <p className="mt-3 text-sm text-gray-600">
                    {language === "english" 
                      ? "Keep learning to earn more credits!" 
                      : "अधिक क्रेडिट अर्जित करने के लिए सीखना जारी रखें!"}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* To-Do Widget */}
            <motion.div variants={itemVariants}>
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <ListTodo className="mr-2 text-positive-green" />
                    {language === "english" ? "Today's Goals" : "आज के लक्ष्य"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {todos.map(todo => (
                      <li key={todo.id} className="flex items-start">
                        <div 
                          className={`w-5 h-5 rounded-full mr-2 flex-shrink-0 flex items-center justify-center cursor-pointer mt-0.5 border ${
                            todo.completed ? 'bg-positive-green border-positive-green' : 'border-gray-300'
                          }`}
                          onClick={() => toggleTodo(todo.id)}
                        >
                          {todo.completed && <Check size={12} className="text-white" />}
                        </div>
                        <span className={`text-sm ${todo.completed ? 'line-through text-gray-500' : ''}`}>
                          {todo.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* EduSaathi Chatbot */}
            <motion.div variants={itemVariants}>
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow border-l-4 border-positive-green">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <MessageCircle className="mr-2 text-positive-green" />
                    {language === "english" ? "EduSaathi Assistant" : "एडु-साथी सहायक"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    {language === "english" 
                      ? "Need help with your studies? Chat with our AI assistant in your language!" 
                      : "अपनी पढ़ाई में मदद चाहिए? अपनी भाषा में हमारे AI सहायक से चैट करें!"}
                  </p>
                  <Button className="w-full bg-positive-green hover:bg-positive-green/90" asChild>
                    <Link to="/edusaathi">
                      <MessageCircle className="mr-2" size={16} />
                      {language === "english" ? "Start Conversation" : "बातचीत शुरू करें"}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Book a Call CTA */}
            <motion.div variants={itemVariants}>
              <Card className="border-0 shadow-md bg-gradient-to-br from-trust-blue to-trust-blue/90 text-white">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <PhoneCall size={28} className="mb-2 text-bright-yellow" />
                    <h3 className="text-lg font-bold mb-2">
                      {language === "english" ? "Need Personal Guidance?" : "व्यक्तिगत मार्गदर्शन चाहिए?"}
                    </h3>
                    <p className="text-sm text-white/80 mb-4">
                      {language === "english" 
                        ? "Schedule a call with our education counselors" 
                        : "हमारे शिक्षा परामर्शदाताओं के साथ कॉल शेड्यूल करें"}
                    </p>
                    <Button className="bg-white text-trust-blue hover:bg-bright-yellow hover:text-trust-blue" asChild>
                      <Link to="/book-call">
                        <Calendar className="mr-2" size={16} />
                        {language === "english" ? "Book a Call" : "कॉल बुक करें"}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
