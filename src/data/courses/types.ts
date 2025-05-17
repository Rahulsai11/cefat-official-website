
import { LucideIcon } from "lucide-react";

export interface Course {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  longDescription: string;
  duration: string;
  eligibility: string;
  classSize: string;
  nextBatch?: string;
  contactNumber?: string;
  image: string;
  overview: string;
  highlights?: string[];
  subjects?: string[];
  features?: string[];
  learningOutcomes: string[];
  curriculum: {
    title: string;
    description: string;
  }[];
}
