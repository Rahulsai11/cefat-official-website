
import { GraduationCap } from "lucide-react";
import { Course } from "./types";

export const aeronauticalEngineeringCourse: Course = {
  id: "aeronautical-engineering",
  icon: GraduationCap,
  title: "Aeronautical Engineering",
  description: "Study of aircraft design, development, testing, and production with focus on aerodynamics and structures.",
  longDescription: "Our Aeronautical Engineering programme offers comprehensive education in aircraft design, aerodynamics, propulsion, structures, and systems engineering for aspiring aerospace engineers.",
  duration: "4 years B.Tech programme",
  eligibility: "12th pass with Physics, Chemistry & Mathematics",
  classSize: "30-40 students",
  image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  overview: "The Aeronautical Engineering programme at CEFAT provides students with a strong foundation in the principles of aircraft design, aerodynamics, structures, propulsion, and systems. This comprehensive engineering programme combines theoretical knowledge with practical applications, preparing graduates for careers in aircraft manufacturing, airlines, research organisations, and defence establishments.",
  learningOutcomes: [
    "Develop expertise in aircraft design principles and methodologies",
    "Master aerodynamics and propulsion system analysis",
    "Learn structural analysis and material selection for aircraft",
    "Understand avionics and aircraft control systems",
    "Gain proficiency in CAD/CAM software for aerospace applications",
    "Develop project management and team leadership skills"
  ],
  curriculum: [
    {
      title: "Engineering Fundamentals",
      description: "Mathematics, physics, mechanics, thermodynamics, and basic engineering principles."
    },
    {
      title: "Aerodynamics",
      description: "Fluid dynamics, airfoil theory, high-speed aerodynamics, and computational fluid dynamics."
    },
    {
      title: "Aircraft Structures",
      description: "Structural analysis, aircraft materials, stress analysis, and structural design principles."
    },
    {
      title: "Propulsion Systems",
      description: "Jet engines, propeller systems, rocket propulsion, and propulsion efficiency analysis."
    },
    {
      title: "Aircraft Design",
      description: "Conceptual, preliminary, and detailed design phases of aircraft development."
    },
    {
      title: "Avionics and Control Systems",
      description: "Aircraft electronics, flight control systems, stability analysis, and navigation systems."
    }
  ]
};
