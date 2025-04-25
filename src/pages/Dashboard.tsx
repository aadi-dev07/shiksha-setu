
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Star, MessageCircle, ListTodo, Globe, BarChart2, PhoneCall, Circle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

// Mock data
const studentData = {
  name: "Arjun Singh",
  progress: {
    completedLectures: 28,
    totalLectures: 45,
  },
  courses: [
    { id: 1, title: "Mathematics Class X", progress: 75, chaptersDone: "7/10" },
    { id: 2, title: "Science Class X", progress: 40, chaptersDone: "4/12" },
  ],
  recommendations: [
    { id: 1, title: "English Grammar", description: "Improve your language skills" },
    { id: 2, title: "Computer Basics", description: "Learn fundamental concepts" },
  ],
  credits: 320,
  totalCredits: 500,
  todos: [
    { id: 1, text: "Complete Math Assignment", completed: false },
    { id: 2, text: "Watch Science Video", completed: false },
    { id: 3, text: "Practice English Speaking", completed: false },
  ]
};

const Dashboard = () => {
  const [language, setLanguage] = useState<"english" | "hindi">("english");
  const [todos, setTodos] = useState(studentData.todos);
  const { toast } = useToast();

  const handleLanguageChange = (value: string) => {
    setLanguage(value as "english" | "hindi");
    toast({
      title: value === "english" ? "Language changed to English" : "भाषा हिंदी में बदली गई",
      description: value === "english" ? "Dashboard content updated" : "डैशबोर्ड सामग्री अपडेट की गई",
    });
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-trust-blue to-trust-blue/90 text-white p-6">
        <div className="container mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-bold">
              {language === "english" 
                ? `Welcome back, ${studentData.name}!` 
                : `वापसी पर स्वागत है, ${studentData.name}!`}
            </h1>
            <p className="text-white/80 mt-1">
              {language === "english" 
                ? "Continue your learning journey" 
                : "अपनी सीखने की यात्रा जारी रखें"}
            </p>
          </motion.div>
          <Select defaultValue={language} onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-[140px] bg-white/10 border-white/20 text-white">
              <Globe className="mr-2 h-4 w-4" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="hindi">हिंदी</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Section (2/3 width) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Progress Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>{language === "english" ? "Your Progress" : "आपकी प्रगति"}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">
                        {language === "english" 
                          ? `${studentData.progress.completedLectures} of ${studentData.progress.totalLectures} lectures completed` 
                          : `${studentData.progress.completedLectures} में से ${studentData.progress.totalLectures} व्याख्यान पूरे किए`}
                      </span>
                      <span className="font-medium">
                        {Math.round((studentData.progress.completedLectures / studentData.progress.totalLectures) * 100)}%
                      </span>
                    </div>
                    <Progress 
                      value={(studentData.progress.completedLectures / studentData.progress.totalLectures) * 100} 
                      className="h-2"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Current Courses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Book className="mr-2" />
                {language === "english" ? "Your Courses" : "आपके पाठ्यक्रम"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {studentData.courses.map((course, index) => (
                  <Card key={course.id} className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <CardDescription>
                        {language === "english" ? "Chapters completed: " : "पूरे किए गए अध्याय: "}
                        {course.chaptersDone}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-4">
                      <Progress value={course.progress} className="h-2" />
                      <p className="text-sm mt-2 text-right">{course.progress}%</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        {language === "english" ? "Continue Learning" : "जारी रखें"}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar (1/3 width) */}
          <div className="space-y-6">
            {/* Daily Goals */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <ListTodo className="mr-2" />
                    {language === "english" ? "Today's Goals" : "आज के लक्ष्य"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {todos.map(todo => (
                      <li key={todo.id} className="flex items-center space-x-2">
                        <div
                          onClick={() => toggleTodo(todo.id)}
                          className={`w-5 h-5 rounded-full border cursor-pointer flex items-center justify-center
                            ${todo.completed ? 'bg-positive-green border-positive-green' : 'border-gray-300'}`}
                        >
                          {todo.completed && <Circle className="w-3 h-3 text-white" />}
                        </div>
                        <span className={todo.completed ? 'line-through text-gray-500' : ''}>
                          {todo.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* EduSaathi Chatbot */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="border-0 shadow-md bg-gradient-to-br from-trust-blue/5 to-trust-blue/10">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <MessageCircle className="w-12 h-12 mx-auto mb-4 text-trust-blue" />
                    <h3 className="text-lg font-semibold mb-2">
                      {language === "english" ? "Need Help?" : "मदद चाहिए?"}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {language === "english" 
                        ? "Chat with EduSaathi in your language" 
                        : "अपनी भाषा में एडुसाथी से चैट करें"}
                    </p>
                    <Button asChild className="w-full bg-trust-blue hover:bg-trust-blue/90">
                      <Link to="/edusaathi">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        {language === "english" ? "Start Chat" : "चैट शुरू करें"}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Book a Call */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="border-0 shadow-md border-l-4 border-positive-green">
                <CardContent className="p-6">
                  <div className="text-center">
                    <PhoneCall className="w-8 h-8 mx-auto mb-3 text-positive-green" />
                    <h3 className="font-semibold mb-2">
                      {language === "english" ? "Need Personal Guidance?" : "व्यक्तिगत मार्गदर्शन चाहिए?"}
                    </h3>
                    <Button asChild className="w-full mt-2 bg-positive-green hover:bg-positive-green/90">
                      <Link to="/book-call">
                        {language === "english" ? "Book a Call" : "कॉल बुक करें"}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
