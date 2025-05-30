import React, { useCallback, useEffect } from "react";
import { Check, Award, Clock, Plane, Target } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface AboutProps {
  onContactClick?: () => void;
}

const About: React.FC<AboutProps> = ({ onContactClick }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" }
  );

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  // Auto-scroll functionality
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = () => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    };

    const interval = setInterval(autoplay, 15000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        {/* Who Are We Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 mb-24">
          <div className="flex-1">
            <h2 className="section-heading-left mb-12">
              Who Are We?
            </h2>
            <p className="text-lg text-gray-700 mt-10">
              CEFAT is an institution of excellence in imparting all encompassing aviation knowledge with intelligence based out of India. Established in 2008, it provides personalised coaching and pursues excellence in imparting comprehensive aviation knowledge, skill and personality development with employing numerous methods of easy learning. Since its inception, CEFAT has delivered several success stories, some of which are captured on the Testimonial page.
            </p>
            
            <div className="mt-10 p-6 bg-cefat-50 rounded-lg border border-cefat-100 shadow-sm">
              <p className="text-lg font-medium italic text-gray-800">
                "Hello and welcome to CEFAT. Our academy is absolutely committed to providing the highest quality flight training in a supportive environment. Join us!"
              </p>
              <p className="mt-3 text-cefat-600 font-semibold">
                Captain TPS Gill
              </p>
            </div>
            
            <div className="mt-8">
              <Button onClick={onContactClick} className="bg-cefat-500 hover:bg-cefat-600 text-white">
                Come Join Us
              </Button>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="transform transition-transform hover:scale-105 duration-300">
              <img 
                src="/lovable-uploads/a70d9741-1446-466b-9615-a142889b0c21.png" 
                alt="Captain TPS Gill" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Redesigned Captain's Experience Section */}
        <div className="mb-28 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cefat-500/10 to-cefat-500/5 rounded-xl -z-10"></div>
          <div className="py-16 px-6">
            <h2 className="section-heading mb-20">
              Captain TPS Gill's Experience
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
              {/* Left Column - Timeline */}
              <div className="relative pl-8 space-y-12 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-2 before:w-0.5 before:bg-cefat-500/50">
                <div className="relative experience-card">
                  <div className="absolute -left-10 w-7 h-7 bg-white rounded-full border-2 border-cefat-500 flex items-center justify-center">
                    <Award className="h-4 w-4 text-cefat-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">47 Years of Excellence</h3>
                    <p className="text-gray-700 font-medium">
                      Flying instructor on Airbus A320 and an examiner in the Indian Air Force with an impeccable record of 47 years of accident-free flying.
                    </p>
                  </div>
                </div>
                
                <div className="relative experience-card">
                  <div className="absolute -left-10 w-7 h-7 bg-white rounded-full border-2 border-cefat-500 flex items-center justify-center">
                    <Clock className="h-4 w-4 text-cefat-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">31 Years of Indian Air Force Service</h3>
                    <p className="text-gray-700 font-medium">
                      31 years of service in the Indian Air Force as a fighter pilot in 15 variants including MIG 21 and MIG 29. And also served along with the Royal Airforce during 1985-86.
                    </p>
                  </div>
                </div>
                
                <div className="relative experience-card">
                  <div className="absolute -left-10 w-7 h-7 bg-white rounded-full border-2 border-cefat-500 flex items-center justify-center">
                    <Target className="h-4 w-4 text-cefat-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Instructor</h3>
                    <p className="text-gray-700 font-medium">
                      31 years as an instructor, training pilots at all levels. Also, TOPGUN (1989) in the Indian Air Force.
                    </p>
                  </div>
                </div>
                
                <div className="relative experience-card">
                  <div className="absolute -left-10 w-7 h-7 bg-white rounded-full border-2 border-cefat-500 flex items-center justify-center">
                    <Plane className="h-4 w-4 text-cefat-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Commercial Aviation</h3>
                    <p className="text-gray-700 font-medium">
                      16 years in commercial aviation, with over 15k flying hours, including 14,000+ hours in commercial flying and international operations and 3.5k on A320 Simulator as instructor.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:mt-0 mt-8">
                <div className="bg-white rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-105 duration-300 border border-gray-100">
                  <div className="h-3 bg-cefat-500"></div>
                  <div className="p-6">
                    <h3 className="text-5xl font-bold text-cefat-600 mb-4">47</h3>
                    <p className="text-gray-700 font-semibold">Years of Accident-Free Flying</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-105 duration-300 border border-gray-100">
                  <div className="h-3 bg-cefat-500"></div>
                  <div className="p-6">
                    <h3 className="text-5xl font-bold text-cefat-600 mb-4">31</h3>
                    <p className="text-gray-700 font-semibold">Years in Indian Air Force</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-105 duration-300 border border-gray-100">
                  <div className="h-3 bg-cefat-500"></div>
                  <div className="p-6">
                    <h3 className="text-5xl font-bold text-cefat-600 mb-4">15k+</h3>
                    <p className="text-gray-700 font-semibold">Flying Hours</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-105 duration-300 border border-gray-100">
                  <div className="h-3 bg-cefat-500"></div>
                  <div className="p-6">
                    <h3 className="text-5xl font-bold text-cefat-600 mb-4">15</h3>
                    <p className="text-gray-700 font-semibold">Aircraft Variants Flown</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Captain TPS Gill Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-28">
          <div>
            <h3 className="subsection-heading mb-12">About Captain TPS Gill</h3>
            <p className="text-gray-700 mb-8 mt-8">
              Capt. Gill is also a DGCA approved CRM instructor, trained in the United Kingdom. He is also trained in Aircraft Investigation Techniques by The European Aerospace Industry.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-cefat-500 mt-1 mr-2 flex-shrink-0" />
                <p className="text-gray-700">He became the fighter pilot and in the year 1989 he had the singular distinction of being adjudged the Best Flying Professional of the Indian Air Force (TOPGUN).</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-cefat-500 mt-1 mr-2 flex-shrink-0" />
                <p className="text-gray-700">His diverse managerial, administrative, and professional experience in the Indian Air Force included Command of two Operational Flying units and Advanced Flying Simulator Training Unit.</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-cefat-500 mt-1 mr-2 flex-shrink-0" />
                <p className="text-gray-700">With an A-2 instructional rating he was an Air Force Examiner in the Aircrew Examining Board and an instructor in the Flying Instructors' School, he imparted instructions and tested pilots at all levels.</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-cefat-500 mt-1 mr-2 flex-shrink-0" />
                <p className="text-gray-700">Academically, he has mastered from The Royal Air Force College in the United Kingdom and was deputed to Zambia as an Air Advisor.</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-cefat-500 mt-1 mr-2 flex-shrink-0" />
                <p className="text-gray-700">He is also the recipient of a Vayusena Award by the president for professional excellence.</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-cefat-500 mt-1 mr-2 flex-shrink-0" />
                <p className="text-gray-700">He was also an airforce examiner in the 1990s.</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="transform transition-transform hover:scale-105 duration-300 col-span-1">
              <img 
                src="/lovable-uploads/b800d338-0cfe-4963-ac98-d27d03cd6f97.png" 
                alt="Captain TPS Gill receiving an award" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="transform transition-transform hover:scale-105 duration-300">
                <img 
                  src="/lovable-uploads/b4e6c21c-c8f9-4e0a-af65-22ae6dd4d40d.png" 
                  alt="Captain TPS Gill in cockpit with crew" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="transform transition-transform hover:scale-105 duration-300">
                <img 
                  src="/lovable-uploads/f9a47359-e7c7-4ce4-a48e-b5da21ac7e3e.png" 
                  alt="Captain TPS Gill in simulator" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section - Updated for consistency */}
        <div className="mt-24 mb-16">
          <h2 className="section-heading mb-20">
            Students about Captain TPS Gill
          </h2>
          
          <div className="relative w-full max-w-4xl mx-auto mt-10">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {/* First Testimonial */}
                <div className="flex-[0_0_100%] min-w-0">
                  <Card className="mx-4 h-full">
                    <CardContent className="p-8">
                      <blockquote className="text-lg text-gray-700 space-y-4">
                        <p>
                          My gratitude for Capt. TPS Gill is immense. After initial CPL training, I spent nine years as an IT Engineer, struggling with my unfulfilled ambition to be a pilot. I doubted my ability to return to aviation after the long break.
                        </p>
                        <p>
                          Fatefully, I met Capt. Gill, who inspired me to enrol in his classes. He is a true professional and the most dedicated instructor I've ever met. His classes covered every subject and airline selection detail.
                        </p>
                        <p>
                          Beyond excellent technical training, he restored my self-confidence and taught me to work hard. With his guidance, I secured pilot jobs with two airlines. I'm forever grateful for his mentorship!
                        </p>
                        <footer className="mt-6 text-right">
                          <cite className="font-semibold text-cefat-600">- Ujjwal Vijayakrishnan, India</cite>
                        </footer>
                      </blockquote>
                    </CardContent>
                  </Card>
                </div>

                {/* Second Testimonial */}
                <div className="flex-[0_0_100%] min-w-0">
                  <Card className="mx-4 h-full">
                    <CardContent className="p-8">
                      <blockquote className="text-lg text-gray-700 space-y-4">
                        <p>
                          Successfully cleared initial CPL and did not know what to do next? Absolutely clueless! That's when I met Capt. TPS Gill. I attended Capt. Gill's ground training classes for Airline Preparation.
                        </p>
                        <p>
                          Need I say more? I am now a part of a major airline! Not just that, with his classes I have also been able to clear ATPL and RTR as well. Be it written test, CASS, psychometric test, Group discussion or personal interview he has been the best teacher to receive 'crisp – to the point' guidance from.
                        </p>
                        <p>
                          I have been inspired and motivated from the time I met him. My life has changed ever since. A professional, mentor and guide!
                        </p>
                        <footer className="mt-6 text-right">
                          <cite className="font-semibold text-cefat-600">- Capt. Akshita Jain, India</cite>
                        </footer>
                      </blockquote>
                    </CardContent>
                  </Card>
                </div>

                {/* Third Testimonial */}
                <div className="flex-[0_0_100%] min-w-0">
                  <Card className="mx-4 h-full">
                    <CardContent className="p-8">
                      <blockquote className="text-lg text-gray-700 space-y-4">
                        <p>
                          I have been extremely lucky to have completed my initial flight training and also my ATPL training with Captain Gill. The focus at all times was to improve core knowledge and understanding of the concerned subject equipped with a fine tuned and smart approach to answering DGCA ATPL exams.
                        </p>
                        <p>
                          With the number of practice papers and adequate homework one would receive, the actual DGCA exam will feel like a cake walk. Classes with Captain Gill have been a win-win scenario for me, as I left achieving more than I planned to.
                        </p>
                        <p>
                          The fact that I got through Emirates' intense pilot selection process and training has a lot to do with Captain Gill's guidance and his vast experience of being on all sides of the interview panel and trainer's table throughout his glorious career. Thank you Captain TPS Gill!
                        </p>
                        <footer className="mt-6 text-right">
                          <cite className="font-semibold text-cefat-600">- Capt. Richelle D'Souza, India</cite>
                        </footer>
                      </blockquote>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              <button 
                className="w-3 h-3 rounded-full bg-gray-300 hover:bg-cefat-500 transition-colours" 
                aria-label="Go to slide 1" 
                onClick={() => scrollTo(0)}
              />
              <button 
                className="w-3 h-3 rounded-full bg-gray-300 hover:bg-cefat-500 transition-colours" 
                aria-label="Go to slide 2" 
                onClick={() => scrollTo(1)}
              />
              <button 
                className="w-3 h-3 rounded-full bg-gray-300 hover:bg-cefat-500 transition-colours" 
                aria-label="Go to slide 3" 
                onClick={() => scrollTo(2)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;