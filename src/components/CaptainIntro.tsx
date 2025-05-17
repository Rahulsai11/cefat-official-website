
import React from "react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Award, Star, Check } from "lucide-react";

const CaptainIntro = () => {
  const highlights = [
    {
      icon: Award,
      text: "Excellence in Aviation Training"
    },
    {
      icon: Star,
      text: "Professional Training Team"
    },
    {
      icon: Check,
      text: "Proven Track Record"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col gap-16">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-century uppercase">
              WE STAND FOR EXCELLENCE
            </h2>
            <Separator className="w-24 mx-auto bg-[#1b83b6] h-1 mb-6" />
            <div className="flex justify-center gap-8 mt-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-600">
                  <item.icon className="w-5 h-5 text-[#1b83b6]" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Content */}
            <div className="space-y-8">
              <Card className="p-8 bg-white shadow-lg border-none relative overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-gray-700">
                    At this academy, we're 100% committed to provide the highest quality pilot training
                    in Bangalore. Therefore, we guarantee a supportive and friendly environment with a motivating 
                    professional team for cadet training.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Hence, we take pride in our fine course training method. Most importantly, which has 
                    helped countless cadets. In other words, you're just one step away in joining our league.
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-[#1b83b6]/5 border-none relative overflow-hidden">
                <div className="space-y-4">
                  <p className="text-lg italic text-gray-700 leading-relaxed border-l-4 border-[#1b83b6] pl-4">
                    "Hello and welcome to CEFAT. Our academy is absolutely committed to provide the highest 
                    quality pilot training in Bangalore. In addition, with a supportive and pleasing 
                    environment. Hence, Join us!"
                  </p>
                  <p className="text-xl font-semibold text-[#1b83b6]">
                    - CAPTAIN TPS GILL
                  </p>
                </div>
              </Card>
            </div>

            {/* Right Column: Image */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#1b83b6]/20 to-transparent rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/lovable-uploads/8d5c9dac-1b65-4d19-a143-589d52440450.png"
                  alt="Captain TPS Gill"
                  className="w-full h-[600px] object-cover object-center transform group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaptainIntro;
