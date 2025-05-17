
import React from "react";
import { Award, Users, Plane, GraduationCap } from "lucide-react";

const Achievements = () => {
  const stats = [
    {
      icon: <GraduationCap className="h-10 w-10 text-white" />,
      number: "5,000+",
      label: "Graduates",
    },
    {
      icon: <Plane className="h-10 w-10 text-white" />,
      number: "100,000+",
      label: "Flight Hours",
    },
    {
      icon: <Users className="h-10 w-10 text-white" />,
      number: "30+",
      label: "Expert Instructors",
    },
    {
      icon: <Award className="h-10 w-10 text-white" />,
      number: "15+",
      label: "Years of Excellence",
    },
  ];

  return (
    <section className="py-12 bg-[#1b83b6] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              {stat.icon}
              <h3 className="text-3xl md:text-4xl font-bold mt-4 mb-1">{stat.number}</h3>
              <p className="text-white/80 uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
