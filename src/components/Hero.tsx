
import React, { useEffect, useState } from "react";
import { ArrowDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const images = [
  "/lovable-uploads/2c599b15-3bcd-4e9c-ba0b-513ef15fd8c9.png",
  "/lovable-uploads/b745deb2-e51b-42b6-9622-6c7f0ce68715.png",
  "/lovable-uploads/c77e43da-54b0-4510-be32-f3487a08d44c.png",
  "/lovable-uploads/e5826c49-6399-4d66-85fc-c2e416258d81.png",
  "/lovable-uploads/6f3352c9-6be2-4ae7-84a0-cf36f5468bfc.png"
];

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi | null>(null);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    api.on("select", () => {
      setActiveIndex(api.selectedScrollSnap());
    });
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      if (api) {
        api.off("select", () => {});
      }
    };
  }, [api]);
  
  return (
    <section 
      id="home" 
      className="relative min-h-[80vh] flex items-center bg-white overflow-hidden"
    >
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto px-6">
        {/* Content Section */}
        <div className="w-full md:w-1/2 relative z-20 py-12 flex items-center">
          <div className="max-w-lg space-y-6">
            <div 
              className={`transition-all duration-1000 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight uppercase">
                CENTER OF EXCELLENCE FOR{" "}
                <span className="text-[#1b83b6]">
                  AVIATION TRAINING
                </span>
              </h1>
              
              <p className="text-base text-gray-600 mt-4 leading-relaxed">
                CEFAT is India's finest aviation academy for pilot training in Bangalore. 
                Since our inception in 2006, we've produced countless success stories.
                Above all, being absolutely committed to provide the highest quality cadet training experience.
              </p>
              
              <p className="text-lg font-semibold text-[#1b83b6]/80 mt-4 animate-pulse" style={{ animationDuration: '4s' }}>
                Let your dreams take flight!
              </p>
              
              <Button 
                size="lg" 
                className="mt-6 bg-[#1b83b6] hover:bg-[#1b83b6]/80 hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById('courses')?.scrollIntoView({behavior: 'smooth'})}
              >
                EXPLORE COURSES
              </Button>
            </div>
          </div>
        </div>
        
        {/* Image Carousel */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-[500px] h-[400px] overflow-hidden rounded-lg">
            <Carousel 
              className="w-full h-full"
              setApi={setApi}
              opts={{
                loop: true,
                align: "center",
                skipSnaps: false,
              }}
            >
              <CarouselContent className="-ml-0 h-full">
                {images.map((image, index) => (
                  <CarouselItem key={index} className="h-full pl-0 relative w-full">
                    <div className="relative h-full w-full overflow-hidden rounded-lg">
                      <img
                        src={image}
                        alt={`Aviation Training ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700"
                        style={{ objectPosition: 'center' }}
                        onError={(e) => {
                          console.error(`Failed to load image: ${image}`);
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = "/placeholder.svg";
                        }}
                      />
                      <div className="absolute inset-0 bg-black/10 transition-opacity duration-300" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute bottom-1/2 z-50 w-full transform translate-y-1/2">
                <CarouselPrevious className="left-4 bg-white/10 hover:bg-white/20 border-none" />
                <CarouselNext className="right-4 bg-white/10 hover:bg-white/20 border-none" />
              </div>
              
              {/* Dots navigation */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIndex ? 'w-4 bg-white' : 'bg-white/50'
                    }`}
                    onClick={() => api?.scrollTo(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '600ms' }}
      >
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full border-gray-300 bg-white/80 backdrop-blur-sm hover:scale-110 transition-transform duration-300"
          onClick={() => document.getElementById('captain-intro')?.scrollIntoView({behavior: 'smooth'})}
          aria-label="Scroll down"
        >
          <ArrowDownIcon className="h-6 w-6 text-gray-600" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
