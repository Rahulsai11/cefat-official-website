
import { PlaneTakeoff } from "lucide-react";
import { Course } from "./types";

export const commercialPilotCourse: Course = {
  id: "commercial-pilot-license",
  icon: PlaneTakeoff,
  title: "Commercial Pilot License",
  description: "Comprehensive flight training program designed to prepare students for a career as a commercial pilot.",
  longDescription: "Our Commercial Pilot License program is designed to take you from zero experience to a professional pilot ready for airline employment. With a focus on safety, proficiency, and professionalism, our CPL program exceeds industry standards.",
  duration: "3 months program",
  eligibility: "12th pass with Physics & Mathematics, Age 17+",
  classSize: "15-20 students",
  nextBatch: "June 12th, 2025",
  contactNumber: "7406632888",
  image: "/lovable-uploads/342a460a-ea7d-4ed4-9d9d-19d81daa2fa4.png",
  overview: "The Commercial Pilot License (CPL) program at CEFAT is a comprehensive 3-month training course designed to transform students into professional pilots. Our curriculum combines extensive ground training with practical study materials, ensuring graduates possess the knowledge and confidence needed to excel in commercial aviation.",
  highlights: [
    "Training by a Top Gun instructor",
    "Over 96% Success rate",
    "Highly rated and reviewed course",
    "Best-in-class Infrastructure",
    "Complete Support (Computer Number, Medical Check, Flying School Guidance)"
  ],
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
    "Master aircraft control and navigation techniques for various flight conditions",
    "Develop proficiency in instrument flight rules (IFR) operations",
    "Gain expertise in aviation meteorology and flight planning",
    "Understand aircraft systems and emergency procedures",
    "Acquire cross-country flight experience with multiple aircraft types",
    "Develop crew resource management and decision-making skills"
  ],
  curriculum: [
    {
      title: "Ground Training Phase",
      description: "Intensive theory covering aviation regulations, aircraft systems, meteorology, navigation, and human factors."
    },
    {
      title: "Basic Flight Training",
      description: "Introduction to flight controls, basic maneuvers, takeoffs and landings, and emergency procedures."
    },
    {
      title: "Advanced Flight Training",
      description: "Complex aircraft operations, night flying, cross-country navigation, and commercial maneuvers."
    },
    {
      title: "Instrument Rating",
      description: "Flying solely by reference to instruments, understanding approach procedures, and handling emergencies in IFR conditions."
    },
    {
      title: "Commercial Pilot Training",
      description: "Advanced commercial operations, multi-engine training, and preparation for the commercial pilot checkride."
    },
    {
      title: "Airline Preparation",
      description: "Multi-crew cooperation, jet orientation, and airline standard operating procedures to prepare for airline employment."
    }
  ]
};
