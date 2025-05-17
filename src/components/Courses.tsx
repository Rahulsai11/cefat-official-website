
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { courseData } from "@/data/courses";

const Courses = () => {
  const navigate = useNavigate();
  
  // Display only the first 3 courses as preview
  const previewCourses = courseData.slice(0, 3).map(course => ({
    id: course.id,
    icon: <course.icon className="h-10 w-10 text-[#1b83b6] mb-4" />,
    title: course.title,
    description: course.description,
    duration: course.duration,
  }));

  return (
    <section id="courses" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-heading inline-block font-century uppercase flex flex-col items-center after:left-1/2 after:-translate-x-1/2">FEATURED COURSES</h2>
          <p className="text-lg text-gray-700 mt-6">
            Discover our most popular aviation training programmes designed to launch your career in the aviation industry.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {previewCourses.map((course) => (
            <Card key={course.id} className="bg-white border-none shadow-md card-hover">
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                {course.icon}
                <h3 className="text-xl font-semibold mb-2 uppercase">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="mt-auto pt-4 border-t border-gray-100 w-full">
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>Duration: {course.duration}</span>
                  </div>
                  <Button 
                    className="w-full bg-[#1b83b6] hover:bg-[#1b83b6]/80"
                    onClick={() => navigate(`/courses/${course.id}`)}
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-[#1b83b6] hover:bg-[#1b83b6]/80"
            onClick={() => navigate('/courses')}
          >
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
