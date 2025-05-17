
import { BookOpen } from "lucide-react";
import { Course } from "./types";

export const a320TechnicalCourse: Course = {
  id: "a320-technical-training",
  icon: BookOpen,
  title: "A320 Technical Training",
  description: "Comprehensive A320 technical training for pilots preparing for endorsement or airline entrance exams.",
  longDescription: "CEFAT's A320 Technical Training course content is tailored for candidates who wish to prepare themselves for A320 endorsement training or for an Airline entrance exam.",
  duration: "4-6 weeks",
  eligibility: "Commercial Pilot Licence holders",
  classSize: "10-15 students",
  image: "/lovable-uploads/4b285533-6624-4e97-b26e-b52718a3bb47.png",
  overview: "Under the guidance of Capt. Gill, a current A320 instructor with thousands of hours on the A320, this comprehensive course covers all aspects of A320 technical knowledge. In addition to having flown thousands of hours on the A320 over his flying career, Capt. Gill has imparted his vast knowledge of the aircraft's systems and procedures to hundreds of pilots.",
  learningOutcomes: [
    "Master Airbus fly-by-wire flight control systems",
    "Understand comprehensive A320 systems operations",
    "Learn normal and abnormal procedures",
    "Gain proficiency in performance calculations",
    "Understand Airbus protections and limitations"
  ],
  curriculum: [
    {
      title: "Airbus Philosophy",
      description: "Understanding the core principles and design philosophy of Airbus aircraft"
    },
    {
      title: "Flight Control Systems",
      description: "Detailed study of Airbus fly-by-wire flight controls"
    },
    {
      title: "Aircraft Systems",
      description: "In-depth CBT coverage of all Airbus systems"
    },
    {
      title: "Procedures and Documentation",
      description: "Comprehensive coverage of FCOM, FCTM, and QRH"
    }
  ],
  subjects: [
    "Airbus philosophy",
    "Airbus Fly-by-wire flight controls",
    "All Airbus systems with CBT In depth",
    "FCOM Normal & Abnormal Procedures",
    "FCTM coverage",
    "QRH coverage",
    "Airbus protections & limitations",
    "Airbus Performance explanation and calculations"
  ]
};
