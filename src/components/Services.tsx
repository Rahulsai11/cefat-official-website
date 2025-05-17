
import React from "react";
import { Plane, BarChart, BookOpen, ShieldCheck, GraduationCap, CircleDollarSign } from "lucide-react";
import { Book, Cpu, Users, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Cpu className="h-10 w-10 text-[#1b83b6] mb-4" />,
      title: "Comprehensive Airline Interviews Preparation",
      description: "It includes written test, aptitude, group discussions, mock interviews, psychometric test, technical interview.",
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-[#1b83b6] mb-4" />,
      title: "Aviation Courses",
      description: "Specialized aviation courses including CPL, ATPL, RTR, Airline interview preparation, and Airline Cadet Interview Training.",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-[#1b83b6] mb-4" />,
      title: "Ground School",
      description: "Comprehensive ground school training covering Air Regulations, Meteorology, Instruments, Radio navigation, Navigation.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-[#1b83b6] mb-4" />,
      title: "Safety Training",
      description: "DGCA-approved safety and emergency procedures training for pilots, cabin crew, and ground staff.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-[#1b83b6] mb-4" />,
      title: "Simulator Training",
      description: "Advanced flight simulator training for various aircraft types and emergency scenarios in a controlled environment.",
    },
    {
      icon: <Globe className="h-10 w-10 text-[#1b83b6] mb-4" />,
      title: "Affiliation with Flying Schools Abroad",
      description: "We are associated with different flight schools in the United States, New Zealand, South Africa, and Australia.",
    },
  ];

  const highlights = [
    {
      icon: <Book className="h-12 w-12 text-white" />,
      title: "Best Course Content",
      description: "When it comes to cadet training, we have the most efficient and simple course content. Therefore, you crack any aviation assessments with ease."
    },
    {
      icon: <Cpu className="h-12 w-12 text-white" />,
      title: "New professional simulators",
      description: "Advanced training makes us going on the leading edge owing to the State-of-the-art equipment."
    },
    {
      icon: <Users className="h-12 w-12 text-white" />,
      title: "1000+ pilots accredited",
      description: "In conclusion, this fact proves that you'll be at an academy that caters India's aviation industry with the best pilots."
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-white" />,
      title: "Fully accredited and secure",
      description: "As a fully accredited pilot training academy, we have established our name and reputation for more than 17 years. To conclude, our testimony demonstrates this."
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-heading inline-block font-century uppercase flex flex-col items-center after:left-1/2 after:-translate-x-1/2">OUR SERVICES</h2>
          <p className="text-lg text-gray-700 mt-6">
            We offer a comprehensive range of aviation training programs designed to prepare students for successful careers in the aviation industry, with a focus on safety, professionalism, and excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="bg-white border-none shadow-md card-hover">
              <CardContent className="p-6 flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-semibold mb-2 uppercase">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Redesigned Highlights Section */}
        <div className="relative mt-24 mb-12 py-16 bg-gradient-to-r from-[#1b83b6] to-[#105a7d] rounded-2xl shadow-xl overflow-hidden">
          {/* Background pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/20"></div>
            <div className="absolute top-40 -left-20 w-80 h-80 rounded-full bg-white/10"></div>
            <div className="absolute -bottom-32 right-40 w-96 h-96 rounded-full bg-white/15"></div>
          </div>

          <div className="relative z-10 container mx-auto">
            <h3 className="text-center text-3xl font-bold text-white mb-12 font-century">Why Choose CEFAT</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="group relative flex flex-col items-center bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all duration-300 text-white border border-white/20 hover:border-white/40">
                  <div className="mb-6 bg-[#1b83b6] p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-bold uppercase mb-3 text-center">{highlight.title}</h3>
                  <p className="text-white/80 text-center">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
