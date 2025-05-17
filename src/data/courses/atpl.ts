
import { PlaneTakeoff } from "lucide-react";
import { Course } from "./types";

export const atplCourse: Course = {
  id: "airline-transport-pilot-license",
  icon: PlaneTakeoff,
  title: "Airline Transport Pilot Licence (ATPL)",
  description: "The highest level of aircraft pilot certification, preparing pilots for command roles in scheduled air carriers.",
  longDescription: "The Airline Transport Pilot Licence (ATPL) is the highest level of aircraft pilot certificate. Those certified as airline transport pilots (unconditional) are authorised to act as pilot in command on scheduled air carriers' aircraft.",
  duration: "60 days intensive programme",
  eligibility: "Valid CPL Licence, Age 21+",
  classSize: "15-20 students",
  image: "/lovable-uploads/00040463-943a-4411-9bca-18e12a851da2.png",
  overview: "The ATPL Pilot Training course at CEFAT is a comprehensive 60-day programme covering both written and oral exam preparation. CEFAT provides all necessary study materials and practice questions, ensuring the syllabus completion at least 2 weeks before scheduled exams for adequate revision time.",
  subjects: [
    "Navigation",
    "Radio Aids",
    "Instruments",
    "Meteorology",
    "Air Regulations"
  ],
  features: [
    "Comprehensive study materials and practice questions provided",
    "Course completion 2 weeks before exam for revision",
    "Final tests based on DGCA Syllabus",
    "Additional tests if required",
    "Complete DGCA syllabus coverage"
  ],
  learningOutcomes: [
    "Master advanced navigation and flight planning techniques",
    "Develop expertise in radio aids and communication systems",
    "Gain comprehensive understanding of aircraft instruments",
    "Advanced meteorological analysis and interpretation",
    "In-depth knowledge of air regulations and procedures"
  ],
  curriculum: [
    {
      title: "Advanced Navigation",
      description: "Complex navigation systems, international flight planning, and advanced route calculations."
    },
    {
      title: "Communication Systems",
      description: "Advanced radio communication, navigation aids, and modern avionics systems."
    },
    {
      title: "Aircraft Systems",
      description: "In-depth study of commercial aircraft systems and performance characteristics."
    },
    {
      title: "Meteorology",
      description: "Advanced weather patterns, forecasting, and decision-making for airline operations."
    },
    {
      title: "Air Law and Operations",
      description: "International aviation law, airline procedures, and operational requirements."
    }
  ]
};
