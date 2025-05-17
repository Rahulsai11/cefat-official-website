
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Users, CheckCircle, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { courseData } from "@/data/courses";
import CourseContactPopup from "@/components/CourseContactPopup";

const CourseDetail = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [courseId]);
  
  const course = courseData.find((c) => c.id === courseId);
  
  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Course Not Found</h1>
            <p className="text-gray-600 mb-6">The course you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => navigate('/courses')} className="bg-cefat-500 hover:bg-cefat-600">
              View All Courses
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-cefat-600 to-cefat-500">
          <div className="container mx-auto px-4">
            <Button 
              variant="ghost" 
              className="mb-6 text-white hover:bg-cefat-600/30"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{course.title}</h1>
                <p className="text-white/90 text-lg mb-6">{course.longDescription}</p>
                {course.id === 'commercial-pilot-license' && (
                  <div className="bg-white/10 p-4 rounded-lg mb-6">
                    <p className="text-white font-semibold">Next Batch: {course.nextBatch}</p>
                    <p className="text-white/90">Book your slot today - Call {course.contactNumber}</p>
                  </div>
                )}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                    <Clock className="h-4 w-4 text-white mr-2" />
                    <span className="text-white text-sm">{course.duration}</span>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <img 
                  src={course.id === 'airline-transport-pilot-license' 
                    ? "/lovable-uploads/00040463-943a-4411-9bca-18e12a851da2.png" 
                    : course.image} 
                  alt={course.title} 
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Course Details */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Course Overview</h2>
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-6">{course.overview}</p>
                  
                  {course.id === 'commercial-pilot-license' && (
                    <>
                      <h3 className="text-xl font-semibold mb-4">Why Choose CEFAT?</h3>
                      <ul className="space-y-3 mb-8">
                        {course.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-cefat-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {course.id === 'radio-telephony-restricted' && (
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold mb-4">Exam Training Details</h3>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <p className="mb-4">The RTR (Aeronautical) exam training conducted by CEFAT consists of following two parts:</p>
                        
                        <h4 className="font-semibold mb-2">Part 1: Practical Test</h4>
                        <p className="mb-4">Regulations and Procedures (Transmission)</p>
                        
                        <h4 className="font-semibold mb-2">Part 2: Oral Exam (VIVA)</h4>
                        <ul className="list-disc pl-5 mb-4">
                          <li>Regulation and Procedure</li>
                          <li>Radio principles and practices</li>
                        </ul>
                        
                        <p className="italic">CEFAT will provide the students with adequate study material.</p>
                      </div>
                    </div>
                  )}

                  {course.id === 'cadet-training' && (
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold mb-4">Program Components</h3>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <p className="font-medium mb-4">CEFAT Cadet Training Programme will comprise the following sections:</p>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <BookOpen className="h-5 w-5 text-cefat-500 mr-2" />
                            Maths Tests
                          </li>
                          <li className="flex items-center">
                            <BookOpen className="h-5 w-5 text-cefat-500 mr-2" />
                            Verbal Reasoning Tests
                          </li>
                          <li className="flex items-center">
                            <BookOpen className="h-5 w-5 text-cefat-500 mr-2" />
                            Physics Tests
                          </li>
                          <li className="flex items-center">
                            <BookOpen className="h-5 w-5 text-cefat-500 mr-2" />
                            Hand-eye coordination tests
                          </li>
                          <li className="flex items-center">
                            <BookOpen className="h-5 w-5 text-cefat-500 mr-2" />
                            Spatial awareness skill tests
                          </li>
                          <li className="flex items-center">
                            <BookOpen className="h-5 w-5 text-cefat-500 mr-2" />
                            Short term memory tests
                          </li>
                          <li className="flex items-center">
                            <BookOpen className="h-5 w-5 text-cefat-500 mr-2" />
                            Reaction speed tests
                          </li>
                          <li className="flex items-center">
                            <BookOpen className="h-5 w-5 text-cefat-500 mr-2" />
                            Information processing capability tests
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {course.id === 'a320-technical-training' && (
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold mb-4">Course Subjects</h3>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <p className="font-medium mb-4">The course comprises the following subjects:</p>
                        <ul className="space-y-2">
                          {course.subjects?.map((subject, index) => (
                            <li key={index} className="flex items-start">
                              <BookOpen className="h-5 w-5 text-cefat-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{subject}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {course.subjects && course.id !== 'a320-technical-training' && (
                    <>
                      <h3 className="text-xl font-semibold mb-4">Subjects Covered</h3>
                      <ul className="space-y-3 mb-8">
                        {course.subjects.map((subject, index) => (
                          <li key={index} className="flex items-start">
                            <BookOpen className="h-5 w-5 text-cefat-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{subject}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  <h3 className="text-xl font-semibold mb-4">What You Will Learn</h3>
                  <ul className="space-y-3 mb-8">
                    {course.learningOutcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-cefat-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div>
                <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                  <h3 className="text-xl font-semibold mb-4">Course Information</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-cefat-500 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Duration</p>
                        <p className="font-medium">{course.duration}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Interested in this Course?</h2>
            <p className="text-lg text-gray-700">
              Get in touch with us to learn more about the {course?.title} program and start your aviation journey.
            </p>
          </div>
          <Contact />
        </div>
      </div>
      
      {course && <CourseContactPopup courseName={course.title} />}
      
      <Footer />
    </div>
  );
};

export default CourseDetail;
