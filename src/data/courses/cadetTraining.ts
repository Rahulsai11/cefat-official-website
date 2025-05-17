
import { GraduationCap } from "lucide-react";
import { Course } from "./types";

export const cadetTrainingCourse: Course = {
  id: "cadet-training",
  icon: GraduationCap,
  title: "Airline Cadet Training",
  description: "Comprehensive airline-partnered training programme preparing aspiring pilots for airline cadet screening exams.",
  longDescription: "Cadet Training Programme is basically a cooperation between an airline and a flight school. CEFAT will be training the cadet pilots, undergo a rigid audit process from the airline where the cadets will start working after the training in the aviation academy.",
  duration: "3-6 months",
  eligibility: "12th pass with good aptitude skills",
  classSize: "15-20 students",
  image: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  overview: "CEFAT's CADET Training programme is tailor made to guide aspiring cadet pilots to ace airline cadet screening exams. Each student will be given multiple practice tests to get prepared for the various screening tests. This comprehensive programme will cover various subject areas and ensure that each candidate's level of proficiency is well above what is required for the airlines screening exams.",
  learningOutcomes: [
    "Master mathematical concepts required for airline screening",
    "Develop strong verbal reasoning capabilities",
    "Understanding of physics principles",
    "Improve hand-eye coordination",
    "Enhance spatial awareness skills",
    "Strengthen short-term memory",
    "Improve reaction speed",
    "Boost information processing capabilities"
  ],
  curriculum: [
    {
      title: "Mathematics Training",
      description: "Comprehensive mathematics tests preparation covering airline screening requirements."
    },
    {
      title: "Verbal Reasoning",
      description: "Verbal reasoning tests and practice sessions to improve logical thinking."
    },
    {
      title: "Physics Foundation",
      description: "Physics tests preparation focusing on aviation-related concepts."
    },
    {
      title: "Coordination Skills",
      description: "Hand-eye coordination and spatial awareness skill development exercises."
    },
    {
      title: "Cognitive Development",
      description: "Short-term memory enhancement and reaction speed improvement training."
    },
    {
      title: "Information Processing",
      description: "Information processing capability tests and practice sessions."
    }
  ]
};
