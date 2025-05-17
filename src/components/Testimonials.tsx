
import React, { useEffect, useState, useRef, useCallback } from "react";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi | null>(null);
  
  const testimonials = [
    {
      text: "I attended Capt TPS Gill's Ground Training classes soon after my CPL for the all important ATPL exam which I passed in the first attempt. Soon after this I attended another session with him for Induction into the major airlines. It gave me the best grounding in terms of what to expect with the big airlines in terms of technical knowledge group discussions and interviews. As luck would have it he has also done some of my line training on the A320 and on the A320 simulator. Once training with him is done it will be hard not to pass any exam.",
      author: "Capt. Vikram Sinhji Rana",
      position: "First Officer",
    },
    {
      text: "I first met Capt. TPS Gill in 2010 for my CPL conversion classes. He managed to guide me in just 10-15 days to clear the exams. I further did my ATPL classes with him and managed to clear all the subjects in my first attempt. Capt. TPS Gill is without a doubt, the best person to go to, for guidance in aviation.​Today, I fly as Captain on the A320 and I know, none of this would've been possible without him.​Thank you, Sir.",
      author: "Capt. Arun Jambunathan",
      position: "Captain, A320",
    },
    {
      text: "Dear Sir, It is a great honour to write about my study time and training with you as my Teacher. Technically, you may be called an Instructor. You gave me the best of your knowledge & nurtured me as a Teacher. I would like to share, that, I was privileged to have received guidance from you to develop not only as a professional but also very well in all aspects of a human being. Wish you success in your endeavours.",
      author: "Capt. Madhu Krishna",
      position: "Commercial Pilot",
    },
  ];

  useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };
    
    api.on("select", onSelect);
    
    // Initial index
    setActiveIndex(api.selectedScrollSnap());
    
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-heading inline-block font-century uppercase flex flex-col items-center after:left-1/2 after:-translate-x-1/2">Student Testimonials</h2>
          <p className="text-lg text-gray-700 mt-6">
            Hear what our graduates have to say about their training experience at CEFAT.
          </p>
        </div>

        <Carousel 
          className="w-full max-w-5xl mx-auto"
          plugins={[
            Autoplay({
              delay: 15000,
              stopOnInteraction: false,
            }),
          ]}
          setApi={setApi}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="border-none shadow-md overflow-hidden mx-4">
                  <CardContent className="p-8">
                    <Quote className="text-cefat-300 h-8 w-8 mb-4" />
                    <p className="text-gray-700 italic mb-6 text-lg">{testimonial.text}</p>
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                      <p className="text-cefat-500">{testimonial.position}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Dots navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-cefat-500 w-4"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => {
                  if (api) {
                    api.scrollTo(index);
                  }
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
