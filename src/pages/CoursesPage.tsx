
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { courseData } from "@/data/courses";

const CoursesPage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const displayCourses = courseData.map(course => ({
    id: course.id,
    icon: <course.icon className="h-10 w-10 text-cefat-500 mb-4" />,
    title: course.title,
    description: course.description,
    duration: course.duration,
    eligibility: course.eligibility,
  }));

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-16">
        <section className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h1>
            <p className="text-lg text-gray-700">
              Explore our comprehensive range of aviation training programmes designed to launch your career in the aviation industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayCourses.map((course) => (
              <Card key={course.id} className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  {course.icon}
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="mt-auto pt-4 border-t border-gray-100 w-full">
                    <div className="flex justify-between text-sm text-gray-500 mb-4">
                      <span>Duration: {course.duration}</span>
                    </div>
                    <Button 
                      className="w-full bg-cefat-500 hover:bg-cefat-600"
                      onClick={() => navigate(`/courses/${course.id}`)}
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CoursesPage;
