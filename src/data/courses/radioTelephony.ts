
import { Radio } from "lucide-react";
import { Course } from "./types";

export const radioTelephonyCourse: Course = {
  id: "radio-telephony-restricted",
  icon: Radio,
  title: "RTR(A) - Radio Telephony Restricted (Aeronautical)",
  description: "Professional training programme for RTR(A) certification required for communication equipment usage in aircraft.",
  longDescription: `The international professional licence RTR(A) or Radio Telephony Restricted (Aeronautical) required for the use of communication equipment in an aircraft is the prerequisite for issue of pilot licence.

The WPC (Wireless Planning and coordination) wing of the Ministry of Communication, Government of India conducts this examination and issues the RTR(A) licence.`,
  duration: "2-3 weeks",
  eligibility: "Age 18+",
  classSize: "10-15 students",
  image: "/lovable-uploads/2e81b719-c82f-4d29-b2dc-14342960f7a9.png",
  overview: "The WPC (Wireless Planning and coordination) wing of the Ministry of Communication, Government of India conducts this examination and issues the RTR(A) licence.",
  features: [
    "Comprehensive study materials provided",
    "Practical test preparation",
    "Oral exam preparation",
    "Expert guidance throughout the course"
  ],
  learningOutcomes: [
    "Master radio communication regulations and procedures",
    "Develop practical transmission skills",
    "Understand radio principles and practices",
    "Gain confidence in radio communication"
  ],
  curriculum: [
    {
      title: "Part 1: Practical Test",
      description: "Regulations and Procedures (Transmission)"
    },
    {
      title: "Part 2: Oral Exam (VIVA)",
      description: "A) Regulation and Procedure\nB) Radio principles and practices"
    }
  ]
};
