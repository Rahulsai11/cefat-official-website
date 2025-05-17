
import React from "react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Video = () => {
  return (
    <section id="video" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-heading inline-block font-century uppercase flex flex-col items-center after:left-1/2 after:-translate-x-1/2">WATCH OUR INTRODUCTION</h2>
          <p className="text-lg text-gray-700 mt-6">
            Learn more about our approach to aviation training and what makes CEFAT unique.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-xl border-none">
            <div className="aspect-video w-full">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/fnWaJORDjwc" 
                title="CEFAT Introduction Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </Card>
          
          <div className="mt-8 text-center">
            <p className="text-xl font-semibold text-[#1b83b6] font-century uppercase">
              THE CEFAT ADVANTAGE - EXCELLENCE IN AVIATION TRAINING
            </p>
            <Separator className="my-4 bg-[#1b83b6]/20 mx-auto w-24" />
            <p className="text-gray-700">
              Discover why aspiring pilots choose CEFAT for their aviation journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
